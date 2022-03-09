// lodash memoization for url params, if collectionUrlParams recieves the
// same params dont't rerun the const function.
// import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

// root reducer obj
const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  // collections, initial state reducer
  (shop) => shop.collections
);

// converts array of products (data.js) into and object for shop page
export const selectCollectionForPreview = createSelector(
  [selectCollection],
  // collections => Object.keys(collections).map(key => collections[key])
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// filter collection by category, ex. hats, jackets
// export const selectCollectionitem = memoize((collectionUrlParams) =>
//   createSelector(
//     [selectCollection],
//     // for large stores find() becomes unproductive, it will slow
//     // down your app
//     collections => collections[collectionUrlParams]
//     )
//   );

export const selectCollectionitem = (collectionUrlParams) =>
  createSelector([selectCollection], (collections) =>
    collections ? collections[collectionUrlParams] : null
  );