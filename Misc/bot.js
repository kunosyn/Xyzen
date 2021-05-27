module.exports = {
  execute(Discord, message) {
    botInfoEmbed = new Discord.MessageEmbed()
    .setColor("#ABACFF")
    .setTitle("***bot info:***")
    .setDescription("***language:*** *\`Node.JS\`*\n***main dev:*** *\`kuno#7454\`*\n***helpers:*** \`JOEYSARMY, r y a n\``")
    message.channel.send(botInfoEmbed)
  }
}