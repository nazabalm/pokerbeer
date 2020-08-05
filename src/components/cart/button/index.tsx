import React from 'react';
import useStyles from './styles';

interface CartButtonProps {
  icon?: string;
  iconHover?: string;
  onClick?: () => void;
}

const CartButton = ({ icon, iconHover, onClick }: CartButtonProps) => {
  const classes = useStyles();
  return <button className={classes.button}>
    <img src={icon} alt="cart" className={classes.icon} />
    <img src={iconHover} alt="cart" className={classes.iconHover} />
  </button>

}

export default CartButton;