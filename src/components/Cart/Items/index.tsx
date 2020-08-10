import React from 'react';
import useStyles from './styles';


interface ItemsProps {
  items: ItemType[];
}

interface ItemProps {
  item: ItemType;
}

const Item = ({ item }: ItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.image} src={item.product.image} alt={item.product.name} />
      <p className={classes.name}>{item.product.name}</p>
      <p className={classes.price}>{item.quantity}x ${item.product.price}</p>
    </div>
  )
}

const Items = ({ items }: ItemsProps) => {
  return (
    <>
      {items.map(item => <Item key={`${item.id}${item.quantity}`} item={item} />)}
    </>
  )
}

export default Items;