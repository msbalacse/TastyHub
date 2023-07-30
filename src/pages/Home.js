import React, { useContext } from "react";
import SearchBox from "../components/SearchBox";
import { ApiDataContext } from "../context/ApiDataContext";
import ProductCart from "../components/ProductCart/ProductCart";

const Home = () => {
  const { apiData } = useContext(ApiDataContext);
  return (
    <div className="bg-primary-background">
      <SearchBox />
      <section className="flex flex-wrap gap-4 p-4">
        {apiData.map((data) => (
          <ProductCart key={data.id} data={data} />
        ))}
      </section>
    </div>
  );
};

export default Home;
