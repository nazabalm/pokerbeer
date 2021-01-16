import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  logo: {
    height: 60,
    width: "auto",
    borderRadius: "50%",
    backgroundColor: "white",
  },

  container: {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 0,
    backgroundColor: "transparent",
    alignItems: "center",
    padding: 20,
  },

  cart: {
    width: 60,
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      opacity: "0.5",
      transform: "scale(1.2)",
    },
  },

  title: {
    color: "white",
    fontSize: 60,
    margin: 0,
    textAlign: "center",
  },

  subtitle: {
    color: "white",
    fontSize: 20,
    margin: 0,
    textAlign: "center",
  },

  text: {
    flex: 1,
  },

  "@media (max-width: 600px)": {
    text: {
      display: "none",
    },
  },
});

export default useStyles;
