import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#1f1f1f',
    margin: 30,
    position: 'relative',
  },

  footer: {
    display: 'flex',
    margin: 20,
    marginTop: 0,
  },

  info: {
    alignSelf: 'flex-end',
    padding: 0,
    height: 20,
    width: 20,
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid white',
    outline: 'none',
    borderRadius: '100%',
    transition: 'all 0.3s ease',
    position: 'absolute',
    top:25,
    right: 25,
    '&:active': {
      outline: 'none'
    },
    '&:hover':{
      color: 'black',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
      transform: 'scale(1.2)'
    }
  },

  containerDetails: {
    display: 'flex',
    borderRadius: 7,
    padding: 20,
    backgroundColor: '#1f1f1f',
  },

  data: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    maxWidth: 300,
    textAlign: 'center',
    margin: 30,
    '& p': {
      textAlign: 'justify'
    }
  },

  image: {
    height: 400,
    width: 'auto',
  },

  price: {
    fontSize: 32,
  },

  footerModal: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  button: {
    marginRight: 0,
  },

  close: {
    width: 15,
    height: 'auto',
    opacity: 1,
    position: 'absolute',
    cursor: 'pointer',
    top: 15,
    right: 15,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.2)',
      opacity: 0.6,
      transition: 'all 0.3s ease',
    }
  },
});

export default useStyles;
