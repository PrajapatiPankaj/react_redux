import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductListing = () => {
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err ", err);
      });
      console.log (response.data);
  };

  useEffect(()=>{
    fetchProducts();
  })

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
