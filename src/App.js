import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomePage} from './pages/homepage/homepage';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
