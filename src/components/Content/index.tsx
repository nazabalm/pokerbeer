import React, { FunctionComponent } from "react";

import useStyles from "./styles";

const Content: FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Content;
