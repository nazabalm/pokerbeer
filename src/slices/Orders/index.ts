import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const beer = require('assets/beer.jpg');

interface OrdersState {
  orders: OrderType[];
  selectedOrder?: OrderType;
}

const orders = [{
  id: '1',
  address: 'Porongos 2979',
  items: [{
    id: '1',
    product: {
      id: '1',
      name: 'Poker Beer IPA',
      price: 150,
      image: beer,
      description: 'Una cerveza que te va cambiar la birra.',
    },
    quantity: 3,
  }],
  total: 450,
}];

export const initialState: OrdersState = {
  orders,
  selectedOrder: orders[0]
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getOrders: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload
    },
    selectOrder: (state, action: PayloadAction<string>) => {
      state.selectedOrder = state.orders.find(order => order.id === action.payload)
    },
    createOrder: (state, action: PayloadAction<string | undefined>) => {
      const newOrder: OrderType = {
        id: v4(),
        address: action.payload || '',
        items: [] as ItemType[],
        total: 0,
      }
      state.selectedOrder = newOrder;
      state.orders.push(state.selectedOrder);
    },
    addItem: (state, action: PayloadAction<Pick<ItemType, "product" | "quantity">>) => {
      const newItem = { ...action.payload, id: v4() };
      const subtotal = newItem.product.price * newItem.quantity;
      if (state.selectedOrder) {
        state.selectedOrder.items.push(newItem);
        state.selectedOrder.total += subtotal;
      }
      else {
        state.selectedOrder = {
          id: v4(),
          address: '',
          items: [newItem],
          total: subtotal,
        }
      }

      state.orders = state.orders.map(order => order.id === state.selectedOrder?.id ? state.selectedOrder : order)
    }
  },
});

export const { getOrders, selectOrder, createOrder, addItem } = ordersSlice.actions;

export const getOrder = (orderId: string, state: RootState) => state.ordersState.orders.find(order => order.id === orderId);
export const getSelectedOrder = (state: RootState) => state.ordersState.selectedOrder;

export default ordersSlice.reducer;
