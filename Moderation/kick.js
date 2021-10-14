module.exports = {
 execute(user, Discord, args, message) {
 user = message.author;
 const userPermissions = user.permissions.toArray();
 if (args[0] == null && userPermissions.includes('KICK_MEMBERS')) {
   noUserKickEmbed = new Discord.MessageEmbed()
   .setColor("#fa2a2a")
   .setTitle("***kick unsuccessful:***")
   .setDescription("*\`error:\` you must specify a user to kick*")
   message.channel.send(noUserKickEmbed)
  } else if (args[0] != null && userPermissions.includes('KICK_MEMBERS')) {
    kUser = message.members.mentions.first();
    kUser.kick();
    kickedUserEmbed = new Discord.MesageEmbed()
    .setColor("#FBF7F6")
    .setTitle("***kick successful:***")
    .setDescription(`*successfully kicked \`${user}\`*`)
    message.channel.send(kickedUserEmbed)
  } else {
    noKickPermEmbed = new Discord.MessageEmbed()
    .setColor("#fa2a2a")
    .setTitle("***missing permissions:***")
    .setDescription("*\`error:\` missing kicking permissions*")
    message.channel.send(noKickPermEmbed)
  }
 } 
}
