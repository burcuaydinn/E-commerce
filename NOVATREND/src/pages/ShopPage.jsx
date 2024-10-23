import React from "react";
import ShopBar from "../components/Shop/ShopBar";
import ProductFilterBar from "../components/Shop/ProductFilterBar";
import ShopItems from "../components/Shop/ShopItems";
import { Clients } from "../components/Home/Clients";

export default function ShopPage() {
  return (
    <div>
      <ShopBar />
      <ProductFilterBar />
      <ShopItems />
      <Clients />
    </div>
  );
}
