import { Message } from "discord.js";
module.exports = {
	name: 'beep',
	description: 'Beep!',
	execute(message: Message): Promise<Message | Message[]> {
		return message.channel.send('Boop.');
	},
};
