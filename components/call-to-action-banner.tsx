"use client";

import React, { useState } from "react";
import Link from "next/link";

const CallToActionBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white py-3 px-4 shadow-lg border-t border-[#FCAB17]">
      <div className="max-w-7xl mx-auto relative">

        {/* Close Button - always visible, top right */}
        <button
          onClick={() => setVisible(false)}
          className="absolute -top-1 right-0 text-white/70 hover:text-white text-lg leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pr-6">

          {/* Left Text */}
          <div className="text-center sm:text-left">
            <p className="text-base font-bold">
              Start Your Child&apos;s Learning Journey Today!
            </p>
            <p className="text-sm text-white/80">
              Give your child the gift of quality early education
            </p>
          </div>

          {/* Divider (desktop only) */}
          <div className="hidden sm:block h-8 w-px bg-white/30"></div>

          {/* Buttons */}
          <div className="flex flex-row gap-2">
            <Link
              href="/eurokids-enroll"
              className="px-5 py-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#08472C] font-bold rounded-md hover:shadow-lg transition-all duration-300 text-center text-sm"
            >
              Enroll Your Child
            </Link>

            <Link
              href="/franchise"
              className="px-5 py-2 bg-transparent border border-white text-white font-bold rounded-md hover:bg-white/10 transition-all duration-300 text-center text-sm"
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
