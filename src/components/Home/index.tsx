import React from 'react';

import useStyles from './styles';
import Products from 'layouts/Products';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Products />
    </div>
  );
}

export default Home;