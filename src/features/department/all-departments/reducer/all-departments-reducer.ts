import { ALL_DEPARTMENTS_ACTION } from "../constants/all-departments-constants";

const allDepartmentsInitialState = {
  departments: [
    {
      id: null,
      name: null,
    },
  ],
  department: {
    users: [],
  },
};

export const departments = (
  state = allDepartmentsInitialState,
  payload: any
) => {
  switch (payload.type) {
    case ALL_DEPARTMENTS_ACTION.HANDLE_GET_ALL_DEPARTMENTS:
      return {
        ...state,
        departments: payload.data,
      };
    case ALL_DEPARTMENTS_ACTION.HANDLE_GET_DEPARTMENT_BY_ID:
      return {
        ...state,
        department: payload.data,
      };
    default:
      return state;
  }
};
