import React from 'react';
import { Loading } from '../components';
import { Login, Home } from '.';
import { useAuthState } from '../hooks';
import { firebase } from '../config/firebase';

const App = () => {
  const { initializing, user } = useAuthState(firebase.auth());

  return initializing ? <Loading /> : !user ? <Login /> : <Home user={user} />;
};

export default App;
