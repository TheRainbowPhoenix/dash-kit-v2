type Payload = {
  [key: string]: any;
};

type Headers = {
  [key: string]: string;
};

class ApiException extends Error {
  code: number;
  response: string;
  type: string;

  constructor(
    message: string,
    code: number = 0,
    type: string = "",
    response: string = ""
  ) {
    super(message);
    this.name = "ApiException";
    this.message = message;
    this.code = code;
    this.type = type;
    this.response = response;
  }
}

class Client {
  config = {
    endpoint: "http://saas.local/api/v1",
    jwt: "",
    locale: "",
  };
  headers: Headers = {
    "x-sdk-platform": "web",
    "x-sdk-version": "0.0.1",
  };

  /**
   * Set JWT
   *
   * Your secret JSON Web Token
   *
   * @param value string
   *
   * @return {this}
   */
  setToken(value: string): this {
    this.headers["Authorization"] = `Bearer ${value}`;
    this.config.jwt = value;
    return this;
  }

  async call(
    method: string,
    url: URL,
    headers: Headers = {},
    params: Payload = {},
    fetch: any = window.fetch,
  ): Promise<any> {
    method = method.toUpperCase();
    headers = Object.assign({}, this.headers, headers);

    let options: RequestInit = {
      method,
      headers,
      credentials: "include",
    };

    if (method === "GET") {
      for (const [key, value] of Object.entries(params)) {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            url.searchParams.append(`${key}[]`, item);
          });
        } else {
          url.searchParams.append(key, value);
        }
      }
    } else {
      switch (headers["content-type"]) {
        case "multipart/form-data":
          let formData = new FormData();

          for (const key in params) {
            if (Array.isArray(params[key])) {
              params[key].forEach((value: any) => {
                formData.append(key + "[]", value);
              });
            } else {
              formData.append(key, params[key]);
            }
          }

          options.body = formData;
          delete headers["content-type"];

          break;

        case "application/json":
          options.body = JSON.stringify(params);
          break;
      }
    }

    try {
      let data = {};
      const response = await fetch(url.toString(), options);

      if (response.headers.get("content-type")?.includes("application/json")) {
        data = await response.json();
      } else {
        data = {
          message: await response.text(),
        };
      }

      if (400 <= response.status) {
        throw new ApiException(
          data?.message,
          response.status,
          data?.type,
          data
        );
      }

      return data;
    } catch (e) {
      if (e instanceof ApiException) {
        throw e;
      }
      throw new ApiException((<Error>e).message);
    }
  }
}

export { Client, ApiException };
export type { Payload };
