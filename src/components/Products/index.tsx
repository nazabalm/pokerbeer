import React from 'react';
import useStyles from './styles';

const beer = require('assets/beerGlass.png')

function Products() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.text}>Blonde</p>
      <img src={beer} className={classes.image} alt="beer" />
      <p className={classes.text}>IPA</p>
    </div>
  )
}

export default Products;