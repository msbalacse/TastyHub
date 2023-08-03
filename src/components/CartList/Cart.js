import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { ApiDataContext } from "../../context/ApiDataContext";
import { toast } from "react-toastify";

const Cart = ({ data, setTotal, total, cartreload, setCartreload }) => {
  const cartPrice = Number(data.price);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(cartPrice);

  const { reload, setReload } = useContext(ApiDataContext);

  console.log(data);

  console.log(`Cart-${data.username}-${data.uuid}`);
  console.log(`Cart Removed ${data.productName}`);

  function increment(data) {
    setCount((prev) => prev + 1);
    setPrice(price + cartPrice);
    setTotal((prev) => prev + data);
  }
  function decrement(data) {
    setCount((prev) => prev - 1);
    setPrice(price - cartPrice);
    setTotal((prev) => prev - data);
  }
  function totalPrice() {
    setTotal((prev) => prev + cartPrice / 2);
  }
  async function handleDelete({ data }) {
    console.log(data);
    const document = doc(
      db,
      `Cart-${data.username}-${data.uuid}`,
      data.productName
    );
    await deleteDoc(document);
    toast.success(`Cart Removed ${data.productName} `);
    console.log("product removed successfully");
    setReload(!reload);
    setCartreload(!cartreload);
    setTotal((prev) => prev - count * cartPrice);
  }
  useEffect(() => {
    totalPrice();
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-between gap-4 p-2 my-2 bg-cart-color">
        <div className="flex gap-2 ">
          <img
            className="w-[100px] h-[100px] object-cover"
            src={data.imageUrl}
            alt=""
          />
          <p className="w-[200px] self-start font-bold capitalize">
            {data.productName}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center self-center gap-2">
            <div className="flex items-center gap-2">
              <span
                className="p-2 cursor-pointer bg-primary-background"
                onClick={() => decrement(cartPrice)}
              >
                -
              </span>
              <p>{count}</p>
              <span
                className="p-2 cursor-pointer bg-primary-background"
                onClick={() => increment(cartPrice)}
              >
                +
              </span>
            </div>
            <div className="font-bold">Price : {data.price}$</div>
          </div>
          <div onClick={() => handleDelete({ data })}>
            <RiDeleteBin5Line />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
