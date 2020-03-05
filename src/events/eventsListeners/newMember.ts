import { IClient } from "../../../interfaces";
import { Message } from "discord.js";

const newMember = (client: IClient): void => {
  client.on('guildMemberAdd', (member: { guild: { channels: any[]; }; }): Promise<Message | Message[]> => { // define action on new member on the server
    const channel = member.guild.channels.find(ch => ch.name === 'général');
    if (!channel) return;
    return channel.send(`Bienvenue ${member}`);
  });
}
module.exports = newMember