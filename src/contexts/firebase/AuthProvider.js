import React, { useState, useEffect, createContext } from "react";
import { auth } from "../../services/firebase";

export const AuthContext = createContext({ user: null });

function AuthProvider(props) {
  const [userGoogle, setUserGoogle] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setUserGoogle({
          displayName,
          email,
          photoURL,
        });
      } else {
        setUserGoogle(user);
      }
    });

    return () => {
      setUserGoogle(null);
    };
  }, []);

  return (
    <AuthContext.Provider value={userGoogle}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
