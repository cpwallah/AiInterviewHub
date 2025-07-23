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
    // Close menu when path changes (e.g., after navigation)
    setIsMenuOpen(false);
  }, [path]);

  const handleNavigation = (route) => {
    router.push(route);
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className="flex items-center justify-between p-3 sm:p-4 md:p-5 bg-gradient-to-r from-teal-50 via-blue-50 to-gray-100 shadow-lg border-b border-teal-200/60">
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1
          className="text-base sm:text-lg md:text-xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => handleNavigation('/')}
        >
          AIInterview Hub
        </h1>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md p-2"
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
        className={`fixed inset-0 z-50 bg-white md:bg-transparent md:static md:flex md:items-center md:gap-6 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full md:opacity-100 md:translate-x-0'
        } md:flex-row flex-col md:h-auto h-full p-6 md:p-0 md:shadow-none shadow-2xl`}
        aria-hidden={!isMenuOpen && 'true'}
      >
        {/* Backdrop for mobile */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <ul className="relative flex flex-col md:flex-row gap-4 md:gap-6 z-10 md:bg-transparent bg-white md:p-0 p-4 rounded-lg">
          <li
            className={`text-lg md:text-base py-2 md:py-0 hover:text-teal-700 hover:font-semibold transition-all duration-200 cursor-pointer ${
              path === '/dashboard' && 'text-teal-700 font-semibold'
            }`}
            onClick={() => handleNavigation('/dashboard')}
          >
            Dashboard
          </li>
          <li
            className={`text-lg md:text-base py-2 md:py-0 hover:text-teal-700 hover:font-semibold transition-all duration-200 cursor-pointer ${
              path === '/upgrade' && 'text-teal-700 font-semibold'
            }`}
            onClick={() => handleNavigation('/upgrade')}
          >
            Upgrade
          </li>
          <li
            className={`text-lg md:text-base py-2 md:py-0 hover:text-teal-700 hover:font-semibold transition-all duration-200 cursor-pointer ${
              path === '/how' && 'text-teal-700 font-semibold'
            }`}
            onClick={() => handleNavigation('/how')}
          >
            How it Works
          </li>
        </ul>
      </nav>

      {/* User Button */}
      <div className="flex-shrink-0">
        <UserButton />
      </div>
    </header>
  );
}

export default Header;