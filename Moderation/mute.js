module.exports = {
execute(message) {
  user = message.author;
  if (message.member.roles.cache.some(role => role.name === 'admin')) {
  message.channel.send("debug")
}
}
}