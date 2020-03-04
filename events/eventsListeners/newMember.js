const newMember = (client) => {
    client.on('guildMemberAdd', member => { // define action on new member on the server
        const channel = member.guild.channels.find(ch => ch.name === 'général');
        if (!channel) return;
        channel.send(`Bienvenue ${member}`);
      });
}
module.exports = newMember