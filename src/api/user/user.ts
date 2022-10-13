import axios from "axios";
import { FieldValues } from "react-hook-form";

class UsersApi {
  static getUserById = (id: number) => {
    return axios({
      method: "GET",
      url: `/users/${id}?_expand=department&_expand=team`,
    });
  };

  static updateUserById = (id: number, data: FieldValues) => {
    return axios({
      method: "PATCH",
      url: `/users/${id}`,
      data,
    });
  };

  static usersWithoutTeam = () => {
    return axios({
      method: "GET",
      url: `/users?teamId=0`,
    });
  };
}

export default UsersApi;
