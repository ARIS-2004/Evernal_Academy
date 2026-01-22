'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, ChevronRight, Star, BookOpen, Heart, Target, Sparkles } from 'lucide-react';
import { useState } from 'react';

const programmes = [
  {
    title: 'PlayGroup',
    desc: 'Children in this age group are identified as Toddlers. Children are born curious. They begin to explore the world around them through sensory play and guided activities.',
    img: '/landing_img/PlayGroup_img.avif',
    age: '2 – 3 Years',
    duration: '3 Hours/Day',
    features: ['Sensory Play', 'Motor Skills', 'Social Interaction'],
    color: 'bg-gradient-to-br from-[#FCAB17]/20 to-[#FFD700]/10',
    icon: <Heart className="w-6 h-6" />,
    slug: 'playgroup'
  },
  {
    title: 'Nursery',
    desc: 'The child is now identified as a Pre-schooler. Mandatory level 1 of Foundational Stage as per NEP. Focus on language development and basic concepts.',
    img: '/landing_img/Nursery_img.jpg',
    age: '3 – 4 Years',
    duration: '3 Hours/Day',
    features: ['Language Skills', 'Basic Concepts', 'Creative Arts'],
    color: 'bg-gradient-to-br from-[#08472C]/20 to-[#B2C6BD]/10',
    icon: <BookOpen className="w-6 h-6" />,
    slug: 'nursery'
  },
  {
    title: 'Junior KG / Senior KG',
    desc: 'This is level 2 and 3 of Foundational Stage 1 – Mandatory as per NEP. Advanced learning with structured activities and skill development.',
    img: '/landing_img/Junior KG_img.jpg',
    age: '4 – 6 Years',
    duration: '4 Hours/Day',
    features: ['Academic Readiness', 'Problem Solving', 'Team Activities'],
    color: 'bg-gradient-to-br from-[#FCAB17]/20 to-[#FFD700]/10',
    icon: <Target className="w-6 h-6" />,
    slug: 'kindergarten'
  },
  {
    title: 'Teacher Training Programme',
    desc: 'Teacher Training Programme has set unrivalled standards in the CDE space as a leader in ECCE. Comprehensive training for aspiring educators.',
    img: '/landing_img/Teacher Training Programme.webp',
    age: 'Adults',
    duration: '6 Months Course',
    features: ['ECE Certification', 'Practical Training', 'Placement Support'],
    color: 'bg-gradient-to-br from-[#08472C]/20 to-[#B2C6BD]/10',
    icon: <Sparkles className="w-6 h-6" />,
    slug: 'teacher-training'
  },
];

export default function ProgrammesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b from-white to-[#B2C6BD]/20 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-3 md:mb-4">
            Nurturing <span className="text-[#08472C]">Young Minds</span> at Every Stage
          </h2>
          <p className="text-[#0F172A]/70 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Age-appropriate programmes designed to foster holistic development and prepare children for lifelong learning
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programmes.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container - Equal Height for All */}
              <div className={`h-full flex flex-col bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-[#B2C6BD]/30 
                transition-all duration-500 ${hoveredIndex === index ? 'ring-2 ring-[#FCAB17]/50 transform -translate-y-1' : ''}`}>
                
                {/* Image Container with Fixed Height */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08472C]/60 to-transparent z-10"></div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Age Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#08472C]" />
                        <span className="text-xs sm:text-sm font-semibold text-[#0F172A]">{item.age}</span>
                      </div>
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${item.color} 
                    border border-white/30 backdrop-blur-sm`}>
                    <div className="text-[#08472C] scale-75 sm:scale-100">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4 bg-gradient-to-t from-[#08472C] to-transparent">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>

                {/* Content Section - Flex-grow for equal height */}
                <div className="flex-grow flex flex-col p-4 sm:p-6">
                  {/* Description */}
                  <p className="text-[#0F172A]/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                    {item.desc}
                  </p>

                  {/* Features List */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-[#08472C] mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {item.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center gap-1 bg-[#08472C]/5 text-[#08472C] text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#08472C]/10"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FCAB17]"></div>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section - Pushes to bottom */}
                  <div className="mt-auto pt-3 sm:pt-4 border-t border-[#B2C6BD]/30">
                    {/* Duration & Info */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FCAB17]/10 rounded-lg flex items-center justify-center">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#FCAB17]" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-[#0F172A]">Duration</div>
                          <div className="text-xs text-[#0F172A]/70">{item.duration}</div>
                        </div>
                      </div>

                      {/* Details Button */}
                      <Link 
                        href={`/programmes/${item.slug}`}
                        className="group/btn flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#08472C] to-[#0F172A] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg 
                        hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
                      >
                        <span className="font-medium">Details</span>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Regulatory Note */}
                    {item.title !== 'Teacher Training Programme' && (
                      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-[#B2C6BD]/30">
                        <p className="text-[10px] text-[#0F172A]/50 text-center">
                          * Age specifications based on respective State regulations
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCAB17]/0 to-[#08472C]/0 group-hover:from-[#FCAB17]/5 group-hover:to-[#08472C]/5 
                  transition-all duration-500 pointer-events-none rounded-2xl"></div>
              </div>

              {/* Connecting Line for Desktop */}
              {index < programmes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#B2C6BD] to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#08472C]/5 via-[#B2C6BD]/10 to-[#FCAB17]/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#B2C6BD]/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FCAB17] animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-[#08472C]">Curriculum</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0F172A] mb-1 sm:mb-2">NEP 2020 Compliant</h4>
              <p className="text-xs sm:text-sm text-[#0F172A]/70">
                Our curriculum follows National Education Policy guidelines for foundational stage learning
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#08472C] animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-[#08472C]">Methodology</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0F172A] mb-1 sm:mb-2">Play-Based Learning</h4>
              <p className="text-xs sm:text-sm text-[#0F172A]/70">
                Emphasis on learning through play, exploration, and hands-on activities
              </p>
            </div>

            <div className="text-center md:text-right">
              <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FCAB17] animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-[#08472C]">Assessment</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0F172A] mb-1 sm:mb-2">Continuous Evaluation</h4>
              <p className="text-xs sm:text-sm text-[#0F172A]/70">
                Regular progress tracking and parent-teacher meetings for comprehensive development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}