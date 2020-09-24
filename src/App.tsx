import React, { useState } from "react";
import { useSelector } from 'react-redux';

import "./App.css";
import Header from "components/Header";
import Cart from "components/Cart";
import { getSelectedOrder } from "slices/Orders";
import Home from "components/Home";


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const selectedOrder = useSelector(getSelectedOrder)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header onCartPress={() => setIsCartOpen(prevState => !prevState)} />
      <Home />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} order={selectedOrder} />
    </div>
  );
}

export default App;
