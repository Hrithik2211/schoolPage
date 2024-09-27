import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-500 p-4 pb-9 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="md:hidden flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="text-white font-semibold">AuraScl</span>
            </div>
            <a
              href="tel:+91-9540349392"
              className="text-white text-sm hidden sm:block"
            >
              📞 +91-9540349392
            </a>
            <a
              href="mailto:contact@schoolaura.com"
              className="text-white text-sm hidden sm:block"
            >
              ✉ contact@schoolaura.com
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Exam Solution
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Online Study
            </a>
          </div>

          <div className="hidden md:flex space-x-2">
            <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
              WhatsApp
            </button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
              Mobile App
            </button>
            <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800">
              Login
            </button>
            <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800">
              Register
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out mt-4`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700"
          >
            Exam Solution
          </a>
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700"
          >
            Online Study
          </a>
          <button className="bg-green-500 text-white px-3 py-2 rounded text-base font-medium hover:bg-green-600 w-full text-left mt-2">
            WhatsApp
          </button>
          <button className="bg-blue-500 text-white px-3 py-2 rounded text-base font-medium hover:bg-blue-600 w-full text-left">
            Mobile App
          </button>
          <button className="bg-black text-white px-3 py-2 rounded text-base font-medium hover:bg-gray-800 w-full text-left">
            Login
          </button>
          <button className="bg-black text-white px-3 py-2 rounded text-base font-medium hover:bg-gray-800 w-full text-left">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
