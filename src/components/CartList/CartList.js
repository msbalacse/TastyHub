import React, { useContext, useEffect, useState } from "react";
import { ApiDataContext } from "../../context/ApiDataContext";
import Cart from "./Cart";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";

const CartList = () => {
  const { reload, setReload, cart, setCart, total, setTotal } =
    useContext(ApiDataContext);
  const [cartreload, setCartreload] = useState(false);
  const navigation = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    fetchCartData();
    setReload(!reload);
    console.log("cart data loaded");
  }, [cartreload]);

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

  function handleCheckout() {
    navigation("/checkout");
  }

  return (
    <div className="relative mb-20">
      <Title data={"Cart"} />
      <div>
        {cart
          ?.filter((data) => data.username === user.displayName)
          ?.map((data) => (
            <Cart
              key={data.id}
              data={data}
              total={total}
              setTotal={setTotal}
              cartreload={cartreload}
              setCartreload={setCartreload}
            />
          ))}
      </div>
      {cart.length > 0 ? (
        <div
          className="fixed z-40 p-2 font-bold text-white bg-indigo-500 right-4 top-4 w-fit"
          onClick={handleCheckout}
        >
          Checkout: {total}$
        </div>
      ) : null}
    </div>
  );
};

export default CartList;
