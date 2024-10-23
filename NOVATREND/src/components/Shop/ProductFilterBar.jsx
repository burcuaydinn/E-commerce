import React, { useState } from "react";

const ProductFilterBar = () => {
  const [view, setView] = useState('grid'); 

  return (
    <div className="container mx-auto py-4 px-4 lg:px-28 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
      
      {/* Sonuç sayısı */}
      <div className="font-bold text-gray-500 text-center">
        Showing all 12 results
      </div>

      {/* Görünüm Seçenekleri */}
      <div className="flex items-center space-x-4 justify-center">
        <span className="text-gray-500 font-bold">Views:</span>
        <div
          onClick={() => setView('grid')}
          className={`border-2 border-solid rounded-md py-3 px-5 cursor-pointer ${view === 'grid' ? 'border-gray-800' : 'border-lightGray'}`}
        >
          <i className="fa-brands fa-microsoft text-2xl"></i>
        </div>
        <div
          onClick={() => setView('list')}
          className={`border-2 border-solid rounded-md py-3 px-5 cursor-pointer ${view === 'list' ? 'border-gray-800' : 'border-lightGray'}`}
        >
          <i className="fa-solid fa-list text-2xl"></i>
        </div>
      </div>

      {/* Filtreleme ve Sıralama */}
      <div className="flex items-center space-x-4 justify-center ">
        <select className="border px-6 py-2 bg-gray-100 text-gray-500 rounded">
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
        <button className="bg-primary text-white px-8 py-2 rounded">
          Filter
        </button>
      </div>
    </div>
  );
};

export default ProductFilterBar;
