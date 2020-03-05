import { Client, Collection } from "discord.js"
import { Command } from "../interfaces"
export default class IClient extends Client {
    commands: Collection<string, Command>
    constructor() {
        super()
        this.commands = new Collection()
    }
}