const Discord = require('discord.js');
import { Message } from "discord.js"
import { Command, Cooldown } from "../../interfaces"
const cooldownHandler: (message: Message, command: Command) => void = (message, command): Promise<Message | Message[]> => {
  const cooldowns: Cooldown = new Discord.Collection(); // create a new collection of cooldown
  if (!cooldowns.has(command.name)) {   // if our cooldown collection dont contain this command name
    cooldowns.set(command.name, new Discord.Collection()); // so create it
  }
  const now = Date.now(); // referential
  const timestamps = cooldowns.get(command.name); // get the timeStamps of the given command
  const cooldownAmount: number = (command.cooldown || 3) * 1000; //  default cooldown is 3sec ( in ms here, for the setTimeout later in this function )

  if (timestamps.has(message.author.id)) { // if there's any timestamp for our command
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    // get cooldown expiration time by adding the imput timeStamp to total value of the command cooldown

    if (now < expirationTime) { // if there's time left before reuse
      const timeLeft = (expirationTime - now) / 1000; // time left before reuse
      return message.reply(`Attendez ${timeLeft.toFixed(1)} seconde(s) avant de réutiliser \`${command.name}\`.`);
    }
  }
  timestamps.set(message.author.id, now); // start cooldown
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount); // and delete if after we're done :)
}
export default cooldownHandler