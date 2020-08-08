import { createUseStyles } from 'react-jss';
import theme from 'theme';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.black[300]}`,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
    padding: 7,
  },

  image: {
    width: 80,
    height: 80,
    objectFit: 'cover',
  },

  price: {
    width: 80,
  },

  name: {
    marginLeft: 15,
    flex: 1,
  }
});

export default useStyles;
