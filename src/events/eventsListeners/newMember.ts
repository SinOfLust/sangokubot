const newMember = (client: any) => {
    client.on('guildMemberAdd', (member: { guild: { channels: any[]; }; }) => { // define action on new member on the server
        const channel = member.guild.channels.find(ch => ch.name === 'général');
        if (!channel) return;
        channel.send(`Bienvenue ${member}`);
      });
}
module.exports = newMember