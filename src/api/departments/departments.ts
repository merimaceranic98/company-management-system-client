import axios from "axios";

class DepartmentsApi {
  static getAllDepartments = () => {
    return axios({
      method: "GET",
      url: "/departments",
    });
  };

  static getDepartmentById = (id: number) => {
    return axios({
      method: "GET",
      url: `/departments/${id}?_embed=users`,
    });
  };
}

export default DepartmentsApi;
