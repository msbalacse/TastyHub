import { collection, doc, setDoc } from "firebase/firestore";
import { createContext } from "react";
import { db } from "../firebase";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  async function addCart(data) {
    const date = new Date();
    const timestamp = `${date.getTime()}`;
    console.log(timestamp);
    const dataRef = collection(db, `Cart-${data.username}-${data.uuid}`);
    await setDoc(doc(dataRef,data.productName), data).then(() => {
      console.log("product added");
    });
  }

  return (
    <CartContext.Provider value={{ addCart }}>{children}</CartContext.Provider>
  );
};
