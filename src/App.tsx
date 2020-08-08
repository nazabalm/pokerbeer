import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  console.log("isCartOpen", isCartOpen);
  return (
    <div>
      <Header onCartPress={() => setIsCartOpen((prevState) => !prevState)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;
