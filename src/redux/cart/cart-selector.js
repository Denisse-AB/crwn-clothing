// npm add reselect
// This will stop cart items count and dropdown to re render
// when other components render or the state change.

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity, 0)
);