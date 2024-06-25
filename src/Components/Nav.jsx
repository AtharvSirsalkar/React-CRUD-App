import React from "react";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

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
    <nav className="h-full w-[15%] bg-zinc-50 flex flex-col items-center pt-5 ">
      <a
        className="py-3 px-5 border rounded border-blue-400 hover:scale-[1.1] ease-in-out duration-700 hover:shadow-lg text-blue-400 hover:text-blue-700 hover:border-blue-800 hover:font-semibold"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="w-[80%] text-2xl mb-3">Categories</h1>
      <div className="w-[80%]">
        {distinct_category.map((c, i) => (
          <Link
            to={`/?category=${c}`}
            key={i}
            className="flex items-center mb-5 hover:scale-[1.1] ease-in-out duration-300 hover:font-semibold"
          >
            <span
              style={{ backgroundColor: color() }}
              className="rounded-full mr-3 block h-[15px] w-[15px] bg-blue-300"
            ></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
