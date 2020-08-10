import React from 'react';

import useStyles from './styles';
import Items from './Items';
import { Button } from 'components/common';

const closeIcon = require("assets/closeIcon.png")

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: ItemType[];
}

const Cart = ({ isOpen, onClose, items }: CartProps) => {
  const classes = useStyles();

  // TODO: Add items to reducer and use selector to get them

  return <div className={`${classes.container} ${isOpen && classes.open}`}>
    <div className={`${classes.outer}`} onClick={onClose}>
    </div>
    <div className={`${classes.cart} ${!isOpen && classes.closeTransition}`}>
      {isOpen && <>
        <button onClick={onClose} className={classes.closeButton}><img src={closeIcon} alt="close icon" className={classes.closeIcon} /></button>
        <div className={classes.cartContent}>
          <div>
            <Items items={items} />
            <p className={classes.total}>$900</p>
          </div>
          <div className={classes.cartFooter}>
            <Button text="Comprar" onClick={() => { }} />
          </div>
        </div>
      </>
      }
    </div>
  </div>
}

export default Cart;