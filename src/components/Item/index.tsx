import React from 'react';

import useStyles from './styles';
import Product from 'components/Product';
import { Button } from 'components/common';

interface ItemProps {
  product: ProductType;
  addItem: (item: Pick<ItemType, "product" | "quantity">) => void;
}

const Item = ({ product, addItem }: ItemProps) => {
  const classes = useStyles();
  return <div className={classes.container}>
    <button className={classes.info}>i</button>
    <Product product={product} />
    <div className={classes.footer}>
      <Button text={"Agregar al carrito"} onClick={() => { addItem({ product, quantity: 1 }) }} />
    </div>
  </div>
}

export default Item;