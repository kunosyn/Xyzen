module.exports = {
  execute(Discord, message, EuroCirc) {
  ecoStatsEmbed = new Discord.MessageEmbed()
  .setColor("#FBF7F6")
  .setTitle("**economy statistics:**")
  .setDescription(`*gdp - \`WIP\`\npopulation - \`WIP\`\ncirculation - \`${EuroCirc}€\`*`)
  message.channel.send(ecoStatsEmbed)
  }
}