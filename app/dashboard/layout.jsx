// import React from 'react'
// import Header from './_components/Header'

// function Dashboardlayout({children}) {
//   return (
//     <div>
//     <Header/>
//     <div className='mx-5 md:mx-20 lg:mx-36'>{children}</div>
//     </div>
//   )
// }

// export default Dashboardlayout

"use client";
import React from 'react';
import Header from './_components/Header';
import { usePathname } from 'next/navigation';

function Dashboardlayout({ children }) {
  const pathname = usePathname();
  const isInterviewPage = pathname.includes('/dashboard/interview');

  return (
    <div className="min-h-screen w-full bg-transparent">
      <Header />
      {/* className={isInterviewPage ? 'w-full' : 'mx-5 md:mx-20 lg:mx-36'} */}
      <div >
        {children}
      </div>
    </div>
  );
}

export default Dashboardlayout;