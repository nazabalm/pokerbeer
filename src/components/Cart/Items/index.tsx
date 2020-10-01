import React from 'react';
import useStyles from './styles';


interface ItemsProps {
  items: ItemType[];
  onEditItem: (item: ItemType) => void;
}

interface ItemProps {
  item: ItemType;
  onEdit: (item: ItemType) => void;
}

const Item = ({ item, onEdit }: ItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.image} src={item.product.image} alt={item.product.name} />
      <p className={classes.name}>{item.product.name}</p>
      <div className={classes.quantityContainer}>
        <button className={`${classes.quantity} ${classes.left}`} onClick={() => onEdit({ ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 })}>-</button>
        <p className={classes.quantityText}>{item.quantity}</p>
        <button className={`${classes.quantity} ${classes.right}`} onClick={() => onEdit({ ...item, quantity: item.quantity + 1 })}>+</button>
      </div>
      <p className={classes.price}>${item.product.price}</p>
    </div>
  )
}

const Items = ({ items, onEditItem }: ItemsProps) => {
  return (
    <>
      {items.map(item => <Item key={`${item.id}${item.quantity}`} item={item} onEdit={onEditItem} />)}
    </>
  )
}

export default Items;