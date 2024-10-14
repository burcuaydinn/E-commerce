import React from "react";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import { Clients } from "../components/Home/Clients";
import ShopCards from "../components/Home/ShopCards";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <ShopCards />
    </div>
  );
}