import React from "react";

const BestsellerProducts = ({ products }) => {
  return (
    <section className="flex flex-col items-center py-12">
      <h2 className="font-bold text-4xl py-6">Bestseller Products</h2>
      <p className="text-gray-500 pb-6">
        Problems trying to resolve the conflict between
      </p>

      <div className="grid grid-cols-5 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 container mx-auto px-7 lg:px-44">
        {" "}
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-lg p-0 hover:shadow-xl text-center"
          >
            <img
              src={`https://picsum.photos/seed/${product.id}/295/360`}
              alt={product.name}
              className="w-full h-auto mb-4"
            />

            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>

            <div className="flex justify-center items-center gap-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">{product.price}</p>{" "}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 py-2 px-6 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
        Load More Products
      </button>
    </section>
  );
};

export default BestsellerProducts;
