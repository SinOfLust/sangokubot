
const YouTube = require("discord-youtube-api");
const ytdl = require('ytdl-core');
const config = require("../config.json");
const youtube = new YouTube(config.youtubeToken);

module.exports = {
    name: 'play',
    description: 'Joue votre musique préférée !',
    usage: '[Mots clés de la recherche Youtube]',
    aliases: ['music'],
    args: ['query'],
    execute(message, args) {
        if (message.channel.type !== 'text') return;
        let query = ""
        args.forEach((arg) => {
           query = query.concat(arg+ ' ')
        })
        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply(`Rejoins d'abord un canal vocal ! `);
        }
        voiceChannel.join().then(async connection => {
            const video = await youtube.searchVideos(`${query}`);
            message.reply(`playing ${video.title}`)
            let stream = ytdl(video.url, { filter: 'audioonly' });
            let dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        })
    },
};