import { Message, Attachment } from "discord.js";
module.exports = {
    name: 'oof',
    description: 'Oooof',
    execute(message: Message) {
        const attachment: Attachment = new Attachment('./assets/oof.jpg');
        message.channel.send(attachment)
    },
};