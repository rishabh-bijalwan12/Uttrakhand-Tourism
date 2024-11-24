import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Image/logo.jpg";
import bg from "../Image/BG.webp";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className="bg-white dark:bg-gray-900 w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600 z-50 relative"
        style={{ zIndex: 50 }}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="ml-3 text-2xl font-semibold dark:text-white">UK</span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-14 right-4 bg-white border border-gray-200 rounded-lg shadow-lg w-48 md:static md:flex md:items-center md:w-auto md:shadow-none md:border-none z-50`}
          >
            {/* Close Button */}
            <div className="flex justify-end px-4 pt-4">
              <button
                onClick={closeMenu}
                className="p-2 text-gray-600 rounded-md hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul
              className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0"
              onClick={closeMenu}
            >
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 rounded-md text-black hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 dark:text-black dark:hover:bg-gray-700"
                  aria-current={location.pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-4 rounded-md text-black hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 dark:text-black dark:hover:bg-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/query"
                  className="block py-2 px-4 rounded-md text-black hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 dark:text-black dark:hover:bg-gray-700"
                >
                  Query
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conditional Background Image */}
      <div
        className={`${
          location.pathname === "/"
            ? "absolute top-16 w-full flex justify-center"
            : "hidden"
        }`}
        style={{ height: "calc(100vh - 64px)" }}
      >
        <img
          className="hidden md:block object-cover w-full h-2/3"
          src={bg}
          alt="Background"
        />
      </div>
    </>
  );
}

export default Navbar;
