import { USER_ACTIONS } from "../constants/constants";

const userInitialState = {
  users: {},
};

export const users = (state = userInitialState, payload: any) => {
  switch (payload.type) {
    case USER_ACTIONS.HANDLE_GET_USET_BY_ID:
      return {
        ...state,
        users: payload.data,
      };
    default:
      return state;
  }
};
