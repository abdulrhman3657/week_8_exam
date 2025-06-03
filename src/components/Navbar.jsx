import React, { useState } from "react";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const username = localStorage.getItem("username");


const [mobileMenue, setNobliMenue] = useState(false)

  return (
    <div>
      <nav className="bg-[#0f1111] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img
            src="https://wallpapers.com/images/high/amazon-logo-black-background-xb9pdemosnjfz9ej.png"
            className="h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Flowbite
          </span>
          <button
          onClick={(e) => setNobliMenue(prev => !prev)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={(mobileMenue) ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"}>
            <ul className="font-medium items-center flex text-white flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li className="flex items-center gap-2">
                <input
                  className="text-black bg-white lg:w-100 h-10 rounded-xl"
                  placeholder="   Search Amazon"
                  type="text"
                />
                <CiSearch className="text-3xl bg-amber-600 w-12 h-10 rounded-2xl" />
              </li>
              <li className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                <Link to={"login"}>login</Link>
              </li>
              <li className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                <Link to={"signup"}>signup</Link>
              </li>
              <li className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                {username}
              </li>
              <li className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                <Link to={"/cart"}>
                  <AiOutlineShoppingCart className="text-3xl"></AiOutlineShoppingCart>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
