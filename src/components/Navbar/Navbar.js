import React from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();

  const PathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <nav className="nav">
      <NavLink
        className={`${
          PathMathRoute("/menu") &&
          "bg-white rounded-full text-primary-color p-1"
        }`}
        to="/menu"
      >
        <BiCategory size={"25px"} />
      </NavLink>
      <NavLink
        className={`${
          PathMathRoute("/cart-list") &&
          "bg-white rounded-full text-primary-color p-1"
        }`}
        to="/cart-list"
      >
        <CgShoppingCart size={"25px"} />
      </NavLink>
      <NavLink
        className={`${
          PathMathRoute("/") && "bg-white rounded-full text-primary-color p-1"
        }`}
        to="/"
      >
        <GoHome size={"25px"} />
      </NavLink>
      <NavLink
        className={`${
          PathMathRoute("/notification") &&
          "bg-white rounded-full text-primary-color p-1"
        }`}
        to="/notification"
      >
        <IoIosNotificationsOutline size={"25px"} />
      </NavLink>
      <NavLink
        className={`${
          PathMathRoute("/profile") &&
          "bg-white rounded-full text-primary-color p-1"
        }`}
        to="/profile"
      >
        <RxAvatar size={"25px"} />
      </NavLink>
    </nav>
  );
};

export default Navbar;
