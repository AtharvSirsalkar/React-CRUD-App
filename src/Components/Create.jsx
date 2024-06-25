import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const AddProductHandler = () => {
    if (
      image.trim().length < 5 ||
      title.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Every field must have atlest 4 charecters");
      return;
    }
    // e.preventDefault();
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
    toast.success("Product added successfully");
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] h-screen w-screen m-auto flex flex-col items-center"
    >
      <h1 className="text-3xl w-1/2 mb-5">Add New Products</h1>
      <input
        type="text"
        placeholder="Image Link"
        className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder=" Title"
        className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder=" Price"
          className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        type="url"
        placeholder="Enter Product Description here"
        rows="4"
        className="text-1xl outline-0 bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      />
      <div className="w-1/2">
        <button
          className="py-3 px-5 border rounded border-blue-400 hover:scale-[1.1] ease-in-out duration-700 hover:shadow-lg text-blue-400 hover:text-blue-700 hover:border-blue-800 hover:font-semibold"
          href="/create"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
