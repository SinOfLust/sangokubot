import IClient from "./classes/Client"
import fs from "fs"
import setUpListeners from "./src/events/eventsListener"

const config: {discordToken: string} = require("./config.json");
const client: IClient = new IClient();

const commandFiles: string[] = fs.readdirSync('./src/commands').filter((file: string) => (file.endsWith('.js') || file.endsWith('.ts'))); // // fetch js file's name in commands folder

for (const file of commandFiles) { // look into commands folder
  const command = require(`./src/commands/${file}`); // import the all commands
  client.commands.set(command.name, command); // and attribute them to the bot
}

setUpListeners(client) // now we make our nearly operational client subscribe to our events listeners

client.login(config.discordToken) // then we can connect to Discord
