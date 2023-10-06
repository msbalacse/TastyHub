import React from 'react';
import './ProductCart.css';
import { useAuth } from '../../Hooks/useAuth';
import { useCart } from '../../Hooks/useCart';
import { toast } from 'react-toastify';
import { BsPlus } from 'react-icons/bs';

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
    toast.success('product added successfully');
  }

  return (
    <div className="product__cart" key={id}>
      <div>
        <img src={imageUrl} alt={productName} />
      </div>
      <div className="w-[150px] flex flex-col gap-2">
        <h1 className="font-bold">Name : {productName}</h1>
        <p>Details : {details.substring(0, 25)}...</p>
        <p className="text-primary-color">
          Price : <span className="font-bold text-base">{price} $</span>
        </p>
        {user ? (
          <button
            className="flex items-center justify-center gap-2 p-4 w-fit"
            onClick={() => handleAddCart(cartData)}
          >
            <BsPlus size={'25px'} />
            <p>Add Cart</p>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCart;
