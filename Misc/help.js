module.exports = {
  execute(Discord, message, user, args, bot) {
   user = message.author
   if (args[0] != null) {
     let category
     switch(args[0]) {
       case 'moderation':
       case 'mod':
         category = "mod"
       break;
     
       case 'economy':
       case 'eco':
         category = "eco"
       break;
     
       case 'misc':
         category = "misc"
       break;
    }
   } 
   if (args[1] != null) {
     
    }
  }
}