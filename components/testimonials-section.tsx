'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, GraduationCap } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    course: 'PlayGroup',
    position: 'Parent',
    review: 'My 2-year-old absolutely loves coming to school! The teachers are incredibly caring and the activities are perfect for his age. Seeing him learn through play has been amazing.',
    image: '👩👦',
    date: '2 months ago',
    childAge: '2 years',
  },
  {
    id: 2,
    name: 'Rajesh Mehta',
    course: 'Kindergarten',
    position: 'Parent',
    review: "The progress my daughter has made in just 6 months is remarkable. She's confident, curious, and loves learning. The holistic approach focusing on all aspects of development is wonderful.",
    image: '👨👧',
    date: '3 months ago',
    childAge: '5 years',
  },
  {
    id: 3,
    name: 'Sunita Reddy',
    course: 'Nursery',
    position: 'Parent',
    review: "As a working parent, the safety and care provided gives me complete peace of mind. The regular updates and parent-teacher meetings keep me involved in my child's progress.",
    image: '👩💼',
    date: '1 month ago',
    childAge: '3.5 years',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    course: 'Teacher Training',
    position: 'Educator',
    review: 'The teacher training programme here is exceptional. Practical training combined with theory prepared me perfectly for early childhood education. Highly recommended!',
    image: '👨🏫',
    date: '4 months ago',
    childAge: null,
  },
  {
    id: 5,
    name: 'Anjali Patel',
    course: 'Daycare',
    position: 'Parent',
    review: "The daycare facility is excellent. My child gets nutritious meals, proper rest, and engaging activities. The staff is trained and caring. Couldn't ask for more!",
    image: '👩👧',
    date: '2 weeks ago',
    childAge: '4 years',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !visible) return;
    const t = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, [auto, visible]);

  const prev = () => { setCurrent(p => (p - 1 + testimonials.length) % testimonials.length); setAuto(false); };
  const next = () => { setCurrent(p => (p + 1) % testimonials.length); setAuto(false); };

  const visible3 = [0, 1, 2].map(i => testimonials[(current + i) % testimonials.length]);

  const Card = ({ t, center = false }: { t: typeof testimonials[0]; center?: boolean }) => (
    <div className={`flex flex-col bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden transition-all duration-500 hover:shadow-xl
      ${center ? 'shadow-lg border-[#08472C]/15 scale-[1.02]' : 'shadow-sm'}`}>

      {/* quote + message */}
      <div className="px-6 pt-6 pb-5 flex-1">
        <Quote className="w-7 h-7 text-[#FCAB17] mb-4 opacity-80" />
        <p className="text-[#0F172A]/65 text-sm leading-relaxed italic">
          "{t.review}"
        </p>
      </div>

      {/* stars */}
      <div className="px-6 flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#FCAB17] fill-[#FCAB17]" />)}
      </div>

      {/* divider */}
      <div className="mx-6 h-px bg-[#f0f0f0]" />

      {/* footer */}
      <div className="px-6 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#08472C] flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-black text-white">{t.name.split(' ').map((n: string) => n[0]).join('')}</span>
            </div>
          <div>
            <div className="text-sm font-bold text-[#08472C] leading-tight">{t.name}</div>
            <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
              <span className="text-[10px] font-semibold text-[#0F172A]/50">{t.position}</span>
              {t.childAge && <>
                <span className="text-[#0F172A]/25 text-[10px]">·</span>
                <span className="text-[10px] text-[#0F172A]/45">Child: {t.childAge}</span>
              </>}
              <span className="text-[#0F172A]/25 text-[10px]">·</span>
              <span className="text-[10px] text-[#0F172A]/35">{t.date}</span>
            </div>
          </div>
        </div>
        <span className="flex-shrink-0 inline-flex items-center gap-1 text-[9px] font-bold text-[#08472C] bg-[#08472C]/6 border border-[#08472C]/10 px-2 py-1 rounded-full">
          <GraduationCap className="w-3 h-3" />
          {t.course}
        </span>
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-14 bg-[#f9fafb]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <div className={`mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Testimonials</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C]">
              Happy Families, <span className="text-[#FCAB17]">Happy Children</span>
            </h2>
            <p className="text-[#0F172A]/40 text-xs max-w-xs leading-relaxed">
              Hear from our parents and educators about their experiences.
            </p>
          </div>
        </div>

        {/* desktop 3-col */}
        <div className={`hidden lg:grid grid-cols-3 gap-4 mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}>
          {visible3.map((t, i) => <Card key={t.id} t={t} center={i === 1} />)}
        </div>

        {/* mobile single */}
        <div className={`lg:hidden mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Card t={testimonials[current]} center />
        </div>

        {/* controls */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-9 h-9 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center hover:border-[#08472C]/30 hover:bg-[#08472C]/5 transition-all duration-200">
            <ChevronLeft className="w-4 h-4 text-[#08472C]" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setCurrent(i); setAuto(false); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-5 bg-[#08472C]' : 'w-1.5 bg-[#08472C]/20 hover:bg-[#08472C]/40'}`} />
            ))}
          </div>
          <button onClick={next} className="w-9 h-9 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center hover:border-[#08472C]/30 hover:bg-[#08472C]/5 transition-all duration-200">
            <ChevronRight className="w-4 h-4 text-[#08472C]" />
          </button>
        </div>

      </div>
    </section>
  );
}
