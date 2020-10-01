import React, { useState } from "react";
import { useSelector } from 'react-redux';

import "./App.css";
import Header from "components/Header";
import { getSelectedOrder } from "slices/Orders";
import Home from "components/Home";
import Cart from "components/Cart";


function App() {
  const selectedOrder = useSelector(getSelectedOrder);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header onCartPress={() => { setIsCartOpen(true) }} />
      <Home />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} order={selectedOrder} />
    </div>
  );
}

export default App;