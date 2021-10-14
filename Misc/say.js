module.exports = {
  execute(args, message) {
  if (args.length > 0) {
    message.delete()
    message.channel.send(args.join(" "));
  } else {
    message.delete()
   message.author.id.send("You did not send a message to repeat, cancelling command.")
  };
  }
}