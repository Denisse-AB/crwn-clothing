import { createSelector } from 'reselect';

// root reducer obj
const selectShop = state => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  // collections, initial state reducer
  shop => shop.collections
);
