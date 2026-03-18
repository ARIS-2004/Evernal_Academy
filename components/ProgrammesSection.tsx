'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { Clock, ChevronRight, Baby, Heart, BookOpen, Target, Sparkles } from 'lucide-react';

const programmes = [
  {
    title: 'Daycare',
    desc: 'A safe, nurturing space for your little one while you work. Structured routines, play, and care by trained professionals.',
    img: '/gallery/Daycare.avif',
    age: '6m – 3 Years',
    duration: 'Full Day',
    features: ['Structured Routine', 'Nutritious Meals', 'Safe Environment'],
    icon: Baby,
    slug: 'daycare',
    note: false,
  },
  {
    title: 'PlayGroup',
    desc: 'Children are born curious — they explore the world through sensory play and guided activities that build foundational skills.',
    img: '/landing_img/PlayGroup_img.avif',
    age: '2 – 3 Years',
    duration: '3 Hours/Day',
    features: ['Sensory Play', 'Motor Skills', 'Social Interaction'],
    icon: Heart,
    slug: 'playgroup',
    note: true,
  },
  {
    title: 'Nursery',
    desc: 'Mandatory level 1 of Foundational Stage as per NEP. Focus on language development, basic concepts and creative expression.',
    img: '/landing_img/Nursery_img.jpg',
    age: '3 – 4 Years',
    duration: '3 Hours/Day',
    features: ['Language Skills', 'Basic Concepts', 'Creative Arts'],
    icon: BookOpen,
    slug: 'nursery',
    note: true,
  },
  {
    title: 'Junior KG / Senior KG',
    desc: 'Level 2 & 3 of Foundational Stage — mandatory as per NEP. Advanced learning with structured activities and skill development.',
    img: '/landing_img/Junior KG_img.jpg',
    age: '4 – 6 Years',
    duration: '4 Hours/Day',
    features: ['Academic Readiness', 'Problem Solving', 'Team Activities'],
    icon: Target,
    slug: 'kindergarten',
    note: true,
  },
  {
    title: 'Teacher Training',
    desc: 'Setting unrivalled standards in ECCE. Comprehensive training for aspiring educators with certification and placement support.',
    img: '/landing_img/Teacher Training Programme.webp',
    age: 'Adults',
    duration: '6 Months',
    features: ['ECE Certification', 'Practical Training', 'Placement Support'],
    icon: Sparkles,
    slug: 'teacher-training',
    note: false,
  },
];

export default function ProgrammesSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white overflow-hidden">

      {/* dark header band */}
      <div className="relative bg-[#08472C] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-semibold">Our Programmes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Nurturing Young Minds <span className="text-[#FCAB17]">at Every Stage</span>
            </h2>
          </div>
          <p className={`text-white/45 text-xs max-w-xs leading-relaxed transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Age-appropriate programmes designed to foster holistic development and lifelong learning.
          </p>
        </div>
      </div>

      {/* cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-3">
        {programmes.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={i}
              className={`group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-[#f0f0f0] hover:border-[#08472C]/20 hover:shadow-lg transition-all duration-400
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* image */}
              <div className="relative w-full sm:w-44 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={p.img} alt={p.title} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:640px) 100vw, 176px"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#08472C]/60 to-transparent" />
                {/* age pill */}
                <div className="absolute top-2.5 left-2.5 bg-[#FCAB17] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                  {p.age}
                </div>
              </div>

              {/* content */}
              <div className="flex-1 flex flex-col justify-between px-5 py-4">
                <div>
                  {/* title */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-lg bg-[#08472C] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3 h-3 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-[#08472C]">{p.title}</h3>
                  </div>

                  <p className="text-[11px] text-[#0F172A]/50 leading-relaxed mb-2.5">{p.desc}</p>

                  {/* feature tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.features.map((f, j) => (
                      <span key={j} className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#08472C] bg-[#08472C]/6 px-2 py-0.5 rounded-full border border-[#08472C]/10">
                        <span className="w-1 h-1 rounded-full bg-[#FCAB17] inline-block" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* bottom */}
                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#f0f0f0]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#FCAB17]" />
                    <span className="text-[11px] font-semibold text-[#0F172A]/55">{p.duration}</span>
                    {p.note && <span className="text-[9px] text-[#0F172A]/25 ml-1 hidden sm:inline">*State regs apply</span>}
                  </div>
                  <Link
                    href={`/programmes/${p.slug}`}
                    className="flex items-center gap-1 text-[11px] font-bold text-white bg-[#08472C] px-3.5 py-1.5 rounded-lg hover:bg-[#063d26] transition-colors duration-200 group/btn"
                  >
                    Details
                    <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
