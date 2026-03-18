import { Programme } from '@/lib/programmes';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock, Users, Phone, ChevronRight, Star, Sparkles } from 'lucide-react';

export default function ProgrammeDetail({ p }: { p: Programme; icon?: string }) {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[260px] sm:h-[300px] flex items-end overflow-hidden">
        <Image src={p.heroImage} alt={p.name} fill className="object-cover" style={{ objectPosition: 'center 40%' }} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08472C] via-[#08472C]/60 to-[#08472C]/10" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="absolute top-5 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[10px] text-white/45">
            <Link href="/programmes" className="hover:text-[#FCAB17] transition-colors">Programmes</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#FCAB17]/75">{p.name}</span>
          </div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-9 w-full">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-px w-6 bg-[#FCAB17]" />
                <span className="text-[9px] uppercase tracking-[0.26em] text-[#FCAB17]/65 font-semibold">Evernal Academy</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">{p.name}</h1>
              <p className="text-[13px] text-white/50 mt-2 max-w-xl leading-relaxed">{p.description}</p>
            </div>
            <div className="hidden sm:flex items-stretch gap-0 flex-shrink-0 bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl overflow-hidden">
              <div className="px-5 py-3.5 text-center">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/35 font-semibold mb-1">Age Group</p>
                <p className="text-[15px] font-bold text-white">{p.ageGroup}</p>
              </div>
              <div className="w-px bg-white/10" />
              <div className="px-5 py-3.5 text-center">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/35 font-semibold mb-1">Duration</p>
                <p className="text-[15px] font-bold text-white">{p.duration}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── MOBILE INFO ── */}
      <section className="sm:hidden bg-[#08472C] px-4 py-4 flex gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FCAB17]/15 flex items-center justify-center"><Users className="w-4 h-4 text-[#FCAB17]" /></div>
          <div><p className="text-[8px] uppercase tracking-widest text-white/35 font-semibold">Age Group</p><p className="text-[13px] font-bold text-white">{p.ageGroup}</p></div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FCAB17]/15 flex items-center justify-center"><Clock className="w-4 h-4 text-[#FCAB17]" /></div>
          <div><p className="text-[8px] uppercase tracking-widest text-white/35 font-semibold">Duration</p><p className="text-[13px] font-bold text-white">{p.duration}</p></div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/45 font-semibold">Programme Overview</span>
            </div>
            <p className="text-[16px] text-[#0F172A]/68 leading-[1.9] mb-7 font-[450]">{p.overview}</p>
            <div className="flex gap-3.5 bg-white border border-[#FCAB17]/20 rounded-2xl px-5 py-4 shadow-sm">
              <div className="w-[3px] rounded-full bg-[#FCAB17] flex-shrink-0 self-stretch" />
              <p className="text-[13px] text-[#0F172A]/50 leading-relaxed italic">{p.note}</p>
            </div>
          </div>
          <div className="lg:col-span-2 relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
            <Image src={p.heroImage} alt={p.name} fill className="object-cover" sizes="(max-width:1024px)100vw,40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08472C]/55 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2.5 text-center">
                <p className="text-[8px] text-white/50 uppercase tracking-widest mb-0.5">Age Group</p>
                <p className="text-[14px] font-bold text-white">{p.ageGroup}</p>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2.5 text-center">
                <p className="text-[8px] text-white/50 uppercase tracking-widest mb-0.5">Duration</p>
                <p className="text-[14px] font-bold text-white">{p.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY AREAS + MILESTONES ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* Key Areas */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/45 font-semibold">Key Areas in Curriculum</span>
            </div>
            <div className="space-y-3">
              {p.keyAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-4 px-4 py-3.5 bg-white border border-[#f0f0f0] rounded-xl hover:border-[#08472C]/18 hover:shadow-sm transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#08472C] flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-black text-[#FCAB17]">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#0F172A]/72">{area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/45 font-semibold">Child Development Milestones</span>
            </div>
            <div className="space-y-3">
              {p.behavior.map((b, idx) => (
                <div key={idx} className="flex items-center gap-4 px-4 py-3.5 bg-white border border-[#f0f0f0] rounded-xl hover:border-[#08472C]/18 hover:shadow-sm transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#FCAB17] flex items-center justify-center flex-shrink-0">
                    <Star className="w-3.5 h-3.5 text-[#08472C]" />
                  </div>
                  <p className="text-[14px] font-medium text-[#0F172A]/72">{b}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SESSIONS & ACTIVITIES ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/45 font-semibold">Daily Sessions</span>
            </div>
            <div className="space-y-2.5">
              {p.kidzeeSession.map((s, idx) => (
                <div key={idx} className="flex items-center gap-4 px-4 py-3.5 bg-white rounded-xl border border-[#f0f0f0] hover:border-[#08472C]/15 transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCAB17] flex-shrink-0" />
                  <p className="text-[14px] text-[#0F172A]/65 font-medium">{s}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/45 font-semibold">Activities & Events</span>
            </div>
            <div className="space-y-2.5">
              {p.activities.map((a, idx) => (
                <div key={idx} className="flex items-center gap-4 px-4 py-3.5 bg-white rounded-xl border border-[#f0f0f0] hover:border-[#08472C]/15 transition-all">
                  <span className="w-6 h-6 rounded-lg bg-[#08472C] text-[#FCAB17] text-[10px] font-bold flex items-center justify-center flex-shrink-0">{idx + 1}</span>
                  <p className="text-[14px] text-[#0F172A]/65 font-medium">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIAL PROGRAMMES ── */}
      <section className="py-14 bg-[#08472C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/35 font-semibold">Special Programmes</span>
          </div>
          <p className="text-[13px] text-white/35 mb-7 ml-11">Enrichment activities designed to nurture every dimension of your child's growth.</p>
          <div className="flex flex-wrap gap-2.5">
            {p.specialPrograms.map((sp, idx) => (
              <span key={idx} className="text-[12.5px] font-semibold text-white/70 bg-white/7 border border-white/10 px-4 py-2 rounded-full hover:bg-[#FCAB17] hover:text-[#08472C] hover:border-[#FCAB17] transition-all cursor-default">{sp}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/35 font-semibold">Ready to Begin?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C]">Enroll Your Child in <span className="text-[#FCAB17]">{p.name}</span></h2>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/enroll" className="inline-flex items-center gap-2 bg-[#08472C] text-white text-[12px] font-bold px-6 py-3 rounded-xl hover:bg-[#0a5c38] transition-colors">
              Enroll Now <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href="tel:+917003999531" className="inline-flex items-center gap-2 border border-[#08472C]/20 text-[#08472C] text-[12px] font-bold px-6 py-3 rounded-xl hover:bg-[#f7f8f6] transition-colors">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
