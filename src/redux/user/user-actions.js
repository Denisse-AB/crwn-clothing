import { UserActionTypes } from "./user-types";

// Export this to the app component so it can dispatch actions
// and access the state
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
