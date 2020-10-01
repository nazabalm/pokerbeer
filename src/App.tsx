import React from "react";
import { useDispatch } from 'react-redux';

import "./App.css";
import Cart from "layouts/Cart";
import Home from "components/Home";
import Header from "components/Header";
import { setCartStatus } from "slices/Orders";


function App() {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header onCartPress={() => dispatch(setCartStatus())} />
      <Home />
      <Cart />
    </div>
  );
}

export default App;