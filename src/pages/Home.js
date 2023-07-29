import React, { useContext } from "react";
import SearchBox from "../components/SearchBox";
import { ApiDataContext } from "../context/ApiDataContext";

const Home = () => {
  const { apiData } = useContext(ApiDataContext);
  return (
    <div>
      <SearchBox />
      <div>
        {apiData.map((data) => {
          const { productName } = data;
          return (
            <div>
              <h1>{productName}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
