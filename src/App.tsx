import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import "./App.css";
import Home from "components/Home";
import Cart from "components/Cart";
import Header from "components/Header";
import { getCartStatus, getSelectedOrder, setCartStatus } from "slices/Orders";


function App() {
  const dispatch = useDispatch();
  const cartStatus = useSelector(getCartStatus);
  const selectedOrder = useSelector(getSelectedOrder);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header onCartPress={() => dispatch(setCartStatus(cartStatus === 'open' ? 'closed' : 'open'))} />
      <Home />
      <Cart isOpen={cartStatus === 'open'} onClose={() => dispatch(setCartStatus('closed'))} order={selectedOrder} />
    </div>
  );
}

export default App;