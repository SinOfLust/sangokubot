module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	async execute(message, args, client) {
	const m = await message.channel.send(`Pong!`);
	totalLatency = (m.createdTimestamp - message.createdTimestamp)
    m.edit(`Pong! ${totalLatency}ms de latence au total. La latence de l'API est de ${Math.round(client.ping)}ms, la votre est de ${totalLatency - Math.round(client.ping)}.`);
	},
};