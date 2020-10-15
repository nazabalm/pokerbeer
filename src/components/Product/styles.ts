import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 0
  },

  image: {
    width: 80,
    margin: 10,
    paddingLeft: 50,
    paddingRight: 50,
    height: 'auto',
  },

  data: {
    padding: 20,
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 17,
    paddingBottom: 0,
  },

  name: {
    fontWeight: 700,
    marginBottom: 0
  },

  description: {
    fontSize: 14,
    fontWeight: '300'
  }
});

export default useStyles;
