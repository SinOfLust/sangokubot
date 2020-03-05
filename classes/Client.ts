import { Client, Collection } from "discord.js"
import { Cooldown } from "../interfaces"
export default class IClient extends Client {
    commands: Collection<string, Cooldown>
    constructor() {
        super()
        this.commands = new Collection()
    }
}