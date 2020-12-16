import React from "react";
import useStyles from "./styles";

export interface ButtonProps {
  text: string;
  style?: "primary" | "secondary";
  size?: "large" | "small";
  className?: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ text, onClick, className, style, size }: ButtonProps) => {
  const classes = useStyles();
  return (
    <button
      className={`${classes.button} ${style && classes[style]} ${
        size && classes[size]
      }  ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
