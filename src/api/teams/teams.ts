import axios from "axios";

class TeamsApi {
  static getAllTemas = () => {
    return axios({
      method: "GET",
      url: "/teams",
    });
  };

  static getTeamById = (id: number) => {
    return axios({
      method: "GET",
      url: `/teams/${id}?_embed=users`,
    });
  };
}

export default TeamsApi;
