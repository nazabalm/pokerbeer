import React from "react";
import useStyles from "./styles";

export interface ButtonProps {
  text: string;
  themed?: "primary" | "secondary";
  size?: "large" | "small";
  style?: React.CSSProperties;
  className?: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  text,
  onClick,
  className,
  style,
  size,
  themed,
}: ButtonProps) => {
  const classes = useStyles();
  return (
    <button
      className={`${classes.button} ${themed && classes[themed]} ${
        size && classes[size]
      } ${className}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
