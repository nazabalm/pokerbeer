import React, { useState } from "react";
import { useSelector } from 'react-redux';

import "./App.css";
import Header from "components/Header";
import Cart from "components/Cart";
import { getSelectedOrder } from "slices/Orders";


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const selectedOrder = useSelector(getSelectedOrder)
  return (
    <>
      <Header onCartPress={() => setIsCartOpen(prevState => !prevState)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={selectedOrder?.items || []} />
    </>
  );
}

export default App;
