import React from "react";
import useStyles from "./styles";

interface ItemsProps {
  items: ItemType[];
  onEditItem: (oldItem: ItemType, newItem: ItemType) => void;
}

interface ItemProps {
  item: ItemType;
  onEdit: (oldItem: ItemType, newItem: ItemType) => void;
}

const Item = ({ item, onEdit }: ItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src={item.product.image}
        alt={item.product.name}
      />
      <div className={classes.center}>
        <p className={classes.name}>{item.product.name}</p>
        <div className={classes.quantityContainer}>
          <button
            className={`${classes.quantity} ${classes.left}`}
            onClick={() =>
              onEdit(item, {
                ...item,
                quantity: item.quantity > 0 ? item.quantity - 1 : 0,
              })
            }
          >
            -
          </button>
          <p className={classes.quantityText}>{item.quantity}</p>
          <button
            className={`${classes.quantity} ${classes.right}`}
            onClick={() =>
              onEdit(item, { ...item, quantity: item.quantity + 1 })
            }
          >
            +
          </button>
        </div>
      </div>
      <p className={classes.price}>${item.product.price * item.quantity}</p>
    </div>
  );
};

const Items = ({ items, onEditItem }: ItemsProps) => {
  return (
    <>
      {items.map((item) => (
        <Item
          key={`${item.id}${item.quantity}`}
          item={item}
          onEdit={onEditItem}
        />
      ))}
    </>
  );
};

export default Items;
