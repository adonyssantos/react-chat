import { useState, useEffect } from 'react';

function useAuthState(auth) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(true);

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(false);

      if (initializing) setInitializing(false);
    });

    return unsubcribe;
  }, [auth, initializing]);

  return { user, initializing };
}

export default useAuthState;
