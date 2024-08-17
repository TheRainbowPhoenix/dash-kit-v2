import { VARS } from '../system';
import { Client, Account } from "../api";

const endpoint = VARS.API_ENDPOINT ?? `${globalThis?.location?.origin}/v1`;

const client = new Client();
client.config.endpoint = endpoint;

export const api = {
    shell: {
        client,
        account: new Account(client)
    }
}
