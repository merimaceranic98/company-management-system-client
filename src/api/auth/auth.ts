import axios from "axios";

class AuthApi {
  static register = (data: any) => {
    return axios({
      method: "POST",
      url: "/users",
      data,
    });
  };
}

export default AuthApi;
