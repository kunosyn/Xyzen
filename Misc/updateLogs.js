module.exports = {
  execute(Discord, message) {
    updateLogsEmbed = new Discord.MessageEmbed()
    .setTitle("***update logs:***")
    .setDescription("*all updates listed here:\n\n- fixed bot lag\n- added shop & items\n- added update logs*")
    message.channel.send(updateLogsEmbed)
  }
}