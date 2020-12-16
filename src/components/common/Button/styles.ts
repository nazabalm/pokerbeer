import { createUseStyles } from "react-jss";

import theme from "theme";

const useStyles = createUseStyles({
  button: {
    cursor: "pointer",
    background: "transparent",
    border: `2px solid ${theme.palette.primary}`,
    height: 40,
    borderRadius: 7,
    outline: "none",
    padding: 10,
    fontSize: 16,
    margin: 15,
    tapHighlightColor: "rgba(0,0,0,0)",
    backgroundColor: theme.palette.primary,
    color: "white",
    transition: "all 0.5s ease",
    "&:active": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "white",
      border: "2px solid black",
      transform: "scaleY(1.15)",
      fontWidth: "700",
      color: theme.palette.primary,
    },
  },

  primary: {},

  secondary: {
    backgroundColor: "white",
    color: theme.palette.primary,
    "&:hover": {
      backgroundColor: theme.palette.primary,
      color: "white",
    },
  },

  large: {},

  small: {},
});

export default useStyles;
