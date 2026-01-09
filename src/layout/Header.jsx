import React from "react";
import logo from "../assets/logo.svg";
import user from "../assets/icons/user.svg";
import cart from "../assets/icons/bag.svg";
import search from "../assets/icons/search.svg";
import HeaderSearch from "../components/search/HeaderSearch";

const Header = ({ handleModel, handleDrawer }) => {
  return (
    <header>
      <nav aria-label="Global" className="mx-auto flex flex-col gap-y-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Qwojoslay</span>
              <img src={logo} alt="" />
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
              <img src={search} alt="user" className="" />
            </div>
            <div
              className="lg:h-10 lg:w-10 lg:rounded-full lg:bg-gray-200 flex items-center justify-center cursor-pointer"
              onClick={handleModel}
            >
              <img src={user} alt="user" className="" />
            </div>
            <div
              className="lg:h-10 lg:w-10 lg:rounded-full lg:bg-gray-200 flex items-center justify-center cursor-pointer relative"
              onClick={handleDrawer}
            >
              <img src={cart} alt="user" className="" />
              <span className="absolute -top-3 -right-1 bg-red-700 h-5 w-5 rounded-full flex items-center justify-center text-white text-xs">
                3
              </span>
            </div>
          </div>
        </div>
        {/* <div>Heelo</div> */}
      </nav>
    </header>
  );
};

export default Header;
