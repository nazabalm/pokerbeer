import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  closeButton: {
    cursor: "pointer",
    background: "transparent",
    border: "none",
    outline: "none",
    padding: 0,
    margin: 15,
    tapHighlightColor: "rgba(0,0,0,0)",
    "&:active": {
      outline: "none",
    },
  },

  closeIcon: {
    width: 30,
    height: "auto",
    opacity: 1,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.2)",
      opacity: 0.6,
      transition: "all 0.3s ease",
    },
  },
});

export default useStyles;
