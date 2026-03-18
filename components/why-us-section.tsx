'use client';

import { useRef, useEffect, useState } from 'react';
import { Heart, Users, ShieldCheck, BookOpen, Award, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Child-Centered Approach',
    desc: 'Individual needs and interests at the core, creating a nurturing environment for holistic growth.',
    points: ['Personalized Attention', 'Emotional Support', 'Growth Tracking'],
  },
  {
    icon: Users,
    title: 'Expert Educators',
    desc: 'Highly qualified teachers trained in early childhood education and child psychology.',
    points: ['ECE Certified', 'First Aid Trained', 'Continuous Training'],
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    desc: 'State-of-the-art security and child-safe facilities for complete parental peace of mind.',
    points: ['CCTV Surveillance', 'Safe Play Areas', 'Hygiene Protocols'],
  },
  {
    icon: BookOpen,
    title: 'Play-Based Learning',
    desc: 'Structured learning blended with play to stimulate cognitive and motor skill development.',
    points: ['Montessori Methods', 'Sensory Play', 'Creative Activities'],
  },
  {
    icon: Award,
    title: 'Holistic Development',
    desc: 'Balanced focus on physical, emotional, social, and cognitive aspects of every child.',
    points: ['Physical Activities', 'Social Skills', 'Creative Expression'],
  },
  {
    icon: TrendingUp,
    title: 'Parent Partnership',
    desc: 'Regular interactions and progress updates ensuring collaborative child development.',
    points: ['Regular Updates', 'Parent Workshops', 'Open Communication'],
  },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-14 bg-[#f9fafb]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <div className={`mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Why Evernal</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C]">
              Why Choose <span className="text-[#FCAB17]">Evernal Academy?</span>
            </h2>
            <p className="text-[#0F172A]/40 text-xs max-w-xs leading-relaxed">
              The preferred choice for early childhood education and development.
            </p>
          </div>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isGold = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-5 overflow-hidden
                  border border-[#f0f0f0] hover:shadow-xl transition-all duration-400 hover:-translate-y-1
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* left accent bar */}
                <div className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full transition-all duration-300
                  ${isGold ? 'bg-[#FCAB17]/40 group-hover:bg-[#FCAB17]' : 'bg-[#08472C]/20 group-hover:bg-[#08472C]'}`} />

                {/* top-right watermark icon */}
                <div className="absolute top-3 right-3 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300">
                  <Icon className="w-14 h-14 text-[#08472C]" />
                </div>

                {/* icon badge */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110
                  ${isGold ? 'bg-[#FCAB17]' : 'bg-[#08472C]'}`}>
                  <Icon className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" />
                </div>

                <h3 className="text-sm font-bold text-[#0F172A] mb-1.5 group-hover:text-[#08472C] transition-colors duration-200">{f.title}</h3>
                <p className="text-[11px] text-[#0F172A]/45 leading-relaxed mb-3">{f.desc}</p>

                {/* divider */}
                <div className={`h-px w-8 mb-3 transition-all duration-300 group-hover:w-16 ${isGold ? 'bg-[#FCAB17]' : 'bg-[#08472C]/30'}`} />

                {/* points */}
                <div className="space-y-1.5">
                  {f.points.map((pt, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${isGold ? 'bg-[#FCAB17]' : 'bg-[#08472C]'}`} />
                      <span className="text-[11px] font-medium text-[#0F172A]/55">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
