import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop-selector';
// Spinner is a Higher order Component HOC,
//will run until objects are retrieve from firebase
import WithSpinner from '../with-spinner/with-spinner';
import collectionOverview from './collection-overview';

const mapStateProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// compose is a wrapper that organize other wrrappers
const collectionOverviewContainer = compose(
  connect(mapStateProps),
  WithSpinner
)(collectionOverview)

export default collectionOverviewContainer;
