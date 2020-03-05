import { Message, Attachment } from "discord.js";
module.exports = {
	name: 'f',
	description: 'Press F to pay respect',
	execute(message: Message): Promise<Message | Message[]> {
		const attachment: Attachment = new Attachment('./src/assets/F.jpg');
		return message.channel.send(attachment)
	},
};