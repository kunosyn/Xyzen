module.exports = {
  execute(message, Discord, db, Euro, user, taskPass, taskFailed, EuroCirc, taskTalkedRecently) {
   async function taskCom() {
   taskEuros = Math.floor(Math.random()*9);
   odds = Math.floor(Math.random()*10);
   taskResults = (odds >= 0 && !(odds > 6)) ? "pass":"fail"
   passMes = Math.floor(Math.random()*taskPass.length);
   failMes = Math.floor(Math.random()*taskFailed.length);
   user = message.author;
   if (taskTalkedRecently.has(message.author.id)) {
     cooldownEmbed = new Discord.MessageEmbed()
     .setColor("#fa2a2a")
     .setTitle("***cooldown:***")
     .setDescription("*\`error:\` the cooldown on this command is 5 seconds, please wait until its been that long since using the command before trying again*")
     message.channel.send(cooldownEmbed)
    } else {
     if (taskResults == "pass") {
       taskPassedEmbed = new Discord.MessageEmbed()
       .setColor("#0198FE")
       .setTitle("***task successful:***")
       .setDescription(taskPass[passMes])
       .addFields({name: `*you earn -* `, value: `*\`${taskEuros}€\`*`})
       if (taskEuros == 0) {
         await db.add(`Euro.${user.id}`, 1)
         await db.subtract(`EuroCirc`, 1)
        } else {
         await db.add(`Euro.${user.id}`, parseInt(taskEuros))
         await db.subtract(`EuroCirc`, parseInt(taskEuros))
        }
        message.channel.send(taskPassedEmbed)
      } else if (taskResults == "fail") {
       taskFailedEmbed = new Discord.MessageEmbed()
       .setColor("#FE6D01")
       .setTitle("***task unsuccessful:***")
       .setDescription(taskFailed[failMes])
       .addFields({name: `*you loose -* `, value: `*\`${taskEuros}€\`*`})
       await db.subtract(`Euro.${user.id}`, parseInt(taskEuros))
       await db.add(`EuroCirc`, parseInt(taskEuros))
       message.channel.send(taskFailedEmbed)
      };
  taskTalkedRecently.add(message.author.id);
  setTimeout(() => {
    taskTalkedRecently.delete(message.author.id);
  }, 5000)
  }
  } taskCom();
  }
}