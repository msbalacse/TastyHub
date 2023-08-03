import React, { useContext } from "react";
import "./SearchList.css";
import SearchBox from "../SearchBox";
import ProductCart from "../ProductCart/ProductCart";
import { ApiDataContext } from "../../context/ApiDataContext";
const SearchList = () => {
  const { search, apiData } = useContext(ApiDataContext);

  console.log(search);
  console.log(apiData);
  return (
    <div className="search__list">
      <SearchBox />
      <p className="py-4 text-lg italic">
        Your Search List is:{" "}
        <span className="underline text-primary-color font-bold">{search}</span>
      </p>
      <div className="flex gap-4 flex-wrap">
        {apiData
          .filter((data) => data.productName.toLowerCase().includes(search))
          .map((data) => {
            console.log(data.productName);
            return <ProductCart data={data} />;
          })}
      </div>
    </div>
  );
};

export default SearchList;
