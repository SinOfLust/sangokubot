import { IClient } from "../../../interfaces";

const ready = (client: IClient): void => {
    client.on('ready', (): void => { // define action on bot ready
        // tslint:disable-next-line: no-console
        console.log(`Je suis là !!`);
        client.user.setActivity(`Javascript`);
    });
}
module.exports = ready