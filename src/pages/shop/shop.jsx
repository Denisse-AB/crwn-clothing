import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector';

import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview';


const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
}

const mapStateProps = createStructuredSelector({
  collections: selectCollection
});

export default connect(mapStateProps)(ShopPage);
