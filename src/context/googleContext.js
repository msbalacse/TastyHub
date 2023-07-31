import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const GoogleContext = createContext();

const GoogleProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLocalData(user);
    });
    return () => unsubscribe();
  }, []);

  const setLocalData = (user) => {
    localStorage.setItem("username", user?.displayName);
    localStorage.setItem("email", user?.email);
    localStorage.setItem("user_profile", user?.photoURL);
  };

  async function handleSignIn() {
    await signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  }

  async function handleSignout() {
    await signOut(auth).then(() => {
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("user_profile");
    });
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  }

  return (
    <GoogleContext.Provider
      value={{ handleSignIn, handleSignout, isAuth, user }}
    >
      {children}
    </GoogleContext.Provider>
  );
};

export { GoogleContext, GoogleProvider };
