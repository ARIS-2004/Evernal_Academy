'use client';

import { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, Clock, Handshake } from 'lucide-react';

const achievements = [
  { icon: Users,     number: 10000, label: 'Students Trained',   suffix: '+' },
  { icon: BookOpen,  number: 50,    label: 'Courses Offered',    suffix: '+' },
  { icon: Clock,     number: 5,     label: 'Years Experience',   suffix: '+' },
  { icon: Handshake, number: 120,   label: 'Placement Partners', suffix: '+' },
];

export default function AchievementsSection() {
  const [counts, setCounts]   = useState(achievements.map(() => 0));
  const [visible, setVisible] = useState(false);
  const sectionRef            = useRef<HTMLElement>(null);
  const animated              = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        setVisible(true);
        achievements.forEach((a, i) => {
          const steps = 60;
          const ms    = 1600 / steps;
          let step    = 0;
          const t = setInterval(() => {
            step++;
            const p = 1 - Math.pow(1 - step / steps, 3);
            setCounts(prev => { const n = [...prev]; n[i] = Math.floor(a.number * p); return n; });
            if (step >= steps) { clearInterval(t); setCounts(prev => { const n = [...prev]; n[i] = a.number; return n; }); }
          }, ms);
        });
      }
    }, { threshold: 0.25 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16" style={{ background: '#e8eeeb' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* label */}
        <div className={`flex items-center justify-center gap-3 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <span className="h-px w-10 bg-[#FCAB17]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#08472C]/60 font-semibold">By the numbers</span>
          <span className="h-px w-10 bg-[#FCAB17]" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-2xl px-6 py-8 text-center transition-all duration-500 cursor-default
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{
                  background: '#e8eeeb',
                  boxShadow: '8px 8px 16px #c5cac7, -8px -8px 16px #ffffff',
                  transitionDelay: `${i * 120}ms`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    'inset 4px 4px 10px #c5cac7, inset -4px -4px 10px #ffffff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '8px 8px 16px #c5cac7, -8px -8px 16px #ffffff';
                }}
              >
                {/* animated gold top bar */}
                <div
                  className="absolute top-0 left-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#FCAB17] to-[#f5c842] transition-all duration-700 ease-out"
                  style={{ width: visible ? '100%' : '0%', transitionDelay: `${i * 120 + 300}ms` }}
                />

                {/* icon — neumorphic circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                  style={{ background: '#e8eeeb', boxShadow: '4px 4px 8px #c5cac7, -4px -4px 8px #ffffff' }}
                >
                  <Icon className="w-5 h-5 text-[#08472C]" strokeWidth={1.8} />
                </div>

                {/* number */}
                <div className="text-3xl sm:text-4xl font-black text-[#08472C] tabular-nums leading-none tracking-tight">
                  {counts[i].toLocaleString()}{a.suffix}
                </div>

                {/* divider */}
                <div className="w-6 h-px bg-[#FCAB17] mx-auto my-2.5" />

                {/* label */}
                <div className="text-[11px] uppercase tracking-widest text-[#0F172A]/50 font-semibold">
                  {a.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
