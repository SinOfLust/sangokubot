import { Message, Attachment } from "discord.js";
module.exports = {
    name: 'oof',
    description: 'Oooof',
    execute(message: Message): Promise<Message | Message[]> {
        const attachment: Attachment = new Attachment('./src/assets/oof.jpg');
        return message.channel.send(attachment)
    },
};