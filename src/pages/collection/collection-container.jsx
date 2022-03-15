import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/shop/shop-selector';
// Spinner is a Higher order Component HOC,
//will run until objects are retrieve from firebase
import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionPage from '../collection/collection';


const mapStateProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

// compose is a wrapper that organize other wrrappers
const collectionPageContainer = compose(
  connect(mapStateProps),
  WithSpinner
)(CollectionPage)

export default collectionPageContainer;
