module.exports = {
  execute(Discord, user, message, Euro, inv, crimePass, crimeFail, db, crimeTalkedRecently, EuroCirc) {
  var oddsG = Math.floor(Math.random()*10);
  var odds = Math.floor(Math.random()*10);
  var crimeResults = (odds >= 0 && !(odds > 6)) ? "pass":"fail";
  var glockResults = (oddsG >= 0 && !(odds > 7)) ? "pass":"fail";
  var crimeEuros = Math.floor(Math.random()*27);
  var passMes = Math.floor(Math.random()*crimePass.length);
  var failMes = Math.floor(Math.random()*crimeFail.length);
  async function crimeCom() {
  if (crimeTalkedRecently.has(message.author.id)) {
    cooldownEmbed = new Discord.MessageEmbed()
    .setColor("#fa2a2a")
    .setTitle("***cooldown:***")
    .setDescription("*\`error:\` the cooldown on this command is 15 minutes, please wait until its been that long since using the command before trying again*")
    message.channel.send(cooldownEmbed)
  } else {
  if (db.has(`inv.${user.id}`, `glock`)) {
   if (glockResults == "pass") {
     crimeGSuccessEmbed = new Discord.MessageEmbed()
     .setColor("#0198FE")
     .setTitle("***crime successful:***")
     .setDescription(crimePass[passMes])
     .addFields({name: `*you earn -* `, value: `*\`${crimeEuros}€\`*`})
     await db.add(`Euro.${user.id}`, crimeEuros)
     message.channel.send(crimeGSuccessEmbed)
    } else if (glockResults == "fail") {
     crimeGFailedEmbed = new Discord.MessageEmbed()
     .setColor("#FE6D01")
     .setTitle("***crime unsuccessful:***")
     .setDescription(crimeFail[failMes])
     .addFields({name: `*you loose -*`, value: `*\`${crimeEuros}\`*`})
     await db.subtract(`Euro.${user.id}`, crimeEuros)
     await db.add(`EuroCirc`, crimeEuros)
   };
  } else if (crimeResults == "pass") {
    crimeSuccessEmbed = new Discord.MessageEmbed()
    .setColor("#0198FE")
    .setTitle("***crime successful:***")
    .setDescription(crimePass[passMes])
    .addFields({name: `*you earn -* `, value: `*\`${crimeEuros}€\`*`})
    message.channel.send(crimeSuccessEmbed)
    await db.add(`Euro.${user.id}`, crimeEuros)
  } else if (crimeResults == "fail") {
    crimeFailEmbed = new Discord.MessageEmbed()
    .setColor("#FE6D01")
    .setTitle("***crime unsuccessful:***")
    .setDescription(crimeFail[failMes])
    .addFields({name: `*you loose -*`, value: `*\`${crimeEuros}\`*`})
    message.channel.send(crimeFailEmbed)
    await db.subtract(`Euro.${user.id}`, crimeEuros)
  };
  crimeTalkedRecently.add(message.author.id);
  setTimeout(() => {
   crimeTalkedRecently.delete(message.author.id);
  }, 900000)
  }
  } crimeCom()
  }
}