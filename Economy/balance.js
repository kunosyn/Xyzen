module.exports = {
  execute(message, args, Discord, Euro, BankedEuros, userJob, user) {
  if (args[0] == null) {
    balanceEmbed = new Discord.MessageEmbed()
    .setColor("#FBF7F6")
    .setTitle("***about:***")
    .setDescription(`*euros - \`${Euro}€\` \nbanked - \`${BankedEuros}€\` \nnetworth - \`${Euro + BankedEuros}€\` \nbreifcase - \`WIP\`\njob - \`${userJob}\`*`)
    .setThumbnail(message.author.avatarURL())
    message.channel.send(balanceEmbed)
  } else if (args[0] != null && message.content.includes("@")) {
    user = message.mentions.users.first();
    userBalanceEmbed = new Discord.MessageEmbed()
    .setColor("#FBF7F6")
    .setTitle("***about:***")
    .setDescription(`*euros - \`${Euro}€\` \nbanked - \`${BankedEuros}€\` \nnetworth - \`${Euro + BankedEuros}€\` \nbreifcase - \`WIP\`\njob - \`${userJob}\`*`)
    .setThumbnail(message.author.avatarURL())
    message.channel.send(userBalanceEmbed)
  }
  }
}