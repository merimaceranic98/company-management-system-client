import AuthApi from "../../../api/auth/auth";
import { updateCurrentUser } from "../../current-user/current-user-action";

export const registerNewUser = (data: any) => {
  return async (dispatch: any) => {
    try {
      const response = await AuthApi.register(data);
      window.localStorage.setItem("token", response.data.accessToken);
      dispatch(updateCurrentUser(response));
    } catch (error) {
      //TO DO: Error handling will be implemented in future
      console.log("Error is, ", error);
    }
  };
};

export const login = (data: any) => {
  return async (dispatch: any) => {
    try {
      const response = await AuthApi.login(data);
      window.localStorage.setItem("token", response.data.accessToken);
      dispatch(updateCurrentUser(response));
    } catch (error) {
      //TO DO: Error handling will be implemented in future
      console.log("Error is, ", error);
    }
  };
};

export const logout = () => {
  return async (dispatch: any) => {
    try {
      window.localStorage.removeItem("token");
      dispatch(updateCurrentUser({ info: null, isLoggedIn: false }));
    } catch (error) {
      //TO DO: Error handling will be implemented in future
      console.log("Error is, ", error);
    }
  };
};
