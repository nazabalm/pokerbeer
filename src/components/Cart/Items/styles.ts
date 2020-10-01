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
    '& p': {
      color: 'black',
    }
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
  },

  quantity: {
    cursor: 'pointer',
    background: 'white',
    border: '1px solid black',
    padding: 0,
    marign: 0,
    borderRadius: 20,
    alignSelf: 'stretch',
    width: 50,
    alignItems: 'center',
    outline: 'none',
    '&:active': {
      outline: 'none',
    }
  },

  left: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRightWidth: 0,
  },

  quantityText:{
    display: 'flex', 
    alignItems: 'center',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    margin: 0,
    alignSelf: 'stretch',
  },

  right: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderLeftWidth: 0,
  },

  quantityContainer: {
    display: 'flex',
    height: 25,
    alignItems: 'center',
    flex: 1,
  },
});

export default useStyles;
