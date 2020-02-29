const { Attachment } = require('discord.js');

module.exports = {
	name: 'f',
	description: 'Press F to pay respect',
	execute(message, args) {
        const attachment = new Attachment('./F.jpg');
        message.channel.send(attachment)
	},
};