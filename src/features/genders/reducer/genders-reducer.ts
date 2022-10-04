import { GENDER_ACTIONS } from "../constants/genders-constants";

const gendersInitialStateInitialState = {
  genders: [
    {
      id: 0,
      numberOfMale: 0,
      numberOfFemale: 0,
    },
  ],
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
