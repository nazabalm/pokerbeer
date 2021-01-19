import React from "react";

import "./App.css";
import Cart from "layouts/Cart";
import AppContainer from "components/AppContainer";
import Header from "layouts/Header";
import Content from "layouts/Content";

function App() {
  return (
    <AppContainer>
      <Header />
      <Content />
      <Cart />
    </AppContainer>
  );
}

export default App;
