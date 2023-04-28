import React from 'react';


const CartButton = (props) => {
  return (
    <button style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      ...props.style // Agrega cualquier estilo adicional aquí
    }}>
      <span style={{ marginLeft: '0.5rem' }}>SHOP</span>
    </button>
  );
};

export default CartButton;