import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    top: 0,
    right: 0,
  },

  outer: {
    backgroundColor: 'rgba(197,197,197,0.3)',
    flex: 1,
    height: '100%',
  },

  cart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 600,
    backgroundColor: 'white',
    height: '100%',
    transition: 'all 0.3s ease',
  },

  cartContent: {
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
  },

  cartFooter: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  open: {
    width: '100%',
  },

  closeTransition: {
    width: 0,
    transition: 'width 0.3s ease',
  },

  closeButton: {
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    padding: 0,
    margin: 15,
    tapHighlightColor: 'rgba(0,0,0,0)',
    '&:active': {
      outline: 'none'
    },
  },

  closeIcon: {
    width: 30,
    height: 'auto',
    opacity: 1,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.2)',
      opacity: 0.6,
      transition: 'all 0.3s ease',
    }
  },

  total: {
    marginRight: 17,
    textAlign: 'right',
  }
});

export default useStyles;
