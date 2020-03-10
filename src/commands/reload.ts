import { Command } from '../../interfaces'

module.exports = {
	name: 'reload',
	description: 'Recharge une commande',
	args: true,
	usage: '[Nom de la commande]',
	execute(message: any, args: string[]) {
		const commandName: string = args[0].toLowerCase();
		const command: Command = message.client.commands.get(commandName)
			|| message.client.commands.find((cmd:Command) => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`il n\'y a pas de commande \`${commandName}\`, ${message.author}!`);
		}

		delete require.cache[require.resolve(`./${commandName}.js`)];

		try {
			const newCommand = require(`./${commandName}.js`);
			message.client.commands.set(newCommand.name, newCommand);
		} catch (error) {
			console.error(error);
			return message.channel.send(`Il y a eu une erreur en rechargeant la commande \`${commandName}\`:\n\`${error.message}\``);
		}
		message.channel.send(`la commande \`${commandName}\` à été rechargée !`);
	},
};
