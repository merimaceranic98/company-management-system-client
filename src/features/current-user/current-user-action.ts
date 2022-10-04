import UsersApi from "../../api/user/user";
import { CURRENT_USER_ACTIONS } from "./current-user-constants";

export const updateCurrentUser = (data: any) => {
  return (dispatch: any) => {
    dispatch(handleUpdateCurrentUserInfo(data.data));
  };
};

export const getCurrentLoggedInUser = (userId: number) => {
  return async (dispatch: any) => {
    try {
      const response = await UsersApi.getUserById(userId);
      dispatch(handleGetCurrentUserInfo(response.data));
    } catch (error) {}
  };
};

export const handleUpdateCurrentUserInfo = (data: any) => ({
  type: CURRENT_USER_ACTIONS.HANDLE_UPDATE_CURRENT_USER_INFO,
  data,
});

export const handleGetCurrentUserInfo = (data: any) => ({
  type: CURRENT_USER_ACTIONS.HANDLE_GET_CURRENT_USER_INFO,
  data,
});
