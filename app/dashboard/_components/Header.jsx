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
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

// Utility for className concatenation (mimicking cn from provided example)
const cn = (...classes) => classes.filter(Boolean).join(' ');

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Upgrade', href: '/upgrade' },
  { name: 'How it Works', href: '/how' },
];

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (route) => {
    router.push(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-teal-200/20 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div
            onClick={() => handleNavigation('/')}
            className="flex items-center cursor-pointer"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
              AIInterview Hub
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-10 text-sm font-medium">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  'relative px-3 py-2 rounded-lg transition-all duration-200 ease-in-out font-semibold tracking-wide cursor-pointer',
                  pathname === item.href
                    ? 'text-teal-600 bg-teal-100/50'
                    : 'text-gray-700 hover:bg-teal-50/70 hover:text-teal-600'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute inset-x-2 bottom-1 h-1 bg-teal-500 rounded-full opacity-20" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-teal-50/50 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-gray-700" />
          ) : (
            <Menu className="h-5 w-5 text-gray-700" />
          )}
        </button>

        {/* User Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <UserButton />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-teal-200/20 shadow-lg animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  'text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 tracking-wide cursor-pointer',
                  pathname === item.href
                    ? 'text-teal-600 bg-teal-100/50'
                    : 'text-gray-700 hover:bg-teal-50/70 hover:text-teal-600'
                )}
              >
                {item.name}
              </div>
            ))}
            <div className="pt-2 px-4">
              <UserButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;