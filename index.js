/* 
DEFINING CONSTANT VARIABLES BELOW
*/

const { Client, MessageEmbed, Discord } = require('discord.js');
const config = require('./config.js');
const commands = require('./help.js');
const db = require('quick.db');
const taskPass = require('./Files/taskPass.json');
const taskFailed = require('./Files/taskFailed.json');
const jobPass = require('./Files/jobPass.json');
const crimePass = require('./Files/crimePass.json');
const crimeFail = require('./Files/crimeFail.json');
const bannedwords = require('./Files/bannedWords.json');
const allDB = db.all();
const jobTalkedRecently = new Set();
const taskTalkedRecently = new Set();
const crimeTalkedRecently = new Set();
const spamList = new Set();


//const guild = cient.guilds.get("814155373442629664");
//const memberCount = guild.members.filter(member => !member.user.bot).size;

// -- Defines Command Files --

const balanceC = require('./Economy/balance.js');
const euroC = require('./Economy/euro.js');
const circulationC = require('./Economy/circulation.js');
const taskC = require('./Economy/task.js');
const murderC = require('./Economy/murder.js');
const infoC = require('./Economy/info.js');
const jobC = require('./Economy/job.js');
const invC = require('./Economy/inv.js');
const shopC = require('./Economy/shop.js');
const bmC = require('./Economy/blackmarket.js');
const withdrawC = require('./Economy/withdraw.js');
const crimeC = require('./Economy/crime.js');
const depositC = require('./Economy/deposit.js');
const pingC = require('./Misc/ping.js');
const sayC = require('./Misc/say.js');
const botC = require('./Misc/bot.js');
const restartC = require('./Misc/restart.js');
const updatelogsC = require('./Misc/updateLogs.js');
const kickC = require('./Moderation/kick.js');
const banC = require('./Moderation/ban.js');
const muteC = require('./Moderation/mute.js');
const warnC = require('./Moderation/warn.js');
const spamCheck = require('./Moderation/spamCheck.js');
const bannedWords = require('./Moderation/bannedWords.js');

let bot = new Client({
	fetchAllMembers: true, // --Remove this if the bot is in large guilds--
	presence: {
		status: 'dnd',
		activity: {
			name: `the economy || ${config.prefix}help`,
			type: 'LISTENING'
		}
	}
});

