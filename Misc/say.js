module.exports = {
  execute(args, message) {
  if (args.length > 0) {
    message.channel.send(args.join(" "));
  } else {
   message.reply("You did not send a message to repeat, cancelling command.")
  };
  }
}