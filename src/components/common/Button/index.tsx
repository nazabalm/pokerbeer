import React from 'react';
import useStyles from './styles';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  const classes = useStyles();
  return <button className={classes.button} onClick={onClick}>{text}</button>
}

export default Button;