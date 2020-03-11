import { Message, Attachment } from "discord.js";
module.exports = {
	name: 'nul',
	description: 'nul !',
	execute(message: Message): Promise<Message | Message[]> {
		const attachment: Attachment = new Attachment('./src/assets/nul!.jpg');
		return message.channel.send(attachment)
	},
};