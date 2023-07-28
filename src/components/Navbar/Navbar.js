import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/menu">
        <BiCategory size={"25px"} />
      </NavLink>
      <NavLink to="/wish-list">
        <AiOutlineHeart size={"25px"} />
      </NavLink>
      <NavLink to="/">
        <GoHome size={"25px"} />
      </NavLink>
      <NavLink to="/notification">
        <IoIosNotificationsOutline size={"25px"} />
      </NavLink>
      <NavLink to="/profile">
        <RxAvatar size={"25px"} />
      </NavLink>
    </nav>
  );
};

export default Navbar;
