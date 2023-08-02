import React from "react";
import MenuItems from "../MenuItems/MenuItems";

const Menu = () => {
  return (
    <div>
      <h1 className="my-4 text-3xl font-bold underline">Menu</h1>
      <MenuItems type={"veg"} />
      <MenuItems type={"non-veg"} />
      <MenuItems type={"drinks"} />
    </div>
  );
};

export default Menu;
