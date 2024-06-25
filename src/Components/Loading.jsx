import React from "react";
import "./Spinner.css";

function Loading() {
  return (
    <div className="h-full w-full m-auto flex items-center justify-center">
      <div className="spinner relative ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
