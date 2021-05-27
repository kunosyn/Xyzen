module.exports = {
  execute(message, Discord, Euro, user, args, db) {
  async function euroCom() {
  if (message.member.roles.cache.some(role => role.name === 'admin') && message.content.includes("@")) {
    user = message.mentions.users.first();
    if (args[3] == "euros" || args[3] == "euro") {
      var euroLoc = "Euro"
      var disLoc = "On-Hand Euros"
    } else if (args[3] == "bank" || args[3] == "banked") {
      var euroLoc = "BankedEuros"
      var disLoc = "Bank"
    } else if (args[3] == null) {
      var euroLoc = "Euro"
      var disLoc = "On-Hand Euros"
    }
;    if (args[0] == "add") {
     await db.add(`${euroLoc}.${user.id}`, parseInt(args[2]))
     adminAddedEmbed = new Discord.MessageEmbed()
     .setColor("#5178cc")
     .setTitle("***bank note:***")
     .setDescription(`*added - \`${args[2]}€\`, to ${user}\'s ${disLoc}*`)
     message.channel.send(adminAddedEmbed)
    } else if (args[0] == "subtract") {
     await db.subtract(`${euroLoc}.${user.id}`, parseInt(args[2]))
     adminSubtractedEmbed = new Discord.MessageEmbed()
     .setColor("#5178cc")
     .setTitle("***bank note:***")
     .setDescription(`*subtracted - \`${args[2]}€\`, from ${user}\'s ${disLoc}*`)
     message.channel.send(adminSubtractedEmbed)
    } else if (args[0] == "set") {
     await db.set(`${euroLoc}.${user.id}`, parseInt(args[2]))
     adminSetEmbed = new Discord.MessageEmbed()
     .setColor("#5178cc")
     .setTitle("***bank note:***")
     .setDescription(`*set - ${user}\'s ${disLoc} to \`${args[2]}€\`*`)
     message.channel.send(adminSetEmbed)
    };
  } else if (message.content.includes("@") && !(message.member.roles.cache.some(role => role.name === 'admin'))) {
   noPermissionEmbed = new Discord.MessageEmbed()
   .setColor("#DC143C")
   .setTitle("***transaction denied:***")
   .setDescription("*\`error:\` missing permissions - this command is only able to be used by admins*")
   message.channel.send(noPermissionEmbed)
  } else {
    noMentionEmbed = new Discord.MessageEmbed()
    .setColor("#DC143C")
    .setTitle("***transaction denied:***")
    .setDescription("*\`error:\` no mentions - you must mention a user*")
    message.channel.send(noMentionEmbed)
  }
} euroCom();
} 
}