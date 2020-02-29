module.exports = {
    name: 'kick',
    description: 'Ne sert à rien, pour test',
    guildOnly: true,
    usage: '<Utilisateur>',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('vous devez mentionner quelqu\'un pour pouvoir le kick !');
          }
          const taggedUser = message.mentions.users.first();
          message.channel.send(`vous voulez kick: ${taggedUser.username}`);
    },
};