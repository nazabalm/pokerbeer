import React from "react";
import { motion } from "framer-motion";

import useStyles from "./styles";
import Product from "components/Product";
import { Button } from "components/common";

const closeIcon = require("assets/closeIconWhite.png");

interface ItemProps {
  product: ProductType;
  onClick: (product: ProductType) => void;
  addItem: (item: Pick<ItemType, "product" | "quantity">) => void;
}

const Item = ({ product, addItem, onClick }: ItemProps) => {
  const classes = useStyles();
  return (
    <motion.div
      layoutId={product.id}
      style={{ cursor: "pointer" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className={classes.container}
    >
      <button className={classes.info} onClick={() => onClick(product)}>
        i
      </button>
      <Product product={product} />
      <div className={classes.footer}>
        <Button
          text={"Agregar al carrito"}
          themed="primary"
          onClick={() => {
            addItem({ product, quantity: 1 });
          }}
        />
      </div>
    </motion.div>
  );
};

interface ProductItemDetailsProps {
  product: ProductType;
  onClose: () => void;
  addItem: (item: Pick<ItemType, "product" | "quantity">) => void;
}

export const ProductItemDetails = ({
  product,
  onClose,
  addItem,
}: ProductItemDetailsProps) => {
  const classes = useStyles();
  return (
    <motion.div layoutId={product.id} className={classes.containerDetails}>
      <img
        src={closeIcon}
        alt="close icon"
        className={classes.close}
        onClick={onClose}
      />
      <div className={classes.data}>
        <h1>{product.name}</h1>
        <div className={classes.imageDescription}>
          <img
            src={product.image}
            alt={product.name}
            className={classes.image}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            purus non enim aliquam gravida. Aenean leo neque, laoreet nec turpis
            vitae, pretium tristique sapien. Pellentesque imperdiet nibh vitae
            sollicitudin aliquet.
          </p>
        </div>
        <div className={classes.footerModal}>
          <h1 className={classes.price}>${product.price}</h1>
          <Button
            text={"Agregar al carrito"}
            themed="primary"
            onClick={() => addItem({ product, quantity: 1 })}
            className={classes.button}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
