'use client';

import { useEffect, useState } from 'react';
import { Linkedin, Star, Award, TrendingUp, Users, CheckCircle, Heart, BookOpen, GraduationCap, Shield, Target, Sparkles } from 'lucide-react';

// Custom avatars as SVG components
const FemaleTeacherAvatar = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="#08472C"/>
    <circle cx="40" cy="30" r="12" fill="#FCAB17"/>
    <path d="M40 42C28 42 20 50 20 62H60C60 50 52 42 40 42Z" fill="#FCAB17"/>
    <path d="M35 48L40 53L50 43" stroke="#08472C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="30" y="52" width="20" height="4" rx="2" fill="#08472C"/>
    <rect x="25" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <rect x="49" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <path d="M36 30C36 31.6569 37.3431 33 39 33C40.6569 33 42 31.6569 42 30" stroke="#0F172A" strokeWidth="2"/>
  </svg>
);

const MaleTeacherAvatar = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="#08472C"/>
    <circle cx="40" cy="30" r="12" fill="#B2C6BD"/>
    <path d="M40 42C28 42 20 50 20 62H60C60 50 52 42 40 42Z" fill="#B2C6BD"/>
    <rect x="30" y="50" width="20" height="4" rx="2" fill="#0F172A"/>
    <rect x="28" y="58" width="24" height="6" rx="3" fill="#0F172A"/>
    <path d="M32 48L40 56L48 48" stroke="#FCAB17" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="25" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <rect x="49" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <path d="M36 30C36 31.6569 37.3431 33 39 33C40.6569 33 42 31.6569 42 30" stroke="#0F172A" strokeWidth="2"/>
  </svg>
);

const SeniorTeacherAvatar = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="#08472C"/>
    <circle cx="40" cy="30" r="12" fill="#FCAB17"/>
    <path d="M40 42C28 42 20 50 20 62H60C60 50 52 42 40 42Z" fill="#FCAB17"/>
    <circle cx="40" cy="52" r="6" fill="#08472C"/>
    <path d="M40 48V56M44 52H36" stroke="white" strokeWidth="2"/>
    <rect x="25" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <rect x="49" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <path d="M36 30C36 31.6569 37.3431 33 39 33C40.6569 33 42 31.6569 42 30" stroke="#0F172A" strokeWidth="2"/>
  </svg>
);

const MontessoriAvatar = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="#08472C"/>
    <circle cx="40" cy="30" r="12" fill="#B2C6BD"/>
    <path d="M40 42C28 42 20 50 20 62H60C60 50 52 42 40 42Z" fill="#B2C6BD"/>
    <circle cx="35" cy="48" r="2" fill="#FCAB17"/>
    <circle cx="45" cy="48" r="2" fill="#FCAB17"/>
    <path d="M35 53H45" stroke="#FCAB17" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 56L35 58L40 56L45 58L50 56" stroke="#08472C" strokeWidth="2" strokeLinecap="round"/>
    <rect x="25" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <rect x="49" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <path d="M36 30C36 31.6569 37.3431 33 39 33C40.6569 33 42 31.6569 42 30" stroke="#0F172A" strokeWidth="2"/>
  </svg>
);

const MusicTeacherAvatar = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="#08472C"/>
    <circle cx="40" cy="30" r="12" fill="#FCAB17"/>
    <path d="M40 42C28 42 20 50 20 62H60C60 50 52 42 40 42Z" fill="#FCAB17"/>
    <path d="M35 50C35 52.2091 36.7909 54 39 54C41.2091 54 43 52.2091 43 50C43 47.7909 41.2091 46 39 46C36.7909 46 35 47.7909 35 50Z" fill="#08472C"/>
    <path d="M39 46V44L44 42" stroke="#08472C" strokeWidth="2"/>
    <rect x="25" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <rect x="49" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <path d="M36 30C36 31.6569 37.3431 33 39 33C40.6569 33 42 31.6569 42 30" stroke="#0F172A" strokeWidth="2"/>
  </svg>
);

const ArtTeacherAvatar = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="#08472C"/>
    <circle cx="40" cy="30" r="12" fill="#B2C6BD"/>
    <path d="M40 42C28 42 20 50 20 62H60C60 50 52 42 40 42Z" fill="#B2C6BD"/>
    <circle cx="35" cy="48" r="3" fill="#FCAB17"/>
    <circle cx="45" cy="48" r="3" fill="#FCAB17"/>
    <path d="M35 53L45 53" stroke="#FCAB17" strokeWidth="2"/>
    <path d="M32 58L48 58" stroke="#08472C" strokeWidth="2"/>
    <rect x="25" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <rect x="49" y="35" width="6" height="2" rx="1" fill="#0F172A"/>
    <path d="M36 30C36 31.6569 37.3431 33 39 33C40.6569 33 42 31.6569 42 30" stroke="#0F172A" strokeWidth="2"/>
  </svg>
);

