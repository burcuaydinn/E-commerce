import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // URL'den ürün id'sini alıyoruz

  // Örnek ürün bilgisi
  const product = {
    id: id,
    name: "Floating Phone",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.",
    price: "$1,139.33",
    availability: "In Stock",
    reviews: 10,
    rating: 4, // 4 yıldız örneği
    images: [
      `https://picsum.photos/seed/${id}/600/400`, 
      `https://picsum.photos/seed/${id + 1}/600/400`, 
      `https://picsum.photos/seed/${id + 2}/600/400`
    ],
  };

  return (
    <div className="container bg-gray-50 mx-auto py-12 px-4 lg:px-44">
      {/* Breadcrumb */}
      <nav className="text-gray-500 mb-6">
        <a href="/" className="hover:text-gray-800">Home</a>
        <span className="mx-2">/</span>
        <a href="/shop" className="hover:text-gray-800">Shop</a>
      </nav>

      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Sol: Ürün Görseli */}
        <div className="flex flex-col w-full lg:w-1/2">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-96 h-[500px] object-cover mb-4"
          />

          {/* Küçük Resim Thumbnail'leri */}
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-20 object-cover cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Sağ: Ürün Bilgileri */}
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

          {/* Rating ve Reviews */}
          <div className="flex items-center mb-8">
            {/* Yıldızlar */}
            <div className="text-yellow-400 flex">
              {Array(product.rating)
                .fill(0)
                .map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                ))}
              {Array(5 - product.rating)
                .fill(0)
                .map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-gray-300 text-sm max-sm:text-base"></i>
                ))}
            </div>
            <p className="font-bold text-iconGray ml-2 ">{product.reviews} Reviews</p>
          </div>

          {/* Price ve Availability */}
          <div className="mb-8">
            <p className="text-4xl font-bold text-black mb-4">{product.price}</p>
            <p className="font-bold text-iconGray">
              Availability:{" "}
              <span className="text-primary">{product.availability}</span>
            </p>
          </div>

          {/* Ürün Açıklaması */}
          <p className="text-gray-500 mb-6 line-clamp-3">
            {product.description}
          </p>

          {/* Çizgi */}
          <div className="border-t border-gray-300 mb-6"></div>

          {/* Renk Yuvarlakları */}
          <div className="flex space-x-4 mb-16">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-secondary rounded-full"></div>
            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>

          {/* Seçenekler ve Aksiyon Butonları */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
              Select Options
            </button>
            <button className="border border-gray-300 rounded-full p-3 hover:bg-gray-100">
              <i className="fa fa-heart"></i>
            </button>
            <button className="border border-gray-300 rounded-full p-3 hover:bg-gray-100">
              <i className="fa fa-shopping-cart"></i>
            </button>
            <button className="border border-gray-300 rounded-full p-3 hover:bg-gray-100">
              <i className="fa fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
