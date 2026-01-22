'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Users, Zap, Shield, TrendingUp, Award, Briefcase, Globe, PlayCircle, Clock, BookOpen, Headphones, DollarSign, Calendar, GraduationCap, Target, Star, ArrowRight, ChevronRight, Sparkles, Heart, Home, Sun, Music, Palette, Book, Gamepad } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyUsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#B2C6BD]/20">
     

      {/* Hero with Background Image */}
      <section className="relative py-20 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 "></div>
          <Image
            src="/about_img/about_imag_2.webp"
            alt="Children learning and playing at Evernal Academy"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
          {/* Animated floating elements */}
          <div className="absolute top-1/4 left-10 animate-bounce" style={{ animationDelay: '0.2s' }}>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-[#FCAB17]/20 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 md:w-6 md:h-6 bg-[#FCAB17] rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-1/3 right-20 animate-bounce" style={{ animationDelay: '0.4s' }}>
            <div className="w-6 h-6 md:w-10 md:h-10 bg-[#B2C6BD]/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 md:w-5 md:h-5 bg-[#B2C6BD] rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-bounce" style={{ animationDelay: '0.6s' }}>
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 md:w-7 md:h-7 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#08472C] backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Heart className="w-4 h-4 text-white" />
            <span className="text-white text-sm md:text-base font-medium">Why Parents Choose Us</span>
          </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#FCAB17]">Evernal Academy?</span>
          </h2>
        
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto font-medium mb-8">
            Where Every Child's Journey Begins with Love, Care, and Quality Education
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/admission"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#FCAB17]/40 transition-all duration-300 transform hover:scale-105"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Schedule a School Tour</span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[transparent] text-[#08472C] px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-[#FCAB17]"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Trial Class</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Academy Section - White Background */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08472C]/10 to-[#B2C6BD]/10 rounded-full mb-6">
              <Target className="w-4 h-4 text-[#08472C]" />
              <span className="text-[#08472C] font-semibold text-sm md:text-base">WHY Evernal ACADEMY?</span>
            </div> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Why Parents Trust Us For Their <span className="text-[#FCAB17]">Children's Future</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-[#0F172A]/70 max-w-2xl mx-auto">
              We provide a nurturing environment where children grow, learn, and thrive through play-based education
            </p>
          </div>

          {/* 6 Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1: Safe & Nurturing Environment */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#08472C]/5 to-[#B2C6BD]/5 rounded-2xl md:rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#08472C] to-[#0F5C3C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#08472C] transition-colors">
                  Safe & Nurturing Environment
                </h3>
                <p className="text-[#0F172A]/70 leading-relaxed mb-6">
                  CCTV monitored premises, child-safe facilities, and loving caregivers ensure your child's safety and comfort.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#08472C]" />
                    <span className="text-sm text-[#0F172A]/70">24/7 CCTV Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#08472C]" />
                    <span className="text-sm text-[#0F172A]/70">Child-Friendly Facilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#08472C]" />
                    <span className="text-sm text-[#0F172A]/70">Trained & Loving Staff</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Play-Based Learning */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCAB17]/5 to-[#FFD700]/5 rounded-2xl md:rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gamepad className="w-7 h-7 md:w-8 md:h-8 text-[#0F172A]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#FCAB17] transition-colors">
                  Play-Based Learning
                </h3>
                <p className="text-[#0F172A]/70 leading-relaxed mb-6">
                  Children learn best through play. Our curriculum combines fun activities with educational objectives.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FCAB17]" />
                    <span className="text-sm text-[#0F172A]/70">Interactive Play Zones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FCAB17]" />
                    <span className="text-sm text-[#0F172A]/70">Educational Toys & Games</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FCAB17]" />
                    <span className="text-sm text-[#0F172A]/70">Creative Activities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Holistic Development */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B2C6BD]/5 to-white rounded-2xl md:rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#B2C6BD] to-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-[#08472C]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#08472C] transition-colors">
                  Holistic Development
                </h3>
                <p className="text-[#0F172A]/70 leading-relaxed mb-6">
                  Focus on cognitive, emotional, social, and physical development through balanced activities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B2C6BD]" />
                    <span className="text-sm text-[#0F172A]/70">Cognitive Skills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B2C6BD]" />
                    <span className="text-sm text-[#0F172A]/70">Social Skills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B2C6BD]" />
                    <span className="text-sm text-[#0F172A]/70">Physical Activities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Qualified & Caring Teachers */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#08472C]/5 to-[#0F172A]/5 rounded-2xl md:rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#08472C] to-[#0F172A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#08472C] transition-colors">
                  Qualified & Caring Teachers
                </h3>
                <p className="text-[#0F172A]/70 leading-relaxed mb-6">
                  Our educators are certified, experienced, and passionate about early childhood development.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#08472C]" />
                    <span className="text-sm text-[#0F172A]/70">Early Childhood Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#08472C]" />
                    <span className="text-sm text-[#0F172A]/70">First Aid Trained</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#08472C]" />
                    <span className="text-sm text-[#0F172A]/70">Continuous Training</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: Creative Curriculum */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCAB17]/5 to-[#FFD700]/5 rounded-2xl md:rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-7 h-7 md:w-8 md:h-8 text-[#0F172A]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#FCAB17] transition-colors">
                  Creative Curriculum
                </h3>
                <p className="text-[#0F172A]/70 leading-relaxed mb-6">
                  Arts, music, dance, and storytelling integrated into daily learning activities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FCAB17]" />
                    <span className="text-sm text-[#0F172A]/70">Art & Craft Sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FCAB17]" />
                    <span className="text-sm text-[#0F172A]/70">Music & Movement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FCAB17]" />
                    <span className="text-sm text-[#0F172A]/70">Storytelling Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 6: Parent Partnership */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B2C6BD]/5 to-white rounded-2xl md:rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#B2C6BD] to-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-7 h-7 md:w-8 md:h-8 text-[#08472C]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#08472C] transition-colors">
                  Parent Partnership
                </h3>
                <p className="text-[#0F172A]/70 leading-relaxed mb-6">
                  Regular updates, parent-teacher meetings, and workshops to keep you involved in your child's growth.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B2C6BD]" />
                    <span className="text-sm text-[#0F172A]/70">Daily Progress Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B2C6BD]" />
                    <span className="text-sm text-[#0F172A]/70">Regular Parent Meetings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B2C6BD]" />
                    <span className="text-sm text-[#0F172A]/70">Parent Workshops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section - Gradient Background */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-[#08472C] to-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <PlayCircle className="w-4 h-4 text-[#FCAB17]" />
              <span className="text-white font-semibold">CAMPUS TOUR</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Take a <span className="text-[#FCAB17]">Virtual Tour</span> of Our Campus
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              See our child-friendly facilities and happy learning environment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
              <div className="aspect-video bg-gradient-to-br from-[#FCAB17]/20 to-[#FFD700]/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCAB17]/10 to-[#FFD700]/10"></div>
                {/* Replace with your academy image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <PlayCircle className="w-10 h-10 md:w-12 md:h-12 text-[#0F172A]" />
                  </div>
                </button>
                
                {/* Video Stats */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex justify-between items-center">
                  <div className="text-white">
                    <p className="font-bold text-base md:text-lg">Campus Tour Video</p>
                    <p className="text-xs md:text-sm text-white/80">Explore our learning spaces</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs md:text-sm text-white/80">Duration: 3:45</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                {
                  name: "Mrs. Rahman",
                  role: "Parent of Arham (3 years)",
                  quote: "My son was shy and hesitant. Now he loves coming to school and has made so many friends!",
                  avatar: "👩",
                  color: "from-[#08472C] to-[#0F5C3C]"
                },
                {
                  name: "Mr. & Mrs. Chowdhury",
                  role: "Parents of Aisha (4 years)",
                  quote: "The teachers are wonderful! They understand each child's unique needs and personality.",
                  avatar: "👨‍👩‍👧",
                  color: "from-[#FCAB17] to-[#FFD700]"
                },
                {
                  name: "Ms. Ahmed",
                  role: "Parent of Zayan (5 years)",
                  quote: "The progress reports and regular updates keep us informed about our child's development.",
                  avatar: "👩‍👦",
                  color: "from-[#B2C6BD] to-white"
                }
              ].map((parent, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-[#FCAB17]/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${parent.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                      {parent.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white text-lg">{parent.name}</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#FCAB17] text-[#FCAB17]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#FCAB17] font-medium mb-2 md:mb-3 text-sm md:text-base">{parent.role}</p>
                      <p className="text-white/90 italic text-sm md:text-base">"{parent.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - White Background */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08472C]/10 to-[#B2C6BD]/10 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#08472C]" />
              <span className="text-[#08472C] font-semibold">COMPARISON</span>
            </div> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Why We <span className="text-[#FCAB17]">Stand Out</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-[#0F172A]/70 max-w-2xl mx-auto">
              See the difference between Evernal Academy and traditional preschools
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-[#B2C6BD]/30 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#08472C] to-[#0F5C3C] text-white">
                    <th className="px-4 md:px-8 py-4 md:py-6 text-left font-bold text-base md:text-lg">Features & Benefits</th>
                    <th className="px-4 md:px-8 py-4 md:py-6 text-center font-bold text-base md:text-lg">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 md:w-4 md:h-4 text-[#08472C]" />
                        </div>
                        <span>Evernal Academy</span>
                      </div>
                    </th>
                    <th className="px-4 md:px-8 py-4 md:py-6 text-center font-bold text-base md:text-lg">Other Preschools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#B2C6BD]/30">
                  {[
                    { 
                      feature: 'Teacher Qualifications', 
                      elite: { value: 'Certified & Experienced', icon: '✅' }, 
                      competitor: { value: 'Basic Training', icon: '⚠️' } 
                    },
                    { 
                      feature: 'Class Size', 
                      elite: { value: 'Small Groups (1:8)', icon: '✅' }, 
                      competitor: { value: 'Large Groups (1:15+)', icon: '⚠️' } 
                    },
                    { 
                      feature: 'Learning Approach', 
                      elite: { value: 'Play-Based & Holistic', icon: '✅' }, 
                      competitor: { value: 'Traditional Rote Learning', icon: '❌' } 
                    },
                    { 
                      feature: 'Safety Measures', 
                      elite: { value: 'CCTV & Trained Staff', icon: '✅' }, 
                      competitor: { value: 'Basic Safety', icon: '⚠️' } 
                    },
                    { 
                      feature: 'Parent Communication', 
                      elite: { value: 'Daily Updates & Apps', icon: '✅' }, 
                      competitor: { value: 'Monthly Reports', icon: '⚠️' } 
                    },
                    { 
                      feature: 'Facilities', 
                      elite: { value: 'Child-Friendly & Modern', icon: '✅' }, 
                      competitor: { value: 'Basic Setup', icon: '⚠️' } 
                    },
                    { 
                      feature: 'Curriculum', 
                      elite: { value: 'Creative & Balanced', icon: '✅' }, 
                      competitor: { value: 'Standard Curriculum', icon: '✅' } 
                    },
                    { 
                      feature: 'Progress Tracking', 
                      elite: { value: 'Comprehensive Reports', icon: '✅' }, 
                      competitor: { value: 'Basic Assessment', icon: '⚠️' } 
                    },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-[#B2C6BD]/5' : 'bg-white'}>
                      <td className="px-4 md:px-8 py-4 md:py-6">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#08472C]" />
                          </div>
                          <span className="font-bold text-[#0F172A] text-sm md:text-base">{row.feature}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-8 py-4 md:py-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#08472C] to-[#0F5C3C] rounded-full flex items-center justify-center">
                            <span className="text-white text-lg md:text-xl">{row.elite.icon}</span>
                          </div>
                          <span className="font-bold text-[#08472C] text-sm md:text-base">{row.elite.value}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-8 py-4 md:py-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B2C6BD]/30 rounded-full flex items-center justify-center">
                            <span className="text-[#0F172A] text-lg md:text-xl">{row.competitor.icon}</span>
                          </div>
                          <span className="font-medium text-[#0F172A]/70 text-sm md:text-base">{row.competitor.value}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Gradient Background */}
      {/* <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Our <span className="text-[#FCAB17]">Success Stories</span> in Numbers
            </h2>
            <p className="text-lg md:text-xl text-[#0F172A]/70 max-w-2xl mx-auto">
              Trusted by hundreds of parents for their children's early education
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
                { 
                  value: "1000+", 
                  label: "Happy Children", 
                  icon: <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />, 
                  color: "from-[#08472C] to-[#0F5C3C]" 
                },
                { 
                  value: "95%", 
                  label: "Parent Satisfaction", 
                  icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />, 
                  color: "from-[#FCAB17] to-[#FFD700]" 
                },
                { 
                  value: "25+", 
                  label: "Expert Teachers", 
                  icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />, 
                  color: "from-[#08472C] to-[#0F172A]" 
                },
                { 
                  value: "12+", 
                  label: "Years Experience", 
                  icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-white" />, 
                  color: "from-[#B2C6BD] to-white" 
                },
              ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-block p-4 md:p-6 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 transform group-hover:scale-110 transition-all duration-500`}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[#0F172A]/70 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA - Gradient Background */}
      <section className="py-10 md:py-14 px-4 relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-[#08472C] via-[#0F172A] to-[#08472C]"></div>

    <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-[#FCAB17]/10 rounded-full -translate-x-24 -translate-y-24"></div>
    <div className="absolute bottom-0 right-0 w-56 h-56 md:w-80 md:h-80 bg-white/5 rounded-full translate-x-32 translate-y-32"></div>

    {/* Floating dots (smaller) */}
    <div className="absolute top-1/3 left-10">
      <div className="w-6 h-6 rounded-full bg-[#FCAB17]/20"></div>
    </div>
    <div className="absolute bottom-1/3 right-20">
      <div className="w-4 h-4 rounded-full bg-white/20"></div>
    </div>
  </div>

  <div className="max-w-4xl mx-auto text-center text-white relative z-10">

    {/* Badge */}
    {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
      <Sparkles className="w-4 h-4 text-[#FCAB17]" />
      <span className="text-sm font-bold">LIMITED SPOTS AVAILABLE</span>
    </div> */}

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
      Ready to Start Your Child&apos;s{" "}
      <span className="text-[#FCAB17]">Learning Journey</span>?
    </h2>

    {/* Description */}
    <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
      Join hundreds of happy parents who trust Evernal Academy for early education.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <Link
        href="/admission"
        className="group px-7 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-bold rounded-xl hover:shadow-xl hover:shadow-[#FCAB17]/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
      >
        <span>Enroll Now</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

      <Link
        href="/contact"
        className="group px-7 md:px-10 py-3 md:py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        <span>Campus Visit</span>
      </Link>
    </div>

    {/* Features */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/20">
      <div className="flex flex-col items-center gap-2">
        <Headphones className="w-7 h-7 text-[#FCAB17]" />
        <p className="text-sm text-white/80">24/7 Parent Support</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Shield className="w-7 h-7 text-[#FCAB17]" />
        <p className="text-sm text-white/80">CCTV Secured Campus</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <BookOpen className="w-7 h-7 text-[#FCAB17]" />
        <p className="text-sm text-white/80">Certified Curriculum</p>
      </div>
    </div>

  </div>
</section>


   

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}