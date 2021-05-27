module.exports = {
  execute(Discord, user, args, message, db, Euro, BankedEuros) {
  async function depositCom() {
  if (args[0] == "all") {
    depositedEuros = Euro
    newAddedBanked = BankedEuros + depositedEuros
    newAddedEuros = Euro - depositedEuros
    DepAllEmbed = new Discord.MessageEmbed()
    .setColor("#5178cc")
    .setTitle("***bank note:***")
    .setDescription(`*successfully deposited -* *\`${depositedEuros}€\`* \n*total euros -* *\`${Euro} -> ${newAddedEuros}€\`* \n*total banked -* *\`${BankedEuros} -> ${newAddedBanked}€\`*`)
    .setThumbnail(message.author.avatarURL())
    await db.add(`BankedEuros.${user.id}`, Euro);
    await db.set(`Euro.${user.id}`, 0)
    message.channel.send(DepAllEmbed)
  } else if (args[0] != "all") {
   if  (typeof parseInt(args[0]) == "number") {
     if (parseInt(args[0]) > 0) {
       if (Euro >= parseInt(args[0])) {
         depositedEuros = parseInt(args[0])
         newAddedBanked = BankedEuros + depositedEuros
         newAddedEuros = Euro - depositedEuros
         DepNumEmbed = new Discord.MessageEmbed()
         .setDescription(`*successfully deposited -* *\`${depositedEuros}€\`* \n*total euros -* *\`${Euro} -> ${newAddedEuros}€\`* \n*total banked -* *\`${BankedEuros} -> ${newAddedBanked}€\`*`)
         .setThumbnail(message.author.avatarURL())
         .setColor("#5178cc")
         .setTitle("***bank note:***")
         await db.add(`BankedEuros.${user.id}`, parseInt(args[0]))
         await db.subtract(`Euro.${user.id}`, parseInt(args[0]))
         message.channel.send(DepNumEmbed)
        } else if (parseInt(args[0]) <= 0) {
         LowValueEmbed = new Discord.MessageEmbed()
         .setColor("#fa2a2a")
         .setTitle("***transaction denied:***")
         .setDescription(`*\`error:\` you cannot deposit values equal to or lower than 0*`)
         .setThumbnail(message.author.avatarURL())
         message.channel.send(LowValueEmbed)  
        };
      } else if (typeof args[0] == "string" || typeof args[0] == "boolean" || args[0] == null) { 
        WrongValueEmbed = new Discord.MessageEmbed()
        .setColor("#fa2a2a")
        .setTitle("***transaction denied:***")
        .setDescription("*\`error:\` you may only enter number values to deposit*")
        message.channel.send(WrongValueEmbed)
      };
    };
  };
  } depositCom();
}
}