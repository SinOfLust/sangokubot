import { Message } from "discord.js";
module.exports = {
    name: 'displaygamingtime',
    description: 'Affiche depuis combien de temps la personne mentionée joue',
    usage: '<Utilisateur>',
    args: ['user'],
    execute(message: Message, args: Array<string>) {
        const users = message.mentions.users
        if (!users.size) {
            return message.reply(`Mentionne correctement quelqu'un`);
        }
        users.forEach((user) => {
            const game = user.presence.game
            if (game) {

                const begginingDateInMS: number = game.timestamps.start.valueOf()
                const nowDateInMS: number = Date.now()

                const milliSecondsDifference: number = (nowDateInMS - begginingDateInMS)

                const sec: number = (milliSecondsDifference / 1000)
                const minutes: number = (sec / 60)
                const hours: number = (minutes / 60)

                const noDecimalMinutes: string[] = minutes.toString().split(".")
                const minutesToDisplay: number = parseInt(noDecimalMinutes[0], 10)

                const noDecimalHours: string[] = hours.toString().split('.')
                const hoursToDisplay: number = parseInt(noDecimalHours[0], 10)

                const minutesMinusHours: number = (minutesToDisplay - (hoursToDisplay * 60))

                const sentence: string = hoursToDisplay < 1 ?
                    `${user.username} joue depuis ${minutesToDisplay} minutes a ${game.name}` :
                    `${user.username} joue depuis ${hoursToDisplay} heure(s) et ${minutesMinusHours} minutes a ${game.name}`

                message.reply(sentence)
            } else {
                message.reply(`${user.username} n'est pas en train de jouer !`)
            }
        })
    },
};