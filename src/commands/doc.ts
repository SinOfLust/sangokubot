import { Message } from "discord.js";
const fetch = require('node-fetch')
module.exports = {
    name: 'doc',
    description: 'va chercher la doc sur MDN pour vous !',
    usage: '[Object global, ?Prototype]',
    aliases: ['js'],
    args: ['globalObject', 'method | property '],
    async execute(message: Message, args: Array<string>) {
        const baseURL: string = `https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux`
        const params: string = `$json`
        const firstPath: string = args[0]
        const secondPath: string = args[1]
        if (args[1]) {
            const response = await fetch(`${baseURL}/${firstPath}/${secondPath}${params}`)
            const parsed: {summary: {replace: (regex: RegExp, params: string) => string}} = await response.json()
            message.reply(`${parsed.summary.replace(/<[^>]*>?/gm, '')}`)
        } else {
            const response = await fetch(`${baseURL}/${firstPath}${params}`)
            const parsed = await response.json()
            message.reply(`${parsed.summary.replace(/<[^>]*>?/gm, '')}`)
        }
    },
};