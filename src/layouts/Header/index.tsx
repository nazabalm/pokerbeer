import React, { FunctionComponent } from "react";

import HeaderComponent from "components/Header";

const logo = require("assets/logo.png");

const Header: FunctionComponent<{}> = () => {
  return (
    <HeaderComponent
      logo={logo}
      title="POKER BEER"
      subtitle="Una cerveza que te va cambiar la birra."
    />
  );
};

export default Header;
