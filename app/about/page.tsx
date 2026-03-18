import Image from 'next/image';
import Link from 'next/link';
import {
  Heart, Target, Eye, Users, Shield, Brain, Award,
  CheckCircle, Star, Phone, Mail, MapPin, Calendar,
  BookOpen, Palette, Zap, Sparkles, ArrowUpRight, Clock,
} from 'lucide-react';

const stats = [
  { label: 'Years of Excellence', value: '12+', icon: Calendar },
  { label: 'Happy Children', value: '1000+', icon: Heart },
  { label: 'Expert Educators', value: '25+', icon: Award },
  { label: 'Teacher-Child Ratio', value: '1:8', icon: Users },
];

const pillars = [
  {
    icon: Brain,
    title: 'Cognitive Development',
    desc: 'Problem-solving, memory, and critical thinking through puzzles, pattern games, and memory activities.',
    points: ['Puzzles & Games', 'Pattern Recognition', 'Memory Activities'],
  },
  {
    icon: Heart,
    title: 'Social & Emotional',
    desc: 'Building empathy, sharing, and emotional expression through role play and group activities.',
    points: ['Role Play', 'Group Activities', 'Feelings Circle'],
  },
  {
    icon: Zap,
    title: 'Physical Development',
    desc: 'Fine and gross motor skills developed through movement, outdoor play, and art & craft.',
    points: ['Outdoor Play', 'Art & Craft', 'Dance & Movement'],
  },
  {
    icon: Palette,
    title: 'Creative Expression',
    desc: 'Art, music, and imaginative play to nurture creativity and self-expression in every child.',
    points: ['Painting', 'Music Time', 'Storytelling'],
  },
];

const facilities = [
  { emoji: '🏫', title: 'Age-Appropriate Classrooms', desc: 'Bright, colorful rooms with learning corners and child-sized furniture', points: ['Reading Corner', 'Art Station', 'Block Area'] },
  { emoji: '🌳', title: 'Safe Outdoor Play Area', desc: 'Soft-surface playground with age-appropriate equipment', points: ['Swings', 'Sand Pit', 'Water Play'] },
  { emoji: '📹', title: 'CCTV Surveillance', desc: '24/7 monitored premises ensuring complete safety and peace of mind', points: ['Parent View Access', 'Secure Entry', 'Trained Staff'] },
  { emoji: '🧼', title: 'Hygiene & Sanitation', desc: 'Regular cleaning and child-friendly washrooms maintained daily', points: ['Hand Washing', 'Clean Toys', 'Daily Sanitization'] },
  { emoji: '🎲', title: 'Learning Resources', desc: 'Montessori materials and educational toys for hands-on learning', points: ['Sensory Toys', 'Puzzles', 'Musical Instruments'] },
  { emoji: '🍎', title: 'Nutrition Kitchen', desc: 'Healthy meals prepared with fresh ingredients and allergy awareness', points: ['Balanced Diet', 'Fresh Fruits', 'Allergy Awareness'] },
];

const team = [
  { name: 'Priya Sharma', role: 'Head Teacher – Kindergarten', exp: '15+ Years in Early Education', spec: 'Child Psychology, Montessori Methods' },
  { name: 'Rajesh Kumar', role: 'Senior Educator – PlayGroup', exp: '12+ Years with Toddlers', spec: 'Sensory Play, Motor Development' },
  { name: 'Dr. Sunita Mehta', role: 'Academic Director', exp: '20+ Years in Education', spec: 'Curriculum Design, Child Development' },
];

