import React from 'react';

const ModalContainer = ({ children }: { children: JSX.Element }) => {
  return <div
    style={{
      display: "flex",
      position: "fixed",
      height: "100vh",
      width: "100vw",
      background: "rgba(0,0,0,0.6)",
      top: 0,
      left: 0,
      zIndex: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >{children}</div>
}

export default ModalContainer;