import { Message } from "discord.js";
import { IClient } from "../../interfaces";

module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	async execute(message: Message, client: IClient) {
		const m: any = await message.channel.send(`Pong!`);
		const totalLatency: number = (m.createdTimestamp - message.createdTimestamp)
		m.edit(`Pong! ${totalLatency}ms de latence au total. La latence de l'API est de ${Math.round(client.ping)}ms, la votre est de ${totalLatency - Math.round(client.ping)}.`);
	},
};