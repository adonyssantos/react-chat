import React from 'react';
import { signOut } from '../security';
import { Button } from '.';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header>
      <nav class='nav bg-dark-blue'>
        <h1 className='color-light-blue'>Infinity Chat</h1>
        <Button styles='btn logout color-light-red' onClick={signOut}>
          Salir
        </Button>
      </nav>
    </header>
  );
};

export default Header;
