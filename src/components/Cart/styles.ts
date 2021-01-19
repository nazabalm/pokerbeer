import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    display: "flex",
    justifyContent: "flex-end",
    height: "100%",
    top: 0,
    right: 0,
    color: "black",
    zIndex: 200,
  },

  outer: {
    background: "rgba(0,0,0,0.6)",
    flex: 1,
    height: "100%",
    zIndex: 200,
  },

  cart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: 600,
    backgroundColor: "white",
    height: "100%",
    transition: "all 0.3s ease",
  },

  cartContent: {
    display: "flex",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
  },

  cartFooter: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  open: {
    width: "100%",
  },

  closeTransition: {
    width: 0,
    transition: "width 0.3s ease",
  },

  total: {
    marginRight: 17,
    textAlign: "right",
  },
});

export default useStyles;
