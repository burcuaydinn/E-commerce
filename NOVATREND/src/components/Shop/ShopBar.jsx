import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons"; // Greater than ikonu
import shopcard1 from "../../assets/shopcard1.jpg";
import shopcard2 from "../../assets/shopcard2.jpg";
import shopcard3 from "../../assets/shopcard3.jpg";
import shopcard4 from "../../assets/shopcard4.jpg";
import shopcard5 from "../../assets/shopcard5.jpg";

const ShopBar = () => {
  const products = [
    { id: 1, title: "CLOTHS", items: "5 Items", image: shopcard1 },
    { id: 2, title: "CLOTHS", items: "5 Items", image: shopcard2 },
    { id: 3, title: "CLOTHS", items: "5 Items", image: shopcard5 },
    { id: 4, title: "CLOTHS", items: "5 Items", image: shopcard3 },
    { id: 5, title: "CLOTHS", items: "5 Items", image: shopcard4 },
  ];

  return (
    <div className="container bg-bgGray mx-auto py-8 px-4 lg:px-28">
      {/* Responsive header for Shop title and Breadcrumb */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-2 md:mb-0">Shop</h1>
        <nav className="text-gray-500 flex items-center">
          <Link to="/" className="font-bold hover:text-gray-800">
            Home
          </Link>
          <FontAwesomeIcon icon={faGreaterThan} className="mx-2" />
          <span className="font-bold text-gray-400">Shop</span>
        </nav>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p>{product.items}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopBar;
