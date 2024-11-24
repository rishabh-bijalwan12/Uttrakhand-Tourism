import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <footer className={location.pathname === '/' ? 'relative bg-gray-600 text-white p-4' : 'hidden'}>
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Uttrakhand tourism. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-300 hover:text-white mr-4">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
