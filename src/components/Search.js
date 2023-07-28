import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex gap-3 p-2 text-primary-color items-center bg-white">
      <input
        className="w-[350px] bg-transparent focus:outline-none text-black"
        placeholder="search food..."
        type="text"
      />
      <BiSearch size={"20px"} />
    </div>
  );
};

export default Search;
