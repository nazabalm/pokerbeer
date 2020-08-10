import React, { useState } from 'react';
import Product from 'components/Product';
import { Button, NumberButton } from 'components/common';
import useStyles from './styles';

interface ItemProps {
  product: ProductType;
  addItem: (item: Pick<ItemType, "product" | "quantity">) => void;
}

const Item = ({ product, addItem }: ItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const classes = useStyles();
  return <div className={classes.container}>
    <Product product={product} />
    <NumberButton initialValue={quantity} onChangeValue={setQuantity} />
    <Button text={"Agregar al carrito"} onClick={() => addItem({ product, quantity })} />
  </div>
}

export default Item;