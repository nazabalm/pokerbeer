import React from "react";

import ContentComponent from "components/Content";
import { Route, Switch } from "react-router-dom";
import Order from "layouts/Order";
import Orders from "layouts/Orders";
import Home from "components/Home";

const Content = () => {
  return (
    <ContentComponent>
      <Switch>
        <Route path="/order/:orderId">
          <Order />
        </Route>
        <Route path="/order">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ContentComponent>
  );
};

export default Content;
