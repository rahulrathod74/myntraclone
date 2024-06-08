// src/Navbar.js
import React, { useState } from 'react';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="#" className="font-bold text-xl text-gray-800">Brand</a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {NAV_ITEMS.map((navItem, index) => (
                  <div key={navItem.label} className="relative group" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                    <a href={navItem.href} className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{navItem.label}</a>
                    {navItem.children && (
                      <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md transition-all duration-300 overflow-hidden ${hoverIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="py-2">
                          {navItem.children.map((child) => (
                            <a key={child.label} href={child.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{child.label}</a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {NAV_ITEMS.map((navItem) => (
            <a key={navItem.label} href={navItem.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{navItem.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Services',
    href: '#',
    children: [
      {
        label: 'Service 1',
        href: '#',
      },
      {
        label: 'Service 2',
        href: '#',
      },
    ],
  },
  {
    label: 'About Us',
    href: '#',
  },
  {
    label: 'Contact Us',
    href: '#',
  },
];

export default Navbar1;
