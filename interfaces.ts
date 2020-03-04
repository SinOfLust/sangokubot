import {Collection, Client, Message} from "discord.js"

export interface IClient extends Client {
    commands: Collection<any, any>
}

export interface Command {
    name: string,
    description: string
    cooldown: number,
    aliases: Array<string>
    guildOnly: boolean
    args: Array<string>
    usage: Array<string>
    execute: (message: Message, args: Array<string>, client: IClient) => void
}

export interface Cooldown {
    has: (property: any) => any
    get: (property: any) => any
    set: (property: any, value: any) => any
}