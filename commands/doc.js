const fetch = require('node-fetch');

module.exports = {
    name: 'doc',
    description: 'va chercher la doc sur MDN pour vous !',
    usage: '[Object global, ?Prototype]',
    aliases: ['js'],
    args: ['globalObject', 'method | property '],
    async execute(message, args) {
        const baseURL = `https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux`
        const params = `$json`
        const firstPath = args[0]
        const secondPath = args[1]
        if (args[1]) {
            const response = await fetch(`${baseURL}/${firstPath}/${secondPath}${params}`)
            const parsed = await response.json()
            message.reply(`${parsed.summary.replace(/<[^>]*>?/gm, '')}`)
        } else {
            const response = await fetch(`${baseURL}/${firstPath}${params}`)
            const parsed = await response.json()
            message.reply(`${parsed.summary.replace(/<[^>]*>?/gm, '')}`)
        }
    },
};