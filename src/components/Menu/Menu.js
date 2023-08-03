import React from "react";
import MenuItems from "../MenuItems/MenuItems";
import Title from "../Title/Title";

const Menu = () => {
  return (
    <div className="mb-24">
      <Title data={"Menu"} />
      <MenuItems type={"veg"} />
      <MenuItems type={"non-veg"} />
      <MenuItems type={"drinks"} />
    </div>
  );
};

export default Menu;
