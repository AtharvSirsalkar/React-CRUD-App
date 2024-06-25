import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";

function Edit() {
  const [products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const ChangeHandler = (e) => {
    // console.log(e.target.name, e.target.value);

    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductHandler = (e) => {
    if (
      product.image.trim().length < 5 ||
      product.title.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Every field must have atlest 4 charecters");
      return;
    }
    e.preventDefault();
    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product };
    console.log(copyData);

    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
    toast.success("Product Edited successfully"); 
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] h-screen w-screen m-auto flex flex-col items-center"
    >
      <h1 className="text-3xl w-1/2 mb-5">Edit Product</h1>
      <input
        type="text"
        placeholder="Image Link"
        className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={ChangeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder=" Title"
        className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={ChangeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="category"
          onChange={ChangeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder=" Price"
          className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="price"
          onChange={ChangeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        placeholder="Enter Product Description here"
        rows="4"
        className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="description"
        onChange={ChangeHandler}
        value={product && product.description}
      />
      <div className="w-1/2">
        <button
          className="py-3 px-5 border rounded border-blue-400 hover:scale-[1.1] ease-in-out duration-700 hover:shadow-lg text-blue-400 hover:text-blue-700 hover:border-blue-800 hover:font-semibold"
          href="/create"
        >
          Edit Product
        </button>
      </div>
    </form>
  );
}

export default Edit;
