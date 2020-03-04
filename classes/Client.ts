import { Client, Collection } from "discord.js"
export default class IClient extends Client {
    commands: Collection<any, any>
    constructor() {
        super()
        this.commands = new Collection()
    }
}