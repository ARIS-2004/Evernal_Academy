'use client';

import { useState, useEffect } from 'react';
import { Users, Briefcase, Award, Zap, Shield, TrendingUp, CheckCircle, Clock, Target, BookOpen, Star, Globe, Heart, Sparkles, Users as UserGroup, ShieldCheck, Award as Trophy, TrendingUp as Graph } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Child-Centered Approach',
    description: 'We focus on the individual needs and interests of each child, creating a nurturing environment for holistic development.',
    points: ['Personalized Attention', 'Emotional Support', 'Individual Growth Tracking'],
    color: 'text-[#08472C]',
    bgColor: 'bg-[#08472C]/10',
    borderColor: 'border-[#08472C]/20',
    delay: 100
  },
  {
    icon: Users,
    title: 'Expert Educators',
    description: 'Our highly qualified and experienced teachers are trained in early childhood education and child psychology.',
    points: ['ECE Certified', 'First Aid Trained', 'Continuous Training'],
    color: 'text-[#FCAB17]',
    bgColor: 'bg-[#FCAB17]/10',
    borderColor: 'border-[#FCAB17]/20',
    delay: 200
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure Environment',
    description: 'State-of-the-art security systems and child-safe facilities ensure complete peace of mind for parents.',
    points: ['CCTV Surveillance', 'Safe Play Areas', 'Hygiene Protocols'],
    color: 'text-[#08472C]',
    bgColor: 'bg-[#08472C]/10',
    borderColor: 'border-[#08472C]/20',
    delay: 300
  },
  {
    icon: BookOpen,
    title: 'Play-Based Learning',
    description: 'Our curriculum combines structured learning with play activities to stimulate cognitive and motor skills development.',
    points: ['Montessori Methods', 'Sensory Play', 'Creative Activities'],
    color: 'text-[#FCAB17]',
    bgColor: 'bg-[#FCAB17]/10',
    borderColor: 'border-[#FCAB17]/20',
    delay: 400
  },
  {
    icon: Trophy,
    title: 'Holistic Development',
    description: 'We focus on all aspects of child development - physical, emotional, social, and cognitive.',
    points: ['Physical Activities', 'Social Skills', 'Creative Expression'],
    color: 'text-[#08472C]',
    bgColor: 'bg-[#08472C]/10',
    borderColor: 'border-[#08472C]/20',
    delay: 500
  },
  {
    icon: Graph,
    title: 'Parent Partnership',
    description: 'Regular parent-teacher interactions and progress updates to ensure collaborative child development.',
    points: ['Regular Updates', 'Parent Workshops', 'Open Communication'],
    color: 'text-[#FCAB17]',
    bgColor: 'bg-[#FCAB17]/10',
    borderColor: 'border-[#FCAB17]/20',
    delay: 600
  },
];

export default function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('why-us-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="why-us-section" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Why Choose <span className="text-[#08472C]">Evernal Academy?</span>
          </h2>
          <p className="text-[#0F172A]/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the preferred choice for early childhood education and development
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border border-[#B2C6BD]/50 overflow-hidden 
                  transition-all duration-500 hover:shadow-xl hover:border-[#08472C]/30 hover:-translate-y-2
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                {/* Card Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor.replace('bg-', 'from-').replace('/10', '/5')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Card Content */}
                <div className="relative p-6 md:p-7">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className={`relative ${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center 
                      group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border ${feature.borderColor}`}>
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color === 'text-[#08472C]' ? 'from-[#08472C] to-[#0F172A]' : 'from-[#FCAB17] to-[#FFD700]'}`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl md:text-2xl font-bold ${feature.color} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#0F172A]/70 mb-6 leading-relaxed text-base">
                    {feature.description}
                  </p>

                  {/* Points List */}
                  <div className="space-y-3">
                    {feature.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${feature.bgColor}`}>
                          <CheckCircle className={`w-4 h-4 ${feature.color}`} />
                        </div>
                        <span className="text-[#0F172A] font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color === 'text-[#08472C]' ? 'from-[#08472C] to-[#0F172A]' : 'from-[#FCAB17] to-[#FFD700]'} transform origin-left 
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className={`mt-16 bg-gradient-to-r from-[#08472C]/5 via-[#B2C6BD]/10 to-[#FCAB17]/5 rounded-2xl border border-[#B2C6BD]/50 
          p-8 md:p-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">
              Our Excellence in Numbers
            </h3>
            <p className="text-[#0F172A]/70 max-w-2xl mx-auto">
              Trusted by hundreds of parents for their child&apos;s early education
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#08472C] mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-base text-[#0F172A] font-semibold">Happy Children</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#08472C] mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-base text-[#0F172A] font-semibold">Parent Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#08472C] mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
              <div className="text-base text-[#0F172A] font-semibold">Expert Educators</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#08472C] mb-2 group-hover:scale-110 transition-transform duration-300">12+</div>
              <div className="text-base text-[#0F172A] font-semibold">Years Experience</div>
            </div>
          </div>

          {/* Small Stats */}
          <div className="mt-8 pt-8 border-t border-[#B2C6BD]/30 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FCAB17]"></div>
                <span className="text-sm text-[#0F172A]/70">1:8 Teacher Ratio</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#08472C]"></div>
                <span className="text-sm text-[#0F172A]/70">100% Safe Facilities</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FCAB17]"></div>
                <span className="text-sm text-[#0F172A]/70">Regular Health Checkups</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#08472C]"></div>
                <span className="text-sm text-[#0F172A]/70">Nutritional Meals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-700 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="p-3 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-xl">
                <Target className="w-6 h-6 text-[#08472C]" />
              </div>
              <span className="text-lg font-semibold text-[#0F172A]">Developmental Goals</span>
            </div>
            <p className="text-[#0F172A]/70">
              Structured programs focusing on cognitive, physical, emotional, and social development milestones
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="p-3 bg-gradient-to-br from-[#FCAB17]/10 to-[#FFD700]/10 rounded-xl">
                <Clock className="w-6 h-6 text-[#FCAB17]" />
              </div>
              <span className="text-lg font-semibold text-[#0F172A]">Flexible Timings</span>
            </div>
            <p className="text-[#0F172A]/70">
              Multiple session options to accommodate working parents and different family schedules
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-end">
              <div className="p-3 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-xl">
                <Globe className="w-6 h-6 text-[#08472C]" />
              </div>
              <span className="text-lg font-semibold text-[#0F172A]">Modern Methods</span>
            </div>
            <p className="text-[#0F172A]/70">
              Incorporating latest educational research and child development methodologies
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className={`mt-16 text-center transition-all duration-700 delay-900 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#08472C]/5 via-[#B2C6BD]/10 to-[#FCAB17]/5 
            rounded-2xl px-8 py-6 border border-[#B2C6BD]/50 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-[#B2C6BD]/30">
                <Sparkles className="w-7 h-7 text-[#FCAB17]" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-[#0F172A]">Ready for Your Child&apos;s Journey?</div>
                <div className="text-[#0F172A]/70">Schedule a visit and experience our environment firsthand</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] rounded-xl font-semibold text-lg
                hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap shadow-sm">
                Schedule Visit
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-[#08472C] to-[#0F172A] text-white rounded-xl font-semibold text-lg
                hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap shadow-sm">
                Download Brochure
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}