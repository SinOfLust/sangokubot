module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp'],
  usage: '<Utilisateur>',
	description: 'Affiche l\'avatar du membre mentionné ou affiche le sien si personne n\'est mentionné',
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Ton avatar: ${message.author.displayAvatarURL}`);
          }
          const avatarList = message.mentions.users.map(user => {
            return `${user.username} : ${user.displayAvatarURL}`;
          });
          message.channel.send(avatarList);
	},
};