import React from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import app from '../../firebase.config';

const auth = getAuth(app);

export function useAuthentication() {
  const [ user, setUser ] = React.useState<User>();

  React.useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return { user };
}