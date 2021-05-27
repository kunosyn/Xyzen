module.exports = {
  execute(args, Discord, message, db, Euro, user, inv) {
  async function shopCom() {
  shopList = {chicken: 260, glock: 960, dagger: 740}
  shopArray = ["chicken", "glock", "dagger"]
  if (args[0] == null) {
    defShopEmbed = new Discord.MessageEmbed()
   .setColor("#4dc4f0")
   .setTitle("***shop:***")
   .setDescription(`***chicken:***\n*\`cost; 260€\`*\n\n***glock:***\n*\`cost; 960€\`*\n\n***dagger:***\n*\`cost; 740€\`*`)
   message.channel.send(defShopEmbed)
  } else if (args.length > 0 && args[0] == "buy") {
   Args1Item = args[1]
   Cost = shopList[Args1Item]
    if (shopArray.includes(Args1Item)) {
     if (Euro >= Cost) {
       if (!inv.includes(Args1Item)) {
         purchaseItemEmbed = new Discord.MessageEmbed()
         .setColor("#0198FE")
         .setTitle("***purchase success:***")
         .setDescription(`*bought \`${Args1Item}\` for ${Cost}€*`)
         if ((db.has(`inv.${user.id}`, Args1Item[Amount]))) {
           itemAMT = db.get(`inv.${user.id}.${Args1Item}[Amount]`)
           newAMT = itemAMT + 1
           await db.push(`inv.${user.id}`, {Args1Item: {Name: Args1Item, Amount: newAMT}})
          } else {
           await db.push(`inv.${user.id}`, {Args1Item: {Name: Args1Item, Amount: 1}})
         };
         await db.subtract(`Euro.${user.id}`, Cost)
         message.channel.send(purchaseItemEmbed)
      };
     } else {
       notEnoughEmbed = new Discord.MessageEmbed()
       .setColor("#fa2a2a")
       .setTitle("***item not purchased:***")
       .setDescription("*\`error:\` you do not have enough euros for the item youve specified*")
       message.channel.send(notEnoughEmbed)
     };
    } else {
      nonExistentEmbed = new Discord.MessageEmbed()
      .setColor("#fa2a2a")
      .setTitle("***item not purchased:***")
      .setDescription("*\`error:\` the item youve tried to purchase does not exist, please check your spelling or make sure it is in the shop*")
      message.channel.send(nonExistentEmbed)
    };
  } else {
    no0thArgEmbed = new Discord.MessageEmbed()
    .setColor("#fa2a2a")
    .setTitle("***item not purchased:***")
    .setDescription("*\`error:\` you must enter a item to purchase \(a 0th argument\)*")
  };
 } shopCom();
}
};