import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

interface OrdersState {
  orders: OrderType[];
  selectedOrder?: OrderType;
}

export const initialState: OrdersState = {
  orders: [],
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
        if (state.selectedOrder.items.find(item => item.product.id === action.payload.product.id))
          state.selectedOrder.items = state.selectedOrder.items.map(item => item.product.id === action.payload.product.id ? { ...item, quantity: action.payload.quantity + item.quantity } : { ...item })
        else
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