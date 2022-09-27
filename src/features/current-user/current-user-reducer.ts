import { CURRENT_USER_ACTIONS } from "./current-user-constants";

const currentUserInitialState = {
  isLoggedIn: window.localStorage.getItem("token")?.toString() ? true : false,
  info: {
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
    id: null,
  },
};

export const currentUser = (state = currentUserInitialState, payload: any) => {
  switch (payload.type) {
    case CURRENT_USER_ACTIONS.HANDLE_UPDATE_CURRENT_USER_INFO:
      return {
        ...state,
        info: payload.data?.user,
        isLoggedIn: payload.data?.accessToken ? true : false,
      };
    default:
      return state;
  }
};