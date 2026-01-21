'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, BookOpen, Trophy, GraduationCap, Phone, LogIn, Building, FileText, Star, ArrowRight, Images, Users, Book, UserPlus } from 'lucide-react';
import Image from 'next/image';

export default function EnhancedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allNavLinks = [
    { href: '/about', label: 'About Us', icon: <GraduationCap className="w-4 h-4" /> },
    { href: '/why-us', label: 'Why Us', icon: <Trophy className="w-4 h-4" /> },
    { 
      href: '/programmes', 
      label: 'Programmes',
      icon: <Book className="w-4 h-4" />,
      dropdown: [
        { href: '/programmes/playgroup', label: 'Playgroup' },
        { href: '/programmes/nursery', label: 'Nursery' },
        { href: '/programmes/kindergarten', label: 'Kindergarten' },
        { href: '/programmes/teacher-training', label: 'Teacher Training Programme' },
        { href: '/programmes/daycare', label: 'Daycare' },
      ]
    },
    { href: '/admissions', label: 'Admissions', icon: <UserPlus className="w-4 h-4" /> },
    { href: '/gallery', label: 'Gallery', icon: <Images className="w-4 h-4" /> },
    { href: '/success-stories', label: 'Success Stories', icon: <Star className="w-4 h-4" /> },
    { href: '/offline-batches', label: 'Offline Batches', icon: <Building className="w-4 h-4" /> },
    { href: '/blog', label: 'Blog', icon: <FileText className="w-4 h-4" /> },
    { href: '/contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
    { href: '/login', label: 'Login', icon: <LogIn className="w-4 h-4" /> },
  ];

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08472C]/95 backdrop-blur-md shadow-lg border-b border-[#B2C6BD]/50' 
        : 'bg-[#08472C] border-b border-[#B2C6BD]/30'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Image 
                src="/logo_1.png" 
                alt="Evernal Logo" 
                width={80} 
                height={80} 
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation - All Links in One Line */}
          <div className="hidden lg:flex items-center gap-1">
            {/* All Navigation Links in Correct Order */}
            {allNavLinks.map((link) => (
              <div 
                key={link.href} 
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white hover:text-[#FCAB17] transition-all duration-200 rounded-lg hover:bg-[#0F172A]/20 whitespace-nowrap ${
                    activeDropdown === link.label ? 'text-[#FCAB17] bg-[#0F172A]/20' : ''
                  }`}
                >
                  {link.icon && <span className="opacity-70">{link.icon}</span>}
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === link.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>
                
                {/* Dropdown Menu for Programmes */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-[#B2C6BD]/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-[#0F172A] hover:text-[#08472C] hover:bg-[#B2C6BD]/20 transition-all duration-200 border-b border-[#B2C6BD]/30 last:border-0 group"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#08472C] opacity-70 group-hover:opacity-100"></div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          {item.label === 'Teacher Training Programme' && (
                            <div className="text-xs text-[#08472C]/70 mt-0.5">Professional Development</div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Enroll Now Button - Desktop */}
            <Link
              href="/enroll"
              className="ml-2 relative px-4 py-2.5 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform overflow-hidden group flex items-center gap-1.5 whitespace-nowrap"
            >
              <span className="relative z-10">Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FCAB17] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="flex lg:hidden items-center gap-1">
            {/* Enroll Now Button - Mobile (Shorter text for mobile) */}
            <Link
              href="/enroll"
              className="px-3 py-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] text-sm font-semibold rounded-lg shadow hover:shadow-md transition-all duration-300 whitespace-nowrap"
            >
              Enroll
            </Link>

            {/* Mobile Menu Button - Simple 3 lines icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#FCAB17] rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div className={`lg:hidden fixed inset-0 z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}>
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel - Right side slide */}
        <div className={`fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#B2C6BD]/30 bg-gradient-to-r from-[#08472C] to-[#0F172A]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                <Image 
                  src="/logo_1.png" 
                  alt="Evernal Logo" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Evernal</div>
                <div className="text-xs text-white/70">Menu</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="h-[calc(100vh-73px)] overflow-y-auto bg-gradient-to-b from-white to-[#B2C6BD]/10">
            <div className="p-4">
              {/* Enroll Now Button - Top (Removed from mobile menu) */}
              
              {/* Main Links List */}
              <div className="space-y-1">
                {allNavLinks.map((link) => (
                  <div key={link.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-3 text-[#0F172A] hover:text-[#08472C] hover:bg-[#B2C6BD]/20 rounded-lg transition-all duration-200 font-medium w-full"
                        onClick={() => {
                          if (!link.dropdown) {
                            setIsOpen(false);
                          }
                        }}
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-[#08472C]/10 rounded-lg">
                          {link.icon}
                        </div>
                        <span className="text-sm">{link.label}</span>
                      </Link>
                      
                      {link.dropdown && (
                        <button 
                          onClick={() => toggleDropdown(link.label)}
                          className="p-2 mr-2"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-[#08472C] ${
                            activeDropdown === link.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown */}
                    {link.dropdown && activeDropdown === link.label && (
                      <div className="ml-12 my-1 pl-4 border-l-2 border-[#08472C]">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2 text-[#0F172A] hover:text-[#08472C] rounded-lg transition-all duration-200 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#FCAB17]' : idx === 1 ? 'bg-[#08472C]' : idx === 2 ? 'bg-[#0F172A]' : idx === 3 ? 'bg-[#FF6B6B]' : 'bg-[#4ECDC4]'}`}></div>
                            <span className="font-medium text-xs">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Contact Section */}
              <div className="mt-8 pt-4 border-t border-[#B2C6BD]/30">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-3">Quick Contact</h4>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-[#08472C] text-sm hover:underline" onClick={() => setIsOpen(false)}>
                    <div className="w-10 h-10 bg-[#B2C6BD]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-xs">+91 98765 43210</div>
                    </div>
                  </a>
                  <a href="mailto:info@evernal.com" className="flex items-center gap-3 text-[#08472C] text-sm hover:underline" onClick={() => setIsOpen(false)}>
                    <div className="w-10 h-10 bg-[#B2C6BD]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-xs">info@evernal.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 pt-4 border-t border-[#B2C6BD]/30">
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/demo" className="text-center px-3 py-2 bg-[#08472C]/5 text-[#08472C] text-xs font-medium rounded-lg hover:bg-[#08472C]/10 transition-colors" onClick={() => setIsOpen(false)}>
                    Demo Class
                  </Link>
                  <Link href="/brochure" className="text-center px-3 py-2 bg-[#08472C]/5 text-[#08472C] text-xs font-medium rounded-lg hover:bg-[#08472C]/10 transition-colors" onClick={() => setIsOpen(false)}>
                    Brochure
                  </Link>
                  <Link href="/faq" className="text-center px-3 py-2 bg-[#08472C]/5 text-[#08472C] text-xs font-medium rounded-lg hover:bg-[#08472C]/10 transition-colors" onClick={() => setIsOpen(false)}>
                    FAQ
                  </Link>
                  <Link href="/enroll" className="text-center px-3 py-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] text-xs font-semibold rounded-lg shadow transition-all" onClick={() => setIsOpen(false)}>
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}