import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CartComponent from "components/Cart";
import { getCartStatus, getSelectedOrder, setCartStatus, editItem } from "slices/Orders";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartStatus = useSelector(getCartStatus);
  const selectedOrder = useSelector(getSelectedOrder);
  return (
    <CartComponent
      isOpen={cartStatus === 'open'}
      onClose={() => dispatch(setCartStatus())}
      order={selectedOrder}
      onEditItem={(oldItem, newItem) => {
        dispatch(editItem({ oldItem, newItem }))
      }}
      onBuy={() => {
        dispatch(setCartStatus())
        history.push(`/order/${selectedOrder?.id}`)
      }}
    />
  );
};

export default Cart;
