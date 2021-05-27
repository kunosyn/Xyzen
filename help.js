module.exports = {
  'help': {
    description: '***[HELP]*** *Shows the list of commands or help on specified command.*',
    format: 'help [command-name]'
  },
  'ping': {
    description: '***[MISC]*** *Checks connectivity with discord\'s servers.*',
    format: 'ping'
  },
  'bot': {
    aliases: ['botInfo'],
    description: '***[MISC]*** *Gives general info about bot.*',
    format: 'bot'
  },
  'say': {
    aliases: ['repeat'],
    description: '***[MISC]*** *Repeats whatever is said.*',
    format: 'say <message>'
  },
  'updatelogs': {
  aliases: ['updates'],
  description: '***[MISC]*** *Shows recent updates.*',
  format: 'updatelogs'
  },
 'task': {
    description: '***[ECO]*** *Preforms a task to earn or loose a max of 16 Euros. 6/10 chance of passing.*',
   format: 'task'
  },
  'crime': {
  description: '***[ECO]*** *Commits crime. (Higher chances with glock)*',
  format: 'crime'
  },
 'balance': {
 aliases: ['bal', 'about'],
 description: '***[ECO]*** *Checks the user\'s current balance, networth, and breifcase.*',
 format: 'balance || balance <@user>'
  },
  'deposit': {
    aliases: ['dep'],
    description: '***[ECO]*** *Deposits specified amount of on-hand Euros.*',
    format: 'deposit <amount>'
  },
  'withdraw': {
    aliases: ['with'],
    description: '***[ECO]*** *Withdraws specified amount of banked Euros.*',
    format: 'withdraw <amount>'
  },
  'euros': {
    aliases: ['euro'],
    description: '***[ECO]*** *Adds, subtracts, or sets a User\'s Euro amount. (Only usable by Moderation).*',
    format: 'euro <add|subtract|set> <@user> <amount>.'
  },
  'circulation': {
   aliases: ['circ'],
   description: '***[ECO]*** Adds, subtracts, or sets the amount of Euros in circulation (Only usable by Moderation).*',
   format: 'euro <add|subtract|set> <amount>.'
  },
  'inventory': {
    aliases: ['inv'],
    description: '***[ECO]*** *Lists all items in your inventory.*',
    format: 'inventory'
  },
  'shop': {
    aliases: ['store'],
    description: '***[ECO]*** *Lists items for sale.*',
    format: ['shop']
  },
  'info': {
    aliases: ['eco', 'economy'],
    description: '***[ECO]*** *Shows current economic info.*',
    format: 'info'
  },
  'kick': {
    description: '***[MOD/WIP]*** *Kicks pinged user. (Only usable by Moderation).*',
    format: 'kick <@user>'
  },
  'ban': {
    description: '***[MOD/WIP]*** *Bans pinged user. (Only usable by Moderation).*',
    format: 'ban <@user>'
  },
  'warn': {
    description: '***[MOD/WIP]*** *Warns pinged user. (Only usable by Moderation)*',
    format: 'warn <@user> <reason>'
  },
  'mute': {
    description: '***[MOD/WIP]*** *Mutes pinged user. (Only usable by Moderation)*'
  }
}