import AuthApi from "../../../api/auth/auth";
import { updateCurrentUser } from "../../current-user/current-user-action";
import { handleShowErrorMessage } from "../../error/action/error-action";
import { AUTH_ACTIONS } from "../constants/auth-constants";

export const registerNewUser = (data: any) => {
  return async (dispatch: any, getState: any) => {
    try {
      dispatch(updateRegistrationData(data));
      const state = getState();
      const response = await AuthApi.register(state.auth);
      window.localStorage.setItem("token", response.data.accessToken);
      window.localStorage.setItem("userId", response.data.user.id);
      dispatch(updateCurrentUser(response));
    } catch (error) {
      dispatch(handleShowErrorMessage(true));
    }
  };
};

export const login = (data: any) => {
  return async (dispatch: any) => {
    try {
      const response = await AuthApi.login(data);
      window.localStorage.setItem("token", response.data.accessToken);
      window.localStorage.setItem("userId", response.data.user.id);
      dispatch(updateCurrentUser(response));
    } catch (error) {
      dispatch(handleShowErrorMessage(true));
    }
  };
};

export const logout = () => {
  return async (dispatch: any) => {
    try {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userId");
      dispatch(updateCurrentUser({ info: null, isLoggedIn: false }));
    } catch (error) {
      dispatch(handleShowErrorMessage(true));
    }
  };
};

export const updateRegistrationData = (data: any) => ({
  type: AUTH_ACTIONS.HANDLE_REGISTER_NEW_USER,
  data,
});
