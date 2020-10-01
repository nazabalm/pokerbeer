import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "components/Item";
import { addItem, setCartStatus } from "slices/Orders";
import { getProductsSelector } from "slices/Products";

const Products = () => {
  const products = useSelector(getProductsSelector);
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addItem={(item) => {
            dispatch(addItem(item));
            dispatch(setCartStatus('open'));
          }}
        />
      ))}
    </div>
  );
};

export default Products;
