module.exports = {
  execute(message, Discord, user, db, inv) {
  async function invCom() {
  if (inv == null) {
    emptyInventoryEmbed = new Discord.MessageEmbed()
    .setColor("#4dc4f0")
    .setTitle("***inventory:***")
    .setDescription("**empty!**")
    message.channel.send(emptyInventoryEmbed)
  } else {
   invDisplay = await db.get(`inv.${user.id}`)
   console.log(invDisplay)
   inventoryEmbed = new Discord.MessageEmbed()
    .setColor("#FBF7F6")
    .setTitle("***inventory:***")
    .setDescription(`${invDisplay}`)
    message.channel.send(inventoryEmbed)
    };
  } invCom()
  }
};