import { Message, GuildMember } from "discord.js";
module.exports = {
    name: 'ban',
    description: 'Ban un membre',
    guildOnly: true,
    usage: '<Utilisateur> [raison]',
    args: ['user', '?raison'],
    async execute(message: Message, args: Array<string>) {
        if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
        return message.reply("Vous n\'avez pas la permission de faire ça !");
      
      const member: GuildMember = message.mentions.members.first();
      if(!member)
        return message.reply("Mentionnez quelqu\'un !");
      if(!member.bannable) 
        return message.reply("Je ne peux pas le ban !");
  
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Aucune raison données";
      
      await member.ban(reason)
        .catch(error => message.reply(`Désolé ${message.author}, je ne peux pas le ban car : ${error}`));
      message.reply(`${member.user.tag} à été banni par ${message.author.tag} car: ${reason}`);
    },
};