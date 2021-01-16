import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    flex: 1,
    height: 500,
    maxWidth: 900,
    alignSelf: "center",
    margin: 50,
    borderRadius: 7,
    backgroundColor: "#f0f0f0",
    display: "flex",
  },

  "@media (max-width: 750px)": {
    container: {
      flexDirection: "column",
      height: "unset",
    },
  },
});

export default useStyles;
