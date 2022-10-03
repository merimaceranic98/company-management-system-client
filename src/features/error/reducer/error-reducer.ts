import { ERROR_ACTIONS } from "../constants/error-constants";

const errorInitialState = {
  error: false,
};

export const errors = (state = errorInitialState, payload: any) => {
  switch (payload.type) {
    case ERROR_ACTIONS.HANDLE_SHOW_ERROR_MESSAGE:
      return {
        ...state,
        error: payload.data,
      };
    default:
      return state;
  }
};
