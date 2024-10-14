import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroContent from "./HeroContent";

export const Hero = () => {
  const settings = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: { clickable: true },
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
    spaceBetween: 50,
  };

  // 8 adet HeroContent componenti oluşturmak için map kullanıyoruz
  const slides = Array.from({ length: 8 }, (_, index) => (
    <SwiperSlide key={index}>
      <HeroContent />
    </SwiperSlide>
  ));

  return (
    <section className="relative flex justify-center">
      <Swiper {...settings} modules={[Navigation, Pagination, Autoplay]}>
        {slides}
        <div className="swiper-button-next custom-next absolute top-1/2 mr-[120px] transform -translate-y-1/2 text-white z-20 cursor-pointer hover:opacity-75"></div>
        <div className="swiper-button-prev custom-prev absolute top-1/2 ml-[120px] transform -translate-y-1/2 text-white z-20 cursor-pointer hover:opacity-75"></div>
      </Swiper>
    </section>
  );
};

export default Hero;