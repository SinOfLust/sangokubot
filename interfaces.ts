import {Collection, Client, Message} from "discord.js"

export interface IClient extends Client {
    commands: Collection<string, Command>
}

export interface Command {
    name: string,
    description: string
    cooldown: number,
    aliases: string[]
    guildOnly: boolean
    args: string[]
    usage: string[]
    execute: (message: Message, args: string[], client: IClient) => void
}

export interface Cooldown {
    has: (property: string) => Cooldown
    get: (property: string) => any // maybe i should do a TimeStamp type
    set: (property: string, value: number) => Cooldown
    delete: (property: string) => void
}