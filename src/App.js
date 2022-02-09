import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomePage} from './pages/homepage/homepage';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import {auth} from './firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
