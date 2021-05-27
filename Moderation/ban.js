module.exports = {
 execute(user, Discord, args, message) {
 user = message.author;
 if (args[0] == null && user.hasPermission('BAN_MEMBERS')) {
   noUserBanEmbed = new Discord.MessageEmbed()
   .setColor("#fa2a2a")
   .setTitle("***kick unsuccessful:***")
   .setDescription("*\`error:\` you must specify a user to kick*")
   message.channel.send(noUserBanEmbed)
  } else if (args[0] != null && user.hasPermission('BAN_MEMBERS')) {
    user = message.mentions.users.first();
    user.ban();
    bannedUserEmbed = new Discord.MesageEmbed()
    .setColor("#FBF7F6")
    .setTitle("***ban successful:***")
    .setDescription(`*successfully banned \`${user}\`*`)
    message.channel.send(bannedUserEmbed)
  } else {
    noBanPermEmbed = new Discord.MessageEmbed()
    .setColor("#fa2a2a")
    .setTitle("***missing permissions:***")
    .setDescription("*\`error:\` you are missing banning permissions*")
    message.channel.send(noBanPermEmbed)
  }
}
}