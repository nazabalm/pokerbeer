import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    logo: {
      width: 60,
      height: 'auto',
    },

    container: {
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: 30,
      boxShadow: '3px 5px 22px -17px rgba(0,0,0,0.75)'
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
