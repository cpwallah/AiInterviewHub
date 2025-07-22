"use client"
import { UserButton } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Header() {
  const path = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(path);
  }, []);

  const handleNavigation = (route) => {
    router.push(route);
    setIsMenuOpen(false); // Close the menu on mobile after navigation
  };

  return (
    <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 bg-gradient-to-r from-teal-50 via-blue-50 to-gray-100 shadow-xl border-b border-teal-200/60 animate-fade-in-slow">
      <div className="flex-shrink-0">
        <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text drop-shadow-sm animate-pulse-subtle hover:scale-105 transition-transform duration-300 cursor-pointer">
          AIInterview Hub
        </h1>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-teal-700 focus:outline-none"
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:items-center gap-2 sm:gap-4 md:gap-6 absolute md:static top-14 right-2 md:right-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none rounded-lg md:rounded-none w-40 md:w-auto transition-all duration-300`}
      >
        <li
          className={`hover:text-teal-700 hover:font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
            path === '/dashboard' && 'text-teal-700 font-semibold'
          }`}
          onClick={() => handleNavigation('/dashboard')}
        >
          Dashboard
        </li>
        {/* <li
          className={`hover:text-teal-700 hover:font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
            path === '/dashboard/questions' && 'text-teal-700 font-semibold'
          }`}
          onClick={() => handleNavigation('/dashboard/questions')}
        >
          Questions
        </li> */}
        <li
          className={`hover:text-teal-700 hover:font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
            path === '/upgrade' && 'text-teal-700 font-semibold'
          }`}
          onClick={() => handleNavigation('/upgrade')}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-teal-700 hover:font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
            path === '/how' && 'text-teal-700 font-semibold'
          }`}
          onClick={() => handleNavigation('/how')}
        >
          How it Works
        </li>
      </ul>
      <div className="flex-shrink-0 relative">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;