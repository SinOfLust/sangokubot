import { Message } from "discord.js";

module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp'],
  usage: '<Utilisateur>',
	description: 'Affiche l\'avatar du membre mentionné ou affiche le sien si personne n\'est mentionné',
	execute(message: Message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Ton avatar: ${message.author.displayAvatarURL}`);
          }
          const avatarList: string[] = message.mentions.users.map(user => {
            return `${user.username} : ${user.displayAvatarURL}`;
          });
          message.channel.send(avatarList);
	},
};