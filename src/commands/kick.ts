import { Message, GuildMember } from "discord.js";

module.exports = {
    name: 'kick',
    description: 'Kick un membre',
    guildOnly: true,
    usage: '<Utilisateur> [raison]',
    args: ['user'],
    async execute(message: Message, args: string[]) {
        if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
        return message.reply("Vous n'avez pas la permission de faire ça !");

      // Let's first check if we have a member and if we can kick them!
      // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
      // We can also support getting the member by ID, which would be args[0]
      const member: GuildMember = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!member)
        return message.reply("Mentionnez quelqu'un !");
      if(!member.kickable) return message.reply("Je ne peux pas le kick!");

      // slice(1) removes the first part, which here should be the user mention or ID
      // join(' ') takes all the various parts to make it a single string.
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Aucune raison donnée";

      // Now, time for a swift kick in the nuts!
      await member.kick(reason)
        .catch(error => message.reply(`Désolé ${message.author}, je ne peux le kick car : ${error}`));
      message.reply(`${member.user.tag} à été kick par ${message.author.tag} car: ${reason}`);
    },
};