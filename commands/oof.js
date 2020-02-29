const { Attachment } = require('discord.js');

module.exports = {
    name: 'oof',
    description: 'Oooof',
    execute(message, args) {
        const attachment = new Attachment('./assets/oof.jpg');
        message.channel.send(attachment)
    },
};