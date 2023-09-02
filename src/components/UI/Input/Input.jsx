import { useState } from 'react';
import './Input.scss';

const Input = ({type, value, placeholder, onChange}) => {
  return (
    <div className="input-container">
      <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default Input