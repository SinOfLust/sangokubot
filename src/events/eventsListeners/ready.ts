import { IClient } from "../../../interfaces";

const ready = (client: IClient) => {
    client.on('ready', async () => { // define action on bot ready
        console.log(`Je suis là !!`);
        client.user.setActivity(`Javascript`);
    });
}
module.exports = ready