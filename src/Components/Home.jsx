import React from "react";
import { useContext } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null);

  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);
    if (category != "undefined") {
      getproductscategory();
      setfilteredProducts(products.filter((p) => p.category == category));
    }
  }, [category, products]);
  console.log(products);

  return products ? (
    <>
      <Nav />

      <div className="w-[85%]  p-10 mt-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={i}
              to={`/details/${p.id}`}
              className="card p-5 mx-8 mr-8 mb-20 border-2 hover:shadow-2xl shadow-lg rounded w-[18%] h-[35vh] hover:scale-[1.02] ease-in-out duration-500  flex justify-center flex-col items-center"
            >
              <div
                className="mb-8 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-[1.1] ease-in-out duration-1000"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-500">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
