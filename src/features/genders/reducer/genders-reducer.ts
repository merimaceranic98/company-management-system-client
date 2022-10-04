import { GENDER_ACTIONS } from "../constants/genders-constants";

const gendersInitialStateInitialState = {
  genders: [],
};

export const genders = (
  state = gendersInitialStateInitialState,
  payload: any
) => {
  switch (payload.type) {
    case GENDER_ACTIONS.HANDLE_GET_GENDERS:
      return {
        ...state,
        genders: payload.data,
      };
    default:
      return state;
  }
};
