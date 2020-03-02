import { Message } from "discord.js";

const config = require("../../config.json");
const fetch = require('node-fetch');

module.exports = {
    name: 'weather',
    description: 'Donne la météo !',
    guildOnly: false,
    usage: '[ville]',
    cooldown: 10,
    args: ['ville', 'pays'],
    async execute(message: Message, args: Array<string>) {
        const query = args.length === 1 ? `https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&lang=fr&appid=${config.weatherToken}` : `https://api.openweathermap.org/data/2.5/weather?q=${args[0]},${args[1]}&units=metric&lang=fr&appid=${config.weatherToken}`
       const response = await fetch(query)
       const parsed = await response.json()
       console.log(parsed.weather);
       
       const descr: string = parsed.weather[0].description
       const name: string = parsed.name
       const temp: string = parsed.main.temp
       console.log(descr);
       
       message.reply(`
        Ville: ${name}
        Météo : ${descr}
        Temperature : ${temp} degrés
       `)
        
    },
};