'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight, Phone, GraduationCap, Trophy, Book, UserPlus, Images, Star, Building, FileText } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About Us', icon: <GraduationCap className="w-4 h-4" /> },
  { href: '/why-us', label: 'Why Us', icon: <Trophy className="w-4 h-4" /> },
  {
    href: '/programmes',
    label: 'Programmes',
    icon: <Book className="w-4 h-4" />,
    dropdown: [
      { href: '/programmes/playgroup', label: 'Playgroup', sub: '2–3 Years' },
      { href: '/programmes/nursery', label: 'Nursery', sub: '3–4 Years' },
      { href: '/programmes/kindergarten', label: 'Kindergarten', sub: '4–6 Years' },
      { href: '/programmes/teacher-training', label: 'Teacher Training', sub: 'Professional Development' },
      { href: '/programmes/daycare', label: 'Daycare', sub: 'Full Day Care' },
    ],
  },
  { href: '/admissions', label: 'Admissions', icon: <UserPlus className="w-4 h-4" /> },
  { href: '/gallery', label: 'Gallery', icon: <Images className="w-4 h-4" /> },
  { href: '/success-stories', label: 'Success Stories', icon: <Star className="w-4 h-4" /> },
  { href: '/offline-batches', label: 'Offline Batches', icon: <Building className="w-4 h-4" /> },
  { href: '/blog', label: 'Blog', icon: <FileText className="w-4 h-4" /> },
  { href: '/contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setHidden(y > lastScrollY.current && y > 80);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { setIsOpen(false); setActiveDropdown(null); }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'} ${
        scrolled
          ? 'bg-[#052e1c]/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5'
          : 'bg-gradient-to-b from-[#052e1c] to-[#063d26]'
      }`}>
        {/* Top gold accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#FCAB17]/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center group">
              <Image
                src="/logo_2-removebg-preview.png"
                alt="Evernal Academy"
                width={80} height={80}
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain drop-shadow-lg"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap group ${
                      activeDropdown === link.label ? 'text-[#FCAB17]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-[#FCAB17]' : ''}`} />
                    )}
                    {/* Hover underline */}
                    <span className={`absolute bottom-0 left-2.5 right-2.5 h-px bg-[#FCAB17] transition-all duration-300 ${activeDropdown === link.label ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'}`} />
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#052e1c] border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
                      <div className="p-1.5">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/8 transition-all duration-150 group"
                          >
                            <div>
                              <div className="text-white text-sm font-medium group-hover:text-[#FCAB17] transition-colors">{item.label}</div>
                              <div className="text-white/40 text-xs mt-0.5">{item.sub}</div>
                            </div>
                            <ArrowRight className="w-3 h-3 text-white/20 group-hover:text-[#FCAB17] group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Enroll CTA */}
              <Link
                href="/enroll"
                className="ml-3 flex items-center gap-1.5 px-5 py-2.5 bg-[#FCAB17] hover:bg-[#e09a14] text-[#0F172A] text-sm font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FCAB17]/20 whitespace-nowrap"
              >
                Enroll Now <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile right */}
            <div className="flex lg:hidden items-center gap-2">
              <Link href="/enroll" className="px-3.5 py-2 bg-[#FCAB17] text-[#0F172A] text-sm font-bold rounded-lg shadow">
                Enroll
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Menu">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />

        <div className={`absolute right-0 top-0 h-full w-[80vw] max-w-xs bg-[#052e1c] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image src="/logo_2-removebg-preview.png" alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              <div>
                <div className="text-white font-bold text-sm">Evernal Academy</div>
                <div className="text-[#FCAB17]/60 text-[10px] tracking-widest uppercase">Preschool & Daycare</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1.5 text-white/60 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-3 px-3">
            {navLinks.map((link) => (
              <div key={link.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 flex-1 px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
                    onClick={() => { if (!link.dropdown) setIsOpen(false); }}
                  >
                    <span className="text-[#FCAB17]/60">{link.icon}</span>
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)} className="p-2 text-white/40 hover:text-white transition-colors">
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {link.dropdown && activeDropdown === link.label && (
                  <div className="ml-10 mb-1 border-l border-[#FCAB17]/20 pl-3 space-y-0.5">
                    {link.dropdown.map((item) => (
                      <Link key={item.href} href={item.href} className="block px-3 py-2 text-white/60 hover:text-[#FCAB17] text-sm rounded-lg hover:bg-white/5 transition-all" onClick={() => setIsOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Drawer footer */}
          <div className="p-4 border-t border-white/10">
            <Link href="/enroll" className="flex items-center justify-center gap-2 w-full py-3 bg-[#FCAB17] hover:bg-[#e09a14] text-[#0F172A] font-bold text-sm rounded-xl transition-all" onClick={() => setIsOpen(false)}>
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+917003999531" className="flex items-center justify-center gap-2 mt-2 py-2.5 text-white/50 hover:text-white text-xs transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 7003999531
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
