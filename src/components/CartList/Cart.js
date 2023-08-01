import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = ({ data }) => {
  const cartPrice = Number(data.price);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(cartPrice);
  function increment() {
    setCount((prev) => prev + 1);
    setPrice(price + cartPrice);
  }
  function decrement() {
    setCount((prev) => prev - 1);
    setPrice(price - cartPrice);
  }
  return (
    <div className="p-2 my-2 flex justify-between w-full bg-white">
      <div className="flex gap-2">
        <img className="w-[100px]" src={data.imageUrl} alt="" />
        <p className="self-start font-bold">{data.productName}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col self-center gap-2">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-primary-background" onClick={decrement}>
              -
            </span>
            <p>{count}</p>
            <span className="p-2 bg-primary-background" onClick={increment}>
              +
            </span>
          </div>
          <div>Price : {price}$</div>
        </div>
        <div className="">
          <RiDeleteBin5Line />
        </div>
      </div>
    </div>
  );
};

export default Cart;
