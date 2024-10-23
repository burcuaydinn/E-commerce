import React from "react";
import ProductDetail from "../components/Product/ProductDetail";
import ProductDescription from "../components/Product/ProductDescription";
import Products from "../components/Home/Products";
import { Clients } from "../components/Home/Clients";

export default function ProductPage() {
  return (
    <div>
      <ProductDetail/>
      <ProductDescription/>
      <Products />
      <Clients/>
    </div>
  );
}