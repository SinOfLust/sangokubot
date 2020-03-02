import { Message } from "discord.js";
module.exports = {
	name: 'prune',
  description: 'Supprime le nombre spécifié de messages !',
  usage: '[Nombre de messages à supprimer]',
  args: ['number'],
	execute(message: Message, args: Array<string>) {
        const amount: number = parseInt(args[0]);
  
        if (isNaN(amount)) {
          return message.reply('ce nombre n\'est pas valide')
        } else if (amount < 2 || amount > 100) {
          return message.reply('tu dois saisir un chiffre entre 2 et 100');
        } else {
            message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('Il y a eu un problème en tentant de supprimer certains messages !');
          });
        }
	},
};