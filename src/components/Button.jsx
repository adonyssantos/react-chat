import React from 'react';
import '../styles/components/Button.css';

const Button = ({ onClick = null, children = null, styles = null }) => (
  <button className={styles} onClick={onClick}>
    {children}
  </button>
);

export default Button;
