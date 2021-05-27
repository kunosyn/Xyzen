module.exports = {
 execute(user, args, db, warnings) {
 user = message.mentions.users.first();
 delete args[0]
 warnMes = args.join(' ');
 user = message.mentions.users.first();
 warnEmbed = new Discord.MessageEmbed()
 left = 3 - warnings
 .setColor('#e3a002') 
 .setTitle('***warning:***')
 .setThumbnail(message.author.avatarURL())
 .setDescription(`**Warned:** *${user}*\n**Reason:** *\`Spamming.\`* \n**Notes:** *\`${warnMes}\`*\n **Warnings:** *\`${warnings}\`*\n **Warnings Left:** *\`${left}\`*`)
 .setFooter(`***Moderator:*** *${message.author}*`)
 message.channel.send(warnEmbed)
 }
}