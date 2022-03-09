import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';

// Spinner is a Higher order Component HOC,
//will run until objects are retrieve from firebase
import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapShot = null;

  // get products from firebase
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  };

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    );
  };
};

const mapDispatchProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchProps)(ShopPage);

/*
Original functional component before extracting from firebase
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

befor withSpinnercomponent
<Route exact path={`${match.path}`} component={CollectionOverview} />
<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
*/