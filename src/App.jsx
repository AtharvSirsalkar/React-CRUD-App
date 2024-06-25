import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
function App() {
  const { search, pathname } = useLocation();
  return (
    <>
      <div className="h-screen w-screen  flex ">
        {(pathname != "/" || search.length > 0) && (
          <Link
            to="/"
            className=" py-3 px-5 border rounded border-blue-400 hover:scale-[1.1] ease-in-out duration-700 hover:shadow-lg text-blue-400 hover:text-blue-700 hover:border-blue-800 mb-5 absolute left-[20%] top-[3%] hover:font-semibold"
          >
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