console.log('Starting Login!');
bot.on('message', async message => {
  spamCheck.execute(user, Discord, message, db, spamList, msgNum);
  bannedWords.execute(user, Discord, message, db, args, bannedWords);

  // --Economic circulation reset--
	var date = new Date();
	var day = date.getDay();
	if (day != 2) {
		await db.set(`restarted`, false);
	} else if (day == 2 && restarted == false) {
		await db.set(`EuroCirc`, 100000000);
		await db.set(`restarted`, true);
	}

	// -Defining Variables-
	var user = message.author || message.mentions.users.first();
	var Euro = await db.fetch(`Euro.${user.id}`);
	var BankedEuros = await db.fetch(`BankedEuros.${user.id}`);
	var Breifcase = await db.fetch(`Breifcase.${user.id}`);
	var EuroCirc = await db.fetch(`EuroCirc`);
	var userJob = await db.fetch(`userJob.${user.id}`);
	var jobIncome = await db.fetch(`jobIncome.${user.id}`);
	var inv = await db.fetch(`inv.${user.id}`);
  var uLawSuits = await db.fetch(`uLawSuits.${user.id}`);
  var lawSuits = await db.fetch(`lawSuits`)
	var restarted = await db.fetch(`restarted`);
	var uJobID = await db.fetch(`uJobID.${user.id}`);
  var warnings = await db.fetch(`warnings.${user.id}`);

	// --Creating database values if none found--
	if (Euro == null) {
		Euro = 0;
		await db.set(`Euro.${user.id}`, 0);
	}

	if (inv == null || inv == {}) {
		await db.set(`inv.${user.id}`, { Empty: 'Empty!' });
	}
  
  if (uLawSuits == null) {
    await db.set(`uLawSuits.${user.id}`, {sID: 0, sReason: "N/A", pros: "N/A", def: "N/A"})
  }

  if (warnings == null) {
    warnings = 0
    warnings = await db.set(`warnings.${user.id}`, 0);
  }
  
  if (msgNum == null) {
    msgNum = 0
    msgNum = await db.set(`msgNum.${user.id}`, 0);
  }

  if (lawSuits == null) {
    await db.set(`lawSuits.${user.id}`, {sID: 0, sReason: "N/A", pros: "N/A", def: "N/A"})
  }

	if (userJob == null) {
		userJob = 'none';
		await db.set(`userJob.${user.id}`, 'none');
	}

	if (jobIncome == null) {
		userJob = 0;
		await db.set(`jobIncome.${user.id}`, 0);
	}

	if (BankedEuros == null) {
		BankedEuros = 0;
		await db.set(`BankedEuros.${user.id}`, 0);
	}

	if (Breifcase == null) {
		Breifcase = 0;
		await db.set(`Breifcase.${user.id}`, 0);
	}

	if (uJobID == null) {
		uJobID = 0;
		await db.set(`uJobID.${user.id}`, 0);
	}

	// --Checking for a command--
	if (message.content.startsWith(config.prefix)) {
		let args = message.content.slice(config.prefix.length).split(' ');
		let command = args.shift().toLowerCase();
		var user = message.author;

		// -Commands start below-
		switch (command) {
      /* 
     MISC COMMANDS BELOW
     */
     
			// -Ping Command starts below-
			case 'ping':
				pingC.execute(message);
				break;

			// -Say Command starts below-
			case 'say':
			case 'repeat':
				sayC.execute(args, message);
				break;

			// -Bot Command Starts below-
			case 'bot':
			case 'botInfo':
				botC.execute(Discord, message);
				break;
			// -Restart Command starts below-
			case 'restart':
				restartC.execute(user, message);
				break;

			// -UpdateLogs Command starts below-
			case 'updatelogs':
			case 'updates':
				updatelogsC.execute(Discord, Message);
				break;

			/* 
     ECONOMY COMMANDS BELOW
     */

			// -Euros Command starts below-
			case 'euro':
			case 'euros':
				euroC.execute(message, Discord, Euro, user, args, db);
			break;

			// -Circulation Command starts below-
			case 'circulation':
			case 'circ':
				circulationC.execute(Discord, user, message, args, EuroCirc, db);
			break;

			// -Balance Command starts below-
			case 'balance':
			case 'bal':
			case 'about':
				balanceC.execute(message, args, Discord, Euro, BankedEuros, userJob, user);
			break;

			// -Task Command starts below-
			case 'task':
				taskC.execute(message,Discord,db,Euro,taskFailed, taskPass,taskFailed,EuroCirc,taskTalkedRecently);
			break;

			// -Murder Command starts below-
			case 'murder':
			case 'kill':
				murderC.execute(Discord, message, user, Euro, EuroCirc);
			break;

			// -Economy Info Command starts below-
			case 'info':
			case 'eco':
			case 'economy':
				infoC.execute(Discord,message, EuroCirc);
			break;

			// -Work Command starts below-
			case 'job':
			case 'work':
				jobC.execute(Discord, message, db, Euro,BankedEuros, user, args, userJob, jobIncome, EuroCirc, jobPass, jobTalkedRecently, uJobID);
			break;

			// -Crime Command starts below-
			case 'crime':
				crimeC.execute(Discord, user, message, Euro, inv,crimePass, crimeFail, db, crimeTalkedRecently, EuroCirc);
			break;

			// -Inventory Command starts below-
			case 'inv':
			case 'inventory':
				invC.execute(message, Discord, user, db, inv);
			break;

			// -Shop Command starts below-
			case 'shop':
			case 'store':
				shopC.execute(args, Discord, message, db, Euro, user, inv);
			break;

			// -Blackmarket Command starts below-
			case 'blackmarket':
				bmC.execute();
			break;

			// -Deposit Command starts below-
			case 'deposit':
			case 'dep':
				depositC.execute(Discord, user, args, message, db, Euro, BankedEuros);
			break;

			// - Withdraw Command below-
			case 'withdraw':
			case 'with':
				withdrawC.execute(Discord, user, args, message, db, Euro, BankedEuros);
			break;

			/* 
      MODERATION COMMANDS BELOW
      */

			// -Ban Command starts below-
			case 'ban':
				banC.execute(user, Discord, args, message);
			break;

			// -Kick Command starts below-
			case 'kick':
				kickC.execute(user, Discord, args, message);
			break;

			case 'warn':
				warnC.execute(user, args, db);
			break;

			case 'mute':
				muteC.execute(message, user, db);
			break;

			/* 
      HELP COMMAND BELOW  --- DO NOT CHANGE ---
      */

			case 'help':
				let embed = new MessageEmbed()
					.setTitle('HELP MENU')
					.setColor('#FBF7F6')
					.setFooter(
						`Requested by: ${
							message.member
								? message.member.displayName
								: message.author.username
						}`,
						message.author.displayAvatarURL()
					)
					.setThumbnail(bot.user.displayAvatarURL());
				if (!args[0])
					embed.setDescription(
						Object.keys(commands)
							.map(
								command =>
									`\`${command.padEnd(
										Object.keys(commands).reduce(
											(a, b) => (b.length > a.length ? b : a),
											''
										).length
									)}\` :: ${commands[command].description}`
							)
							.join('\n')
					);
				else {
					if (
						Object.keys(commands).includes(args[0].toLowerCase()) ||
						Object.keys(commands)
							.map(c => commands[c].aliases || [])
							.flat()
							.includes(args[0].toLowerCase())
					) {
						let command = Object.keys(commands).includes(args[0].toLowerCase())
							? args[0].toLowerCase()
							: Object.keys(commands).find(
									c =>
										commands[c].aliases &&
										commands[c].aliases.includes(args[0].toLowerCase())
							  );
						embed.setTitle(`COMMAND - ${command}`);

						if (commands[command].aliases)
							embed.addField(
								'Command aliases',
								`\`${commands[command].aliases.join('`, `')}\``
							);
						embed
							.addField('DESCRIPTION', commands[command].description)
							.addField(
								'FORMAT',
								`\`\`\`${config.prefix}${commands[command].format}\`\`\``
							);
					} else {
						embed
							.setColor('RED')
							.setDescription(
								'*`error:` this command does not exist please use the help command without specifying any commands to list them all*'
							);
					}
				}
				message.channel.send(embed);
				break;
		}
	}
});

require('./server')();
bot.login(config.token);
