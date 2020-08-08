import { createUseStyles } from 'react-jss';

import theme from 'theme';

const useStyles = createUseStyles({
  button: {
    cursor: 'pointer',
    background: 'transparent',
    border: '1px solid black',
    height: 40,
    width: 200,
    outline: 'none',
    padding: 0,
    fontSize: 18,
    margin: 15,
    tapHighlightColor: 'rgba(0,0,0,0)',
    backgroundColor: theme.palette.primary,
    color: 'white',
    transition: 'all 0.3s ease',
    '&:active': {
      outline: 'none'
    },
    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.primary,
    }
  },
});

export default useStyles;
