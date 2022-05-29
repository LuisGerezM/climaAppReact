import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/firebase/AuthProvider";

export const useProtectedRoute = (route) => {
  const userGoogle = useContext(AuthContext);
  const [redirect, setRedirect] = useState(null);

  // si no existe usuario, redireccionar login
  useEffect(() => {
    if (route === "dash" && !userGoogle) {
      setRedirect("/login");
    } else if (route === "login" && userGoogle) {
      setRedirect("/");
    }
  }, [userGoogle, route]);

  return { redirect };
};
