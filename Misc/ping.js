module.exports = {
  execute(message) {
  async function pingCom() {
  var msg = await message.reply("Pinging...");
  await msg.edit(`PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`)
  }
}
}