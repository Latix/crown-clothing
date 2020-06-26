import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/hats' component={ShopPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
