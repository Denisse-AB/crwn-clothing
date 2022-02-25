import { createSelector } from 'reselect';

// root reducer obj
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  // directory, initial state reducer
  directory => directory.sections
);
