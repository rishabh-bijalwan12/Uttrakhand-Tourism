import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Image/logo.jpg';
import bg from '../Image/BG.webp';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        style={{ zIndex: '1000' }}
        className="bg-white dark:bg-gray-900 w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="ml-3 text-2xl font-semibold dark:text-white">UK</span>
          </a>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-label="Toggle menu"
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
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-gray-900 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-4 text-gray-900 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/query"
                  className="block py-2 px-4 text-gray-900 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700"
                >
                  Query
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`${
          location.pathname === '/' ? 'absolute top-16 w-full flex justify-center' : 'hidden'
        }`}
        style={{ height: 'calc(100vh - 64px)' }}
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
