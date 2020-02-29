const fs = require('fs');
const events = fs.readdirSync('./events/eventsListeners').filter(file => file.endsWith('.js')); // fetch js file's name in eventsListeners folder

const setupListeners = (client) => { // look into it
    for (const event of events) {
        const listener = require(`./eventsListeners/${event}`); // import them one by one
        listener(client) // then subscribe to 
    }
}
module.exports = setupListeners