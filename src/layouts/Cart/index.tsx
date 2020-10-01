import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "components/Cart";
import { getCartStatus, getSelectedOrder, setCartStatus, editItem } from "slices/Orders";

const Order = () => {
  const dispatch = useDispatch();
  const cartStatus = useSelector(getCartStatus);
  const selectedOrder = useSelector(getSelectedOrder);
  return (
    <Cart isOpen={cartStatus === 'open'} onClose={() => dispatch(setCartStatus())} order={selectedOrder} onEditItem={(item) => {
      dispatch(editItem(item))
    }} />
  );
};

export default Order;
