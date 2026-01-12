import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import user from "../assets/icons/user.svg";
import search from "../assets/icons/search.svg";
import HeaderSearch from "../components/search/HeaderSearch";
import CartBag from "../components/icons/CartBag";

const Header = ({ handleModel, handleDrawer }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 300);
    };

    window.addEventListener("scroll", onScroll);
    // return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        scrolled
          ? `sticky top-0 z-50 bg-[#F6F9FC] transition-all duration-300 shadow-2xl`
          : ` bg-[#F6F9FC] border-b border-gray-200/50`
      }
    >
      <nav
        aria-label="Global"
        className="mx-auto flex flex-col gap-y-8 py-6 px-4 lg:px-0 max-w-7xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Qwojoslay</span>
              <img src={logo} alt="Qwojoslay logo" />
            </a>
          </div>

          <div className="hidden lg:flex justify-center">
            <HeaderSearch />
          </div>

          <div className="flex lg:flex-1 justify-end gap-x-3">
            <div
              className="lg:h-10 lg:w-10 lg:rounded-full lg:bg-gray-200 flex items-center justify-center cursor-pointer lg:hidden"
              onClick={handleModel}
            >
              <img src={search} alt="search" />
            </div>

            <div
              className="lg:h-10 lg:w-10 lg:rounded-full lg:bg-gray-200 flex items-center justify-center cursor-pointer"
              onClick={handleModel}
            >
              <img src={user} alt="user" />
            </div>

            <div
              className="lg:h-10 lg:w-10 lg:rounded-full lg:bg-gray-200 flex items-center justify-center cursor-pointer relative"
              onClick={handleDrawer}
            >
              <CartBag className="text-gray-500" />
              <span className="absolute -top-3 -right-1 bg-red-700 h-5 w-5 rounded-full flex items-center justify-center text-white text-xs">
                3
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
