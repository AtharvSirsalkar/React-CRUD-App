import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function Context(props) {
  const [product, setproducts] = useState(
    JSON.parse(localStorage.getItem("products") || null)
  );

  const getproducts = async () => {
    try {
      const { data } = await axios("/products");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);
  console.log(product);
  return (
    <ProductContext.Provider value={[product, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
