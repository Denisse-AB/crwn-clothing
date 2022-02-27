import React from 'react';

import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollectionitem } from '../../redux/shop/shop-selector';

import './collection.scss';

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  return (
  <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {
        items.map(item => <CollectionItem key={item.id} item={item} />)
      }
    </div>
  </div>
)};

const mapStateProps = (state, ownProps) => ({
  collections: selectCollectionitem(
    ownProps.match.params.collectionId
  )(state)
})

export default connect(mapStateProps)(CollectionPage);
