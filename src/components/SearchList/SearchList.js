import React, { useContext } from "react";
import "./SearchList.css";
import SearchBox from "../SearchBox";
import { ApiDataContext } from "../../context/ApiDataContext";
const SearchList = () => {
  const { search, apiData } = useContext(ApiDataContext);

  console.log(search);
  console.log(apiData);
  return (
    <div className="search__list">
      <SearchBox />
      {apiData
        .filter((data) => data.productName.toLowerCase().includes(search))
        .map((data) => {
          console.log(data.productName);
          return (
            <div>
              <h1>{data.productName}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default SearchList;