const teachers = [
  {
    name: 'Priya Sharma',
    expertise: 'Head Teacher - Kindergarten',
    experience: '15 years in Early Education',
    bio: 'Specialized in child psychology and early childhood development. Passionate about creating engaging learning environments for young minds.',
    avatar: <FemaleTeacherAvatar />,
    specializations: ['Child Psychology', 'Montessori', 'Language Development'],
    rating: 4.9,
    students: 450,
    backgroundColor: 'bg-gradient-to-br from-[#08472C] to-[#0F172A]',
    qualifications: ['M.Ed in Early Childhood', 'Montessori Certified', 'First Aid Trained']
  },
  {
    name: 'Rajesh Kumar',
    expertise: 'Senior Educator - PlayGroup',
    experience: '12 years with toddlers',
    bio: 'Expert in sensory play and motor skills development. Believes in learning through play and exploration.',
    avatar: <MaleTeacherAvatar />,
    specializations: ['Sensory Play', 'Motor Skills', 'Social Development'],
    rating: 4.8,
    students: 320,
    backgroundColor: 'bg-gradient-to-br from-[#FCAB17] to-[#FFD700]',
    qualifications: ['B.Ed in ECE', 'Special Needs Training', 'CPR Certified']
  },
  {
    name: 'Dr. Sunita Mehta',
    expertise: 'Academic Director',
    experience: '20+ years in education',
    bio: 'PhD in Child Development. Former university professor turned early education specialist. Focuses on curriculum design.',
    avatar: <SeniorTeacherAvatar />,
    specializations: ['Curriculum Design', 'Child Development', 'Assessment'],
    rating: 4.9,
    students: 1200,
    backgroundColor: 'bg-gradient-to-br from-[#08472C] to-[#B2C6BD]',
    qualifications: ['PhD in Child Development', 'NEP 2020 Expert', 'Published Author']
  },
  {
    name: 'Aisha Khan',
    expertise: 'Montessori Specialist',
    experience: '10 years Montessori training',
    bio: 'Trained in AMI Montessori method. Creates self-directed learning environments that foster independence.',
    avatar: <MontessoriAvatar />,
    specializations: ['Montessori Method', 'Practical Life', 'Self-Directed Learning'],
    rating: 4.7,
    students: 280,
    backgroundColor: 'bg-gradient-to-br from-[#FCAB17] to-[#FFD700]',
    qualifications: ['AMI Certified', 'Sensory Integration', 'Child Nutrition']
  },
  {
    name: 'Maya Patel',
    expertise: 'Music & Movement Teacher',
    experience: '8 years creative teaching',
    bio: 'Professional musician turned educator. Uses music and movement to enhance cognitive development and creativity.',
    avatar: <MusicTeacherAvatar />,
    specializations: ['Music Therapy', 'Creative Movement', 'Rhythm Development'],
    rating: 4.8,
    students: 350,
    backgroundColor: 'bg-gradient-to-br from-[#08472C] to-[#0F172A]',
    qualifications: ['Music Degree', 'Creative Arts Therapy', 'Dance Instructor']
  },
  {
    name: 'Sonia Verma',
    expertise: 'Art & Creativity Teacher',
    experience: '9 years in creative arts',
    bio: 'Fine arts graduate with a passion for nurturing creativity in young children. Focuses on process over product.',
    avatar: <ArtTeacherAvatar />,
    specializations: ['Creative Arts', 'Fine Motor Skills', 'Self-Expression'],
    rating: 4.6,
    students: 400,
    backgroundColor: 'bg-gradient-to-br from-[#FCAB17] to-[#FFD700]',
    qualifications: ['BFA in Fine Arts', 'Art Therapy Training', 'Craft Specialist']
  },
];

