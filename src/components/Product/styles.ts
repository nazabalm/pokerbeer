import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    margin: 20,
    width: 200,
    flexDirection: 'column',
  },

  image: {
    width: 200,
    height: 'auto',
  },

  data: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  }
});

export default useStyles;
