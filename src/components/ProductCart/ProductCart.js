import React from "react";
import "./ProductCart.css";
import { useAuth } from "../../Hooks/useAuth";
import { useCart } from "../../Hooks/useCart";
import { toast } from "react-toastify";

const ProductCart = ({ data }) => {
  const { id, price, productName, imageUrl, details } = data;

  const { user } = useAuth();
  const { addCart } = useCart();

  const cartData = {
    ...data,
    username: user?.displayName,
    email: user?.email,
    userImage: user?.photoURL,
    uuid: user?.uid,
  };

  function handleAddCart(cartData) {
    addCart(cartData);
    toast.success("product added successfully");
  }

  return (
    <div className="product__cart" key={id}>
      <img src={imageUrl} alt={productName} />
      <p>Name : {productName}</p>
      <p>Details : {details.substring(0, 25)}...</p>
      <p>Price : {price}$</p>
      {user ? (
        <button onClick={() => handleAddCart(cartData)}>Add Cart</button>
      ) : null}
    </div>
  );
};

export default ProductCart;
