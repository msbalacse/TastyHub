import React from "react";
import "./ProductCart.css";

const ProductCart = ({ data }) => {
  const { id, price, productName, imageUrl, details } = data;

  function handleAddCart() {
    console.log("Add Cart " + id);
  }

  return (
    <div className="cart" key={id}>
      <img src={imageUrl} alt={productName} />
      <p>Name : {productName}</p>
      <p>Details : {details.substring(0, 25)}...</p>
      <p>Price : {price}$</p>
      <button onClick={handleAddCart}>Add Cart</button>
    </div>
  );
};

export default ProductCart;
