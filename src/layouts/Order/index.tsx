import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getOrder, editItem } from 'slices/Orders';
import OrderContainer from 'components/Order/Container';
import OrderData from 'components/OrderData';
import theme from 'theme';
import useStyles from './styles';
import { Button } from 'components/common';

interface ItemProps {
  item: ItemType;
  onEdit: (oldItem: ItemType, newItem: ItemType) => void;
}

const Item = ({ item, onEdit }: ItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.image} src={item.product.image} alt={item.product.name} />
      <div className={classes.center}>
        <p className={classes.name}>{item.product.name}</p>
        <div className={classes.quantityContainer}>
          <button className={`${classes.quantity} ${classes.left}`} onClick={() => onEdit(item, { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 })}>-</button>
          <p className={classes.quantityText}>{item.quantity}</p>
          <button className={`${classes.quantity} ${classes.right}`} onClick={() => onEdit(item, { ...item, quantity: item.quantity + 1 })}>+</button>
        </div>
      </div>
      <p className={classes.price}>${item.product.price * item.quantity}</p>
    </div>
  )
}



const Order = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { orderId } = useParams<{ orderId: string }>();
  const order = useSelector((state: RootState) => getOrder(orderId, state));

  return <OrderContainer>
    <div style={{ margin: 30, display: 'flex', flexDirection: 'column', flex: 1 }}>
      <p style={{
        fontSize: 26,
        margin: 15,
        color: theme.palette.primary,
      }}>Datos del pedido</p>
      {
        order?.items.map(item => <Item item={item} onEdit={(oldItem, newItem) => {
          dispatch(editItem({ oldItem, newItem }))
        }} />)
      }
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', margin: 0 }}>
        <Button onClick={() => { history.push('/') }} text="Seguir comprando" style={{ width: 200, alignSelf: 'flex-end', marginRight: 0 }} />
      </div>
    </div>
    <OrderData />
  </OrderContainer>
}

export default Order;