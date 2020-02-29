const reactions = require('../reactions.json') // import all possible reactions
const reactToMessages = (message) => {

    const keyword = message.content.toLowerCase()

    Object.keys(reactions).forEach((key) => { // for each entry in our JSON
        if (keyword.match(key)) { // if we have a match with our keyword
            const emoji = reactions[`${key}`] // construct a string with the value of our match
            message.react(emoji) // then react to it ! 
        }
    })
}
module.exports = reactToMessages