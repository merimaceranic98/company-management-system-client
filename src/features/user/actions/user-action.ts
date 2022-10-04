import { FieldValues } from "react-hook-form";
import GendersApi from "../../../api/genders/genders";
import UsersApi from "../../../api/user/user";
import { handleShowErrorMessage } from "../../error/action/error-action";
import { USER_ACTIONS } from "../constants/constants";

export const getUserById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await UsersApi.getUserById(id);
      dispatch(handleGetUserById(response.data));
    } catch (error) {
      dispatch(handleShowErrorMessage(true));
    }
  };
};

export const updateUserById = (
  userId: number,
  userData: FieldValues,
  genders: any
) => {
  return async (dispatch: any) => {
    try {
      await UsersApi.updateUserById(userId, userData);
      const updateGenderData = {
        numberOfMale:
          userData.gender === "Male"
            ? genders[0].numberOfMale + 1
            : genders[0].numberOfMale,
        numberOfFemale:
          userData.gender === "Female"
            ? genders[0].numberOfFemale + 1
            : genders[0].numberOfFemale,
      };
      await GendersApi.updateGenders(updateGenderData);
    } catch (error) {
      dispatch(handleShowErrorMessage(true));
    }
  };
};

export const handleGetUserById = (data: any) => ({
  type: USER_ACTIONS.HANDLE_GET_USET_BY_ID,
  data,
});

export const handleUpdateUserById = (data: any) => ({
  type: USER_ACTIONS.HANDLE_UPDATE_USET_BY_ID,
  data,
});
