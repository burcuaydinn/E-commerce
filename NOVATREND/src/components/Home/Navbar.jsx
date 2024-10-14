import React from "react";

const Navbar = () => {
  return (
    <section className="text-sm max-md:pt-6 max-md:px-4 w-full">
      {/* Üst Bilgi Navbar-Dark */}
      <div className="bg-navBlueBg text-white flex justify-between w-full max-md:hidden px-5 py-2">
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-phone"></i>
            <p>(225) 555-0118</p>
          </div>
          <div className="flex gap-2 items-center">
            <i className="fa-regular fa-envelope"></i>
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div>
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Follow Us :</p>
          <i className="fa-brands fa-instagram hover:opacity-75"></i>
          <i className="fa-brands fa-youtube hover:opacity-75"></i>
          <i className="fa-brands fa-facebook hover:opacity-75"></i>
          <i className="fa-brands fa-x-twitter hover:opacity-75"></i>
        </div>
      </div>

      {/* Alt Bilgi Navbar-Light */}
      {/* Ana Navigasyon (Main Navigation) */}
      <article className="flex justify-between px-6 py-3 items-center">
        <div className="flex gap-6 items-center ">
          <h1 className="text-3xl font-bold w-[145px] h-[32px] mt-[13px] font-montserrattext-[24px] leading-[32px] tracking-[0.1px] text-navBlueBg">
            NovaTrend
          </h1>
          <nav className="flex w-[361px] h-[25px] mt-[16.5px] gap-[15px] ml-4 font-semibold text-[#737373] max-md:hidden">
            <a className="hover:underline" href="/">
              Home
            </a>
            <div className="flex gap-1 items-center">
              <a className="hover:underline mb-1" href="/shop">
                Shop{" "}
              </a>
              <button className="relative">
                <i className="fa-solid fa-angle-down ml-1 mb-1"></i>
                {/* Dropdown menü buraya eklenecek */}
              </button>
            </div>
            <a className="hover:underline" href="/about-us">
              About
            </a>
            <a className="hover:underline" href="/team">
              Team
            </a>
            <a className="hover:underline" href="/contact">
              Contact
            </a>
            <a className="hover:underline" href="/pages">
              Pages
            </a>
          </nav>
        </div>
        <div className="flex gap-5 text-[#23A6F0] font-semibold items-center max-md:text-2xl">
          <div className="max-md:hidden">
            {/* Kullanıcı durumu burada olacak */}
            <a className="hover:underline" href="/login">
              Login
            </a>{" "}
            /
            <a className="hover:underline" href="/register">
              Register
            </a>
          </div>
          <i className="fa-solid fa-magnifying-glass hover:opacity-75"></i>
          <div className="relative">
            <div className="flex justify-center items-center relative">
              <i className="fa-solid fa-cart-shopping hover:opacity-75"></i>
              {/* Alışveriş sepeti sayısı */}
            </div>
            {/* Alışveriş sepeti dropdown buraya eklenecek */}
          </div>
          <i className="fa-regular fa-heart max-md:hidden hover:opacity-75"></i>
          <i className="fa-solid fa-bars md:hidden hover:opacity-75"></i>
          {/* Kullanıcı oturum açmışsa Logout butonu */}
        </div>
      </article>
    </section>
  );
};

export default Navbar;