import React from "react";

import useStyles from "./styles";

interface CloseCartProps {
  onClose: () => void;
  closeIcon: string;
}

const CloseCart = ({ onClose, closeIcon }: CloseCartProps) => {
  const classes = useStyles();
  return (
    <button onClick={onClose} className={classes.closeButton}>
      <img src={closeIcon} alt="close icon" className={classes.closeIcon} />
    </button>
  );
};

export default CloseCart;
