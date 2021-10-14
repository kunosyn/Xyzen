module.exports = {
  execute(Discord, message, db, Euro, BankedEuros, user, args, userJob, jobIncome, EuroCirc, jobPass, jobTalkedRecently, uJobID) {
  async function jobCom() {
   jobsList = {garbage: 10, garbageReq: 0, garbageID: 1, retail: 25, retailReq: 300, retailID: 2, tech: 45, techReq: 800, techID: 3}
   jobsArray = ["garbage worker", "retail worker", "tech support"]
   var networth = BankedEuros + Euro
   var passMsg = Math.floor(Math.random()*jobPass.length);
   user = message.author;
   if (args[0] == null) {
     if (userJob != "none" && EuroCirc >= parseInt(jobIncome)) {
        if (jobTalkedRecently.has(message.author.id)) {
          cooldownEmbed = new Discord.MessageEmbed()
          .setColor("#fa2a2a")
          .setTitle("***cooldown:***")
          .setDescription("*\`error:\` the cooldown on this command is 5 minutes, please wait until its been that long since using the command before trying again*")
          message.channel.send(cooldownEmbed)
        } else if (EuroCirc >= parseInt(jobIncome)) {
          let job_type_rng = Math.floor(Math.random() * 1);
          let job_success = false;

          if (job_type_rng === 0) {
            let phrases = ["Apple", "Orange", "Hello", "Money", "Hello World", "Give money"]
            let phrase_rng = Math.floor(Math.random() * phrases.length)

            let embed = new Discord.MessageEmbed()
            .setColor("#FFFFFF")
            .setTitle("***memorize:***")
            .setDescription(`*phrase*: ${phrases[phrase_rng]}`)
            message.channel.send(embed);

            setTimeout(() => {
              message.delete();
            }, 2000);
          } else if(job_type_rng == 1) {

          }

          if (job_success) {
            jobSuccessEmbed = new Discord.MessageEmbed()
            .setColor("#0198FE")
            .setTitle("***job successful:***")
            .setDescription(jobPass[passMsg])
            .addFields({name: `*you earn -* `, value: `*\`${jobIncome}€\`*`})
            await db.add(`Euro.${user.id}`, parseInt(jobIncome))
            await db.subtract(`EuroCirc`, parseInt(jobIncome))
            message.channel.send(jobSuccessEmbed)
            jobTalkedRecently.add(message.author.id);
            setTimeout(() => {
              jobTalkedRecently.delete(message.author.id);
            },  300000)
          } else {
            let eurorng = Math.floor(Math.random() * 20);

            jobFailureEmbed = new Discord.MessageEmbed()
            .setColor("#fa2a2a")
            .setTitle("**job not done:***")
            .setDescription(`*you\'ve failed your job, however will still earn ${eurorng}€`)
            message.channel.send(jobFailureEmbed);
            
            await db.add(`Euro.${user.id}`, parseInt(eurorng));
            await db.subtract(`EuroCirc`, parseint(eurorng));

            jobTalkedRecently.add(message.author.id);
            setTimeout(() => {
              jobTalkedRecently.delete(message.author.id)
            }, 300000)
          }
        }
      } else if (EuroCirc < parseInt(jobIncome)) {
       euroCircMax = new Discord.MessageEmbed()
       .setColor("#fa2a2a")
       .setTitle("***job not done:***")
       .setDescription("*the amount of euros in circulation have been maxed, wait until tuesday 12:00 AM CST for the reset*")
       message.channel.send(euroCircMax)
      }
     } else if (userJob == "none" && args.length < 0) {
       noJobEmbed = new Discord.MessageEmbed()
       .setColor("#fa2a2a")
       .setTitle("***job not done:***")
       .setDescription("*you don't have a job! use \`.job claim \[JOB HERE\]\` to get a job*")
       message.channel.send(noJobEmbed)
      } else if (args[0] == "claim" && args[1] == null || args[0] == "list" && args[1] == null) {
       jobClaimEmbed = new Discord.MessageEmbed()
       .setColor("#4dc4f0")
       .setTitle("***job list:***")
       .setDescription("***garbage worker:*** \n*\`pays; 10€\`\n\`requires; 0€\`*\n\n***retail worker:*** \n*\`pays; 25€\`\n\`requires; 300€\`*\n\n***tech support:***\n*\`pays; 45€\`\n\`requires; 800€\`*")
       message.channel.send(jobClaimEmbed)
      } else if (args[0] == "claim" && args[1] != null) {
         if (args[1]+" "+args[2] != userJob) {
           if (jobsArray.includes(args[1]+" "+args[2])) {
             var jobCho = args[1]+" "+args[2]
             var chosenIndex = args[1]
             if (networth >= jobsList[chosenIndex+"Req"] && !(jobsList[chosenIndex+"ID"] < uJobID)) {
               jobClaimedEmbed = new Discord.MessageEmbed()
               .setColor("#82f25c")
               .setTitle("***job claimed:***")
               .setDescription(`*you now work as a ${jobCho}*`)
               await db.set(`userJob.${user.id}`, jobCho)
               await db.set(`jobIncome.${user.id}`, jobsList[chosenIndex])
               await db.set(`uJobID.${user.id}`, jobsList[chosenIndex+"ID"])
               message.channel.send(jobClaimedEmbed)
              } else if (!(networth >= jobsList[chosenIndex+"Req"])) {
               noNetEmbed = new Discord.MessageEmbed()
               .setColor("#fa2a2a")
               .setTitle("***job not claimed:***")
               .setDescription("*\`error:\` not enough networth for specified job*")
               message.channel.send(noNetEmbed)
              } else if(jobsList[chosenIndex+"ID"] < uJobID) {
               jobLowerEmbed = new Discord.MessageEmbed()
               .setColor("#fa2a2a")
               .setTitle("***job not claimed:***")
               .setDescription("*\`error:\` the job youve tried to claim is lower than your own current job, you may only claim jobs higher than your current job*")
               message.channel.send(jobLowerEmbed)
              };
            } else if (!jobsArray.includes(args[1]+" "+args[2])) {
             console.log(args)
             jobNullEmbed = new Discord.MessageEmbed()
             .setColor("#fa2a2a")
             .setTitle("***job not claimed:***")
             .setDescription("*\`error:\` the job youve specified is non existent please check your spelling \(tip: use all lowercases and no symbols\)*")
             message.channel.send(jobNullEmbed)
            }
          } else if (args[1]+" "+args[2] == userJob) {
           jobOwnedEmbed = new Discord.MessageEmbed()
           .setColor("#fa2a2a")
           .setTitle("***job owned:***")
           .setDescription("*\`error:\` the job you've tried to claim is already owned*")
           message.channel.send(jobOwnedEmbed)
         };
    }
    } jobCom();
  }
};