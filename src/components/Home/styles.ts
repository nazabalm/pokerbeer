import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },

  title: { 
    color: 'white', 
    fontSize: 60, 
    margin: 0, 
    textAlign: 'center' 
  },

  subtitle: { 
    color: 'white', 
    fontSize: 20, 
    margin: 0, 
    textAlign: 'center' 
  }
});

export default useStyles;
