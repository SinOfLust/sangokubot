const { Attachment } = require('discord.js');

module.exports = {
	name: 'f',
	description: 'Press F to pay respect',
	execute(message, args) {
        const attachment = new Attachment('./assets/F.jpg');
        message.channel.send(attachment)
	},
};