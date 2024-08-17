import type { ApiException, Payload } from "$lib/api/client";
import type { Models } from "$lib/types"
import { BaseService } from "./base";

export class Account extends BaseService {
  async get(): Promise<Models.User> {
    const apiPath = "/account";
    const payload: Payload = {};

    const uri = new URL(this.client.config.endpoint + apiPath);
    return await this.client.call(
      "get",
      uri,
      {
        "content-type": "application/json",
      },
      payload
    );
  }

  // just as example
  async create(userId: string, name: string): Promise<Models.User> {
    if (typeof userId === "undefined") {
      throw new ApiException('Missing required parameter: "userId"');
    }

    if (typeof name === "undefined") {
      throw new ApiException('Missing required parameter: "name"');
    }

    const apiPath = "/account";
    const payload: Payload = {
      userId,
      name
    };

    const uri = new URL(this.client.config.endpoint + apiPath);
    return await this.client.call(
      "post",
      uri,
      {
        "content-type": "application/json",
      },
      payload
    );
  }

  // same, you got the idea ...
  async updatePassword(pass: string): Promise<Models.User> {

    if (typeof pass === "undefined") {
      throw new ApiException('Missing required parameter: "pass"');
    }

    const apiPath = "/account/password";
    const payload: Payload = {
      pass,
    };

    const uri = new URL(this.client.config.endpoint + apiPath);
    return await this.client.call(
      "patch",
      uri,
      {
        "content-type": "application/json",
      },
      payload
    );
  }
}