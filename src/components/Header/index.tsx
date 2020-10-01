import CartButton from 'components/Cart/Button';
import React from 'react';
import useStyles from './styles';

const logo = require('assets/logo.png')
const icon = require('assets/cartEmpty.png');
const iconHover = require('assets/cartEmptyHover.png');

interface HeaderProps {
  onCartPress?: () => void;
}

const Header = ({ onCartPress }: HeaderProps) => {
  const classes = useStyles();
  return (
    <header className={classes.container}>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.text}>
        <p className={classes.title}>POKER BEER</p>
        <p className={classes.subtitle}>Una cerveza que te va cambiar la birra.</p>
      </div>
      <CartButton onClick={onCartPress} iconHover={iconHover} icon={icon} />
    </header>
  );
}

export default Header;