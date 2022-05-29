import React, { useState, useEffect, createContext } from "react";
import { auth } from "../../services/firebase";
import { adapterUser } from "../../views/login/adapters/adapterUser";

export const AuthContext = createContext({ user: null });

function AuthProvider(props) {
  const [userGoogle, setUserGoogle] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, photoURL } = adapterUser(user);

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
      console.log("desmontando efecto [] - contexto");
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
