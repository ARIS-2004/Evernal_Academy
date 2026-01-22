'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Company {
  id: number;
  logo: string;
  color: string;
}

const companies: Company[] = [
  {
    id: 1,
    logo: '/logo/Aditya-Birla-logo.png',
    color: 'from-white/95 to-white/90'
  },
  {
    id: 2,
    logo: '/logo/Hariyana -logo.png',
    color: 'from-white/95 to-white/90'
  },
  {
    id: 3,
    logo: '/logo/Orchid-nternational-logo.png',
    color: 'from-white/95 to-white/90'
  },
  {
    id: 4,
    logo: '/logo/St-John-logo.png',
    color: 'from-white/95 to-white/90'
  },
  {
    id: 5,
    logo: '/logo/Narayana-logo.png',
    color: 'from-white/95 to-white/90'
  },
];

export default function TieUpWithCompanies() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto slide effect - RIGHT TO LEFT
  useEffect(() => {
    if (!isMounted || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMounted, isHovered]);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length);
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % companies.length);
  };

  const getVisibleCompanies = (): Company[] => {
    const items: Company[] = [];
    const totalItems = companies.length;
    
    // Always show 5 items
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % totalItems;
      items.push(companies[index]);
    }
    
    return items;
  };

  const handleImageError = (companyId: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageErrors(prev => new Set(prev).add(companyId));
  };

  if (!isMounted) return null;

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCAB17]/20 to-[#FCAB17]/10 px-4 py-2 rounded-full mb-2">
            <div className="w-2 h-2 rounded-full bg-[#FCAB17] animate-pulse"></div>
            <span className="text-[#08472C] font-semibold text-sm md:text-base">Our Partners</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#08472C] mb-2">
            In Partnership With
          </h2>
          
          <p className="text-[#0F5C3C]/80 max-w-2xl mx-auto text-sm md:text-base">
            Collaborating with global leaders to provide the best educational resources and technology for our students
          </p>
        </div>

        {/* Horizontal Line Container */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#08472C]/20 to-transparent -z-10"></div>
          
          {/* Companies Container - In a single line */}
          <div 
            className="relative overflow-hidden py-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-300 shadow-lg"
              aria-label="Previous companies"
            >
              <ChevronLeft className="w-5 h-5 text-[#08472C] group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-300 shadow-lg"
              aria-label="Next companies"
            >
              <ChevronRight className="w-5 h-5 text-[#08472C] group-hover:scale-110 transition-transform" />
            </button>

            {/* Companies in Single Line */}
            <div className="flex justify-center items-center space-x-3 md:space-x-6 lg:space-x-8">
              {getVisibleCompanies().map((company) => (
                <div
                  key={company.id}
                  className={`bg-gradient-to-br ${company.color} backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-200/70 hover:shadow-xl transition-all duration-500 hover:scale-[1.05] group relative overflow-hidden h-[80px] w-[100px] md:h-[100px] md:w-[120px] lg:h-[120px] lg:w-[140px]`}
                >
                  {/* Company Logo - Full Image */}
                  <div className="relative w-full h-full p-2 md:p-3">
                    {imageErrors.has(company.id) ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                        <span className="text-gray-400 font-bold text-lg md:text-xl">P</span>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={company.logo}
                          alt="Partner logo"
                          fill
                          className="object-contain object-center opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="(max-width: 768px) 100px, 140px"
                          priority={company.id <= 2}
                          onError={(e) => handleImageError(company.id, e)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-300 shadow-md"
                aria-label="Previous companies"
              >
                <ChevronLeft className="w-4 h-4 text-[#08472C]" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex items-center gap-1">
                {companies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-[#FCAB17] w-3' : 'bg-[#08472C]/30 hover:bg-[#08472C]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-300 shadow-md"
                aria-label="Next companies"
              >
                <ChevronRight className="w-4 h-4 text-[#08472C]" />
              </button>
            </div>
            
            {/* Auto Slide Indicator */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 text-xs">
                <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-gray-400' : 'bg-[#FCAB17] animate-pulse'}`}></div>
                <span className="text-gray-600">
                  {isHovered ? 'Hover to pause' : 'Auto-rotating'} • Slide {currentIndex + 1} of {companies.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}