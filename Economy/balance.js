module.exports = {
  execute(message, args) {
    async () => {
      // Definitions
      const Discord = require('discord.js');
      const Euro = await db.fetch(`Euro.${user.id}`);
      const BankedEuros = await db.fetch(`BankedEuros.${user.id}`);
      const userJob = await db.fetch(`userJob.${user.id}`);
      var user = message.author || message.mentions.users.first();

      // Command code

      if (args[0] == null) {
        balanceEmbed = new Discord.MessageEmbed()
          .setColor("#FBF7F6")
          .setTitle("***about:***")
          .setDescription(`*euros - \`${Euro}€\` \nbanked - \`${BankedEuros}€\` \nnetworth - \`${Euro + BankedEuros}€\` \nbreifcase - \`WIP\`\njob - \`${userJob}\`*`)
          .setThumbnail(message.author.avatarURL())

        message.channel.send(balanceEmbed);
      } else if (args[0] != null && message.content.includes("@")) {
        user = message.mentions.users.first();
        userBalanceEmbed = new Discord.MessageEmbed()

          .setColor("#FBF7F6")
          .setTitle("***about:***")
          .setDescription(`*euros - \`${Euro}€\` \nbanked - \`${BankedEuros}€\` \nnetworth - \`${Euro + BankedEuros}€\` \nbreifcase - \`WIP\`\njob - \`${userJob}\`*`)
          .setThumbnail(message.author.avatarURL())

        message.channel.send(userBalanceEmbed);
      };
    };
  }
};