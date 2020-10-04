import React from 'react';

const Button = ({ text, changeStatus }) => (
  <button type="button" className="main-button" onClick={changeStatus}>
    {text}
  </button>
);

export default Button;
