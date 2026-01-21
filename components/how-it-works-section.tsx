'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, UserPlus, BookOpen, Target, Award, Clock, Users, Heart, Sparkles, Shield, GraduationCap } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Schedule a Visit',
    description: 'Book a campus tour to experience our environment and meet our educators.',
    icon: BookOpen,
    color: 'text-[#08472C]',
    bgColor: 'bg-[#08472C]/10',
    borderColor: 'border-[#08472C]/20',
    delay: 100
  },
  {
    number: '02',
    title: 'Complete Registration',
    description: 'Fill out the admission form and submit required documents for your child.',
    icon: UserPlus,
    color: 'text-[#FCAB17]',
    bgColor: 'bg-[#FCAB17]/10',
    borderColor: 'border-[#FCAB17]/20',
    delay: 200
  },
  {
    number: '03',
    title: 'Begin Learning Journey',
    description: 'Start attending classes with age-appropriate activities attention.',
    icon: Target,
    color: 'text-[#08472C]',
    bgColor: 'bg-[#08472C]/10',
    borderColor: 'border-[#08472C]/20',
    delay: 300
  },
  {
    number: '04',
    title: 'Track Progress',
    description: 'Receive regular updates on your child\'s development and milestones achieved.',
    icon: Award,
    color: 'text-[#FCAB17]',
    bgColor: 'bg-[#FCAB17]/10',
    borderColor: 'border-[#FCAB17]/20',
    delay: 400
  },
];

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          
          // Animate steps one by one
          steps.forEach((_, index) => {
            setTimeout(() => {
              setActiveStep(index);
              setTimeout(() => {
                setActiveStep(null);
              }, 1000);
            }, index * 600);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const scrollToSection = () => {
    const nextSection = document.getElementById('admissions-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="how-it-works-section" className="py-16 md:py-20 bg-gradient-to-b from-white to-[#B2C6BD]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            How It <span className="text-[#08472C]">Works</span>
          </h2>
          
          <p className="text-[#0F172A]/70 text-lg max-w-2xl mx-auto">
            A simple four-step process to begin your child's educational journey with us
          </p>
        </div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#B2C6BD]/30 transform -translate-y-1/2 z-0"></div>
          
          {/* Animated Progress Line */}
          <div 
            className={`absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] transform -translate-y-1/2 z-10 transition-all duration-1000 ease-out ${
              isVisible ? 'w-full' : 'w-0'
            }`}
          ></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-4 gap-8 relative z-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div
                    className={`group relative bg-white rounded-xl border border-[#B2C6BD]/50 overflow-hidden 
                      transition-all duration-500 hover:shadow-xl hover:-translate-y-2 
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
                      ${activeStep === index ? 'ring-2 ring-[#FCAB17] ring-offset-2' : ''}`}
                    style={{ transitionDelay: `${step.delay}ms` }}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className={`relative w-12 h-12 rounded-full border-4 border-white ${step.bgColor} 
                        flex items-center justify-center shadow-lg`}>
                        <span className={`text-lg font-bold ${step.color}`}>{step.number}</span>
                        
                        {/* Animated Ring when active */}
                        {activeStep === index && (
                          <div className="absolute -inset-2 border-2 border-[#FCAB17] rounded-full animate-ping"></div>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="pt-10 pb-6 px-6 text-center">
                      {/* Icon Container */}
                      <div className={`mb-5 ${step.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto 
                        group-hover:scale-110 transition-transform duration-300 border ${step.borderColor}`}>
                        <div className={`p-3 rounded-lg ${step.color === 'text-[#08472C]' ? 'bg-gradient-to-br from-[#08472C] to-[#0F172A]' : 'bg-gradient-to-br from-[#FCAB17] to-[#FFD700]'}`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        
                        {/* Icon Glow Effect */}
                        <div className={`absolute inset-0 ${step.bgColor} rounded-xl opacity-0 
                          group-hover:opacity-100 blur-md transition-opacity duration-300`} />
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-bold ${step.color} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#0F172A]/70 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Check Indicator */}
                      <div className={`inline-flex items-center gap-2 ${step.bgColor} ${step.borderColor} 
                        border px-3 py-1.5 rounded-full`}>
                        <CheckCircle className={`w-4 h-4 ${step.color}`} />
                        <span className="text-sm font-medium text-[#0F172A]">Step {index + 1}</span>
                      </div>
                    </div>

                    {/* Arrow Indicator for Next Step */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className={`p-2 bg-white rounded-full border border-[#B2C6BD]/30 shadow-sm 
                          ${activeStep === index ? 'bg-[#FCAB17]/10 border-[#FCAB17]/20' : ''}`}>
                          <ArrowRight className={`w-5 h-5 ${step.color}`} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#B2C6BD]/30 z-0"></div>
          
          {/* Animated Progress Line */}
          <div 
            className={`absolute left-6 top-0 w-0.5 bg-gradient-to-b from-[#08472C] to-[#FCAB17] z-10 transition-all duration-1000 ease-out ${
              isVisible ? 'h-full' : 'h-0'
            }`}
          ></div>
          
          {/* Steps List */}
          <div className="space-y-10 relative z-20 pl-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Number Badge */}
                  <div className="absolute -left-12 top-0 z-20">
                    <div className={`relative w-12 h-12 rounded-full border-4 border-white ${step.bgColor} 
                      flex items-center justify-center shadow-lg`}>
                      <span className={`text-lg font-bold ${step.color}`}>{step.number}</span>
                      
                      {/* Animated Ring when active */}
                      {activeStep === index && (
                        <div className="absolute -inset-2 border-2 border-[#FCAB17] rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className={`bg-white rounded-xl border border-[#B2C6BD]/50 overflow-hidden 
                      transition-all duration-500 hover:shadow-lg
                      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} 
                      ${activeStep === index ? 'ring-2 ring-[#FCAB17] ring-offset-2' : ''}`}
                    style={{ transitionDelay: `${step.delay}ms` }}
                  >
                    <div className="p-6">
                      {/* Icon and Title Row */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`${step.bgColor} w-12 h-12 rounded-lg flex items-center justify-center 
                          border ${step.borderColor}`}>
                          <div className={`p-2 rounded-lg ${step.color === 'text-[#08472C]' ? 'bg-gradient-to-br from-[#08472C] to-[#0F172A]' : 'bg-gradient-to-br from-[#FCAB17] to-[#FFD700]'}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <h3 className={`text-lg font-bold ${step.color}`}>{step.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-[#0F172A]/70 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Step Indicator */}
                      <div className="flex items-center justify-between">
                        <div className={`inline-flex items-center gap-2 ${step.bgColor} ${step.borderColor} 
                          border px-3 py-1.5 rounded-full`}>
                          <CheckCircle className={`w-4 h-4 ${step.color}`} />
                          <span className="text-sm font-medium text-[#0F172A]">Step {index + 1}</span>
                        </div>
                        
                        {index < steps.length - 1 && (
                          <ArrowRight className={`w-5 h-5 ${step.color}`} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-700 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="p-3 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-xl">
                <Clock className="w-6 h-6 text-[#08472C]" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#0F172A]">Flexible Hours</div>
                <div className="text-sm text-[#0F172A]/70">Morning & afternoon batches</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="p-3 bg-gradient-to-br from-[#FCAB17]/10 to-[#FFD700]/10 rounded-xl">
                <Shield className="w-6 h-6 text-[#FCAB17]" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#0F172A]">Safe Environment</div>
                <div className="text-sm text-[#0F172A]/70">CCTV & trained staff</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="p-3 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-[#08472C]" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#0F172A]">Certified Educators</div>
                <div className="text-sm text-[#0F172A]/70">Early Childhood trained</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className={`mt-16 text-center transition-all duration-700 delay-900 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#08472C]/5 via-[#B2C6BD]/10 to-[#FCAB17]/5 
            rounded-xl px-8 py-6 border border-[#B2C6BD]/50 max-w-3xl mx-auto shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg shadow-sm border border-[#B2C6BD]/30">
                <Sparkles className="w-7 h-7 text-[#FCAB17]" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-[#0F172A]">Begin Your Child's Journey</div>
                <div className="text-[#0F172A]/70">Start with a personalized campus tour today</div>
              </div>
            </div>
            
            <button 
              onClick={scrollToSection}
              className="px-8 py-3.5 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] rounded-lg font-semibold text-lg
                hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap shadow-sm"
            >
              Schedule Visit
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}