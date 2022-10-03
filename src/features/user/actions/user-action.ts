import UsersApi from "../../../api/user/user";
import { USER_ACTIONS } from "../constants/constants";

export const getUserById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await UsersApi.getUserById(id);
      dispatch(handleGetUserById(response.data));
    } catch (error) {
      //TO DO: Error handling will be implemented in future
      console.log("Error is, ", error);
    }
  };
};

export const handleGetUserById = (data: any) => ({
  type: USER_ACTIONS.HANDLE_GET_USET_BY_ID,
  data,
});
