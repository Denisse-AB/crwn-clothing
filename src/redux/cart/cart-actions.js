// Import this into your component so it can emit actions

import CartActionTypes from './cart-types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});