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
