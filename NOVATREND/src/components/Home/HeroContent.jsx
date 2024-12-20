import React from "react";
import HeroPhoto from "../../assets/girl.png";

const HeroContent = () => {
  return (
    <div className="flex relative w-[90%] m-auto md:pl-[7%] items-center justify-center bg-gradient-to-r from-heroLeft to-heroRight z-[-2] rounded-2xl mt-8 max-md:flex-wrap max-md:gap-9">
      <div className="basis-1/2 max-md:text-center">
        <p className="font-bold text-base text-heroContent py-4">SUMMER 2024</p>
        <h1 className="font-bold max-lg:text-4xl text-6xl py-4 max-w-max">
          NEW COLLECTION
        </h1>
        <p className="font-normal text-xl text-secondTextColor py-4 max-w-xs">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-primary text-white font-bold text-2xl px-8 py-4 rounded-md hover:opacity-75">
          SHOP NOW
        </button>
      </div>
      <div className="basis-[50%] min-w-[345px]">
        <div className="relative md:mr-[-10%]">
          <img className="w-100 z-10" src={HeroPhoto} alt="Hero" />
          <div className="bg-white w-[74%] aspect-square rounded-full absolute z-[-1] top-[-5%] right-[8%]"></div>
          <div className="bg-white w-[11%] aspect-square rounded-full absolute top-0 left-[7%]"></div>
          <div className="bg-white z-30 w-[4%] aspect-square rounded-full absolute top-[40%] right-[4%]"></div>
          <div className="bg-heroBonus w-[2%] aspect-square rounded-full absolute top-[20%] right-[2%]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;