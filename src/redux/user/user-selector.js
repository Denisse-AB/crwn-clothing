// npm add reselect, memoized selectors
// This will stop re rendering when other
// components render or the state change.

import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

