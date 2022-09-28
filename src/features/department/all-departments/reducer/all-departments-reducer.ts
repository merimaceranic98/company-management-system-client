import { ALL_DEPARTMENTS_ACTION } from "../constants/all-departments-constants";

const allDepartmentsInitialState = {
  departments: [
    {
      id: null,
      name: null,
    },
  ],
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
    default:
      return state;
  }
};
