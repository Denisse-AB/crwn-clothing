import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop-selector';

import CollectionPreview from '../../components/collection-preview/collection-preview';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => (
  <div className='collection-overview'>
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
);

const mapStateProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateProps)(CollectionOverview);
