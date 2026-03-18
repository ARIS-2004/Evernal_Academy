'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Award, Star, Quote, Calendar, ArrowUpRight, GraduationCap, CheckCircle, Users, Phone } from 'lucide-react';

const stories = [
  {
    name: 'Arham Rahman',
    age: '3 years',
    before: 'Shy & Reserved',
    after: 'Confident & Social',
    duration: '6 months',
    quote: 'Arham was very shy and hesitant to join school. Now he loves coming to academy, has made many friends, and participates in all activities confidently.',
    joined: 'Mar 2023',
  },
  {
    name: 'Aisha Chowdhury',
    age: '4 years',
    before: 'Speech Delayed',
    after: 'Clear Communication',
    duration: '4 months',
    quote: 'Our speech therapy sessions and interactive activities helped Aisha express herself clearly and confidently within just four months.',
    joined: 'Jan 2024',
  },
  {
    name: 'Zayan Ahmed',
    age: '5 years',
    before: 'Introverted',
    after: 'Creative Artist',
    duration: '5 months',
    quote: 'Zayan discovered his love for art and creativity. His paintings were displayed in our annual art exhibition — he won first prize!',
    joined: 'Jul 2023',
  },
  {
    name: 'Tasnim Islam',
    age: '3.5 years',
    before: 'Difficulty Sharing',
    after: 'Team Player',
    duration: '6 months',
    quote: 'Tasnim learned to share, take turns, and work in groups. Her social skills improved dramatically through our group play sessions.',
    joined: 'May 2023',
  },
  {
    name: 'Rayhan Khan',
    age: '4 years',
    before: 'Weak Motor Skills',
    after: 'Skilled Artist',
    duration: '3 months',
    quote: 'Rayhan developed fine motor skills through art and craft activities. He can now hold pencils properly and create beautiful drawings.',
    joined: 'Sep 2023',
  },
  {
    name: 'Maya Rahman',
    age: '5 years',
    before: 'Follower',
    after: 'Young Leader',
    duration: '5 months',
    quote: 'Maya emerged as a natural leader in group activities. She now helps other children and takes initiative in classroom activities.',
    joined: 'Nov 2023',
  },
];

const activities = [
  'Art & Craft', 'Music & Dance', 'Story Time', 'Outdoor Play',
  'Water Play', 'Puppet Show', 'Sand Play', 'Nature Walk',
  'Role Play', 'Puzzle Time', 'Building Blocks', 'Cooking Fun',
];

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_3.jpeg" alt="Success Stories" fill className="object-cover" style={{ objectPosition: 'center 60%' }} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/55 to-[#08472C]/80" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#FCAB17] font-semibold">Happy Children</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Success <span className="text-[#FCAB17]">Stories</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>



      {/* ── STORIES GRID ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Children's Journeys</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {stories.map((s, i) => (
              <div
                key={s.name}
                className="rounded-2xl p-5 border border-[#08472C]/08 hover:border-[#FCAB17]/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                style={{ background: '#e8eeeb', boxShadow: '6px 6px 14px #c5cac7, -6px -6px 14px #ffffff' }}
              >
                {/* header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#08472C] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {s.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#08472C]">{s.name}</p>
                    <p className="text-[10px] text-[#0F172A]/45">{s.age} · Joined {s.joined}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, k) => <Star key={k} className="w-2.5 h-2.5 fill-[#FCAB17] text-[#FCAB17]" />)}
                  </div>
                </div>

                {/* before → after */}
                <div className="flex items-center gap-2 mb-4 bg-white/60 rounded-xl px-3 py-2.5">
                  <span className="text-[10px] font-semibold text-[#0F172A]/50 flex-1">{s.before}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#08472C] flex-shrink-0" />
                  <span className="text-[10px] font-bold text-[#FCAB17] flex-1 text-right">{s.after}</span>
                </div>

                {/* quote */}
                <div className="flex items-start gap-2 mb-4 flex-1">
                  <Quote className="w-3.5 h-3.5 text-[#08472C]/40 mt-0.5 flex-shrink-0" />
                  <p className="text-[11px] text-[#0F172A]/60 leading-relaxed italic">{s.quote}</p>
                </div>

                {/* footer */}
                <div className="pt-3 border-t border-[#08472C]/08 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-wide font-semibold text-[#08472C]/40">Duration</span>
                  <span className="text-[11px] font-bold text-[#08472C]">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── ACTIVITIES BAND ── */}
      <section className="bg-[#08472C] py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#FCAB17]/60 font-semibold">Fun Learning Activities</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {activities.map(a => (
              <div key={a} className="rounded-xl border border-white/10 bg-white/[0.06] hover:border-[#FCAB17]/40 hover:bg-white/10 transition-all px-3 py-3 text-center">
                <p className="text-[11px] font-semibold text-white/80">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARENT TESTIMONIALS ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">What Parents Say</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { name: 'Mrs. Rahman', child: 'Mother of Arham, 3 yrs', quote: 'My son was very shy. Now he loves coming to school and has made so many friends!' },
              { name: 'Mr. & Mrs. Chowdhury', child: 'Parents of Aisha, 4 yrs', quote: 'The teachers are wonderful! They understand each child\'s unique needs and nurture them beautifully.' },
              { name: 'Ms. Ahmed', child: 'Mother of Zayan, 5 yrs', quote: 'Regular progress updates keep us informed. We can see the transformation every single week.' },
            ].map(t => (
              <div key={t.name} className="rounded-2xl bg-white border border-[#f0f0f0] p-5 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-3 h-3 fill-[#FCAB17] text-[#FCAB17]" />)}
                </div>
                <div className="flex items-start gap-2 mb-5">
                  <Quote className="w-3.5 h-3.5 text-[#08472C]/30 mt-0.5 flex-shrink-0" />
                  <p className="text-[11px] text-[#0F172A]/60 leading-relaxed italic">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f0]">
                  <div className="w-8 h-8 rounded-lg bg-[#08472C] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#08472C]">{t.name}</p>
                    <p className="text-[10px] text-[#0F172A]/40">{t.child}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-[#08472C] py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="h-px bg-[#FCAB17]/40 absolute top-0 left-0 right-0" />
        <div className="h-px bg-[#FCAB17]/40 absolute bottom-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#FCAB17]/60 font-semibold mb-1">Start the Journey</p>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Ready to See Your Child Blossom?</h2>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/admissions" className="inline-flex items-center gap-2 bg-[#FCAB17] text-[#08472C] text-[11px] font-bold px-5 py-2.5 rounded-xl hover:bg-[#ffc13d] transition-colors">
              Enroll Now <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a href="tel:+917003999531" className="inline-flex items-center gap-2 border border-white/20 text-white text-[11px] font-bold px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors">
              <Phone className="w-3.5 h-3.5" /> Call Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
