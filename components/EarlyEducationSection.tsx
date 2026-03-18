'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { Users, BookOpen, Target, MessageCircle, Star, GraduationCap, Clock, Award, Brain } from 'lucide-react';

const brainStages = [
  { label: 'New Born', img: '/gallery/nursery.jpeg' },
  { label: '1 Month',  img: '/gallery/PlayGroup_img.avif' },
  { label: '9 Months', img: '/gallery/daycare-1.avif' },
  { label: '2 Years',  img: '/gallery/Kindergarten.png' },
  { label: 'Adult',    img: '/about_img/about_images.webp' },
];

const benefits = [
  { icon: Users,         text: 'Improved social skills' },
  { icon: BookOpen,      text: 'No need for special education' },
  { icon: Target,        text: 'Better marks & attention spans' },
  { icon: MessageCircle, text: 'Fewer behavioural problems' },
  { icon: Star,          text: 'Development milestones achieved' },
  { icon: GraduationCap, text: 'Better language development' },
];

const expertiseStats = [
  { icon: GraduationCap, number: '23+',     label: 'Years Experience' },
  { icon: Users,         number: '7L+',     label: 'Students Nurtured' },
  { icon: BookOpen,      number: '35,000+', label: 'Curriculum Hours' },
  { icon: Award,         number: '60+',     label: 'Awards Won' },
  { icon: Star,          number: '6L+',     label: 'Partner Training' },
  { icon: Clock,         number: '100%',    label: 'Certified Teachers' },
];

export default function EarlyEducationSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white overflow-hidden">

      {/* ── hero band ── */}
      <div className="relative bg-[#08472C] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* subtle pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative z-10">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-semibold">Early Education</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              Is Early Childhood<br />Education Important?
            </h2>
          </div>

          {/* 90% pill */}
          <div
            className={`flex items-center gap-5 rounded-2xl px-6 py-5 flex-shrink-0 border border-white/10 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}
          >
            <div className="text-5xl font-black text-[#FCAB17] leading-none">90%</div>
            <div className="text-sm text-white/60 font-medium leading-relaxed max-w-[150px]">
              of brain development<br />happens before age 6
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* ── brain timeline ── */}
        <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="flex items-center gap-3 mb-7">
            <Brain className="w-4 h-4 text-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#08472C]/50 font-semibold">Brain Development Progression</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#08472C]/20 to-transparent" />
          </div>

          <div className="relative flex items-start">
            {/* line */}
            <div className="absolute top-[44px] left-[44px] right-[44px] h-[2px] bg-gradient-to-r from-[#08472C]/20 via-[#08472C] to-[#FCAB17] rounded-full z-0" />

            {brainStages.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group z-10">
                <div
                  className="relative w-[88px] h-[88px] rounded-full overflow-hidden border-[3px] border-white transition-all duration-400 group-hover:border-[#FCAB17] group-hover:scale-105"
                  style={{ boxShadow: '0 4px 20px rgba(8,71,44,0.15), 0 0 0 0 #FCAB17' }}
                >
                  <Image src={s.img} alt={s.label} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" sizes="88px" />
                  <div className="absolute inset-0 bg-[#08472C]/20 group-hover:bg-transparent transition-colors duration-400" />
                </div>
                <div className="text-center">
                  <div className="text-[9px] font-black text-[#FCAB17] uppercase tracking-widest">Stage {i + 1}</div>
                  <div className="text-[11px] font-semibold text-[#08472C] mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-2 px-10">
            <span className="text-[9px] text-[#0F172A]/30 font-medium tracking-wide">← Birth</span>
            <span className="text-[9px] text-[#0F172A]/30 font-medium tracking-wide">Adulthood →</span>
          </div>
        </div>

        {/* ── bottom two cols ── */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* benefits */}
          <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="flex items-center gap-3 mb-5">
              <Star className="w-4 h-4 text-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#08472C]/50 font-semibold">What Your Child Could Miss</span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#08472C]/20 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 group hover:scale-[1.02] transition-all duration-200"
                  style={{
                    background: '#e8eeeb',
                    boxShadow: '4px 4px 9px #c5cac7, -4px -4px 9px #ffffff',
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  <div className="w-8 h-8 rounded-xl bg-[#08472C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FCAB17] transition-colors duration-300">
                    <item.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-medium text-[#0F172A]/65 leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* expertise */}
          <div className={`transition-all duration-700 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="flex items-center gap-3 mb-5">
              <Award className="w-4 h-4 text-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#08472C]/50 font-semibold">Evernal Expertise</span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#08472C]/20 to-transparent" />
            </div>

            {/* image banner */}
            <div
              className="relative h-36 rounded-2xl overflow-hidden mb-3"
              style={{ boxShadow: '6px 6px 14px #c5cac7, -6px -6px 14px #ffffff' }}
            >
              <Image src="/about_img/about_imag_2.webp" alt="Evernal" fill className="object-cover" sizes="600px" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08472C]/85 via-[#08472C]/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-6">
                <div className="text-white font-bold text-lg leading-tight">Evernal Academy</div>
                <div className="text-white/55 text-xs mt-1">Shaping young minds since 2001</div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-px w-6 bg-[#FCAB17]" />
                  <span className="text-[#FCAB17] text-[10px] font-semibold tracking-wider uppercase">Est. 2001</span>
                </div>
              </div>
            </div>

            {/* stat grid */}
            <div className="grid grid-cols-3 gap-2">
              {expertiseStats.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center rounded-xl px-2 py-3 group hover:scale-[1.03] transition-all duration-200"
                  style={{ background: '#e8eeeb', boxShadow: '3px 3px 7px #c5cac7, -3px -3px 7px #ffffff' }}
                >
                  <div className="w-7 h-7 rounded-lg bg-[#08472C] flex items-center justify-center mb-2 group-hover:bg-[#FCAB17] transition-colors duration-300">
                    <item.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="text-sm font-black text-[#08472C] leading-none">{item.number}</div>
                  <div className="text-[9px] text-[#0F172A]/40 font-medium mt-0.5 leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
