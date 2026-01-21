import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { 
  Heart, Target, Eye, Users, Zap, Globe, BookOpen, Award, 
  Briefcase, GraduationCap, Calendar, CheckCircle, ChevronRight, 
  Star, Phone, Mail, MapPin, Sparkles, Baby, Apple, Home, 
  Shield, Brain, Music, PaintBucket, Utensils, Sun, Cloud, 
  Moon, Trees, Flower 
} from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#B2C6BD]/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#08472C]/90 via-[#08472C]/80 to-[#0F172A]/90"></div>
          <Image
            src="/about_img/hero_sections_img.jpg"
            alt="Jaiago Academy Children Playing"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#FCAB17]/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#B2C6BD]/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-[#FCAB17]/10 rounded-full animate-ping"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCAB17]/20 to-[#FFD700]/10 backdrop-blur-sm px-6 py-3 rounded-full border border-[#FCAB17]/30 mb-8">
            <Heart className="w-5 h-5 text-[#FCAB17] animate-pulse" />
            <span className="text-white font-medium">Welcome to Jaiago Academy</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Where Every Child's <span className="text-[#FCAB17]">Journey</span> Begins
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-medium mb-10">
            Nurturing Young Minds with Love, Care, and Holistic Development Since 2010
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 animate-bounce-slow">
              <Baby className="w-5 h-5" />
              Schedule Campus Tour
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call: +91 98765 43210
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 text-[#08472C] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#08472C]/20">
              <Heart className="w-4 h-4 text-[#FCAB17]" />
              Our Story & Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Welcome to <span className="text-[#08472C]">Jaiago Academy</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-4xl mx-auto leading-relaxed">
              Founded in 2010, Jaiago Academy was born from a simple belief: every child deserves 
              a nurturing environment where they can grow, explore, and discover their unique potential 
              through play, creativity, and guided learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#08472C]/5 via-white to-[#FCAB17]/5 rounded-3xl p-8 border border-[#B2C6BD]/30 shadow-xl overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-[#0F172A]" />
                </div>
                
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white p-6 rounded-2xl border border-[#B2C6BD]/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-[#08472C] mb-2">12+</div>
                    <p className="text-[#0F172A]/70 font-medium">Years of Excellence</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-[#B2C6BD]/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-[#08472C] mb-2">1000+</div>
                    <p className="text-[#0F172A]/70 font-medium">Happy Children</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-[#B2C6BD]/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-[#08472C] mb-2">25+</div>
                    <p className="text-[#0F172A]/70 font-medium">Expert Educators</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-[#B2C6BD]/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-[#08472C] mb-2">1:8</div>
                    <p className="text-[#0F172A]/70 font-medium">Teacher-Child Ratio</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#08472C] transition-colors">
                    Child-Centered Approach
                  </h4>
                  <p className="text-[#0F172A]/70 leading-relaxed">
                    We focus on the individual needs and interests of each child, creating 
                    personalized learning experiences that celebrate their unique personality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#08472C] to-[#0F172A] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#08472C] transition-colors">
                    Safe & Secure Environment
                  </h4>
                  <p className="text-[#0F172A]/70 leading-relaxed">
                    CCTV-monitored premises, trained staff, and child-safe facilities ensure 
                    complete peace of mind for parents.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#08472C] transition-colors">
                    Holistic Development
                  </h4>
                  <p className="text-[#0F172A]/70 leading-relaxed">
                    Our curriculum focuses on cognitive, emotional, social, and physical 
                    development through play-based and structured learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#08472C] to-[#0F172A] rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#08472C] to-[#0F172A] rounded-3xl p-8 md:p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed text-lg">
                    To create a nurturing environment where every child feels loved, valued, 
                    and excited to learn. We aim to foster curiosity, build confidence, and 
                    develop foundational skills through play-based activities, creative exploration, 
                    and personalized attention.
                  </p>
                  <div className="mt-8 flex items-center gap-2">
                    {[Trees, Flower, Apple, Sun].map((Icon, index) => (
                      <div key={index} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 md:p-10 border-2 border-[#FCAB17] shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#FCAB17]/10 rounded-full -translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FCAB17]/20 to-[#FFD700]/20 rounded-2xl flex items-center justify-center">
                      <Eye className="w-8 h-8 text-[#FCAB17]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">Our Vision</h3>
                  </div>
                  <p className="text-[#0F172A]/70 leading-relaxed text-lg">
                    To be the most trusted early childhood education center, recognized for 
                    excellence in nurturing confident, creative, and compassionate young learners 
                    who are well-prepared for lifelong learning and positive social contribution.
                  </p>
                  <div className="mt-8 flex items-center gap-2">
                    {[Star, Sparkles, Heart, Award].map((Icon, index) => (
                      <div key={index} className="w-10 h-10 bg-[#FCAB17]/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#FCAB17]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - Play Based Learning */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 text-[#08472C] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#08472C]/20">
              <Baby className="w-4 h-4 text-[#FCAB17]" />
              Our Learning Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Learning Through <span className="text-[#08472C]">Play & Discovery</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              We believe children learn best when they're having fun! Our approach combines 
              structured activities with free play to stimulate all areas of development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Cognitive Development",
                desc: "Problem-solving, memory, and critical thinking activities",
                activities: ["Puzzles", "Pattern Games", "Memory Cards"],
                color: "from-[#08472C] to-[#0F172A]",
                emoji: "🧩"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Social-Emotional",
                desc: "Building empathy, sharing, and emotional expression",
                activities: ["Role Play", "Group Activities", "Feelings Circle"],
                color: "from-[#FCAB17] to-[#FFD700]",
                emoji: "❤️"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Physical Development",
                desc: "Fine and gross motor skills through movement",
                activities: ["Outdoor Play", "Art & Craft", "Dance"],
                color: "from-[#08472C] to-[#B2C6BD]",
                emoji: "🤸"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Creative Expression",
                desc: "Art, music, and imaginative play",
                activities: ["Painting", "Music Time", "Storytelling"],
                color: "from-[#FCAB17] to-[#FFD700]",
                emoji: "🎨"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl transform group-hover:scale-105 transition-all duration-500 opacity-5`}></div>
                <div className="relative bg-white rounded-2xl p-6 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <span className="text-3xl">{item.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#08472C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#0F172A]/70 mb-4 text-sm">{item.desc}</p>
                  <div className="space-y-2">
                    {item.activities.map((activity, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FCAB17]"></div>
                        <span className="text-sm text-[#0F172A]/70">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 text-[#08472C] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#08472C]/20">
              <Calendar className="w-4 h-4 text-[#FCAB17]" />
              A Day at Jaiago
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Our <span className="text-[#08472C]">Daily Schedule</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              A balanced routine that combines learning, play, rest, and nutrition for optimal development
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  time: "8:30 AM - 9:00 AM",
                  title: "Welcome & Free Play",
                  desc: "Gentle arrival, parent handover, and free exploration",
                  icon: <Sun className="w-6 h-6" />,
                  color: "from-[#FCAB17]/20 to-[#FFD700]/10"
                },
                {
                  time: "9:00 AM - 10:30 AM",
                  title: "Learning Activities",
                  desc: "Structured lessons, circle time, and skill development",
                  icon: <BookOpen className="w-6 h-6" />,
                  color: "from-[#08472C]/20 to-[#B2C6BD]/10"
                },
                {
                  time: "10:30 AM - 11:00 AM",
                  title: "Nutrition Break",
                  desc: "Healthy snacks and hydration time",
                  icon: <Utensils className="w-6 h-6" />,
                  color: "from-[#FCAB17]/20 to-[#FFD700]/10"
                },
                {
                  time: "11:00 AM - 12:00 PM",
                  title: "Creative Expression",
                  desc: "Art, music, dance, and imaginative play",
                  icon: <PaintBucket className="w-6 h-6" />,
                  color: "from-[#08472C]/20 to-[#B2C6BD]/10"
                },
                {
                  time: "12:00 PM - 1:00 PM",
                  title: "Outdoor Play",
                  desc: "Physical activities in our safe play area",
                  icon: <Trees className="w-6 h-6" />,
                  color: "from-[#FCAB17]/20 to-[#FFD700]/10"
                },
                {
                  time: "1:00 PM - 2:00 PM",
                  title: "Lunch & Rest Time",
                  desc: "Nutritious meal followed by quiet relaxation",
                  icon: <Moon className="w-6 h-6" />,
                  color: "from-[#08472C]/20 to-[#B2C6BD]/10"
                },
                {
                  time: "2:00 PM - 3:00 PM",
                  title: "Group Activities",
                  desc: "Team games and social skill development",
                  icon: <Users className="w-6 h-6" />,
                  color: "from-[#FCAB17]/20 to-[#FFD700]/10"
                },
                {
                  time: "3:00 PM - 3:30 PM",
                  title: "Story Time & Departure",
                  desc: "Interactive stories and parent pickup",
                  icon: <Home className="w-6 h-6" />,
                  color: "from-[#08472C]/20 to-[#B2C6BD]/10"
                }
              ].map((schedule, index) => (
                <div key={index} className="group">
                  <div className={`bg-white rounded-2xl p-6 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full ${schedule.color}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${schedule.color.replace('20', '10').replace('10', '20')} rounded-lg flex items-center justify-center`}>
                        {schedule.icon}
                      </div>
                      <div className="text-sm font-semibold px-3 py-1.5 rounded-full bg-[#08472C]/10 text-[#08472C]">
                        {schedule.time}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-3">{schedule.title}</h3>
                    <p className="text-[#0F172A]/70 text-sm">{schedule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Environment */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 text-[#08472C] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#08472C]/20">
              <Home className="w-4 h-4 text-[#FCAB17]" />
              Our World-Class Facilities
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              A <span className="text-[#08472C]">Safe & Stimulating</span> Environment
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Designed specifically for young learners with safety, comfort, and learning in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Age-Appropriate Classrooms",
                desc: "Bright, colorful rooms with learning corners and child-sized furniture",
                features: ["Reading Corner", "Art Station", "Block Area"],
                icon: "🏫",
                color: "border-[#08472C]/30"
              },
              {
                title: "Safe Outdoor Play Area",
                desc: "Soft-surface playground with age-appropriate equipment",
                features: ["Swings", "Sand Pit", "Water Play"],
                icon: "🌳",
                color: "border-[#FCAB17]/30"
              },
              {
                title: "CCTV Surveillance",
                desc: "24/7 monitored premises ensuring complete safety",
                features: ["Parent View Access", "Secure Entry", "Trained Staff"],
                icon: "📹",
                color: "border-[#08472C]/30"
              },
              {
                title: "Hygiene & Sanitation",
                desc: "Regular cleaning and child-friendly washrooms",
                features: ["Hand Washing", "Clean Toys", "Daily Sanitization"],
                icon: "🧼",
                color: "border-[#FCAB17]/30"
              },
              {
                title: "Learning Resources",
                desc: "Montessori materials and educational toys",
                features: ["Sensory Toys", "Puzzles", "Musical Instruments"],
                icon: "🎲",
                color: "border-[#08472C]/30"
              },
              {
                title: "Nutrition Kitchen",
                desc: "Healthy meals prepared with fresh ingredients",
                features: ["Balanced Diet", "Fresh Fruits", "Allergy Awareness"],
                icon: "🍎",
                color: "border-[#FCAB17]/30"
              }
            ].map((facility, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-b from-white to-[#B2C6BD]/5 rounded-2xl p-8 border ${facility.color} shadow-lg hover:shadow-2xl transition-all duration-500 h-full hover:translate-y-[-8px]`}>
                  <div className="text-5xl mb-6 text-center">{facility.icon}</div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 text-center">{facility.title}</h3>
                  <p className="text-[#0F172A]/70 mb-6 text-center">{facility.desc}</p>
                  <div className="space-y-2">
                    {facility.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[#FCAB17] flex-shrink-0" />
                        <span className="text-sm text-[#0F172A]/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 text-[#08472C] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#08472C]/20">
              <Heart className="w-4 h-4 text-[#FCAB17]" />
              What Parents Say
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Happy <span className="text-[#08472C]">Parents</span>, Happy <span className="text-[#FCAB17]">Children</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              Hear from parents who have chosen Jaiago Academy for their child's early education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                child: "Aarav (4 years)",
                programme: "Kindergarten",
                testimonial: "My son looks forward to school every day! The teachers are so loving and patient. His confidence has grown tremendously since joining Jaiago.",
                rating: 5,
                avatar: "👩‍👦"
              },
              {
                name: "Rajesh Mehta",
                child: "Anaya (3 years)",
                programme: "Nursery",
                testimonial: "The safe environment and regular updates give us complete peace of mind. Anaya has developed excellent social skills and loves her teachers.",
                rating: 5,
                avatar: "👨‍👧"
              },
              {
                name: "Sunita Reddy",
                child: "Kabir (2.5 years)",
                programme: "PlayGroup",
                testimonial: "As a working mother, the daycare facility is a blessing. Kabir gets nutritious meals, proper rest, and learns through play. Highly recommended!",
                rating: 5,
                avatar: "👩‍👶"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-3xl p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FCAB17] text-[#FCAB17]" />
                    ))}
                  </div>
                  <p className="text-[#0F172A]/70 mb-8 text-lg italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="border-t border-[#B2C6BD]/30 pt-6 flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#08472C] to-[#0F172A] rounded-full flex items-center justify-center text-white text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-lg">{testimonial.name}</h4>
                      <p className="text-[#08472C] font-medium">Parent of {testimonial.child}</p>
                      <p className="text-sm text-[#0F172A]/60 mt-1">{testimonial.programme} Programme</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 text-[#08472C] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#08472C]/20">
              <Users className="w-4 h-4 text-[#FCAB17]" />
              Our Caring Team
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Meet Our <span className="text-[#08472C]">Educators</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              Passionate, qualified, and experienced professionals dedicated to nurturing young minds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Head Teacher - Kindergarten",
                experience: "15+ Years in Early Education",
                expertise: "Child Psychology, Montessori Methods",
                avatar: "👩‍🏫",
                color: "from-[#08472C] to-[#0F172A]"
              },
              {
                name: "Rajesh Kumar",
                role: "Senior Educator - PlayGroup",
                experience: "12+ Years with Toddlers",
                expertise: "Sensory Play, Motor Development",
                avatar: "👨‍🏫",
                color: "from-[#FCAB17] to-[#FFD700]"
              },
              {
                name: "Dr. Sunita Mehta",
                role: "Academic Director",
                experience: "20+ Years in Education",
                expertise: "Curriculum Design, Child Development",
                avatar: "👩‍🎓",
                color: "from-[#08472C] to-[#B2C6BD]"
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-3xl overflow-hidden border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className={`h-48 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 text-5xl">
                      {member.avatar}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{member.name}</h3>
                    <p className="text-[#08472C] font-semibold mb-4">{member.role}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#FCAB17]" />
                        <span className="text-sm text-[#0F172A]/70">{member.experience}</span>
                      </div>
                      <p className="text-[#0F172A]/70 text-sm">{member.expertise}</p>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-[#08472C]/10 to-[#B2C6BD]/10 text-[#08472C] font-semibold rounded-lg hover:from-[#08472C]/20 hover:to-[#B2C6BD]/20 transition-all duration-300">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Awards */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 text-[#08472C] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#08472C]/20">
              <Award className="w-4 h-4 text-[#FCAB17]" />
              Recognition & Accreditation
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Our <span className="text-[#08472C]">Accreditations</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              Recognized for excellence in early childhood education and child care
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { 
                name: "ISO Certified", 
                logo: "🏅",
                description: "Quality Management System",
                year: "Since 2015"
              },
              { 
                name: "NEP 2020 Compliant", 
                logo: "📜",
                description: "National Education Policy",
                year: "2020"
              },
              { 
                name: "ECE Certified", 
                logo: "🎓",
                description: "Early Childhood Education",
                year: "Certified"
              },
              { 
                name: "Safe & Secure", 
                logo: "🛡️",
                description: "Child Safety Standards",
                year: "Award 2022"
              },
              { 
                name: "Hygiene Excellence", 
                logo: "🧼",
                description: "Health & Hygiene Standards",
                year: "Certified"
              },
              { 
                name: "Parent's Choice", 
                logo: "❤️",
                description: "Best Preschool Award",
                year: "2023"
              }
            ].map((partner, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-2xl p-6 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">{partner.logo}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#0F172A] text-lg mb-1">{partner.name}</div>
                    <div className="text-sm text-[#0F172A]/70 mb-2">{partner.description}</div>
                    <div className="text-xs text-[#08472C] font-medium">{partner.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#08472C] via-[#08472C]/90 to-[#0F172A] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FCAB17]/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B2C6BD]/5 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FCAB17]/20 rounded-full animate-bounce"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Begin Your Child's <span className="text-[#FCAB17]">Learning Adventure</span> Today!
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our community of happy families and give your child the best start in their educational journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-10 py-4 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
              <Baby className="w-6 h-6" />
              <span>Schedule Campus Visit</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 group-hover:animate-pulse" />
              <span>Call: +91 98765 43210</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div className="flex flex-col items-center gap-3">
              <Mail className="w-8 h-8 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 mb-1">Email us at</p>
                <p className="text-xl font-bold text-white">info@jaiagoacademy.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-8 h-8 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 mb-1">Visit our campus</p>
                <p className="text-xl font-bold text-white">Kolkata, West Bengal</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Calendar className="w-8 h-8 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 mb-1">Open Hours</p>
                <p className="text-xl font-bold text-white">Mon-Sat: 8 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}