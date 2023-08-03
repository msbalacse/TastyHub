import React, { useContext } from "react";
import "./Checkout.css";
import { ApiDataContext } from "../../context/ApiDataContext";

const Checkout = () => {
  const { total } = useContext(ApiDataContext);
  return (
    <div className="checkout">
      <h1 className="total_amount">
        Total Amount <p className="py-4">{total}$</p>
      </h1>
    </div>
  );
};

export default Checkout;
