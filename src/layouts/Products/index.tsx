import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsSelector } from 'slices/Products';
import Product from 'components/Item';
import { addItem } from 'slices/Orders';

const Products = () => {
  const products = useSelector(getProductsSelector);
  const dispatch = useDispatch();
  return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>{products.map(product => <Product key={product.id} product={product} addItem={(item) => dispatch(addItem(item))} />)}</div>
}

export default Products;