import React from "react";
// import React, { useState } from "react";
// import { useSelector } from 'react-redux';

import "./App.css";
import Header from "components/Header";
// import { getSelectedOrder } from "slices/Orders";
import Home from "components/Home";


function App() {
  // const selectedOrder = useSelector(getSelectedOrder);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header />
      <Home />
    </div>
  );
}

export default App;