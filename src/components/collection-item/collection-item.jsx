import React from "react";

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';

import CustomButton from "../custom-button/custom-button";

import '../collection-item/collection-item.scss';

// use the return statement when dealing with multiple objects.
const CollectionItem = ({ item, addItem}) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => addItem(item)}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

// Map to redux props
const mapDispatchProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchProps)(CollectionItem);
