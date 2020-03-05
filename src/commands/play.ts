import { Message, StreamDispatcher, VoiceConnection } from "discord.js";
import { Readable } from "stream";
import Youtube, { Video } from "discord-youtube-api"

const ytdl = require('ytdl-core');
const config = require("../../config.json");

const youtube = new Youtube(config.youtubeToken);

module.exports = {
    name: 'play',
    description: 'Joue votre musique préférée !',
    usage: '[Mots clés de la recherche Youtube]',
    aliases: ['music'],
    args: ['query'],
    execute(message: Message, args: string[]): Promise<Message | Message[]> {
        if (message.channel.type !== 'text') return;
        let query: string = ""
        args.forEach((arg) => {
            query = query.concat(arg + ' ')
        })
        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply(`Rejoins d'abord un canal vocal ! `);
        }
        voiceChannel.join().then(async (connection: VoiceConnection) => {
            try {
                const video: Video = await youtube.searchVideos(`${query}`)
                message.reply(`playing ${video.title}`)
                const stream: Readable = ytdl(video.url, { filter: 'audioonly' });
                const dispatcher: StreamDispatcher = connection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
            } catch (error) {
                console.error(error);
                message.reply(`Je n'ai pas trouvé de musique pour cette recherche, je vais me déconnecter du canal vocal !`)
                setTimeout(() => {
                    voiceChannel.leave()
                }, 5000)
            }
        })
    },
};