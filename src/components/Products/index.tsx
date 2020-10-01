import React from 'react';
import useStyles from './styles';

import Product from 'components/Product';

function Products({ products }: { products: ProductType[] }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {
        products.map(product => (
          <Product product={product} key={product.id} />
        ))
      }
    </div>
  )
}

export default Products;