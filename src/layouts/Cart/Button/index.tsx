import { useDispatch } from "react-redux";
import React, { FunctionComponent } from "react";

import ButtonComponent from "components/Cart/Button";
import { setCartStatus } from "slices/Orders";

const icon = require("assets/cartEmpty.png");
const iconHover = require("assets/cartEmptyHover.png");

const Button: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  return (
    <ButtonComponent
      icon={icon}
      iconHover={iconHover}
      onClick={() => {
        dispatch(setCartStatus());
      }}
    />
  );
};

export default Button;