const testimonials = [
  { name: 'Priya Sharma', child: 'Aarav, 4 yrs', programme: 'Kindergarten', quote: 'My son looks forward to school every day! The teachers are so loving and patient. His confidence has grown tremendously since joining Evernal.' },
  { name: 'Rajesh Mehta', child: 'Anaya, 3 yrs', programme: 'Nursery', quote: 'The safe environment and regular updates give us complete peace of mind. Anaya has developed excellent social skills and loves her teachers.' },
  { name: 'Sunita Reddy', child: 'Kabir, 2.5 yrs', programme: 'PlayGroup', quote: 'As a working mother, the daycare facility is a blessing. Kabir gets nutritious meals, proper rest, and learns through play. Highly recommended!' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_4.jpeg" alt="About Evernal Academy" fill className="object-cover" style={{ objectPosition: 'center 45%' }} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/55 to-[#08472C]/80" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#FCAB17] font-semibold">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            About <span className="text-[#FCAB17]">Evernal Academy</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#08472C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(({ label, value, icon: Icon }) => (
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

      {/* ── WHO WE ARE ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Who We Are</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C] mb-4 leading-snug">
                Where Every Child's Journey Begins
              </h2>
              <p className="text-[12px] text-[#0F172A]/60 leading-relaxed mb-6">
                Founded in 2010, Evernal Academy was born from a simple belief: every child deserves a nurturing environment where they can grow, explore, and discover their unique potential through play, creativity, and guided learning.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Heart, title: 'Child-Centered Approach', desc: 'Personalised learning experiences that celebrate each child\'s unique personality.' },
                  { icon: Shield, title: 'Safe & Secure Environment', desc: 'CCTV-monitored premises, trained staff, and child-safe facilities.' },
                  { icon: Brain, title: 'Holistic Development', desc: 'Cognitive, emotional, social, and physical growth through balanced activities.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#08472C] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#FCAB17]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#08472C] mb-0.5">{title}</p>
                      <p className="text-[11px] text-[#0F172A]/55 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '12+', label: 'Years of Excellence' },
                { value: '1000+', label: 'Happy Children' },
                { value: '25+', label: 'Expert Educators' },
                { value: '1:8', label: 'Teacher-Child Ratio' },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-2xl p-6 text-center bg-white border border-[#f0f0f0] hover:shadow-md transition-shadow">
                  <p className="text-3xl font-bold text-[#08472C] mb-1">{value}</p>
                  <p className="text-[10px] text-[#0F172A]/50 font-semibold uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Mission & Vision</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Mission */}
            <div className="rounded-2xl bg-[#08472C] overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FCAB17]/10 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
              <div className="relative z-10 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FCAB17]/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[#FCAB17]" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#FCAB17]/60 font-semibold">Our Mission</p>
                    <p className="text-[15px] font-bold text-white">What We Do Every Day</p>
                  </div>
                </div>
                <div className="h-px bg-[#FCAB17]/20 mb-5" />
                <p className="text-[12px] text-white/75 leading-relaxed">
                  To create a nurturing environment where every child feels loved, valued, and excited to learn — fostering curiosity, building confidence, and developing foundational skills through play-based activities and personalized attention.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Play-Based', 'Personalized', 'Confidence', 'Curiosity'].map(tag => (
                    <span key={tag} className="text-[9px] font-semibold uppercase tracking-wide text-[#FCAB17]/80 bg-[#FCAB17]/10 border border-[#FCAB17]/20 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Vision */}
            <div className="rounded-2xl overflow-hidden relative border border-[#FCAB17]/30 bg-white">
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#08472C]/5 rounded-full -translate-x-16 -translate-y-16 pointer-events-none" />
              <div className="relative z-10 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#08472C] flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-[#FCAB17]" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#08472C]/50 font-semibold">Our Vision</p>
                    <p className="text-[15px] font-bold text-[#08472C]">Where We're Headed</p>
                  </div>
                </div>
                <div className="h-px bg-[#08472C]/10 mb-5" />
                <p className="text-[12px] text-[#0F172A]/60 leading-relaxed">
                  To be the most trusted early childhood education centre, recognized for excellence in nurturing confident, creative, and compassionate young learners who are well-prepared for lifelong learning and positive social contribution.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Excellence', 'Trusted', 'Creative', 'Compassionate'].map(tag => (
                    <span key={tag} className="text-[9px] font-semibold uppercase tracking-wide text-[#08472C]/70 bg-[#08472C]/6 border border-[#08472C]/10 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEARNING PILLARS ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Learning Through Play & Discovery</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map(({ icon: Icon, title, desc, points }) => (
              <div key={title} className="rounded-2xl p-5 bg-white border border-[#f0f0f0] hover:border-[#08472C]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#08472C] flex items-center justify-center mb-4">
                  <Icon style={{ width: 18, height: 18 }} className="text-[#FCAB17]" />
                </div>
                <h3 className="text-[13px] font-bold text-[#08472C] mb-2">{title}</h3>
                <p className="text-[11px] text-[#0F172A]/55 leading-relaxed mb-3">{desc}</p>
                <ul className="space-y-1">
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FCAB17] flex-shrink-0" />
                      <span className="text-[10px] text-[#0F172A]/55">{p}</span>
                    </li>
                  ))}
                </ul>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map(({ emoji, title, desc, points }) => (
              <div key={title} className="group rounded-2xl overflow-hidden bg-white border border-[#f0f0f0] hover:border-[#08472C]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* top accent bar */}
                <div className="h-[3px] bg-[#FCAB17]" />
                <div className="p-5">
                  {/* emoji badge + title row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#08472C] flex items-center justify-center text-xl flex-shrink-0">
                      {emoji}
                    </div>
                    <h3 className="text-[13px] font-bold text-[#08472C] leading-snug">{title}</h3>
                  </div>
                  <p className="text-[11px] text-[#0F172A]/55 leading-relaxed mb-4">{desc}</p>
                  {/* pill tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {points.map(p => (
                      <span key={p} className="text-[9px] font-semibold uppercase tracking-wide text-[#08472C]/70 bg-white border border-[#08472C]/10 px-2.5 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Meet Our Educators</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {team.map(t => (
              <div key={t.name} className="rounded-2xl p-6 bg-white border border-[#f0f0f0] hover:border-[#08472C]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#08472C] flex items-center justify-center text-white text-sm font-bold mb-4">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <p className="text-[13px] font-bold text-[#08472C] mb-0.5">{t.name}</p>
                <p className="text-[10px] text-[#FCAB17] font-semibold mb-3">{t.role}</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Award className="w-3 h-3 text-[#08472C] flex-shrink-0" />
                    <span className="text-[10px] text-[#0F172A]/55">{t.exp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3 h-3 text-[#08472C] flex-shrink-0" />
                    <span className="text-[10px] text-[#0F172A]/55">{t.spec}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Happy Parents, Happy Children</span>
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
                    <p className="text-[10px] text-[#0F172A]/40">Parent of {t.child} · {t.programme}</p>
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
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#FCAB17]/60 font-semibold mb-1">Begin the Journey</p>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Give Your Child the Best Start</h2>
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
