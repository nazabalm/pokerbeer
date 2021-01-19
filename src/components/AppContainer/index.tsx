import React, { FunctionComponent } from "react";

import useStyles from "./styles";

const AppContainer: FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default AppContainer;
