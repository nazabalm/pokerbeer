import React from 'react';
import useStyles from './styles';

// TODO: Show product details

declare global {
  interface ProductType {
    id: string;
    name: string;
    description?: string;
    price: number;
    image?: string;
  }
}

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={product.image} alt={product.name} className={classes.image} />
      <p className={classes.name}>{product.name}</p>
      <div className={classes.data}>
        <p>${product.price}</p>
        <p className={classes.description}>{product.description}</p>
      </div>
    </div>
  )
}

export default Product;