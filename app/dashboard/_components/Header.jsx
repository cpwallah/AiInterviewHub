// "use client"
// import { UserButton } from '@clerk/nextjs';
// import { usePathname, useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// function Header() {
//   const path = usePathname();
//   const router = useRouter();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     console.log(path);
//   }, []);

//   const handleNavigation = (route) => {
//     router.push(route);
//     setIsMenuOpen(false); // Close the menu on mobile after navigation
//   };

//   return (
//     <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 bg-gradient-to-r from-teal-50 via-blue-50 to-gray-100 shadow-xl border-b border-teal-200/60 animate-fade-in-slow">
//       <div className="flex-shrink-0">
//         <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text drop-shadow-sm animate-pulse-subtle hover:scale-105 transition-transform duration-300 cursor-pointer">
//           AIInterview Hub
//         </h1>
//       </div>
//       <div className="md:hidden">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-gray-700 hover:text-teal-700 focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             />
//           </svg>
//         </button>
//       </div>
//       <ul
//         className={`${
//           isMenuOpen ? 'block' : 'hidden'
//         } md:flex md:items-center gap-2 sm:gap-4 md:gap-6 absolute md:static top-14 right-2 md:right-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none rounded-lg md:rounded-none w-40 md:w-auto transition-all duration-300`}
//       >
//         <li
//           className={`hover:text-teal-700 hover:font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
//             path === '/dashboard' && 'text-teal-700 font-semibold'
//           }`}
//           onClick={() => handleNavigation('/dashboard')}
//         >
//           Dashboard
//         </li>
//         {/* <li
//           className={`hover:text-teal-700 hover:font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
//             path === '/dashboard/questions' && 'text-teal-700 font-semibold'
//           }`}
//           onClick={() => handleNavigation('/dashboard/questions')}
//         >
//           Questions
//         </li> */}
//         <li
//           className={`hover:text-teal-700 hover:font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
//             path === '/upgrade' && 'text-teal-700 font-semibold'
//           }`}
//           onClick={() => handleNavigation('/upgrade')}
//         >
//           Upgrade
//         </li>
//         <li
//           className={`hover:text-teal-700 hover:font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
//             path === '/how' && 'text-teal-700 font-semibold'
//           }`}
//           onClick={() => handleNavigation('/how')}
//         >
//           How it Works
//         </li>
//       </ul>
//       <div className="flex-shrink-0 relative">
//         <UserButton />
//       </div>
//     </div>
//   );
// }

// export default Header;


"use client";
import { UserButton } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Header() {
  const path = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(path);
    setIsMenuOpen(false); // Close menu on path change
  }, [path]);

  const handleNavigation = (route) => {
    router.push(route);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow-md border-b border-gray-200">
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1
          className="text-lg sm:text-xl font-semibold text-gray-800 cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          AIInterview Hub
        </h1>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l border-gray-200 transform transition-transform duration-300 ease-in-out md:static md:w-auto md:h-auto md:bg-transparent md:shadow-none md:border-none md:flex md:items-center md:gap-6 z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}
        aria-hidden={!isMenuOpen && 'true'}
      >
        {/* Backdrop for mobile */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Close Button in Sidebar (Mobile) */}
        <div className="flex justify-end p-4 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-teal-600 focus:outline-none"
            aria-label="Close menu"
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

        <ul className="flex flex-col md:flex-row gap-4 px-4 md:px-0 md:gap-6">
          <li
            className={`text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-gray-100 py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer md:bg-transparent ${
              path === '/dashboard' && 'text-teal-600 bg-gray-100 md:bg-transparent'
            }`}
            onClick={() => handleNavigation('/dashboard')}
          >
            Dashboard
          </li>
          <li
            className={`text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-gray-100 py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer md:bg-transparent ${
              path === '/upgrade' && 'text-teal-600 bg-gray-100 md:bg-transparent'
            }`}
            onClick={() => handleNavigation('/upgrade')}
          >
            Upgrade
          </li>
          <li
            className={`text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-gray-100 py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer md:bg-transparent ${
              path === '/how' && 'text-teal-600 bg-gray-100 md:bg-transparent'
            }`}
            onClick={() => handleNavigation('/how')}
          >
            How it Works
          </li>
        </ul>
      </nav>

      {/* User Button */}
      <div className="flex-shrink-0 hidden md:block">
        <UserButton />
      </div>
    </header>
  );
}

export default Header;