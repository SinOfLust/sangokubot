const Discord = require('discord.js');
const config = require("./config.json");
const fs = require('fs');
const reactToMessages = require('./events/reactions')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', async () => { // define action on bot ready
  console.log(`Je suis là !!`);
  client.user.setActivity(`Javascript`);
});

client.on('guildMemberAdd', member => { // define action on new member on the server
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Bienvenue ${member}`);
});

client.on('message', async message => {
  if(message.author.bot) return; // if message author is a bot then do nothing

  reactToMessages(message) // reaction middleware

  if (!message.content.startsWith(config.prefix)) return; // if message dfont start with the bot prefix, don't go further

  const args = message.content.slice(config.prefix.length).split(/ +/); // removing prefix and return any word of the command into a new array
  const commandName = args.shift().toLowerCase(); // remove the first entry of our array et set anything left in lowercase

  if (!client.commands.has(commandName)) return; // if there no command with this argument, don't go further
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); // get the requested command
  
  if (!command) return; // if there's not, don't go further

  if (command.guildOnly && message.channel.type !== 'text') { // explicit
    return message.reply('Je ne peux pas executer cette commande dans les messages privés');
  }

  if (command.args && !args.length) { // explicit
    let reply = `Vous n'avez pas fourni de paramètre, ${message.author}!`;
    if (command.usage) {
      reply += `\nLa bonne utilisation est: \`${prefix}${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
  }

  // cooldown handler
  if (!cooldowns.has(command.name)) { 
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(`Attendsez ${timeLeft.toFixed(1)} seconde(s) avant de réutiliser \`${command.name}\`.`);
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  // finally we can execute our command
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('Il y a eu une erreure en executant cette commande');
  }

});

client.login(config.discordToken)
