import TeamsApi from "../../../api/teams/teams";
import { TEAM_ACTIONS } from "../constants/team-constants";

export const getAllTeams = () => {
  return async (dispatch: any) => {
    try {
      const response = await TeamsApi.getAllTemas();
      dispatch(handleGetAllTeams(response.data));
    } catch (error) {
      // TO DO: Error handling will be implemented
      console.log("Error is, ", error);
    }
  };
};

export const handleGetAllTeams = (data: any) => ({
  type: TEAM_ACTIONS.HANDLE_GET_ALL_TEAMS,
  data,
});
