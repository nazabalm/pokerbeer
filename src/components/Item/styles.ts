import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
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
  }
});

export default useStyles;
