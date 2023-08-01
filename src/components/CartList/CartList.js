import React, { useContext, useEffect, useState } from "react";
import "./CartList.css";
import { ApiDataContext } from "../../context/ApiDataContext";
import Cart from "./Cart";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../Hooks/useAuth";

const CartList = () => {
  const { reload, setReload } = useContext(ApiDataContext);
  const [cart, setCart] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    fetchCartData();
    setReload(!reload);
    console.log("--- reload");
  }, []);

  async function fetchCartData() {
    const data = await getDocs(
      collection(db, `Cart-${user?.displayName}-${user?.uid}`)
    );
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
    <div>
      <h1>CartList</h1>
      <div>
        {cart
          ?.filter((data) => data.username === user.displayName)
          ?.map((data) => (
            <Cart key={data.id} data={data} />
          ))}
      </div>
    </div>
  );
};

export default CartList;
