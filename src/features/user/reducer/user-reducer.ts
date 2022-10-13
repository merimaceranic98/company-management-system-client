import { USER_ACTIONS } from "../constants/constants";

const userInitialState = {
  user: null,
  usersWithoutTeam: [],
};

export const users = (state = userInitialState, payload: any) => {
  switch (payload.type) {
    case USER_ACTIONS.HANDLE_GET_USET_BY_ID:
      return {
        ...state,
        user: payload.data,
      };
    case USER_ACTIONS.HANDLE_GET_USERS_WITHOUT_TEAM:
      return {
        ...state,
        usersWithoutTeam: payload.data,
      };
    default:
      return state;
  }
};
