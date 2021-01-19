import React from "react";

import useStyles from "./styles";
import CartButton from "layouts/Cart/Button";

interface HeaderProps {
  logo: string;
  title: string;
  subtitle: string;
}

const Header = ({ logo, title, subtitle }: HeaderProps) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img src={logo} alt="logo" className={classes.logo} />
        <div className={classes.text}>
          <p className={classes.title}>{title}</p>
          <p className={classes.subtitle}>{subtitle}</p>
        </div>
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
