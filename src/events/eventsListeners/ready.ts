import { IClient } from "../../../interfaces";

const ready = (client: IClient) => {
    client.on('ready', async () => { // define action on bot ready
        // tslint:disable-next-line: no-console
        console.log(`Ready`);
        client.user.setActivity(`Casser des gueules`);
    });
}
module.exports = ready