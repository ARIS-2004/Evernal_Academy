'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Heart, TrendingUp, Award, Star, Quote, Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Target, Rocket, CheckCircle, Users, Home, School, BookOpen, Palette, Music, Gamepad, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const successStories = [
  {
    id: 1,
    name: 'Arham Rahman',
    age: '3 years old',
    achievement: 'From shy to confident',
    image: '/success/arham.jpg',
    duration: '6 months',
    story: 'Arham was very shy and hesitant to join school. Now he loves coming to academy, has made many friends, and participates in all activities confidently.',
    before: 'Shy & Reserved',
    after: 'Confident & Social',
    timeline: '6 months transformation',
    rating: 5,
    location: 'Gulshan Branch',
    joined: 'March 2023'
  },
  {
    id: 2,
    name: 'Aisha Chowdhury',
    age: '4 years old',
    achievement: 'Speech development',
    image: '/success/aisha.jpg',
    duration: '4 months',
    story: 'Aisha had delayed speech development. Our speech therapy sessions and interactive activities helped her express herself clearly and confidently.',
    before: 'Speech Delayed',
    after: 'Clear Communication',
    timeline: '4 months progress',
    rating: 5,
    location: 'Dhanmondi Branch',
    joined: 'January 2024'
  },
  {
    id: 3,
    name: 'Zayan Ahmed',
    age: '5 years old',
    achievement: 'Creative expression',
    image: '/success/zayan.jpg',
    duration: '5 months',
    story: 'Zayan discovered his love for art and creativity. His paintings were displayed in our annual art exhibition, and he won first prize!',
    before: 'Introverted',
    after: 'Creative Artist',
    timeline: '5 months journey',
    rating: 5,
    location: 'Uttara Branch',
    joined: 'July 2023'
  },
  {
    id: 4,
    name: 'Tasnim Islam',
    age: '3.5 years old',
    achievement: 'Social skills',
    image: '/success/tasnim.jpg',
    duration: '6 months',
    story: 'Tasnim learned to share, take turns, and work in groups. Her social skills improved dramatically through our group activities and play sessions.',
    before: 'Difficulty Sharing',
    after: 'Team Player',
    timeline: '6 months growth',
    rating: 5,
    location: 'Banani Branch',
    joined: 'May 2023'
  },
  {
    id: 5,
    name: 'Rayhan Khan',
    age: '4 years old',
    achievement: 'Motor skills',
    image: '/success/rayhan.jpg',
    duration: '3 months',
    story: 'Rayhan developed fine motor skills through art and craft activities. He can now hold pencils properly and create beautiful drawings.',
    before: 'Weak Motor Skills',
    after: 'Skilled Artist',
    timeline: '3 months development',
    rating: 5,
    location: 'Mirpur Branch',
    joined: 'September 2023'
  },
  {
    id: 6,
    name: 'Maya Rahman',
    age: '5 years old',
    achievement: 'Leadership skills',
    image: '/success/maya.jpg',
    duration: '5 months',
    story: 'Maya emerged as a natural leader in group activities. She now helps other children and takes initiative in classroom activities.',
    before: 'Follower',
    after: 'Young Leader',
    timeline: '5 months leadership',
    rating: 5,
    location: 'Gulshan Branch',
    joined: 'November 2023'
  },
];

const stats = [
  { 
    label: 'Happy Children', 
    value: '1000+', 
    icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
    color: 'from-[#08472C] to-[#0F5C3C]'
  },
  { 
    label: 'Parent Satisfaction', 
    value: '95%', 
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    color: 'from-[#FCAB17] to-[#FFD700]'
  },
  { 
    label: 'Expert Teachers', 
    value: '25+', 
    icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
    color: 'from-[#08472C] to-[#0F172A]'
  },
  { 
    label: 'Years Experience', 
    value: '12+', 
    icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
    color: 'from-[#B2C6BD] to-white'
  },
];

