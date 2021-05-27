module.exports = {
  execute(message, Discord, user, db, inv) {
  async function invCom() {
  if (inv == []) {
    emptyInventoryEmbed = new Discord.MessageEmbed()
    .setColor("#4dc4f0")
    .setTitle("***inventory:***")
    .setDescription("**empty!**")
    message.channel.send(emptyInventoryEmbed)
  } else {
   invDisplay = await db.get(`inv.${user.id}`)
   for (x=0; x == Object.keys(inv).length; x++) {
     mesDesc = mesDesc + "\n" + inv[x]
   }
   inventoryEmbed = new Discord.MessageEmbed()
    .setColor("#FBF7F6")
    .setTitle("***inventory:***")
    .setDescription(`${mesDesc}`)
    message.channel.send(inventoryEmbed)
    };
  } invCom()
  }
};