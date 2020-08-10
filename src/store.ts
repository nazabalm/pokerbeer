import { configureStore } from '@reduxjs/toolkit';
import { ProductsReducer, OrdersReducer } from './slices';

export const store = configureStore({
  reducer: {
    productsState: ProductsReducer,
    ordersState: OrdersReducer
  },
});

declare global { type RootState = ReturnType<typeof store.getState>; }