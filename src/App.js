import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomePage} from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
