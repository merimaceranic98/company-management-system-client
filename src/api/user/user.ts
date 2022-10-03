import axios from "axios";

class UsersApi {
  static getUserById = (id: number) => {
    return axios({
      method: "GET",
      url: `/users/${id}`,
    });
  };
}

export default UsersApi;
