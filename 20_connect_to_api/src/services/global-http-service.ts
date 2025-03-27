import apiClient, { CanceledError } from "./api-client";

class GlobalHttpService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();

    const request = apiClient
      .get<T[]>(this.endpoint, {
        signal: controller.signal,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        throw error;
      });

    return {
      request,
      cancel: () => {
        controller.abort();
      },
    };
  }
}

const create = (endpoint: string) => {
  return new GlobalHttpService(endpoint);
};

export default create;
