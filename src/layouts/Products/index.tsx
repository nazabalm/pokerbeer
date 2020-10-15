import React, { useCallback, useState } from "react";
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

  const addProductItem = useCallback((item) => {
    setSelectedProduct(null);
    dispatch(addItem(item));
    dispatch(setCartStatus());
  }, [dispatch])

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
            addItem={addProductItem}
          />
        ))}
        <AnimatePresence>
          {selectedProduct && (
            <ModalContainer>
              <ProductItemDetails
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
                addItem={addProductItem}
              />
            </ModalContainer>)}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Products;
