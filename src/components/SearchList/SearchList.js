import React, { useContext } from "react";
import "./SearchList.css";
import SearchBox from "../SearchBox";
import { ApiDataContext } from "../../context/ApiDataContext";
const SearchList = () => {
  const { search } = useContext(ApiDataContext);

  return (
    <div className="search__list">
      <SearchBox />
      {search}
    </div>
  );
};

export default SearchList;
