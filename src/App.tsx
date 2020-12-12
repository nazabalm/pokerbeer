import React from "react";
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import "./App.css";
// import firebase from './firebase';
import Cart from "layouts/Cart";
import Home from "components/Home";
import Header from "components/Header";
import { setCartStatus } from "slices/Orders";
import Order from "layouts/Order";


function App() {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <Header onCartPress={() => dispatch(setCartStatus())} />
      <div style={{ alignSelf: 'stretch', display: 'flex', justifyContent: 'center' }}>
        <Switch>
          <Route path="/order/:orderId">
            <Order />
          </Route>
          <Route path="/order">
            <div>
              <p>Orders</p>
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Cart />
    </div>
  );
}

export default App;