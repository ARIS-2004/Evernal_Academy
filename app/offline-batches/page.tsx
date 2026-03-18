import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, Users, Clock, CheckCircle, BookOpen, Heart, Palette,
  Shield, Target, GraduationCap, Gamepad2, TreePine, Phone, ArrowUpRight,
} from 'lucide-react';

const programmes = [
  {
    name: 'Play Group',
    age: '2 – 3 Years',
    duration: '3 hrs / day',
    batch: '8 children',
    focus: ['Sensory Play', 'Rhymes', 'Motor Skills'],
  },
  {
    name: 'Nursery',
    age: '3 – 4 Years',
    duration: '4 hrs / day',
    batch: '10 children',
    focus: ['Pre-Writing', 'Counting', 'Group Activities'],
  },
  {
    name: 'Kindergarten',
    age: '4 – 6 Years',
    duration: '5 hrs / day',
    batch: '12 children',
    focus: ['Reading Readiness', 'Basic Math', 'Project Work'],
  },
];

const whyUs = [
  { icon: Shield, title: 'Safe & Secure', desc: 'CCTV monitored, child-safe premises' },
  { icon: Users, title: 'Small Batches', desc: '1:8 teacher-student ratio' },
  { icon: Palette, title: 'Creative Activities', desc: 'Art, craft, music & dance' },
  { icon: Heart, title: 'Loving Educators', desc: 'Trained & passionate teachers' },
  { icon: Gamepad2, title: 'Play-Based', desc: 'Learning through interactive play' },
  { icon: Target, title: 'Holistic Growth', desc: 'Cognitive, social & emotional' },
];

const schedule = [
  { time: '8:30 – 9:00 AM', activity: 'Arrival & Free Play', focus: 'Social Skills' },
  { time: '9:00 – 9:30 AM', activity: 'Morning Circle Time', focus: 'Language' },
  { time: '9:30 – 10:15 AM', activity: 'Creative Arts & Craft', focus: 'Fine Motor' },
  { time: '10:15 – 10:45 AM', activity: 'Snack Time', focus: 'Self-Help' },
  { time: '10:45 – 11:30 AM', activity: 'Outdoor Play / Games', focus: 'Gross Motor' },
  { time: '11:30 – 12:15 PM', activity: 'Learning Activities', focus: 'Cognitive' },
  { time: '12:15 – 1:00 PM', activity: 'Story Time & Departure', focus: 'Language' },
];

const facilities = [
  { icon: Gamepad2, label: 'Play Area' },
  { icon: Palette, label: 'Art Corner' },
  { icon: BookOpen, label: 'Reading Nook' },
  { icon: TreePine, label: 'Outdoor Garden' },
];

const steps = [
  { n: '01', title: 'Play-Based Learning', desc: 'Fun, interactive play activities drive every lesson', icon: Gamepad2 },
  { n: '02', title: 'Individual Attention', desc: '1:8 ratio ensures personalised care', icon: Users },
  { n: '03', title: 'Multi-Sensory', desc: 'All senses engaged for better retention', icon: Palette },
  { n: '04', title: 'Progress Tracking', desc: 'Regular updates & parent communication', icon: GraduationCap },
];

