import axios from "axios";
import { FieldValues } from "react-hook-form";

class UsersApi {
  static getUserById = (id: number) => {
    return axios({
      method: "GET",
      url: `/users/${id}`,
    });
  };

  static updateUserById = (id: number, data: FieldValues) => {
    return axios({
      method: "PATCH",
      url: `/users/${id}`,
      data,
    });
  };
}

export default UsersApi;