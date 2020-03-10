import cooldownHandler from '../cooldown';
import reactToMessages from '../reactions';
import { IClient, Command } from "../../../interfaces";
import { Message} from "discord.js"
const config = require('../../../config')

const messages = (client: IClient): void => {
    client.on('message', async (message: Message): Promise<Message | Message[]> => { // define action on new message
        if(message.author.bot) return; // if message author is a bot then do nothing

        reactToMessages(message) // reaction middleware

        if (!message.content.startsWith(config.prefix)) return; // if message don't start with the bot prefix, don't go further

        const args = message.content.slice(config.prefix.length).split(/ +/); // removing prefix and return any word of the command into a new array
        const commandName = args.shift().toLowerCase(); // remove the first entry of our array et set anything left in lowercase

        if (!client.commands.has(commandName)) return; // if there no command with this argument, don't go further
        const command: Command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); // get the requested command

        if (!command) return; // if there's not, don't go further

        if (command.guildOnly && message.channel.type !== 'text') { // explicit
          return message.reply('Je ne peux pas executer cette commande dans les messages privés');
        }

        if (command.args && args.length === 0) { // explicit
          let reply = `Vous n'avez pas fourni de paramètre, ${message.author}!`;
          if (command.usage) {
            reply += `\nLa bonne utilisation est: \`${config.prefix}${command.name} ${command.usage}\``;
          }
          return message.channel.send(reply);
        }

        // cooldown handler
        cooldownHandler(message, command)
        // finally we can execute our command
        try {
          command.execute(message, args, client);
        } catch (error) { // or at least try to
          console.error(error);
          message.reply('Il y a eu une erreure en executant cette commande');
        }

      });
}
module.exports = messages