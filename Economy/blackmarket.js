module.exports = {
  execute(message, args) {
    async () => {

      // Definitions
      const Discord = require('discord.js');
      const db = require('quick.db');

      var user = message.author || message.mentions.users.first();

      var Euro = await db.fetch(`Euro.${user.id}`);
      
      bmArray = ["cocaine", "lsd"];
      bmList = { cocaine: 750, lsd: 400 };

      if (args[0] == null) {
        blackmarketEmbed = new Discord.MessageEmbed()
        .setColor("#4dc4f0")
        .setTitle("***black market:***")
        .setDescription("***cocaine:***\n*\`costs; 750€\`*\n***lsd:***\n*\`costs; 400€\`*")

        message.channel.send(blackmarketEmbed);
      } else if (args[0] == "buy" || args[0] == "purchase") {
        if (args[1] != null) {
          itemSelect = args[1]
          if (bmArray.contains(itemSelect)) {
            cost = bmList[itemSelect]
            if (Euro >= cost) {
              purchaseCompleteEmbed = new Discord.MessageEmbed()
              .setColor("")
              .setTitle("***purchase completed:***")
              .setDescription(`Debug`)

              if (db.has(`inv.${user.id}`, bmArray[itemSelect])) {

                db.delete(`inv.${user.id}`, bmArray[itemSelect]);

                itemAMT = db.get(`inv.${user.id}`, bmList[itemSelect]);

                newAMT = itemAMT + 1;

                await db.push(`inv.${user.id}`, { Args1Item: { Name: itemSelect, Amount: newAMT } });

              } else {

                await db.push(`inv.${user.id}`, { Args1Item: { Name: itemSelect, Amount: 1 } });
              }
              message.channel.send(purchaseCompleteEmbed);
            };
          };
        } else {
          noItemSelectEmbed = new Discord.MessageEmbed()
            .setColor("#fa2a2a")
            .setTitle("***item not purchased:****")
            .setDescription("*\`error:\` you must give an item to purchase*")
          message.channel.send(noItemselectEmbed);
        };
      };
    }
  }
};