import { TEAM_ACTIONS } from "../constants/team-constants";

const teamsInitialState = {
  teams: [],
};

export const teams = (state = teamsInitialState, payload: any) => {
  switch (payload.type) {
    case TEAM_ACTIONS.HANDLE_GET_ALL_TEAMS:
      return {
        ...state,
        teams: payload.data,
      };
    default:
      return state;
  }
};
