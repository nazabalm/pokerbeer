import React from "react";
import useStyles from "./styles";

const OrderContainer = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default OrderContainer;
