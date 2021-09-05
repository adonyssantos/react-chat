import React from 'react';
import '../styles/components/Login.css';

const Loading = () => {
  return (
    <div className='loading'>
      <div className='loading-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3>Por favor, espere!</h3>
    </div>
  );
};

export default Loading;
