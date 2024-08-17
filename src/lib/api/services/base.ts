import { Client } from "../client";
export class BaseService {
    client: Client

    constructor(client: Client) {
        this.client = client
    }
}
