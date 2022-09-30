import DepartmentsApi from "../../../../api/departments/departments";
import { ALL_DEPARTMENTS_ACTION } from "../constants/all-departments-constants";

export const getAllDepartments = () => {
  return async (dispatch: any) => {
    try {
      const response = await DepartmentsApi.getAllDepartments();
      dispatch(getDepartments(response.data));
    } catch (error) {
      //TO DO: Error handling will be implemented in future
      console.log("Error is, ", error);
    }
  };
};

export const getDepartmentById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await DepartmentsApi.getDepartmentById(id);
      dispatch(departmentById(response.data));
    } catch (error) {
      //TO DO: Error handling will be implemented in future
      console.log("Error is, ", error);
    }
  };
};

export const getDepartments = (data: any) => ({
  type: ALL_DEPARTMENTS_ACTION.HANDLE_GET_ALL_DEPARTMENTS,
  data,
});

export const departmentById = (data: any) => ({
  type: ALL_DEPARTMENTS_ACTION.HANDLE_GET_DEPARTMENT_BY_ID,
  data,
});
