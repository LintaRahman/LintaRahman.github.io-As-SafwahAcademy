import React from 'react';

const Button = ({ text, color, action, fill, borderColor }) => {
  const buttonStyle = {
    backgroundColor: color || '#4CAF50', // Default color is green, you can change it
    textTransform: 'uppercase',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1em',
    borderRadius: '50px',
    border: '2px solid',
    borderColor: borderColor,
    cursor: 'pointer',
    width: fill ? '100%' : 'auto', // Fill width if fill is true
  };

  const buttonHoverStyle = {
    backgroundColor: '#fff',
    color: color || '#4CAF50',
  };

  return (
    <button style={{ ...buttonStyle, ':hover': buttonHoverStyle }} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
