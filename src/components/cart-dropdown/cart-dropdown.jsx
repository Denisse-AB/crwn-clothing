import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart-selector';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import { createStructuredSelector } from "reselect";

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {
      cartItems.length ?
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      :
      <span className='empty-message'>Your cart is empty</span>
    }
    </div>
    <CustomButton onClick={() =>{
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }}>
      Go to Checkout
    </CustomButton>
  </div>
)

const mapStateProps = createStructuredSelector({
  cartItems: selectCartItems
});

// mapDispatchProps is outputed directly into the component.
// do not pass it to connect func.
export default withRouter(connect(mapStateProps)(CartDropdown));
