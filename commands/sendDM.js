module.exports = {
    name: 'dm',
    description: 'Faites envoyer un message privé par sangoku a votre mention !',
    usage: '<user> [message]',
    execute(message, args) {
        const users = message.mentions.users
        let query = ""
        args.shift()
        args.forEach((arg) => {
           query = query.concat(arg+ ' ')
        })
        if (users.size === 1) {
            users.forEach((user) => {
                mention.send(`${message.author} m'as chargé de te dire : ${query}`)
                message.reply(`Message envoyé à ${user}`)
            })
        } else {
            return message.reply('il faut mentionner une personne (et une seule ) !')
        }
    },
};