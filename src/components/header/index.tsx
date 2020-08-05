import React from 'react';
import useStyles from './styles';
import CartButton from 'components/cart/button';

const logo = require('assets/logo.png')
const cartEmpty = require('assets/cartEmpty.png')
const cartEmptyHover = require('assets/cartEmptyHover.png')

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.container}>
      <img src={logo} alt="logo" className={classes.logo} />
      <CartButton icon={cartEmpty} iconHover={cartEmptyHover} />
    </header>
  );
}

export default Header;