import { IClient } from "../../interfaces"
import fs from 'fs'

const events: string[] = fs.readdirSync('./src/events/eventsListeners')
    .filter((file: string) => (file.endsWith('.ts') || file.endsWith('.js'))); // fetch js file's name in eventsListeners folder

const setupListeners = (client: IClient): void => { // look into it
    for (const event of events) {
        const listener = require(`./eventsListeners/${event}`); // import them one by one
        listener(client) // then subscribe to
    }
}

export default setupListeners