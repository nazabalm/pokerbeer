import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },

  image: {
    height: 400,
    width: "auto",
  },

  text: {
    flex: 1,
    fontSize: 30,
    textAlign: "center",
  },
});

export default useStyles;
