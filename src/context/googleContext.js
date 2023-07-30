import { createContext, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const GoogleContext = createContext();

const GoogleProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  function handleSignIn() {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  }

  function handleSignout() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  }

  return (
    <GoogleContext.Provider
      value={{ handleSignIn, handleSignout, isAuth, auth }}
    >
      {children}
    </GoogleContext.Provider>
  );
};

export { GoogleContext, GoogleProvider };
