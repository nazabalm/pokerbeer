import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsSelector } from 'slices/Products';
import Product from 'components/Item';
import { addItem } from 'slices/Orders';

const Products = () => {
  const products = useSelector(getProductsSelector);
  const dispatch = useDispatch();
  return <>{products.map(product => <Product key={product.id} product={product} addItem={(item) => dispatch(addItem(item))} />)}</>
}

export default Products;