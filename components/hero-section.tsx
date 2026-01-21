'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Users, BookOpen, TrendingUp, ChevronRight, Star, ChevronLeft, ChevronRight as ChevronRightIcon, Play, Shield, Target, Sparkles } from 'lucide-react';

export default function CleanHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  // Fix hydration error by only running on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto slide images (only on client)
  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMounted]);

  const backgroundImages = [
    '/landing_img/hero_img_1.jpg',
    '/landing_img/hero_img_2.jpg',
    '/landing_img/hero_img_3.jpg'
  ];

  const stats = [
    { value: '1000+', label: 'Happy Students' },
    { value: '95%', label: 'Parent Satisfaction' },
    { value: '25+', label: 'Expert Teachers' },
    { value: '12+', label: 'Years Experience' }
  ];

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: 'Safe Environment' },
    { icon: <Target className="w-5 h-5" />, text: 'Holistic Development' },
    { icon: <BookOpen className="w-5 h-5" />, text: 'Play-Based Learning' },
    { icon: <Sparkles className="w-5 h-5" />, text: 'Creative Curriculum' }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Images Only - No Color Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              currentSlide === index 
                ? 'opacity-100 z-0' 
                : 'opacity-0 z-[-1]'
            }`}
          >
            {/* Clean Image without Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{ 
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            {/* Very subtle dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hide on mobile */}
      <button
        onClick={handlePrevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/40 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={handleNextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/40 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-6 h-1.5 md:w-8 md:h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-[#FCAB17] w-8 md:w-12' 
                : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        {/* Mobile: Content Order */}
        <div className="block md:hidden mb-8">
          {/* Mobile: Academy Tag */}
          <div className="inline-block animate-fade-in mb-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#08472C]/20 to-[#08472C]/10 backdrop-blur-sm px-3 py-2 rounded-full border border-[#08472C]/30">
              <div className="w-2 h-2 rounded-full bg-[#08472C] animate-pulse"></div>
              <span className="text-white font-semibold text-xs">Evernal - Nurturing Young Minds Since 2010</span>
            </div>
          </div>

          {/* Mobile: Main Heading */}
          <div className="space-y-3 mb-6">
            <h1 className="text-3xl font-bold text-white leading-tight">
              Where Every Child's 
              <span className="block text-[#08472C] mt-2 relative">
                Journey Begins
                <span className="absolute -bottom-1 left-0 w-20 h-0.5 bg-[#FCAB17] rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-white/95 text-sm leading-relaxed max-w-xl font-light">
              We provide a nurturing environment for early childhood education, focusing on holistic development through play-based learning and personalized care.
            </p>
          </div>

          {/* Mobile: Features */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-[#08472C] to-[#0F5C3C] rounded flex items-center justify-center flex-shrink-0">
                  <div className="text-white text-xs">
                    {feature.icon}
                  </div>
                </div>
                <span className="text-white font-medium text-xs">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content - Desktop Only */}
          <div className="hidden md:block space-y-6 md:space-y-8">
            {/* Academy Tag */}
            <div className="inline-block animate-fade-in">
              <div className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#08472C]/20 to-[#08472C]/10 backdrop-blur-sm px-3 md:px-4 py-2 md:py-2.5 rounded-full border border-[#08472C]/30">
                <div className="w-2 h-2 rounded-full bg-[#08472C] animate-pulse"></div>
                <span className="text-white font-semibold text-xs md:text-sm">Evernal - Nurturing Young Minds Since 2010</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-tight">
                Where Every Child's 
                <span className="block text-[#08472C] mt-1 md:mt-2 relative">
                  Journey Begins
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-24 md:w-32 h-0.5 md:h-1 bg-[#FCAB17] rounded-full"></span>
                </span>
              </h1>
              
              <p className="text-white/95 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl font-light">
                We provide a nurturing environment for early childhood education, focusing on holistic development through play-based learning and personalized care.
              </p>
            </div>

            {/* Features - Improved List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 hover:bg-white/25 transition-all duration-300 group hover:translate-x-0 md:hover:translate-x-1 border border-white/30"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#08472C] to-[#0F5C3C] rounded-lg flex items-center justify-center group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <div className="text-white scale-75 md:scale-100">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-white font-medium text-sm md:text-base">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:shadow-lg hover:shadow-[#FCAB17]/30 hover:scale-105 transition-all duration-300 group text-sm md:text-base"
              >
                <span>Admission Inquiry</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/virtual-tour"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/25 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:bg-white/35 transition-all duration-300 group border border-white/40 text-sm md:text-base"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                <span>Virtual Tour</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Stats Card - Mobile First */}
          <div className="bg-gradient-to-br from-[#08472C]/95 to-[#0F5C3C]/90 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-white/30 p-4 md:p-6 lg:p-8 transform hover:scale-[1.02] transition-all duration-500">
            
            {/* Academy Info */}
            <div className="text-center mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-[#B2C6BD] flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-lg">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#08472C] to-[#0F5C3C] bg-clip-text text-transparent">JA</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Evernal Academy</h3>
              <p className="text-white/90 text-xs md:text-sm font-medium mt-1">Nurturing Future Leaders</p>
              
              {/* Divider */}
              <div className="w-12 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-[#FCAB17] to-transparent rounded-full mx-auto mt-2 md:mt-3"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/15 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 text-center hover:shadow-md transition-all duration-300 border border-white/20"
                >
                  <div className="text-lg md:text-2xl font-bold text-white mb-0.5 md:mb-1">{stat.value}</div>
                  <div className="text-xs text-white/80 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <Link 
                href="/programmes/playgroup" 
                className="flex items-center justify-between p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/15 transition-all duration-300 group border border-white/20"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FCAB17] flex-shrink-0"></div>
                  <span className="text-white font-medium text-sm md:text-base">Playgroup (2-3 Years)</span>
                </div>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
              
              <Link 
                href="/programmes/kindergarten" 
                className="flex items-center justify-between p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/15 transition-all duration-300 group border border-white/20"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FCAB17] flex-shrink-0"></div>
                  <span className="text-white font-medium text-sm md:text-base">Kindergarten (3-6 Years)</span>
                </div>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>

            {/* Rating & Trust Badge */}
            <div className="pt-4 md:pt-6 border-t border-white/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="flex text-[#FCAB17]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-white font-bold text-base md:text-lg">4.9</span>
                  </div>
                  <span className="text-white/70 text-xs mt-0.5">500+ Parent Reviews</span>
                </div>
                
                <div className="flex items-center gap-1.5 md:gap-2 bg-white/20 backdrop-blur-sm px-2.5 md:px-3 py-1 md:py-1.5 rounded-full">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  <span className="text-white text-xs font-medium">ISO Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: CTA Buttons - Below Card */}
          <div className="md:hidden mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#FCAB17]/30 hover:scale-105 transition-all duration-300 group text-sm"
              >
                <span>Admission Inquiry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/virtual-tour"
                className="inline-flex items-center justify-center gap-2 bg-white/25 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-bold hover:bg-white/35 transition-all duration-300 group border border-white/40 text-sm mt-3 sm:mt-0"
              >
                <Play className="w-4 h-4" />
                <span>Virtual Tour</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators at Bottom - Only show on Desktop */}
        <div className="hidden md:grid mt-8 md:mt-12 lg:mt-16 grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/30">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
            <div>
              <div className="text-white font-semibold text-sm md:text-base">Certified</div>
              <div className="text-white/80 text-xs md:text-sm">Teachers</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/30">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
            <div>
              <div className="text-white font-semibold text-sm md:text-base">Small</div>
              <div className="text-white/80 text-xs md:text-sm">Class Sizes</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/30">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
            <div>
              <div className="text-white font-semibold text-sm md:text-base">Modern</div>
              <div className="text-white/80 text-xs md:text-sm">Curriculum</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/30">
            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
            <div>
              <div className="text-white font-semibold text-sm md:text-base">Progressive</div>
              <div className="text-white/80 text-xs md:text-sm">Learning</div>
            </div>
          </div>
        </div>

        {/* Mobile: Trust Indicators - Show at bottom in grid */}
        <div className="md:hidden grid grid-cols-2 gap-2 mt-6">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30">
            <Award className="w-4 h-4 text-white" />
            <div>
              <div className="text-white font-semibold text-xs">Certified</div>
              <div className="text-white/80 text-xs">Teachers</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30">
            <Users className="w-4 h-4 text-white" />
            <div>
              <div className="text-white font-semibold text-xs">Small</div>
              <div className="text-white/80 text-xs">Class Sizes</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30">
            <BookOpen className="w-4 h-4 text-white" />
            <div>
              <div className="text-white font-semibold text-xs">Modern</div>
              <div className="text-white/80 text-xs">Curriculum</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30">
            <TrendingUp className="w-4 h-4 text-white" />
            <div>
              <div className="text-white font-semibold text-xs">Progressive</div>
              <div className="text-white/80 text-xs">Learning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-[#FCAB17]/10 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-[#08472C]/10 rounded-full blur-2xl md:blur-3xl"></div>
      </div>
    </section>
  );
}