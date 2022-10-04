import axios from "axios";

class GendersApi {
  static getGenders = () => {
    return axios({
      method: "GET",
      url: "/genders",
    });
  };

  static updateGenders = (data: any) => {
    return axios({
      method: "PATCH",
      url: "/genders/1",
      data,
    });
  };
}

export default GendersApi;
