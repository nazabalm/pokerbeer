import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  products: ProductType[];
  selectedProduct?: ProductType;
}

const blonde = require('assets/blondeSinFondo.png');
const ipa = require('assets/ipaSinFondo.png');

export const initialState: ProductsState = {
  products: [
    {
      id: '1',
      name: 'Poker Beer IPA',
      price: 150,
      image: ipa,
      description: '5.0% vol',
    },
    {
      id: '2',
      name: 'Poker Beer Blonde',
      price: 150,
      image: blonde,
      description: '5.0% vol',
    },
  ] as ProductType[],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload
    },
    selectProduct: (state, action: PayloadAction<string>) => {
      state.selectedProduct = state.products.find(product => product.id = action.payload)
    }
  },
});

export const { getProducts, selectProduct } = productsSlice.actions;

export const getProductsSelector = (state: RootState) => state.productsState.products;

export const getProduct = (productId: string, state: RootState) => state.productsState.products.find(product => product.id === productId)

export default productsSlice.reducer;
