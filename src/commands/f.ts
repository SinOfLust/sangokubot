import { Message, Attachment } from "discord.js";
module.exports = {
	name: 'f',
	description: 'Press F to pay respect',
	execute(message: Message) {
        const attachment: Attachment = new Attachment('./assets/F.jpg');
        message.channel.send(attachment)
	},
};