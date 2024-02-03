import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="fixed top-0 z-10 left-0 w-full">
        <nav className="bg-slate-200 p-3 lg:p-6">
          <div className="mx-auto flex lg:grid lg:grid-cols-3 justify-between items-center">
            <div className="ml-5">
              <h1 className="text-2xl lg:text-4xl font-bold">Job Portal</h1>
            </div>

            <div className="hidden md:flex space-x-16 mr-16">
              <Link
                to="/"
                className="text-gray-500 hover:text-blue-700 text-3xl font-bold"
              >
                Statistics
              </Link>
              <Link
                to="/applied"
                className="text-gray-500 hover:text-blue-700 text-3xl font-bold"
              >
                Applied Jobs
              </Link>
              <Link
                to="/blog"
                className="text-gray-500 hover:text-blue-700 text-3xl font-bold"
              >
                Blog
              </Link>
              
            </div>

            <Link to="/"><button className=" hidden md:flex justify-center items-center ml-auto bg-blue-800 hover:bg-slate-100 p-6 rounded-lg">
            <h1 className=" text-white hover:text-black font-bold text-2xl">Star Applying</h1>
            </button></Link>

            <div className="md:hidden">
              <button
                id="mobile-menu-button"
                className="text-black focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`md:hidden ${
            isMobileMenuOpen ? "" : "hidden"
          } bg-neutral-300 p-4`}
        >
          <Link to="/" className="text-black font-bold block py-2 hover:underline">
            Home
          </Link>
          <Link
            to="/applied"
            className="text-black font-bold block py-2 hover:underline"
          >
            Applied Jobs
          </Link>
          <Link to="/blog" className="text-black font-bold block py-2 hover:underline">
            Blog
          </Link>
          <Link to="/">
          <button className=" flex justify-center items-center mt-5 bg-blue-800 p-4 rounded-lg hover:bg-slate-100">
            <h1 className=" text-white hover:text-black font-bold text-xl">Star Applying</h1>
            </button>
          </Link>
        </div>
    </div>
  );
};

export default Header;
