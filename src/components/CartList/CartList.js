import React, { useContext, useEffect } from "react";
import "./CartList.css";
import { ApiDataContext } from "../../context/ApiDataContext";
import { GoogleContext } from "../../context/googleContext";

const CartList = () => {
  const { cart, reload, setReload } = useContext(ApiDataContext);
  const { user } = useContext(GoogleContext);
  useEffect(() => {
    setReload(!reload);
    console.log("--- reload");
    // eslint-disable-next-line
  }, []);
  console.log(cart);
  return (
    <div >
      <h1>CartList</h1>
      <div>
        {cart
          .filter((data) => data.username === user.displayName)
          .map((data) => (
            <div className="cart__list">
              <img src={data.imageUrl} alt="" />
              <h1>{data.username}</h1>
              <p>{data.productName}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartList;
