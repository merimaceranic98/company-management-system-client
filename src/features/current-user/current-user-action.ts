import { CURRENT_USER_ACTIONS } from "./current-user-constants";

export const updateCurrentUser = (data: any) => {
  return (dispatch: any) => {
    dispatch(handleUpdateCurrentUserInfo(data.data));
  };
};

export const handleUpdateCurrentUserInfo = (data: any) => ({
  type: CURRENT_USER_ACTIONS.HANDLE_UPDATE_CURRENT_USER_INFO,
  data,
});
