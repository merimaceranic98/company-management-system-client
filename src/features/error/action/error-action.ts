import { ERROR_ACTIONS } from "../constants/error-constants";

export const showErrorMessage = (isError: boolean) => {
  return (dispatch: any) => {
    dispatch(handleShowErrorMessage(isError));
  };
};

export const handleShowErrorMessage = (data: boolean) => ({
  type: ERROR_ACTIONS.HANDLE_SHOW_ERROR_MESSAGE,
  data,
});