export default function OfflineBatchesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_1.jpeg" alt="Offline Batches" fill className="object-cover" style={{ objectPosition: 'center 60%' }} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/55 to-[#08472C]/80" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#FCAB17] font-semibold">Campus Learning</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Offline <span className="text-[#FCAB17]">Batches</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── DARK GREEN INFO STRIP ── */}
      <section className="bg-[#08472C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Users, label: 'Small Batches', value: '8–12 Children' },
              { icon: Clock, label: 'Daily Duration', value: '3–5 Hours' },
              { icon: Shield, label: 'Safe Campus', value: 'CCTV Monitored' },
              { icon: GraduationCap, label: 'Expert Teachers', value: '25+ Educators' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FCAB17]/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#FCAB17]" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/45 font-semibold">{label}</p>
                  <p className="text-[12px] font-bold text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Why Choose Us</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl p-5 border border-[#08472C]/08 hover:border-[#FCAB17]/40 hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: '#e8eeeb', boxShadow: '6px 6px 14px #c5cac7, -6px -6px 14px #ffffff' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#08472C] flex items-center justify-center mb-4">
                  <Icon className="w-4.5 h-4.5 text-[#FCAB17]" style={{ width: 18, height: 18 }} />
                </div>
                <h3 className="text-[13px] font-bold text-[#08472C] mb-1">{title}</h3>
                <p className="text-[11px] text-[#0F172A]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Age Groups & Programmes</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {programmes.map((p, i) => (
              <div key={p.name} className="rounded-2xl border border-[#f0f0f0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col">
                <div className="bg-[#08472C] px-6 py-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#FCAB17]/70 font-semibold mb-1">Programme {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="text-[#FCAB17] text-[11px] font-semibold mt-0.5">{p.age}</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-5 text-[11px] text-[#0F172A]/50">
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{p.duration}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3 h-3" />{p.batch}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.focus.map(f => (
                      <span key={f} className="text-[9px] font-semibold uppercase tracking-wide text-[#08472C]/70 bg-[#08472C]/6 border border-[#08472C]/10 px-2.5 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                  <Link href="/admissions" className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-[#08472C] hover:text-[#FCAB17] transition-colors">
                    Enroll Now <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DAILY SCHEDULE ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Daily Routine</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#f0f0f0] bg-white">
            <div className="grid grid-cols-3 bg-[#08472C] px-6 py-3">
              {['Time', 'Activity', 'Focus Area'].map(h => (
                <p key={h} className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-semibold">{h}</p>
              ))}
            </div>
            {schedule.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-4 border-b border-[#f0f0f0] last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f7f8f6]'}`}>
                <p className="text-[11px] font-semibold text-[#08472C]">{row.time}</p>
                <p className="text-[11px] text-[#0F172A]/70">{row.activity}</p>
                <span className="inline-flex self-start text-[9px] font-bold uppercase tracking-wide text-[#FCAB17] bg-[#FCAB17]/10 px-2.5 py-1 rounded-full w-fit">{row.focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Our Facilities</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 items-start">
            <div className="grid grid-cols-2 gap-4">
              {facilities.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl bg-[#08472C] h-36 flex flex-col items-center justify-center gap-3 hover:bg-[#063d26] transition-colors">
                  <Icon className="w-8 h-8 text-[#FCAB17]" />
                  <p className="text-[12px] font-bold text-white">{label}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#08472C] mb-5">Academy Highlights</h3>
              <ul className="space-y-3">
                {[
                  'Colorful, child-friendly classrooms with age-appropriate furniture',
                  'CCTV monitored premises with secure entry/exit',
                  'Sanitized play equipment and learning materials',
                  'First-aid trained staff and pediatrician on call',
                  'Safe indoor and outdoor play areas',
                  'Well-ventilated, air-conditioned learning spaces',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#08472C] mt-0.5 flex-shrink-0" />
                    <span className="text-[12px] text-[#0F172A]/65 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-[#08472C]/10 bg-[#f7f8f6] p-4 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FCAB17] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-[#08472C] mb-0.5">Evernal Academy Campus</p>
                  <p className="text-[11px] text-[#0F172A]/55">Shikharbagan, No. 1154, SRCMRD, Rajarhat, Kolkata – 136</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEARNING APPROACH ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Our Approach</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map(({ n, title, desc, icon: Icon }) => (
              <div
                key={n}
                className="rounded-2xl p-5 border border-[#08472C]/08 hover:border-[#FCAB17]/40 hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: '#e8eeeb', boxShadow: '6px 6px 14px #c5cac7, -6px -6px 14px #ffffff' }}
              >
                <p className="text-[10px] font-bold text-[#FCAB17] mb-3">{n}</p>
                <div className="w-9 h-9 rounded-xl bg-[#08472C] flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-[#FCAB17]" />
                </div>
                <h3 className="text-[13px] font-bold text-[#08472C] mb-1">{title}</h3>
                <p className="text-[11px] text-[#0F172A]/55 leading-relaxed">{desc}</p>
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
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#FCAB17]/60 font-semibold mb-1">Ready to Join?</p>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Enroll Your Child Today</h2>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/admissions" className="inline-flex items-center gap-2 bg-[#FCAB17] text-[#08472C] text-[11px] font-bold px-5 py-2.5 rounded-xl hover:bg-[#ffc13d] transition-colors">
              Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
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
