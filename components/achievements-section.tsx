'use client';

import { useState, useEffect, useRef } from 'react';
import { Users, Award, Clock, TrendingUp, Star, Target, CheckCircle, BookOpen, GraduationCap, Heart, Shield } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    number: '10000',
    label: 'Students Trained',
    description: 'Successfully trained students',
    color: 'from-[#08472C] to-[#0F172A]',
    bgColor: 'bg-[#B2C6BD]/20',
    delay: 100,
    duration: 1500,
    suffix: '+'
  },
  {
    icon: Award,
    number: '50',
    label: 'Courses Offered',
    description: 'Industry relevant courses',
    color: 'from-[#FCAB17] to-[#FFD700]',
    bgColor: 'bg-[#FCAB17]/10',
    delay: 300,
    duration: 1300,
    suffix: '+'
  },
  {
    icon: Clock,
    number: '5',
    label: 'Years Experience',
    description: 'Teaching excellence',
    color: 'from-[#08472C] to-[#B2C6BD]',
    bgColor: 'bg-[#08472C]/10',
    delay: 500,
    duration: 1100,
    suffix: '+'
  },
  {
    icon: TrendingUp,
    number: '95',
    label: 'Success Rate',
    description: 'Placement success',
    color: 'from-[#0F172A] to-[#08472C]',
    bgColor: 'bg-[#0F172A]/10',
    delay: 700,
    duration: 1600,
    suffix: '%'
  },
];

export default function AchievementsSection() {
  const [counts, setCounts] = useState(achievements.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          
          achievements.forEach((achievement, index) => {
            const targetNumber = parseInt(achievement.number);
            const duration = achievement.duration;
            const steps = 40;
            const stepDuration = duration / steps;
            
            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(targetNumber * easedProgress);
                return newCounts;
              });
              
              if (currentStep >= steps) {
                clearInterval(timer);
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = targetNumber;
                  return newCounts;
                });
              }
            }, stepDuration);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [mounted]);

  // Fixed pattern colors - no random
  const patternColors = ['#08472C', '#B2C6BD', '#FCAB17', '#0F172A'];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-gradient-to-b from-white to-[#B2C6BD]/20"
    >
      {/* Background Pattern - Fixed color, no random */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#08472C 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const displayNumber = isVisible 
              ? counts[index].toLocaleString() + achievement.suffix
              : '0' + achievement.suffix;
            
            return (
              <div 
                key={index}
                className={`relative group bg-white rounded-2xl border-2 border-[#B2C6BD]/30 
                  p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:border-[#08472C]/30 
                  hover:-translate-y-2 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
                style={{
                  transitionDelay: `${achievement.delay}ms`
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: achievement.color.replace('from-', '').replace('to-', '').split(' ').map(c => `var(--${c})`).join(', ')
                  }}
                ></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`mb-6 ${achievement.bgColor} w-16 h-16 rounded-xl 
                    flex items-center justify-center mx-auto transform group-hover:scale-110 
                    transition-transform duration-300 group-hover:rotate-3`}>
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} 
                      shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-center mb-4">
                    <div className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2 font-sans">
                      {displayNumber}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-1.5 bg-[#B2C6BD]/30 rounded-full overflow-hidden mx-auto max-w-xs">
                      <div 
                        className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${achievement.color}
                        transition-all duration-800 ease-out`}
                        style={{ 
                          width: isVisible ? 
                            (index === 0 ? '92%' : 
                             index === 1 ? '88%' : 
                             index === 2 ? '85%' : '95%') : '0%',
                          transitionDelay: `${achievement.delay + 200}ms`
                        }}
                      />
                    </div>
                  </div>

                  {/* Label and Description */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#08472C] transition-colors duration-300">
                      {achievement.label}
                    </h3>
                    <p className="text-[#0F172A]/70 text-sm">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-[#FCAB17]/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#FCAB17]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/10 p-6 rounded-2xl border border-[#B2C6BD]/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#08472C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-[#08472C]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Our Philosophy</h3>
                <p className="text-[#0F172A]/70">
                  We believe in nurturing each child's unique potential through love, care, and personalized attention in a stimulating environment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#FCAB17]/5 to-[#FFD700]/10 p-6 rounded-2xl border border-[#B2C6BD]/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FCAB17]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-[#FCAB17]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Learning Methodology</h3>
                <p className="text-[#0F172A]/70">
                  Play-based learning with structured activities that promote cognitive, social, emotional, and physical development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Style for color variables */}
      <style jsx>{`
        :root {
          --08472C: #08472C;
          --FCAB17: #FCAB17;
          --B2C6BD: #B2C6BD;
          --0F172A: #0F172A;
        }
      `}</style>
    </section>
  );
}