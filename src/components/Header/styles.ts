import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    logo: {
      width: 60,
      height: 'auto',
      borderRadius: '50%',
      backgroundColor: 'white',
    },

    container: {
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: 30,
      paddingBottom: 0,
      backgroundColor: 'transparent',
    },

    cart: {
      width: 60,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        opacity: '0.5',
        transform: 'scale(1.2)'
      }
    }
});

export default useStyles;
