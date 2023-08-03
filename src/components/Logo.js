import React from "react";
import Image from "../assets/images/TastyHub.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigation = useNavigate();
  return (
    <div className="mb-4">
      <img
        className="cursor-pointer w-[150px]"
        onClick={() => navigation("/")}
        src={Image}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
