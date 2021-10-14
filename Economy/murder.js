module.exports = {
  execute(Discord, message, user, Euro, EuroCirc) {
    async function murderCom() {
    

    messageArr = ['you literally killed someone', 'its safe to say they didnt stay strapped, they got clapped', 'you said hi and they didnt say hi back, you actually shot them']
    var mesNum = Math.floor(Math.random()*messageArr.length);
    var odds = Math.floor(Math.random()*10);
    if (db.has(`inv.${user.id}`, `dagger`)) {
     results = (odds >= 0 && !(odds > 6)) ? "pass" : "fail"; 
    } else {
     results = (odds >= 0 && !(odds > 5)) ? "pass" : "fail";
    };
    euroAmount = Math.floor(Math.random()*25);
    if (euroAmount == 0) {
      euroAmount = 1
    };
    if (args[0] == null) {
      no0thArgEmbed = new Discord.MessageEmbed()
      .setColor("#fa2a2a")
      .setTitle("***murder unsuccessful:***")
      .setDescription("*\`error:\` you must specify a user to murder (give a 0th arg)*")
     message.channel.send(no0thArgEmbed)
    } else if (args[0] != null && message.includes("@")) {
      user = message.mentions.users.first();
      if (results == "pass") {
       user = message.author;
       await db.add(`Euro.${user.id}`, parseInt(euroAmount))
       murderPassEmbed = new Discord.MessageEmbed()
       .setColor("#0198FE")
       .setTitle("***murder successful:***")
       .setDescription(`${messageArr[mesNum]} ${user} died`)
       .addFields({name: "you gain -", value: `${euroAmount}`})
       message.channel.send(murderPassEmbed)
       user = message.mentions.users.first();
       await db.subtract(`Euro.${user.id}`, parseInt(euroAmount))
      }  else if (results == "fail") {
        user = message.author;
        await db.subtract(`Euro.${user.id}`, parseInt(euroAmount))
        murderFailEmbed = new Discord.MessageEmbed()
        .setColor("#FE6D01")
        .setTitle("***murder unsuccessful:***")
        .setDescription(`you get caught trying to kill ${user} youre now probably on an fbi database`)
        .addFields({name: "you loose -", value: `${euroAmount}`})
        message.channel.send(murderFailEmbed)
        await db.add(`EuroCirc`, parseInt(euroAmount))
      }
    }
   }
  }
}