module.exports = {
  execute(user, Discord, message, db, bannedwords, config) {
  async function bannedWords() {
   var adminList = ['800104370607226892', '820727260746612756']
   var enabledGuilds = ['814155373442629664']
   var args = message.content.split(' ');
   var adminCheck = false;
   if (adminList.includes(message.author.id)) {
     adminCheck = true;
   } else {
      adminCheck = false;
    };
     console.log(message.author.id)
   if (!(adminCheck) && enabledGuilds.includes(message.guild.id)) {
     if (args.includes('*')) {
       message.delete()
       const sender = '<@' + message.author.id + '>'
       bannedCharacterEmbed = new Discord.MessageEmbed()
       .setColor('#e3a002')
       .setTitle('***message deletion:***')
       .setThumbnail(message.author.avatarURL())
       .setDescription(`**Author:** *${sender}*\n**Reason:** *\`Contains banned character.\`* \n**Notes:** *\`Banned character \"*\".\`*`)
       .setFooter('Moderator: Xyzen automod services')
       message.channel.send(bannedCharacterEmbed)
      } else {
       for (x=0; x < args.length; x++) {
         var lowered = args[x].toLowerCase();
         if (bannedwords.includes(lowered)) {
           message.delete()
           const sender = '<@' + message.author.id + '>'
           bwEmbed = new Discord.MessageEmbed()
           .setColor('#e3a002') 
           .setTitle('***warning:***')
           .setThumbnail(message.author.avatarURL())
           .setDescription(`**Warned:** *${sender}*\n**Reason:** *\`Banned Word.\`* \n**Notes:** *\`Continuing this will result in a logged mute or further moderation action.\`*\n**Warnings:** *\`[placeholder]\`*\n **Warnings Left:** *\`[placeholder]\`*`)
           .setFooter('Moderator: Xyzen automod services')
           message.channel.send(bwEmbed)
           return;
      }
     }
    } 
   }
   } bannedWords()
  } 
}