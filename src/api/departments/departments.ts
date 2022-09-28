import axios from "axios";

class DepartmentsApi {
  static getAllDepartments = () => {
    return axios({
      method: "GET",
      url: "/departments",
    });
  };
}

export default DepartmentsApi;
