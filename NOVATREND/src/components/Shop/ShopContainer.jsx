import React from "react";
import { Link } from "react-router-dom";

const ShopContainer = ({ products }) => {
  return (
    <section className="flex flex-col items-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto px-7 lg:px-28">
        {products.map((product) => (
          <Link to={`/shop/product/${product.id}`} key={product.id}>
            <div className="shadow-lg p-0 hover:shadow-xl text-center cursor-pointer">
              <img
                src={`https://picsum.photos/seed/${product.id}/295/360`}
                alt={product.name}
                className="w-full h-auto mb-4"
              />
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.description}</p>

              {/* Price Bilgisi */}
              <div className="flex justify-center items-center gap-2">
                <p className="text-gray-400">$16.48</p>
                <p className="text-green-600 font-bold">{product.price}</p>
              </div>

              {/* Renk Yuvarlakları */}
              <div className="flex justify-center items-center gap-2 mt-8 mb-3">
                <div className="bg-primary w-[16px] h-[16px] rounded-full"></div>
                <div className="bg-secondary w-[16px] h-[16px] rounded-full"></div>
                <div className="bg-alert w-[16px] h-[16px] rounded-full"></div>
                <div className="bg-black w-[16px] h-[16px] rounded-full"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Sayfalama ve Daha Fazla Yükle Butonu */}
      <div className="mt-20 flex justify-center items-center space-x-0">
        <button className="py-4 px-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
          First
        </button>
        <button className="py-4 px-4 border border-gray-300 bg-blue-500 text-white">
          1
        </button>
        <button className="py-4 px-4 border border-gray-300">2</button>
        <button className="py-4 px-4 border border-gray-300">3</button>
        <button className="py-4 px-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
          Next
        </button>
      </div>
    </section>
  );
};

export default ShopContainer;
