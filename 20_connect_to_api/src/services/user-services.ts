import create from "./global-http-service";

export interface User {
  id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
}

const endpoint = "/users/random/10";

const userService = create(endpoint);

export default userService;