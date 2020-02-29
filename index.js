const Discord = require('discord.js');
const config = require("./config.json");
const fs = require('fs');
const setUpListeners = require("./events/eventsListener")

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // // fetch js file's name in commands folder

for (const file of commandFiles) { // look into commands folder
  const command = require(`./commands/${file}`); // import the all commands
  client.commands.set(command.name, command); // and attribute them to the bot
}

setUpListeners(client) // now we make our nearly operational client subscribe to our events listeners

client.login(config.discordToken) // then we can connect to Discord
