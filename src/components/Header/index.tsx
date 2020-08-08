import React from 'react';
import useStyles from './styles';
import CartButton from 'components/Cart/Button';

const logo = require('assets/logo.png')
const cartEmpty = require('assets/cartEmpty.png')
const cartEmptyHover = require('assets/cartEmptyHover.png')

interface HeaderProps {
  onCartPress: () => void;
}

const Header = ({ onCartPress }: HeaderProps) => {
  const classes = useStyles();
  return (
    <header className={classes.container}>
      <img src={logo} alt="logo" className={classes.logo} />
      <CartButton icon={cartEmpty} iconHover={cartEmptyHover} onClick={onCartPress} />
    </header>
  );
}

export default Header;