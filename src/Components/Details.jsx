import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import "./nav.css";

function Details() {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
    // getSingleProduct();
  }, []);

  const ProductDeleteHandler = () => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setproducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/");
    toast.success("Product Deleted successfully");
  };

  return product ? (
    <div className="details w-[70%] h-full m-auto py-[10%] px-[2%] gap-[50px] flex items-center ">
      <img
        className="prodimage object-contain md:w-[40%] md:h-[80%] sm:w-[150px] sm:h-[250px] w-[100px] h-[150] hover:scale-[1.07] ease-in-out duration-700"
        src={`${product.image}`}
        alt=""
      />
      <div className="containt md:w-[50%] w-[100%] ">
        <h1 className=" prodtitle md:text-4xl sm:text-lg text-base mb-5">
          {product.title}
        </h1>
        <h3 className="prodcategory text-zinc-400 mb-2">{product.category}</h3>
        <h2 className="prodprice text-blue-400 mb-3">{product.price} Rupees</h2>
        <p className="proddescription mb-10 md:text-base text-xs">
          {product.description}
        </p>
        <Link
          to={`/edit/${product.id}`}
          className="md:py-3 md:px-5 py-2 px-3 border rounded border-blue-400 hover:scale-[1.1] ease-in-out duration-500 hover:shadow-2xl text-blue-500"
        >
          Edit
        </Link>
        <button
          onClick={() => ProductDeleteHandler(product.id)}
          className="md:py-3 md:px-5 py-2 px-3 border rounded border-red-400 hover:scale-[1.1] ease-in-out duration-500 hover:shadow-2xl text-red-500 m-5"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
