import React from 'react';
import Link from 'next/link';

const CallToActionBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white py-4 px-4 shadow-lg border-t border-[#FCAB17]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Text */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold mb-1">Start Your Child&apos;s Learning Journey Today!</p>
            <p className="text-sm text-white/90">Give your child the gift of quality early education</p>
          </div>
          
          {/* Divider Line - Visible only on larger screens */}
          <div className="hidden sm:block h-12 w-px bg-white/30"></div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/enrol"
              className="px-6 py-3 bg-white text-[#08472C] font-bold rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              Enroll Your Child
            </Link>
            
            <Link
              href="/partner"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:shadow-lg transition-all duration-300 text-center"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBanner;