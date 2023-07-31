import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useState, useEffect, useRef, } from "react";
import { db } from "../firebase";
import { useAuth } from "../Hooks/useAuth";

const ApiDataContext = createContext();

const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [cart, setCart] = useState([]);
  const [reload, setReload] = useState(false);
  const [search, setSearch] = useState("");

  const { user } = useAuth();
  console.log(user);

  const dataRef = useRef(collection(db, "products"));

  useEffect(() => {
    fetchData();
    fetchCartData();
    console.log("---");
  }, [reload]);

  async function fetchData() {
    const data = await getDocs(dataRef.current);
    try {
      setApiData(
        data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }

  async function fetchCartData() {
    
    const data = await getDocs(collection(db, `Cart-${user?.displayName}-${user?.uid}`));
    try {
      setCart(
        data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }

  return (
    <ApiDataContext.Provider
      value={{ apiData, fetchData, setReload, reload, search, setSearch, cart,fetchCartData }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};

export { ApiDataContext, ApiDataProvider };
