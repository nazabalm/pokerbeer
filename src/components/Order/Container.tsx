import React from 'react';

const OrderContainer = ({ children }: { children: React.ReactNode[] | React.ReactNode }) => {

  return <div style={{
    flex: 1, height: 500,
    maxWidth: 900,
    alignSelf: 'center',
    margin: 50, borderRadius: 7,
    backgroundColor: '#f0f0f0',
    display: 'flex',
  }}>
    {children}
  </div>
}

export default OrderContainer;