import React from "react";
import Hero from "../components/Home/Hero";
import { Clients } from "../components/Home/Clients";
import ShopCards from "../components/Home/ShopCards";
import { BestServices } from "../components/Home/BestServices";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import WeLoveWhatWeDo from "../components/Home/WeLoveWhatWeDo";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Clients />
      <ShopCards />
      <WeLoveWhatWeDo/>
      <BestServices/>
      <FeaturedPosts/>
    </div>
  );
}