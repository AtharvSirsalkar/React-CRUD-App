import React from "react";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},.7)`;
  };

  return (
    <nav className="nav md:w-[250px] w-[80px] h-full w-[300px] bg-zinc-50 flex flex-col items-center pt-5 ">
      <Link
        to="/create"
        className="md:w-[150px] lg:w-[200px] py-3 px-5 border rounded border-blue-400 hover:scale-[1.1] ease-in-out duration-700 hover:shadow-lg text-blue-400 hover:text-blue-700 hover:border-blue-800 hover:font-semibold flex items-center justify-center text-center"
      >
        <h1 className="addnew ">Add New Product</h1>
      </Link>
      <hr className="my-3 w-[80%]" />
      <h1 className="category w-[80%] md:text-2xl text-sm mb-3">Categories</h1>
      <div className="w-[80%]">
        {distinct_category.map((c, i) => (
          <Link
            to={`/?category=${c}`}
            key={i}
            className="categories flex items-center mb-5 hover:scale-[1.1] ease-in-out duration-300 hover:font-semibold"
          >
            <span
              style={{ backgroundColor: color() }}
              className="dot rounded-full mr-3 block h-[15px] w-[15px] bg-blue-300"
            ></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
