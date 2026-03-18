import Image from 'next/image';
import Link from 'next/link';
import {
  Shield, Users, Palette, Heart, Gamepad2, Target,
  Award, CheckCircle, TrendingUp, Star, Phone, ArrowUpRight, BookOpen, Clock,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure Campus',
    desc: 'CCTV monitored premises, child-safe facilities, and loving caregivers ensure your child\'s safety and comfort at all times.',
    points: ['24/7 CCTV Security', 'Child-Friendly Facilities', 'Trained & Loving Staff'],
  },
  {
    icon: Gamepad2,
    title: 'Play-Based Learning',
    desc: 'Children learn best through play. Our curriculum combines fun activities with educational objectives for joyful growth.',
    points: ['Interactive Play Zones', 'Educational Toys & Games', 'Creative Activities'],
  },
  {
    icon: Users,
    title: 'Holistic Development',
    desc: 'Focus on cognitive, emotional, social, and physical development through balanced, age-appropriate activities.',
    points: ['Cognitive Skills', 'Social Skills', 'Physical Activities'],
  },
  {
    icon: Award,
    title: 'Qualified Educators',
    desc: 'Our educators are certified, experienced, and passionate about early childhood development and child psychology.',
    points: ['Early Childhood Certified', 'First Aid Trained', 'Continuous Training'],
  },
  {
    icon: Palette,
    title: 'Creative Curriculum',
    desc: 'Arts, music, dance, and storytelling are integrated into daily learning activities for well-rounded expression.',
    points: ['Art & Craft Sessions', 'Music & Movement', 'Storytelling Time'],
  },
  {
    icon: Heart,
    title: 'Parent Partnership',
    desc: 'Regular updates, parent-teacher meetings, and workshops keep you actively involved in your child\'s growth journey.',
    points: ['Daily Progress Reports', 'Regular Parent Meetings', 'Parent Workshops'],
  },
];

const comparison = [
  { feature: 'Teacher Qualifications', us: 'Certified & Experienced', them: 'Basic Training', usGood: true, themGood: false },
  { feature: 'Class Size', us: 'Small Groups (1:8)', them: 'Large Groups (1:15+)', usGood: true, themGood: false },
  { feature: 'Learning Approach', us: 'Play-Based & Holistic', them: 'Traditional Rote', usGood: true, themGood: false },
  { feature: 'Safety Measures', us: 'CCTV & Trained Staff', them: 'Basic Safety', usGood: true, themGood: false },
  { feature: 'Parent Communication', us: 'Daily Updates', them: 'Monthly Reports', usGood: true, themGood: false },
  { feature: 'Progress Tracking', us: 'Comprehensive Reports', them: 'Basic Assessment', usGood: true, themGood: false },
];

const testimonials = [
  { name: 'Mrs. Rahman', role: 'Parent of Arham, 3 yrs', quote: 'My son was shy and hesitant. Now he loves coming to school and has made so many friends!' },
  { name: 'Mr. & Mrs. Chowdhury', role: 'Parents of Aisha, 4 yrs', quote: 'The teachers are wonderful! They understand each child\'s unique needs and personality.' },
  { name: 'Ms. Ahmed', role: 'Parent of Zayan, 5 yrs', quote: 'Regular progress updates keep us informed. We can see the transformation every single week.' },
];

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_2.jpeg" alt="Why Choose Us" fill className="object-cover" style={{ objectPosition: 'center 60%' }} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/55 to-[#08472C]/80" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#FCAB17] font-semibold">Why Parents Choose Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Why <span className="text-[#FCAB17]">Evernal Academy?</span>
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
              { icon: Heart, label: 'Happy Children', value: '1000+' },
              { icon: Users, label: 'Parent Satisfaction', value: '95%' },
              { icon: Award, label: 'Expert Teachers', value: '25+' },
              { icon: Clock, label: 'Years Experience', value: '12+' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FCAB17]/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#FCAB17]" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/45 font-semibold">{label}</p>
                  <p className="text-[14px] font-bold text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 FEATURES ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">What Sets Us Apart</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc, points }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border border-[#08472C]/08 hover:border-[#FCAB17]/40 hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: '#e8eeeb', boxShadow: '6px 6px 14px #c5cac7, -6px -6px 14px #ffffff' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#08472C] flex items-center justify-center mb-4">
                  <Icon className="w-4.5 h-4.5 text-[#FCAB17]" style={{ width: 18, height: 18 }} />
                </div>
                <h3 className="text-[13px] font-bold text-[#08472C] mb-2">{title}</h3>
                <p className="text-[11px] text-[#0F172A]/55 leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-[#08472C] flex-shrink-0" />
                      <span className="text-[10px] text-[#0F172A]/60">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">How We Stand Out</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#f0f0f0]">
            <div className="grid grid-cols-3 bg-[#08472C] px-6 py-3">
              {['Feature', 'Evernal Academy', 'Other Preschools'].map((h, i) => (
                <p key={h} className={`text-[9px] uppercase tracking-[0.2em] text-white/50 font-semibold ${i > 0 ? 'text-center' : ''}`}>{h}</p>
              ))}
            </div>
            {comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-4 border-b border-[#f0f0f0] last:border-0 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-[#f7f8f6]'}`}>
                <p className="text-[11px] font-semibold text-[#08472C]">{row.feature}</p>
                <div className="flex items-center justify-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-[#08472C] flex-shrink-0" />
                  <span className="text-[10px] font-semibold text-[#08472C]">{row.us}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-[10px] text-[#0F172A]/40">{row.them}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">What Parents Say</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="rounded-2xl bg-white border border-[#f0f0f0] p-5 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-3 h-3 fill-[#FCAB17] text-[#FCAB17]" />)}
                </div>
                <p className="text-[11px] text-[#0F172A]/60 leading-relaxed italic mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f0]">
                  <div className="w-8 h-8 rounded-lg bg-[#08472C] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#08472C]">{t.name}</p>
                    <p className="text-[10px] text-[#0F172A]/40">{t.role}</p>
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
            <h2 className="text-xl sm:text-2xl font-bold text-white">Ready to Enroll Your Child?</h2>
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
