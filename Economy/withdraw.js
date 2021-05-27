module.exports = {
  execute(Discord, user, args, message, db, Euro, BankedEuros) {
  async function withCom() {
  if (args[0] == "all") {
    withdrawnEuros = BankedEuros
    newTakenBanked = BankedEuros - withdrawnEuros 
    newTakenEuros = Euro + withdrawnEuros
    withAllEmbed = new Discord.MessageEmbed()
    .setColor("#5178cc")
    .setTitle("***bank note:***")
    .setDescription(`*successfully withdrew -* *\`${withdrawnEuros}€\`* \n*total euros -* *\`${Euro} -> ${newTakenEuros}€\`* \n*total banked -* *\`${BankedEuros} -> ${newTakenBanked}€\`*`)
    .setThumbnail(message.author.avatarURL())
    await db.add(`Euro.${user.id}`, BankedEuros);
    await db.set(`BankedEuros.${user.id}`, 0)
    message.channel.send(withAllEmbed)
  } else if (args[0] != "all") {
    if  (typeof parseInt(args[0]) == "number") {
      if (parseInt(args[0]) > 0) {
        if (BankedEuros >= parseInt(args[0])) {
          withdrawnEuros = parseInt(args[0])
          newTakenBanked = BankedEuros - withdrawnEuros 
          newTakenEuros = Euro + withdrawnEuros
          WithNumEmbed = new Discord.MessageEmbed()
          .setColor("#5178cc")
          .setTitle("***bank note:***")
          .setDescription(`*successfully withdrew -* *\`${withdrawnEuros}€\`* \n*total euros -* *\`${Euro} -> ${newTakenEuros}€\`* \n*total banked -* *\`${BankedEuros} -> ${newTakenBanked}€\`*`)
          .setThumbnail(message.author.avatarURL())
          await db.add(`Euro.${user.id}`, parseInt(args[0]))
          await db.subtract(`BankedEuros.${user.id}`, parseInt(args[0]))
          message.channel.send(WithNumEmbed)
        }
      } else if (parseInt(args[0]) <= 0) {
        LowValueEmbed = new Discord.MessageEmbed()
        .setColor("#fa2a2a")
        .setTitle("***transaction denied:***")
        .setDescription(`*\`error:\` you cannot withdraw values equal to or lower than 0*`)
        .setThumbnail(message.author.avatarURL())
        message.channel.send(LowValueEmbed)  
      };
    } else if (typeof args[0] == "string" || typeof args[0] == "boolean" || args[0] == null) { 
      WrongValueEmbed = new Discord.MessageEmbed()
      .setColor("#fa2a2a")
      .setTitle("***transaction denied:***")
      .setDescription("*\`error:\` you may only enter number values to withdraw*")
      message.channel.send(WrongValueEmbed)
    };
  };
  } withCom();
}
}