import React from 'react';
import { Button } from '../components';
import { signInWithGoogle } from '../security';
import '../styles/containers/Login.css';

const Login = () => {
  return (
    <div className='btn-container-login card bg-light-blue'>
      <Button
        styles='btn bg-light-yellow hover-bg-yellow login'
        onClick={signInWithGoogle}
      >
        Iniciar Sesión con Google
      </Button>
    </div>
  );
};

export default Login;
