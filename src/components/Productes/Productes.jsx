import React from "react";
import AllProducts from "../AllProducts/AllProducts";

export default function Productes() {
  return (
    <>
      <h2 className="text-3xl my-4">All Products</h2>
      <div className="py-4">
        <AllProducts />
      </div>
    </>
  );
}
