module.exports = {
  execute(user, Discord, message, db, args) {
    async function bannedWords() {
   if (message.author.id === 0 || message.author.id === 0) {
     return;
   } else {
   if (args.includes('*')) {
     message.delete()
     const sender = '<@' + message.author.id + '>'
     bannedCharacterEmbed = new Discord.MessageEmbed()
     .setColor('#e3a002')
     .setTitle('***message deletion:***')
     .setThumbnail(message.author.avatarURL())
     .setDescription(`**Author:** *${sender}*\n**Reason:** *\`Contains banned character.\`* \n**Notes:** *\`Banned character \"*\".\`*`)
     .setFooter('***Moderator*** *Xyzen automod services*')
     message.channel.send(bannedCharacterembed)
   } else {
      for (x=0; x < args.length; x++) {
        if (bannedWords.includes(args[x])) {
          message.delete()
          const content = args[x]
          const sender = '<@' + message.author.id + '>'
          bwEmbed = new Discord.MessageEmbed()
         .setColor('#e3a002') 
         .setTitle('***warning:***')
         .setThumbnail(message.author.avatarURL())
         .setDescription(`**Warned:** *${sender}*\n**Reason:** *\`Banned Word.\`* \n**Notes:** *\`Continuing this will result in a logged mute or further moderation action.\`*\n**Warnings:** *\`${warnings}\`* **Warnings Left:** *\`${left}\`*`)
         .setFooter('***Moderator:*** *Xyzen automod services*')
         message.channel.send(bwEmbed)
        }
      }
    } 
   } 
   } bannedWords()
  } 
}