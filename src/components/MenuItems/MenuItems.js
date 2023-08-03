import React, { useContext, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { ApiDataContext } from "../../context/ApiDataContext";
import ProductCart from "../ProductCart/ProductCart";

const MenuItems = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { apiData } = useContext(ApiDataContext);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  console.log(apiData);

  return (
    <div className="w-full my-4">
      <button
        className="flex items-center w-full gap-4 px-4 py-2 text-left text-primary-color bg-white "
        onClick={toggleDropdown}
      >
        <span className={`${isOpen ? "-rotate-90" : null}`}>
          <BsChevronDown />
        </span>
        {type}
      </button>

      {isOpen && (
        <div className="flex flex-wrap w-full gap-4 my-2 p-4 shadow-lg roupnded-md">
          {apiData
            .filter((data) => type === data.category)
            .map((data) => (
              <ProductCart data={data} />
            ))}
        </div>
      )}
    </div>
  );
};

export default MenuItems;
