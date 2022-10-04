import axios from "axios";

class GendersApi {
  static getGenders = () => {
    return axios({
      method: "GET",
      url: "/genders",
    });
  };
}

export default GendersApi;
