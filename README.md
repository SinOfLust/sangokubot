# SANGOKU BOT
Discord bot that clean channels, play music, react to messages, send DM's, display MDN doc and so more !

## SETUP

```bash
git clone https://github.com/loydfassi/sangokubot.git && cd sangokubot && npm i
```
* [Create a YoutubeApi V3 token](https://developers.google.com/youtube/registering_an_application)

    * Register your app in Google developer console and find YouTube V3 APi in the library store, then generate a YouTube API key

* [Create a discord bot token and a URL redirection](https://discordapp.com/developers/applications)

    * Create a new application then go Settings -> Bot -> Token and paste it

    * also think to invit your bot to your server with a URL that you can generate into Settings -> OAuth2 (Redirects)

* [Sign up](https://home.openweathermap.org/users/sign_up) and [create a API key](https://home.openweathermap.org/api_keys) for the weather

now that you have our required token, create a config.json at the root of your bot project

```json
// config.json
{
    "prefix" : "yourWantedPrefix", // for example, mine is "!"
    "discordToken"  : "yourDiscordApplicationToken",
    "youtubeToken" : "yourYoutbeApiV3Token",
    "weatherToken" : "yourOpenWeatherToken"
}
 ```
### reactions
you'll have to define the reactions emojis in the existing reactions.json at the root of your project.
go to your server settings and upload reactions emoji

![Image](https://github.com/loydfassi/sangokubot/blob/master/assets/snip4.PNG)

![Image](https://github.com/loydfassi/sangokubot/blob/master/assets/snip5.PNG)

set the key that you want the bot respond to that word and the value that is equal to the unicode of your discord server custom emoji. You can get the unicode in a discord text channel by escaping it like as following : 

![Image](https://github.com/loydfassi/sangokubot/blob/master/assets/snip.PNG)

to get : 

![Image](https://github.com/loydfassi/sangokubot/blob/master/assets/snip2.PNG)
  
to have :

```json
  // reactions.json
{
    "trump" : ":trump:683333136339566705" ,
}
 ```

then it's all good ! :

![Image](https://github.com/loydfassi/sangokubot/blob/master/assets/snip3.PNG)

now that you are ready you can run the bot :

```
npm run dev 
```

## COMMANDS
you can type !help for receive all of the commands in your DM's ! type !help [command name] for additional info on the requested command

### ADD COMMANDS
You juste have to create a .js file in the commands folder following this pattern : 

```js
module.exports = {
    name: '', // the real command name, that you gonna call just after the prefix
    description: '', // description for the !help command output
    usage: '' // usage description for the !help command output
    args: ['arg1', 'arg2'] // needed to find out how much args this command take, for error handling purpose
    cooldown: 5, // cooldwon you want for your command, 3 by default
    guildOnly: false, // set to true if this command can be used in DM's
    aliases: [''], // if you want to set alias to this command
    execute(message, args) {
	    // the command body
    },
};
```

## DOCUMENTATION

refer to the [discordjs documentation](https://discord.js.org/#/docs/main/stable/general/welcome) to look further into classes and possibilities