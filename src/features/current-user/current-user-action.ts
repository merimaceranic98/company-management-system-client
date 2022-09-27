import { CURRENT_USER_ACTIONS } from "./current-user-constants";

export const updateCurrentUser = (data: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(handleUpdateCurrentUserInfo(data.data));
    } catch (error) {
      //TO DO: Error handling will be implemented in future
      console.log("Error is, ", error);
    }
  };
};

export const handleUpdateCurrentUserInfo = (data: any) => ({
  type: CURRENT_USER_ACTIONS.HANDLE_UPDATE_CURRENT_USER_INFO,
  data,
});
