import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ApiDataContext } from "../context/ApiDataContext";

const SearchBox = () => {
  const navigation = useNavigate();
  const [data, setData] = useState();
  const { setSearch } = useContext(ApiDataContext);
  function handleSearch() {
    setSearch(data);
    setData("");
    navigation("/search-list");
  }

  return (
    <div className="flex gap-3 m-4 rounded-md p-2 max-w-[500px] shadow-primary text-primary-color items-center bg-white ">
      <input
        className="w-full bg-transparent focus:outline-none text-black"
        placeholder="search food..."
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <div onClick={handleSearch}>
        <BiSearch size={"20px"} />
      </div>
    </div>
  );
};

export default SearchBox;
