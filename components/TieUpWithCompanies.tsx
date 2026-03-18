'use client';

import Image from 'next/image';

const companies = [
  { id: 1, logo: '/logo/Aditya-Birla-logo.png',        name: 'Aditya Birla' },
  { id: 2, logo: '/logo/Hariyana -logo.png',            name: 'Hariyana' },
  { id: 3, logo: '/logo/Orchid-nternational-logo.png',  name: 'Orchid International' },
  { id: 4, logo: '/logo/St-John-logo.png',              name: 'St. John' },
  { id: 5, logo: '/logo/Narayana-logo.png',             name: 'Narayana' },
];

// duplicate for seamless loop
const track = [...companies, ...companies, ...companies];

export default function TieUpWithCompanies() {
  return (
    <section className="py-14 overflow-hidden" style={{ background: '#e8eeeb' }}>

      {/* header */}
      <div className="flex items-center justify-center gap-4 mb-10 px-4">
        <span className="h-px w-12 bg-[#FCAB17]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#FCAB17]" />
        <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/60 font-semibold">
          Trusted by Leading Institutions
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#FCAB17]" />
        <span className="h-px w-12 bg-[#FCAB17]" />
      </div>

      {/* marquee track */}
      <div className="relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, #e8eeeb, transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, #e8eeeb, transparent)' }} />

        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {track.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-3 w-52 h-32 rounded-2xl px-6 transition-all duration-300 group"
              style={{
                background: '#e8eeeb',
                boxShadow: '6px 6px 12px #c5cac7, -6px -6px 12px #ffffff',
              }}
            >
              <div className="relative w-44 h-20 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-400">
                <Image src={c.logo} alt={c.name} fill className="object-contain" sizes="160px" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </section>
  );
}
