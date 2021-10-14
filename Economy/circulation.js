module.exports = {
  execute(message, args) {
    async () => {
      
      // Definitions
      const Discord = require('discord.js');
      const db = require('quick.db');

      var user = message.author || message.mentions.users.first();
      var guild = message.guild;
 
      var EuroCirc = await db.fetch(`EuroCirc.${guild.id}`);

      // Command code

      if (message.member.roles.cache.some(role => role.name === 'admin') || user == 80010470607226892) {
        if (args[1] == null) {
          noSecondArgEmbed = new Discord.MessageEmbed()
            .setColor("#fa2a2a")
            .setTitle("***circulation not set:***")
            .setDescription("*\`error:\` you must give a first argument*")
          message.channel.send(noSecondArgEmbed)
        } else {
          if (args[0] == "add") {
            await db.add(`EuroCirc`, parseInt(args[1]))
            circAddEmbed = new Discord.MessageEmbed()
              .setColor("#5178cc")
              .setTitle("***federal reserve:***")
              .setDescription(`*added - \`${args[1]}€\` to the euro circulation\nEuros in circulation - \`${EuroCirc}€\`*`)
            message.channel.send(circAddEmbed)
          } else if (args[0] == "subtract") {
            await db.subtract(`EuroCirc`, parseInt(args[1]))
            circSubtractEmbed = new Discord.MessageEmbed()
              .setColor("#5178cc")
              .setTitle("***federal reserve:***")
              .setDescription(`*subtracted - \`${args[1]}€\` from the euro circulation\nEuros in circulation - \`${EuroCirc}€\`*`)
            message.channel.send(circSubtractEmbed)
          } else if (args[0] == "set") {
            await db.set(`EuroCirc`, parseInt(args[1]))
            circSetEmbed = new Discord.MessageEmbed()
              .setColor("#5178cc")
              .setTitle("***federal reserve:***")
              .setDescription(`*set - the euro circulation to \`${args[1]}€\`*`)
            message.channel.send(circSetEmbed)
          } else {
            noFirstArgEmbed = new Discord.MessageEmbed()
              .setColor("#fa2a2a")
              .setTitle("***circulation not set:***")
              .setDescription("*\`error:\` you must give a 0th argument*")
            message.channel.send(noFirstArgEmbed)
          }
        }
      } else {
        noPermissionEmbed = new Discord.MessageEmbed()
          .setColor("#fa2a2a")
          .setTitle("***circulation not set:***")
          .setDescription("*\`error:\` only admins may change the euros in circulation*")
        message.channel.send(noPermissionEmbed)
      };
    }
  }
};