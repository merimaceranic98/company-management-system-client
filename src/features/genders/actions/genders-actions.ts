import GendersApi from "../../../api/genders/genders";
import { GENDER_ACTIONS } from "../constants/genders-constants";

export const getNumberPerDifferentGender = () => {
  return async (dispatch: any) => {
    try {
      const response = await GendersApi.getGenders();
      dispatch(handleGetNumberPerDifferentGender(response.data));
    } catch (error) {
      //TO DO: Error handling will be implemented
      console.log(error);
    }
  };
};

export const handleGetNumberPerDifferentGender = (data: any) => ({
  type: GENDER_ACTIONS.HANDLE_GET_GENDERS,
  data,
});
