module.exports = {
    name: 'displaygamingtime',
    description: 'Affiche depuis combien de temps la personne mentionée joue',
    usage: '<Utilisateur>',
    args: ['user'],
    execute(message, args) {
        const users = message.mentions.users
        if (!users.size) {
            return message.reply(`Mentionne correctement quelqu'un`);
        }
        users.forEach((user) => {
            const game = user.presence.game
            if (game) {

                const begginingDateInMS = game.timestamps.start.valueOf()
                const nowDateInMS = Date.now()

                const milliSecondsDifference = (nowDateInMS - begginingDateInMS)

                const sec = (milliSecondsDifference / 1000)
                const minutes = (sec / 60)
                const hours = (minutes / 60)

                const noDecimalMinutes = minutes.toString().split(".")
                const minutesToDisplay = noDecimalMinutes[0]

                const noDecimalHours = hours.toString().split('.')
                const hoursToDisplay = noDecimalHours[0]

                const minutesMinusHours = (minutesToDisplay - (hoursToDisplay * 60))

                const sentence = hoursToDisplay < 1 ?
                    `${user.username} joue depuis ${minutesToDisplay} minutes a ${game.name}` :
                    `${user.username} joue depuis ${hoursToDisplay} heure(s) et ${minutesMinusHours} minutes a ${game.name}`

                message.reply(sentence)
            } else {
                message.reply(`${user.username} n'est pas en train de jouer !`)
            }
        })
    },
};