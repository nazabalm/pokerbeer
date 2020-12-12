import React from 'react';
import useStyles from './styles';

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ text, onClick, className, style }: ButtonProps) => {
  const classes = useStyles();
  return <button style={style} className={`${classes.button} ${className}`} onClick={onClick}>{text}</button>
}

export default Button;