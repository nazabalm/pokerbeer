import React from 'react';
import useStyles from './styles';

interface ButtonProps {
  text: string;
  className?: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
  const classes = useStyles();
  return <button className={`${classes.button} ${className}`} onClick={onClick}>{text}</button>
}

export default Button;