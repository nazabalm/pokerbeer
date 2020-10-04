import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import ProductItem, { ProductItemDetails } from "components/Item";
import { addItem, setCartStatus } from "slices/Orders";
import { getProductsSelector } from "slices/Products";
import ModalContainer from "components/common/ModalContainer";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const products = useSelector(getProductsSelector);
  const dispatch = useDispatch();
  console.log('sle', selectedProduct)
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <AnimateSharedLayout type="crossfade">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onClick={setSelectedProduct}
            addItem={(item) => {
              dispatch(addItem(item));
              dispatch(setCartStatus());
            }}
          />
        ))}
        <AnimatePresence>
          {selectedProduct && <ModalContainer>
            <ProductItemDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
          </ModalContainer>}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Products;
