'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: '/landing_img/landing_img_new.jpeg',
    heading: 'Where Every Child\'s',
    highlight: 'Journey Begins',
    sub: 'A nurturing space where curiosity is celebrated and every milestone matters.',
  },
  {
    image: '/landing_img/landing_img_new2.jpeg',
    heading: 'Shaping Young Minds',
    highlight: 'With Heart & Purpose',
    sub: 'Expert educators dedicated to holistic growth — academically, socially, and emotionally.',
  },
  {
    image: '/landing_img/hero_img_1.jpeg',
    heading: 'Play-Based Learning',
    highlight: 'That Lasts a Lifetime',
    sub: 'We believe the best lessons are learned through joy, exploration, and imagination.',
  },
  {
    image: '/landing_img/hero_img_2.jpeg',
    heading: 'A Safe Haven',
    highlight: 'For Little Explorers',
    sub: 'Every corner of our campus is designed to inspire wonder and build confidence.',
  },
  {
    image: '/landing_img/hero_img_3.jpg',
    heading: 'Nurturing Potential',
    highlight: 'One Child at a Time',
    sub: 'Personalised attention ensures every child thrives at their own unique pace.',
  },
  {
    image: '/landing_img/hero_img_4.jpg',
    heading: 'Building Tomorrow\'s',
    highlight: 'Leaders Today',
    sub: 'Our curriculum blends modern pedagogy with timeless values for well-rounded development.',
  },
  {
    image: '/landing_img/hero_img_5.webp',
    heading: 'Where Creativity',
    highlight: 'Knows No Bounds',
    sub: 'Art, music, movement — we nurture every dimension of your child\'s growing mind.',
  },
  {
    image: '/landing_img/hero_img_6.avif',
    heading: 'Excellence in',
    highlight: 'Early Education',
    sub: 'Trusted by thousands of families for over a decade of quality preschool education.',
  },
  {
    image: '/landing_img/hero_img_7.png',
    heading: 'Growing Together',
    highlight: 'As a Community',
    sub: 'A warm, inclusive environment where children, parents, and educators thrive together.',
  },
  {
    image: '/landing_img/Junior KG_img.jpg',
    heading: 'Kindergarten That',
    highlight: 'Sparks Curiosity',
    sub: 'Our Junior & Senior KG programmes lay the perfect foundation for lifelong learning.',
  },
  {
    image: '/landing_img/Nursery_img.jpg',
    heading: 'Gentle Beginnings',
    highlight: 'Bright Futures',
    sub: 'Our nursery programme eases your child into learning with warmth and care.',
  },
  {
    image: '/landing_img/PlayGroup_img.avif',
    heading: 'First Steps Into',
    highlight: 'A World of Wonder',
    sub: 'Playgroup is where friendships form, laughter echoes, and learning feels like magic.',
  },
  {
    image: '/landing_img/Teacher Training Programme.webp',
    heading: 'Empowering Educators',
    highlight: 'Inspiring Generations',
    sub: 'Our teacher training programme shapes passionate educators who make a real difference.',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setTextVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMounted]);

  const handleDotClick = (i: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrent(i);
      setTextVisible(true);
    }, 300);
  };

  return (
    <section className="relative h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] flex items-end overflow-hidden">

      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === i ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        ))}
        {/* Premium gradient overlay — dark at bottom, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      {/* Slide Dots — top right */}
      <div className="absolute top-6 right-6 flex gap-1.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`rounded-full transition-all duration-500 ${current === i ? 'w-6 h-1.5 bg-[#FCAB17]' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <div
          key={current}
          className="h-full bg-[#FCAB17] origin-left"
          style={{ animation: 'progress 5s linear forwards' }}
        />
      </div>

      {/* Content — bottom aligned for premium feel */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20">
        <div
          className="transition-all duration-500 ease-out"
          style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(16px)' }}
        >
          {/* Gold accent line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#FCAB17]" />
            <span className="text-[#FCAB17]/80 text-xs tracking-[0.2em] uppercase font-medium">Evernal Academy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-3">
            {slides[current].heading}
            <span className="block text-[#FCAB17] italic font-light mt-1">{slides[current].highlight}</span>
          </h1>

          <p className="text-white/55 text-sm sm:text-base max-w-md leading-relaxed mb-8 font-light">
            {slides[current].sub}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2.5 bg-[#FCAB17] hover:bg-[#e09a14] text-[#0F172A] px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-xl shadow-[#FCAB17]/25"
            >
              Admission Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 border-b border-white/20 hover:border-white/60 pb-0.5"
            >
              Explore Programmes
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
