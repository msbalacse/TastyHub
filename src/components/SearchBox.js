import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  return (
    <div className="flex gap-3 m-4 rounded-md p-2 max-w-[500px] shadow-primary text-primary-color items-center bg-white ">
      <input
        className="w-full bg-transparent focus:outline-none text-black"
        placeholder="search food..."
        type="text"
      />
      <BiSearch size={"20px"} />
    </div>
  );
};

export default SearchBox;
