import Products from 'components/Products';
import React from 'react';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.title}>POKER BEER</p>
      <p className={classes.subtitle}>Una cerveza que te va cambiar la birra.</p>
      <Products />
    </div>
  );
}

export default Home;