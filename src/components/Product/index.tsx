import React from 'react';

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
  return (
    <div>

    </div>
  )
}

export default Product;