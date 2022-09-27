import { AUTH_ACTIONS } from "../constants/auth-constants";

const authInitialState = {
  email: null,
  image: null,
  role: null,
  department: null,
  previousExperience: [],
  gender: null,
  isAdmin: false,
  yearsOfEmployement: 0,
  firstName: null,
  lastName: null,
  password: null,
};

export const auth = (state = authInitialState, payload: any) => {
  switch (payload.type) {
    case AUTH_ACTIONS.HANDLE_REGISTER_NEW_USER:
      return {
        ...state,
        email: payload.data?.email,
        firstName: payload.data?.firstName,
        lastName: payload.data?.lastName,
        password: payload.data?.password,
      };
    default:
      return state;
  }
};
