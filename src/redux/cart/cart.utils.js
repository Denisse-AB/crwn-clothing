// Check if item exists in object, if exists increase qty and
// append new object, react doesn't accept push, only map or concat
// so it can re render components.

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem =>
    cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      // if
      cartItem.id === cartItemToAdd.id
      // return this object plus 1
      ? { ...cartItem, quantity: cartItem.quantity + 1}
      // else
      : cartItem
    )
  }
  // initial quantity
  return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};