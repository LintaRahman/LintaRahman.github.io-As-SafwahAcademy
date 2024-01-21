import React, { useState } from 'react';
import './TextInput.css';

const TextInput = ({ type, label , placeholder, name}) => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} name={name} value={value} onChange={handleChange} />
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default TextInput;