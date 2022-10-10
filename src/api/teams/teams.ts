import axios from "axios";

class TeamsApi {
  static getAllTemas = () => {
    return axios({
      method: "GET",
      url: "/teams",
    });
  };
}

export default TeamsApi;
