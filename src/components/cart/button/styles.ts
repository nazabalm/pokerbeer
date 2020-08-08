import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    position: 'relative',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    padding: 0,
    tapHighlightColor: 'rgba(0,0,0,0)',
    '&:active': {
      outline: 'none'
    },
    '&:hover $iconHover': {
      opacity: 1,
      transform: 'rotate(360deg)',
      transition: 'all 1s ease',
  },
    '&:hover $icon': {
      opacity: 0,
      transform: 'rotate(360deg)',
    }
  },

  icon: {
    width: 60,
    height: 'auto',
    transition: 'all 0.6s ease',
  },

  iconHover: {
    width: 60,
    transition: 'all 1s ease',
    height: 'auto',
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
  }
});

export default useStyles;
