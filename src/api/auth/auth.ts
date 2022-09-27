import axios from "axios";

class AuthApi {
  static register = (data: any) => {
    return axios({
      method: "POST",
      url: "/users",
      data,
    });
  };
  static login = (data: any) => {
    return axios({
      method: "POST",
      url: "/login",
      data,
    });
  };
}

export default AuthApi;
