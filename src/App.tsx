import React, { useState } from "react";
import { useSelector } from 'react-redux';

import "./App.css";
import Header from "components/Header";
import Cart from "components/Cart";
import { getSelectedOrder } from "slices/Orders";
import Products from "layouts/Products";


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const selectedOrder = useSelector(getSelectedOrder)
  return (
    <>
      <Header onCartPress={() => setIsCartOpen(prevState => !prevState)} />
      <Products />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} order={selectedOrder} />
    </>
  );
}

export default App;
