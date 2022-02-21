import React from 'react';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';

import { createStructuredSelector } from "reselect";

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header';
// import Checkout from './components/checkout/checkout';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() =>
            // Stop users to go to signin page via url
            // when log in already
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndUp />
              )
            }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// initial state
const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// action
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// the connect function is this specific order!!
export default connect(mapStateProps, mapDispatchProps)(App);
