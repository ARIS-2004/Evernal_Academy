import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { MapPin, Users, Clock, Award, CheckCircle, BookOpen, Heart, Home, Palette, Music, Gamepad, Sparkles, Calendar, Phone, Mail, ChevronRight, ChevronDown, Star, Play, Shield, Target, GraduationCap, Gamepad2, Palette as Art, Music as MusicIcon, Utensils, TreePine } from 'lucide-react';
import Image from 'next/image';

export default function OfflineBatchesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#B2C6BD]/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#08472C] via-[#0F172A] to-[#08472C] text-white py-16 md:py-20 px-4">
        <div className="absolute inset-0 bg-black/10 z-0" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#FCAB17]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#B2C6BD]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="text-center lg:text-left lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Home className="w-4 h-4 md:w-5 md:h-5 text-[#FCAB17]" />
                <span className="text-sm md:text-base font-medium">Learn at Our Academy Campus</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Our <span className="text-[#FCAB17]">Play School</span> Programs
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mb-6 md:mb-8 mx-auto lg:mx-0">
                Nurturing young minds in our safe, colorful, and interactive learning environment designed for holistic development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <a
                  href="/admission"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#FCAB17]/40 transition-all transform hover:scale-105"
                >
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Enroll Your Child</span>
                </a>
                <a
                  href="/visit-center"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                >
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Schedule a Visit</span>
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 border border-white/20 shadow-2xl">
                <div className="relative h-56 md:h-72 lg:h-80 w-full rounded-lg md:rounded-xl overflow-hidden">
                  {/* Classroom image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#08472C] to-[#0F5C3C] flex items-center justify-center">
                    <div className="text-center p-4 md:p-6">
                      <Users className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-white/80" />
                      <span className="text-white font-bold text-lg md:text-xl">Child-Friendly Learning Environment</span>
                    </div>
                  </div>
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/20 backdrop-blur-sm rounded-lg px-2 md:px-3 py-1 text-xs md:text-sm font-medium">
                    Safe & Secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Academy */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Why Choose Our <span className="text-[#FCAB17]">Play School</span>
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              A nurturing environment where children learn, play, and grow with joy
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { 
                icon: Shield, 
                title: 'Safe & Secure Campus', 
                desc: 'CCTV monitored premises with child-safe facilities',
                color: 'from-[#08472C] to-[#0F5C3C]'
              },
              { 
                icon: Users, 
                title: 'Small Group Learning', 
                desc: '1:8 teacher-student ratio for personalized attention',
                color: 'from-[#FCAB17] to-[#FFD700]'
              },
              { 
                icon: Palette, 
                title: 'Creative Activities', 
                desc: 'Art, craft, music, and dance for holistic development',
                color: 'from-[#08472C] to-[#0F172A]'
              },
              { 
                icon: Heart, 
                title: 'Loving Caregivers', 
                desc: 'Trained, experienced, and passionate educators',
                color: 'from-[#FCAB17] to-[#FFD700]'
              },
              { 
                icon: Gamepad, 
                title: 'Play-Based Learning', 
                desc: 'Learning through fun and interactive play activities',
                color: 'from-[#08472C] to-[#0F5C3C]'
              },
              { 
                icon: Target, 
                title: 'Holistic Development', 
                desc: 'Focus on cognitive, social, and emotional growth',
                color: 'from-[#B2C6BD] to-white'
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-[#B2C6BD]/30 hover:border-[#FCAB17]/50 transition-all hover:shadow-lg">
                  <div className={`inline-flex p-2 md:p-3 bg-gradient-to-br ${item.color} rounded-lg md:rounded-xl text-white mb-3 md:mb-4`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-[#0F172A]/70">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Programs */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Our <span className="text-[#08472C]">Age Groups</span> & Programs
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Age-appropriate programs designed for optimal development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                name: 'Play Group', 
                age: '2-3 Years',
                duration: '3 hours daily',
                activities: 'Sensory play, rhymes, basic motor skills',
                batchSize: '8 Children per batch',
                features: ['Social Skills', 'Language Development', 'Creative Play']
              },
              { 
                name: 'Nursery', 
                age: '3-4 Years',
                duration: '4 hours daily',
                activities: 'Pre-writing, counting, group activities',
                batchSize: '10 Children per batch',
                features: ['Cognitive Skills', 'Fine Motor', 'Social Interaction']
              },
              { 
                name: 'Kindergarten', 
                age: '4-6 Years',
                duration: '5 hours daily',
                activities: 'Reading readiness, basic math, project work',
                batchSize: '12 Children per batch',
                features: ['School Readiness', 'Problem Solving', 'Creative Expression']
              },
            ].map((program, i) => (
              <div key={i} className="group bg-white rounded-xl md:rounded-2xl border border-[#B2C6BD]/30 overflow-hidden hover:shadow-xl transition-all hover:border-[#FCAB17]/50">
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#08472C]">{program.name}</h3>
                      <p className="text-[#FCAB17] font-bold">{program.age}</p>
                    </div>
                    <span className={`px-3 py-1 ${i === 0 ? 'bg-[#08472C]/10 text-[#08472C]' : i === 1 ? 'bg-[#FCAB17]/10 text-[#FCAB17]' : 'bg-[#B2C6BD]/20 text-[#0F172A]'} text-sm font-semibold rounded-full`}>
                      {program.batchSize}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4 md:mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#08472C]" />
                      <span className="text-[#0F172A] font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gamepad2 className="w-4 h-4 text-[#FCAB17]" />
                      <span className="text-[#0F172A] font-medium">{program.activities}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-[#0F172A]/70 mb-3">Key Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/10 text-[#08472C] text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a
                      href={`/admission/${i}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold hover:shadow-lg hover:shadow-[#FCAB17]/30 transition-all transform hover:scale-105"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm md:text-base">Enroll Now</span>
                    </a>
                    <a
                      href={`/programs/${i}`}
                      className="text-[#08472C] font-medium hover:text-[#FCAB17] transition-colors text-sm md:text-base"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Facilities */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Our <span className="text-[#08472C]">Child-Friendly</span> Facilities
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Safe, colorful, and stimulating environment for joyful learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                {[
                  { name: 'Play Area', color: 'from-[#08472C] to-[#0F5C3C]', icon: Gamepad },
                  { name: 'Art Corner', color: 'from-[#FCAB17] to-[#FFD700]', icon: Art },
                  { name: 'Music Room', color: 'from-[#B2C6BD] to-white', icon: MusicIcon },
                  { name: 'Outdoor Garden', color: 'from-[#08472C] to-[#0F172A]', icon: TreePine },
                ].map((facility, i) => {
                  const Icon = facility.icon;
                  return (
                    <div key={i} className="relative h-32 md:h-40 rounded-lg md:rounded-xl overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} flex flex-col items-center justify-center p-4`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" />
                        <span className="text-white font-semibold text-sm md:text-base text-center">{facility.name}</span>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Academy Highlights</h3>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  'Colorful, child-friendly classrooms with age-appropriate furniture',
                  'CCTV monitored premises with secure entry/exit',
                  'Sanitized play equipment and learning materials',
                  'First-aid trained staff and pediatrician on call',
                  'Safe indoor and outdoor play areas',
                  'Clean, hygienic washrooms with child-sized fixtures',
                  'Well-ventilated, air-conditioned learning spaces',
                  'Organic meal options available (optional)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#08472C] mt-0.5 flex-shrink-0" />
                    <span className="text-[#0F172A] text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/10 rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#B2C6BD]/30">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#08472C]" />
                  <h4 className="font-bold text-[#0F172A] text-lg md:text-xl">Location</h4>
                </div>
                <p className="text-[#0F172A]/70 mb-2">Jaiago Academy Campus</p>
                <p className="text-[#0F172A]/70 mb-4">[Your City, Bangladesh]</p>
                <a href="/visit" className="inline-flex items-center gap-1 text-[#08472C] font-semibold hover:text-[#FCAB17] transition-colors text-sm md:text-base">
                  Schedule a Visit <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Daily <span className="text-[#FCAB17]">Routine</span> & Activities
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Structured yet flexible routine for balanced learning and fun
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-[#B2C6BD]/30 bg-white">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gradient-to-r from-[#08472C] to-[#0F5C3C]">
                <tr>
                  <th className="text-left p-4 md:p-6 font-bold text-white">Time</th>
                  <th className="text-left p-4 md:p-6 font-bold text-white">Activity</th>
                  <th className="text-left p-4 md:p-6 font-bold text-white">Focus Area</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '8:30 - 9:00 AM', activity: 'Arrival & Free Play', focus: 'Social Skills, Settling In' },
                  { time: '9:00 - 9:30 AM', activity: 'Morning Circle Time', focus: 'Language, Group Interaction' },
                  { time: '9:30 - 10:15 AM', activity: 'Creative Arts & Craft', focus: 'Fine Motor, Creativity' },
                  { time: '10:15 - 10:45 AM', activity: 'Snack Time', focus: 'Self-Help, Social Manners' },
                  { time: '10:45 - 11:30 AM', activity: 'Outdoor Play / Games', focus: 'Gross Motor, Team Play' },
                  { time: '11:30 - 12:15 PM', activity: 'Learning Activities', focus: 'Cognitive Development' },
                  { time: '12:15 - 1:00 PM', activity: 'Story Time & Departure', focus: 'Language, Relaxation' },
                ].map((schedule, i) => (
                  <tr key={i} className="border-b border-[#B2C6BD]/30 last:border-0 hover:bg-[#B2C6BD]/5">
                    <td className="p-4 md:p-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#08472C]" />
                        <span className="font-semibold text-[#0F172A]">{schedule.time}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-6">
                      <p className="font-medium text-[#0F172A]">{schedule.activity}</p>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#FCAB17]/10 to-[#FFD700]/10 text-[#FCAB17] rounded-full text-sm font-medium">
                        {schedule.focus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Our <span className="text-[#08472C]">Learning Approach</span>
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Child-centric methodology focusing on holistic development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: '1', title: 'Play-Based Learning', desc: 'Learning through fun, interactive play activities', icon: Gamepad },
              { step: '2', title: 'Individual Attention', desc: '1:8 ratio ensures personalized care for each child', icon: Users },
              { step: '3', title: 'Multi-Sensory Approach', desc: 'Engaging all senses for better learning retention', icon: Palette },
              { step: '4', title: 'Continuous Assessment', desc: 'Regular progress tracking and parent communication', icon: GraduationCap },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative">
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-[#B2C6BD]/30 z-0" />
                  )}
                  <div className="relative bg-white rounded-xl p-4 md:p-6 border border-[#B2C6BD]/30 text-center z-10 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#08472C] to-[#0F5C3C] text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">
                      {item.step}
                    </div>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#FCAB17] mx-auto mb-3 md:mb-4" />
                    <h3 className="text-lg md:text-xl font-bold text-[#0F172A] mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-[#0F172A]/70">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Teachers */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Meet Our <span className="text-[#FCAB17]">Caring Teachers</span>
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Passionate educators dedicated to nurturing young minds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                name: 'Ms. Sarah Rahman', 
                role: 'Head Teacher',
                experience: '10+ Years',
                expertise: 'Early Childhood Education',
                description: 'Specialized in play-based learning and child psychology'
              },
              { 
                name: 'Ms. Fatima Ahmed', 
                role: 'Art & Craft Specialist',
                experience: '8+ Years',
                expertise: 'Creative Arts for Children',
                description: 'Makes learning fun through art and creative expression'
              },
              { 
                name: 'Ms. Nusrat Jahan', 
                role: 'Music & Movement',
                experience: '6+ Years',
                expertise: 'Rhythm & Motor Skills',
                description: 'Expert in developing coordination through music'
              },
            ].map((teacher, i) => (
              <div key={i} className="group bg-white rounded-xl md:rounded-2xl border border-[#B2C6BD]/30 overflow-hidden hover:shadow-lg transition-all">
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#08472C] to-[#0F5C3C] flex items-center justify-center text-white text-lg md:text-xl font-bold">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#0F172A]">{teacher.name}</h3>
                      <p className="text-[#FCAB17] font-medium">{teacher.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <span className="text-sm text-[#0F172A]/50 block mb-1">Experience</span>
                      <p className="text-[#0F172A] font-medium">{teacher.experience}</p>
                    </div>
                    <div>
                      <span className="text-sm text-[#0F172A]/50 block mb-1">Specialization</span>
                      <p className="text-[#0F172A]">{teacher.expertise}</p>
                    </div>
                    <div>
                      <span className="text-sm text-[#0F172A]/50 block mb-1">About</span>
                      <p className="text-[#0F172A]">{teacher.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 md:mt-6">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-3 h-3 md:w-4 md:h-4 fill-[#FCAB17] text-[#FCAB17]" />
                    ))}
                    <span className="text-[#0F172A]/50 text-xs md:text-sm ml-2">4.9/5 Parent Rating</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Learning <span className="text-[#08472C]">Environment</span>
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Designed for exploration, creativity, and joyful learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/10 rounded-xl md:rounded-2xl p-4 md:p-8 border border-[#B2C6BD]/30">
                <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Our Learning Spaces</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { title: 'Interactive Play Zone', desc: 'Sensory & motor skill development' },
                    { title: 'Creative Corner', desc: 'Art & craft materials station' },
                    { title: 'Reading Nook', desc: 'Storybooks and picture books' },
                    { title: 'Music Area', desc: 'Instruments for rhythm activities' },
                    { title: 'Water Play', desc: 'Safe water play for sensory fun' },
                    { title: 'Sand Pit', desc: 'Creative play with kinetic sand' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-3 md:p-4">
                      <h4 className="font-bold text-[#0F172A] mb-1 text-sm md:text-base">{item.title}</h4>
                      <p className="text-xs md:text-sm text-[#0F172A]/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-lg md:rounded-xl overflow-hidden h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-[#08472C] to-[#0F5C3C] flex items-center justify-center">
                  <div className="text-center p-4 md:p-6">
                    <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-white/80" />
                    <span className="text-white font-bold text-lg md:text-xl">Colorful Learning Spaces</span>
                    <p className="text-white/80 mt-2 text-sm md:text-base">Designed for exploration and creativity</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 bg-white rounded-lg md:rounded-xl p-3 md:p-4 border border-[#B2C6BD]/30 shadow-lg">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-[#0F172A]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A] text-sm md:text-base">Child-Friendly</p>
                    <p className="text-xs md:text-sm text-[#0F172A]/70">Safe & Stimulating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Happy <span className="text-[#FCAB17]">Parents</span> Share
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Hear from parents about their children's joyful learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                name: 'Mrs. Rahman', 
                child: 'Mother of Arham (3 years)',
                review: 'My son was very shy. Now he loves coming to school and has made many friends!',
                rating: 5
              },
              { 
                name: 'Mr. & Mrs. Chowdhury', 
                child: 'Parents of Aisha (4 years)',
                review: 'The teachers are wonderful! They understand each child\'s unique needs.',
                rating: 5
              },
              { 
                name: 'Ms. Ahmed', 
                child: 'Mother of Zayan (5 years)',
                review: 'Regular progress updates keep us informed about our child\'s development.',
                rating: 5
              },
            ].map((parent, i) => (
              <div key={i} className="bg-white rounded-xl md:rounded-2xl border border-[#B2C6BD]/30 p-4 md:p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 md:gap-4 mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#08472C] to-[#0F5C3C] flex items-center justify-center text-white text-lg font-bold">
                    {parent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-lg">{parent.name}</h3>
                    <p className="text-[#FCAB17] text-sm">{parent.child}</p>
                  </div>
                </div>
                
                <p className="text-[#0F172A] italic mb-4 md:mb-6 text-sm md:text-base">"{parent.review}"</p>
                
                <div className="flex items-center">
                  {[1,2,3,4,5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-3 h-3 md:w-4 md:h-4 ${star <= parent.rating ? 'fill-[#FCAB17] text-[#FCAB17]' : 'text-[#B2C6BD]'}`} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Visit Our <span className="text-[#08472C]">Campus</span>
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Easy to reach location with ample space for children
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-[#08472C] to-[#0F5C3C] rounded-xl md:rounded-2xl h-64 md:h-80 flex items-center justify-center">
                <div className="text-center text-white p-4 md:p-6">
                  <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
                  <p className="text-xl md:text-2xl font-semibold">Jaiago Academy Campus</p>
                  <p className="text-white/80 mt-2 text-sm md:text-base">[Enter your campus address here]</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/10 rounded-xl md:rounded-2xl border border-[#B2C6BD]/30 p-4 md:p-6 h-full">
                <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">Contact Details</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-[#08472C]" />
                      <h4 className="font-semibold text-[#0F172A]">Address</h4>
                    </div>
                    <p className="text-[#0F172A]/70 text-sm md:text-base">Jaiago Academy Campus</p>
                    <p className="text-[#0F172A]/70 text-sm md:text-base">[Your City, Bangladesh]</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-[#08472C]" />
                      <h4 className="font-semibold text-[#0F172A]">Timings</h4>
                    </div>
                    <p className="text-[#0F172A]/70 text-sm md:text-base">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-[#0F172A]/70 text-sm md:text-base">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-5 h-5 text-[#08472C]" />
                      <h4 className="font-semibold text-[#0F172A]">Contact</h4>
                    </div>
                    <p className="text-[#0F172A]/70 text-sm md:text-base">Phone: +880 XXXX-XXXXXX</p>
                    <p className="text-[#0F172A]/70 text-sm md:text-base">Email: admission@jaiagoacademy.com</p>
                  </div>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold hover:shadow-lg hover:shadow-[#FCAB17]/30 transition-all transform hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call for Campus Tour</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 md:mb-4">
              Frequently Asked <span className="text-[#08472C]">Questions</span>
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-[#0F172A]/70">Common questions from parents about our play school</p>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {[
              {
                question: 'What is the teacher-student ratio in your academy?',
                answer: 'We maintain a 1:8 teacher-student ratio to ensure personalized attention and care for each child.'
              },
              {
                question: 'Are trial sessions available before admission?',
                answer: 'Yes, we offer free trial sessions on Saturdays where parents can bring their children to experience our environment.'
              },
              {
                question: 'What safety measures do you have in place?',
                answer: 'We have CCTV surveillance, secure entry/exit, first-aid trained staff, and regular safety drills for complete child safety.'
              },
              {
                question: 'How do you handle separation anxiety in children?',
                answer: 'Our trained staff gently helps children settle in through engaging activities, and we allow parents to stay initially if needed.'
              },
              {
                question: 'What is your sick child policy?',
                answer: 'We request parents to keep sick children at home. We have isolation facilities and a pediatrician on call if needed.'
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#B2C6BD]/30 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none hover:bg-[#B2C6BD]/5 transition-colors">
                    <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] text-left pr-4">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-[#B2C6BD] group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#0F172A]/70 text-sm md:text-base">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-[#08472C] via-[#0F172A] to-[#08472C]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Visit Our Campus & See the Difference
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 md:mb-8 text-base md:text-lg">
            Experience our child-friendly environment and meet our caring teachers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="/book-visit"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#FCAB17]/40 transition-all transform hover:scale-105"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5" />
              <span>Book a Campus Tour</span>
            </a>
            <a
              href="/call"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span>Call Now: +880 XXXX-XXXXXX</span>
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}