export default function SuccessStoriesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto slide effect with useEffect
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#B2C6BD]/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 "></div>
          <Image
            src="/children-boy-girl-reading-book-600nw-2672857949.webp"
            alt="Happy children playing and learning at Jaiago Academy"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
          {/* Animated floating elements */}
          <div className="absolute top-1/4 left-10 animate-float">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#FCAB17]/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FCAB17] rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-1/3 right-20 animate-float" style={{animationDelay: '0.5s'}}>
            <div className="w-5 h-5 md:w-7 md:h-7 bg-[#B2C6BD]/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-[#B2C6BD] rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float" style={{animationDelay: '1s'}}>
            <div className="w-7 h-7 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 md:w-5 md:h-5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#FCAB17]" />
            <span className="text-white font-medium text-sm md:text-base">HAPPY PARENTS, HAPPY CHILDREN</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Our <span className="text-[#FCAB17]">Happy Children</span> Stories
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-medium mb-6">
            See how our little ones grow, learn, and thrive in our nurturing environment
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              href="/programmes"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-6 py-3 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#FCAB17]/40 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore Our Programmes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => document.getElementById('stories-slider')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Users className="w-4 h-4" />
              <span>View Children's Stories</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - White Background */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl transform group-hover:scale-105 transition-all duration-500 opacity-10`}></div>
                <div className="relative bg-white rounded-xl p-4 border border-[#B2C6BD]/30 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className={`inline-flex p-2 bg-gradient-to-br ${stat.color} rounded-lg text-white mb-3`}>
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="text-[#0F172A]/70 text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Slider - Gradient Background */}
      <section id="stories-slider" className="py-16 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08472C]/10 to-[#B2C6BD]/10 rounded-full mb-4">
              <Heart className="w-4 h-4 text-[#08472C]" />
              <span className="text-[#08472C] font-semibold text-sm md:text-base">HAPPY CHILDREN'S JOURNEYS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              From <span className="text-[#08472C]">First Steps</span> to <span className="text-[#FCAB17]">Confident Strides</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              See how our little ones grow, learn, and develop their unique personalities
            </p>
          </div>

          {/* Mobile: Auto Slider (1 card at a time) */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {successStories.map((story) => (
                  <div key={story.id} className="w-full flex-shrink-0 px-2">
                    <SuccessStoryCard story={story} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#FCAB17] w-6' 
                      : 'bg-[#B2C6BD] hover:bg-[#B2C6BD]/70'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#0F172A]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#0F172A]" />
            </button>
          </div>

          {/* Desktop: 3-card grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>

          {/* Auto Play Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
                isAutoPlay 
                  ? 'bg-[#08472C]/10 text-[#08472C]' 
                  : 'bg-[#B2C6BD]/30 text-[#0F172A]'
              }`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${isAutoPlay ? 'bg-[#08472C]' : 'bg-[#B2C6BD]'}`} />
              <span className="text-xs">Auto Play {isAutoPlay ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Development Journey - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FCAB17]/10 to-[#FFD700]/10 rounded-full mb-4">
              <Rocket className="w-4 h-4 text-[#FCAB17]" />
              <span className="text-[#FCAB17] font-semibold">DEVELOPMENT JOURNEY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              How Children <span className="text-[#08472C]">Grow & Develop</span> With Us
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              Our holistic approach to early childhood development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: "Cognitive Development",
                description: "Building thinking, problem-solving, and learning skills through fun activities",
                icon: "🧠",
                color: "from-[#08472C] to-[#0F5C3C]"
              },
              {
                step: 2,
                title: "Social & Emotional",
                description: "Developing confidence, empathy, and social skills through group play",
                icon: "❤️",
                color: "from-[#FCAB17] to-[#FFD700]"
              },
              {
                step: 3,
                title: "Physical & Creative",
                description: "Enhancing motor skills and creativity through art, music, and movement",
                icon: "🎨",
                color: "from-[#B2C6BD] to-white"
              }
            ].map((step) => (
              <div key={step.step} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B2C6BD]/10 to-white rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl p-6 border border-[#B2C6BD]/30 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${step.color} rounded-xl text-white text-2xl mb-4`}>
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-2 py-1 bg-gradient-to-r from-[#08472C] to-[#0F5C3C] rounded-full text-white text-xs font-bold">
                      STEP {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">{step.title}</h3>
                  <p className="text-[#0F172A]/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Showcase - Gradient Background */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#08472C] to-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Fun <span className="text-[#FCAB17]">Learning Activities</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              See what makes our children happy and engaged every day
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Art & Craft", icon: <Palette className="w-6 h-6 text-[#FCAB17]" />, color: "bg-[#FCAB17]/10" },
              { name: "Music & Dance", icon: <Music className="w-6 h-6 text-[#FCAB17]" />, color: "bg-[#FCAB17]/10" },
              { name: "Story Time", icon: <BookOpen className="w-6 h-6 text-[#FCAB17]" />, color: "bg-[#FCAB17]/10" },
              { name: "Outdoor Play", icon: <Gamepad className="w-6 h-6 text-[#FCAB17]" />, color: "bg-[#FCAB17]/10" },
              { name: "Water Play", icon: "💧", color: "bg-blue-500/10" },
              { name: "Puppet Show", icon: "🎭", color: "bg-purple-500/10" },
              { name: "Sand Play", icon: "🏖️", color: "bg-yellow-500/10" },
              { name: "Nature Walk", icon: "🌿", color: "bg-green-500/10" },
              { name: "Role Play", icon: "👨‍⚕️", color: "bg-red-500/10" },
              { name: "Puzzle Time", icon: "🧩", color: "bg-orange-500/10" },
              { name: "Building Blocks", icon: "🧱", color: "bg-blue-500/10" },
              { name: "Cooking Fun", icon: "👩‍🍳", color: "bg-pink-500/10" }
            ].map((activity, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#FCAB17]/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className={`w-12 h-12 ${activity.color} rounded-full flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {typeof activity.icon === 'string' ? (
                      <span className="text-xl">{activity.icon}</span>
                    ) : (
                      activity.icon
                    )}
                  </div>
                  <div className="font-bold text-white text-xs group-hover:text-[#FCAB17] transition-colors">
                    {activity.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Gradient Background */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#08472C] via-[#0F172A] to-[#08472C]"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FCAB17]/10 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
          {/* Floating elements */}
          <div className="absolute top-1/3 left-20 animate-float">
            <div className="w-4 h-4 rounded-full bg-[#FCAB17]/30"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-float" style={{animationDelay: '0.7s'}}>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Quote className="w-4 h-4 text-[#FCAB17]" />
            <span className="font-bold text-sm">YOUR CHILD'S HAPPY JOURNEY STARTS HERE</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to See Your Child <span className="text-[#FCAB17]">Blossom</span>?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of happy parents who have chosen Jaiago Academy for their children's early development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/admission"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FCAB17]/40 transition-all duration-500 transform hover:scale-105"
            >
              <span>Start Free Trial Class</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-500"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Schedule Campus Tour</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-6 h-6 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 text-sm mb-1">Play-Based Learning</p>
                <p className="font-bold text-white">Fun & Educational</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Target className="w-6 h-6 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 text-sm mb-1">Safe Environment</p>
                <p className="font-bold text-white">CCTV & Trained Staff</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Home className="w-6 h-6 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 text-sm mb-1">Parent Partnership</p>
                <p className="font-bold text-white">Regular Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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

// Success Story Card Component
function SuccessStoryCard({ story }: { story: any }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#08472C]/5 to-[#B2C6BD]/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300"></div>
      <div className="relative bg-white rounded-2xl p-6 border border-[#B2C6BD]/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        {/* Child Photo and Basic Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-[#08472C] to-[#0F5C3C] rounded-full flex items-center justify-center text-white text-xl font-bold">
              {story.image ? (
                <Image
                  src={story.image}
                  alt={story.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              ) : (
                story.name.charAt(0)
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-full flex items-center justify-center text-[#0F172A] text-xs">
              <Heart className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#0F172A]">{story.name}</h3>
            <p className="text-[#08472C] font-semibold text-sm">{story.age}</p>
            <p className="text-xs text-[#0F172A]/70">{story.achievement}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(story.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#FCAB17] text-[#FCAB17]" />
          ))}
          <span className="text-xs text-[#0F172A]/50 ml-2">{story.rating}.0/5 Parent Rating</span>
        </div>

        {/* Duration */}
        <div className="mb-3">
          <p className="text-xs text-[#0F172A]/50 mb-1">With us for</p>
          <p className="font-bold text-[#0F172A] text-sm">{story.duration}</p>
        </div>

        {/* Before & After */}
        <div className="bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-xs text-[#0F172A]/50 mb-1">Before</p>
              <p className="text-xs font-semibold text-[#0F172A]">{story.before}</p>
            </div>
            <ArrowRight className="w-3 h-3 text-[#08472C]" />
            <div className="text-center">
              <p className="text-xs text-[#0F172A]/50 mb-1">Now</p>
              <p className="text-xs font-semibold text-[#FCAB17]">{story.after}</p>
            </div>
          </div>
        </div>

        {/* Success Quote */}
        <div className="mb-4">
          <div className="flex items-start gap-2">
            <Quote className="w-4 h-4 text-[#08472C] mt-1 flex-shrink-0" />
            <p className="text-[#0F172A]/70 italic text-sm leading-relaxed">"{story.story}"</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#B2C6BD]/30">
          <div>
            <p className="text-xs text-[#0F172A]/50 mb-1">Progress</p>
            <p className="font-bold text-[#FCAB17]">{story.timeline}</p>
          </div>
          <div>
            <p className="text-xs text-[#0F172A]/50 mb-1">Duration</p>
            <p className="font-bold text-[#08472C] text-sm">{story.duration}</p>
          </div>
          <div>
            <p className="text-xs text-[#0F172A]/50 mb-1">Location</p>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B2C6BD]" />
              <p className="text-xs text-[#0F172A]">{story.location}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-[#0F172A]/50 mb-1">Joined</p>
            <p className="text-xs text-[#0F172A]">{story.joined}</p>
          </div>
        </div>
      </div>
    </div>
  );
}