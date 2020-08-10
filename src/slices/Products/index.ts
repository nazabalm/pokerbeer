import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  products: ProductType[];
  selectedProduct?: ProductType;
}

const beer = require('assets/beer.png');

export const initialState: ProductsState = {
  products: [
    {
      id: '1',
      name: 'Poker Beer IPA',
      price: 150,
      image: beer,
      description: '5.0% Vol. - 500ml',
    },
    {
      id: '2',
      name: 'Poker Beer Blonde',
      price: 150,
      image: beer,
      description: '5.0% Vol. - 500ml',
    }
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