export default function TeachersSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);
  
  const filters = [
    { id: 'all', label: 'All Teachers', icon: <Users className="w-4 h-4" /> },
    { id: 'senior', label: 'Senior Faculty', icon: <Award className="w-4 h-4" /> },
    { id: 'special', label: 'Specialists', icon: <Target className="w-4 h-4" /> },
    { id: 'creative', label: 'Creative Arts', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const filteredTeachers = teachers.filter(teacher => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'senior') {
      return ['Priya Sharma', 'Dr. Sunita Mehta'].includes(teacher.name);
    }
    if (activeFilter === 'special') {
      return ['Aisha Khan', 'Maya Patel', 'Sonia Verma'].includes(teacher.name);
    }
    if (activeFilter === 'creative') {
      return ['Maya Patel', 'Sonia Verma'].includes(teacher.name);
    }
    return true;
  });

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#B2C6BD]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 text-[#08472C] px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-[#08472C]/20">
            <Heart className="w-4 h-4 text-[#FCAB17]" />
            Meet Our Dedicated Educators
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Our <span className="text-[#08472C]">Passionate</span> Teaching Team
          </h2>
          <p className="text-[#0F172A]/70 text-lg max-w-3xl mx-auto mb-8">
            Highly qualified and experienced educators dedicated to nurturing young minds through love, care, and innovative teaching methods.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <div className="text-center p-4 bg-white rounded-xl border border-[#B2C6BD]/30 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#08472C]">15+</div>
              <div className="text-sm text-[#0F172A]/70">Years Average Experience</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-[#B2C6BD]/30 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#08472C]">100%</div>
              <div className="text-sm text-[#0F172A]/70">Certified Educators</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-[#B2C6BD]/30 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#08472C]">4.8/5</div>
              <div className="text-sm text-[#0F172A]/70">Parent Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-[#B2C6BD]/30 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#08472C]">1:8</div>
              <div className="text-sm text-[#0F172A]/70">Teacher-Student Ratio</div>
            </div>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#08472C] to-[#0F172A] text-white shadow-lg'
                    : 'bg-white text-[#0F172A] hover:bg-[#B2C6BD]/10 shadow-md hover:shadow-lg border border-[#B2C6BD]/30'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTeachers.map((teacher, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden border border-[#B2C6BD]/30 hover:border-[#08472C]/30 
                transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl
                ${animateCards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Header */}
              <div className={`h-36 ${teacher.backgroundColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-28 h-28 bg-white rounded-full p-1.5 shadow-xl border-2 border-white">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#B2C6BD]/20 to-white flex items-center justify-center">
                      <div className="w-20 h-20">
                        {teacher.avatar}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-12 px-6 pb-6 text-center">
                {/* Name & Expertise */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">{teacher.name}</h3>
                <p className="text-base font-semibold text-[#08472C] mb-2">{teacher.expertise}</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#0F172A]">
                    <BookOpen className="w-4 h-4 text-[#08472C]" />
                    {teacher.experience}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#FCAB17]">
                    <Star className="w-4 h-4 fill-current" />
                    {teacher.rating}/5
                  </span>
                </div>

                {/* Bio */}
                <p className="text-[#0F172A]/70 mb-6 leading-relaxed text-sm">{teacher.bio}</p>

                {/* Qualifications */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 justify-center mb-3">
                    <GraduationCap className="w-4 h-4 text-[#08472C]" />
                    <span className="text-sm font-semibold text-[#08472C]">Qualifications</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {teacher.qualifications.map((qual, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1.5 bg-gradient-to-r from-[#B2C6BD]/10 to-transparent text-[#0F172A] text-xs font-medium rounded-lg border border-[#B2C6BD]/30"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {teacher.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[#08472C]/5 to-transparent text-[#08472C] text-sm font-medium rounded-full border border-[#08472C]/20"
                    >
                      <CheckCircle className="w-3 h-3 text-[#FCAB17]" />
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Stats & Social */}
                <div className="pt-6 border-t border-[#B2C6BD]/30">
                  <div className="flex items-center justify-between mb-4 px-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#08472C]">{teacher.students}+</div>
                      <div className="text-xs text-[#0F172A]/60">Students</div>
                    </div>
                    <div className="h-6 w-px bg-[#B2C6BD]/50"></div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#08472C]">12+</div>
                      <div className="text-xs text-[#0F172A]/60">Years Exp</div>
                    </div>
                    <div className="h-6 w-px bg-[#B2C6BD]/50"></div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#08472C]">
                        <Shield className="w-4 h-4 inline mr-1 text-[#FCAB17]" />
                        5+
                      </div>
                      <div className="text-xs text-[#0F172A]/60">Certifications</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-10 h-10 bg-[#08472C]/10 text-[#08472C] rounded-full hover:bg-[#08472C]/20 transition-colors duration-300"
                      aria-label={`Connect with ${teacher.name}`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                      Schedule Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-[#08472C]/5 via-[#B2C6BD]/10 to-[#FCAB17]/5 rounded-2xl p-8 border border-[#B2C6BD]/30">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-sm">
              <Target className="w-6 h-6 text-[#FCAB17]" />
            </div>
            <h4 className="text-lg font-semibold text-[#0F172A] mb-2">Child-Focused Approach</h4>
            <p className="text-sm text-[#0F172A]/70">
              Individual attention and personalized learning plans for every child
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-sm">
              <TrendingUp className="w-6 h-6 text-[#08472C]" />
            </div>
            <h4 className="text-lg font-semibold text-[#0F172A] mb-2">Continuous Training</h4>
            <p className="text-sm text-[#0F172A]/70">
              Regular workshops and training to stay updated with latest methodologies
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-sm">
              <Award className="w-6 h-6 text-[#FCAB17]" />
            </div>
            <h4 className="text-lg font-semibold text-[#0F172A] mb-2">Recognition & Awards</h4>
            <p className="text-sm text-[#0F172A]/70">
              Multiple awards for excellence in early childhood education
            </p>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#08472C]/5 via-white to-[#FCAB17]/5 rounded-2xl px-8 py-6 border border-[#B2C6BD]/30 max-w-3xl mx-auto shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-[#B2C6BD]/30">
                <Sparkles className="w-7 h-7 text-[#FCAB17]" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-[#0F172A]">Meet Our Educators</div>
                <div className="text-[#0F172A]/70">Schedule a parent-teacher meeting today</div>
              </div>
            </div>
            
            <button className="px-8 py-3.5 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-sm">
              Book Appointment
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}