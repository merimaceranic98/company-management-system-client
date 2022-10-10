import { TEAM_ACTIONS } from "../constants/team-constants";

const teamsInitialState = {
  teams: [],
  team: {},
};

export const teams = (state = teamsInitialState, payload: any) => {
  switch (payload.type) {
    case TEAM_ACTIONS.HANDLE_GET_ALL_TEAMS:
      return {
        ...state,
        teams: payload.data,
      };
    case TEAM_ACTIONS.HANDLE_GET_TEAM_BY_ID:
      return {
        ...state,
        team: payload.data,
      };
    default:
      return state;
  }
};
