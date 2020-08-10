import React, { useState, useEffect } from 'react';
import Button from '../Button';
import useStyles from './styles';

interface NumberButtonProps {
  initialValue: number;
  onChangeValue: (newValue: number) => void;
}

const NumberButton = ({ initialValue, onChangeValue }: NumberButtonProps) => {
  const [value, setValue] = useState(initialValue);
  const classes = useStyles();

  useEffect(() => {
    onChangeValue(value);
  }, [value, onChangeValue])

  return <div className={classes.container}>
    <Button text="-" onClick={() => { setValue(prevValue => prevValue > 1 ? prevValue - 1 : prevValue) }} />
    <p>{value}</p>
    <Button text="+" onClick={() => { setValue(prevValue => prevValue + 1) }} />
  </div>
}

export default NumberButton;