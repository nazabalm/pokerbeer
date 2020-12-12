import React from 'react';

import useStyles from './styles';
import Items from './Items';
import { Button } from 'components/common';

const closeIcon = require("assets/closeIcon.png")

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  order?: OrderType;
  onEditItem: (oldItem: ItemType, newItem: ItemType) => void;
  onBuy: () => void;
}

const Cart = ({ isOpen, onClose, order, onEditItem, onBuy }: CartProps) => {
  const classes = useStyles();

  return <div className={`${classes.container} ${isOpen && classes.open}`}>
    <div className={`${classes.outer}`} onClick={onClose} />
    <div className={`${classes.cart} ${!isOpen && classes.closeTransition}`}>
      {isOpen && <>
        <button onClick={onClose} className={classes.closeButton}><img src={closeIcon} alt="close icon" className={classes.closeIcon} /></button>
        {order && <div className={classes.cartContent}>
          <div>
            <Items items={order.items} onEditItem={onEditItem} />
            <p className={classes.total}>${order.total}</p>
          </div>
          <div className={classes.cartFooter}>
            <Button text="Comprar" onClick={onBuy} />
          </div>
        </div>}
      </>
      }
    </div>
  </div>
}

export default Cart;