'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Award, GraduationCap, Heart, Users, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    course: 'PlayGroup',
    position: 'Parent',
    company: 'Evernal Academy',
    review: 'My 2-year-old absolutely loves coming to school! The teachers are incredibly caring and the activities are perfect for his age. Seeing him learn through play has been amazing.',
    rating: 5,
    image: '👩‍👦',
    date: '2 months ago',
    color: 'bg-[#FCAB17]/10',
    borderColor: 'border-[#FCAB17]/20',
    childAge: '2 years'
  },
  {
    id: 2,
    name: 'Rajesh Mehta',
    course: 'Kindergarten',
    position: 'Parent',
    company: 'Evernal Academy',
    review: 'The progress my daughter has made in just 6 months is remarkable. She\'s confident, curious, and loves learning. The holistic approach focusing on all aspects of development is wonderful.',
    rating: 5,
    image: '👨‍👧',
    date: '3 months ago',
    color: 'bg-[#08472C]/10',
    borderColor: 'border-[#08472C]/20',
    childAge: '5 years'
  },
  {
    id: 3,
    name: 'Sunita Reddy',
    course: 'Nursery',
    position: 'Parent',
    company: 'Evernal Academy',
    review: 'As a working parent, the safety and care provided gives me complete peace of mind. The regular updates and parent-teacher meetings keep me involved in my child\'s progress.',
    rating: 5,
    image: '👩‍💼',
    date: '1 month ago',
    color: 'bg-[#FCAB17]/10',
    borderColor: 'border-[#FCAB17]/20',
    childAge: '3.5 years'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    course: 'Teacher Training',
    position: 'Educator',
    company: 'Evernal Academy',
    review: 'The teacher training programme here is exceptional. Practical training combined with theory prepared me perfectly for early childhood education. Highly recommended!',
    rating: 5,
    image: '👨‍🏫',
    date: '4 months ago',
    color: 'bg-[#08472C]/10',
    borderColor: 'border-[#08472C]/20',
    childAge: null
  },
  {
    id: 5,
    name: 'Anjali Patel',
    course: 'Daycare',
    position: 'Parent',
    company: 'Evernal Academy',
    review: 'The daycare facility is excellent. My child gets nutritious meals, proper rest, and engaging activities. The staff is trained and caring. Couldn\'t ask for more!',
    rating: 5,
    image: '👩‍👧',
    date: '2 weeks ago',
    color: 'bg-[#FCAB17]/10',
    borderColor: 'border-[#FCAB17]/20',
    childAge: '4 years'
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto slide effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying && isVisible) {
      interval = setInterval(() => {
        handleNext();
      }, 4000); // Slide every 4 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, isVisible]);

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Get visible testimonials for desktop (3 cards)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials-section" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 text-[#08472C] px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-[#08472C]/20">
            <Heart className="w-4 h-4 text-[#FCAB17]" />
            Parent & Student Stories
          </div>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Happy Families, <span className="text-[#08472C]">Happy Children</span>
          </h2>
          
          
          <p className="text-[#0F172A]/70 text-lg max-w-2xl mx-auto">
            Hear from our parents and educators about their wonderful experiences at Evernal Academy
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center p-4 bg-gradient-to-br from-[#08472C]/5 to-[#B2C6BD]/5 rounded-xl border border-[#B2C6BD]/30">
            <div className="text-3xl font-bold text-[#08472C] mb-1">500+</div>
            <div className="text-sm text-[#0F172A]/70">Happy Parents</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-[#FCAB17]/5 to-[#FFD700]/5 rounded-xl border border-[#B2C6BD]/30">
            <div className="text-3xl font-bold text-[#08472C] mb-1">95%</div>
            <div className="text-sm text-[#0F172A]/70">Satisfaction Rate</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-[#08472C]/5 to-[#B2C6BD]/5 rounded-xl border border-[#B2C6BD]/30">
            <div className="text-3xl font-bold text-[#08472C] mb-1">4.9/5</div>
            <div className="text-sm text-[#0F172A]/70">Average Rating</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-[#FCAB17]/5 to-[#FFD700]/5 rounded-xl border border-[#B2C6BD]/30">
            <div className="text-3xl font-bold text-[#08472C] mb-1">12+</div>
            <div className="text-sm text-[#0F172A]/70">Years Trusted</div>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="relative" ref={containerRef}>
          {/* Desktop View - 3 Cards Slider */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mb-10 relative">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative bg-white rounded-2xl border border-[#B2C6BD]/50 overflow-hidden 
                  transition-all duration-500 hover:shadow-xl hover:-translate-y-2 
                  ${testimonial.color} ${testimonial.borderColor}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: `scale(${index === 1 ? 1.05 : 0.95}) translateY(${index === 1 ? '-10px' : '0px'})`
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FCAB17]/20 to-[#FFD700]/10 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-[#FCAB17]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FCAB17] fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-[#0F172A]/70 leading-relaxed mb-6 italic text-base">
                    "{testimonial.review}"
                  </p>

                  {/* Student Info */}
                  <div className="border-t border-[#B2C6BD]/30 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{testimonial.image}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-[#0F172A] text-lg">{testimonial.name}</h4>
                            <p className="text-[#08472C] text-sm font-medium">{testimonial.position}</p>
                            {testimonial.childAge && (
                              <p className="text-[#0F172A]/60 text-sm">Child: {testimonial.childAge}</p>
                            )}
                          </div>
                          <span className="text-xs text-[#08472C] bg-[#08472C]/5 px-2 py-1 rounded">
                            {testimonial.date}
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className={`inline-flex items-center gap-1 ${testimonial.course === 'PlayGroup' ? 'bg-[#FCAB17]/10 text-[#FCAB17]' : 'bg-[#08472C]/10 text-[#08472C]'} px-3 py-1 rounded-full text-xs font-medium`}>
                            <GraduationCap className="w-3 h-3" />
                            {testimonial.course}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-full ${testimonial.course === 'PlayGroup' ? 'bg-[#FCAB17]/5' : 'bg-[#08472C]/5'} blur-xl`}></div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet View - Single Card */}
          <div className="lg:hidden mb-10">
            <div
              className={`bg-white rounded-2xl border border-[#B2C6BD]/50 overflow-hidden 
                ${testimonials[currentIndex].color} ${testimonials[currentIndex].borderColor}
                transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FCAB17]/20 to-[#FFD700]/10 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-[#FCAB17]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FCAB17] fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#0F172A]/70 leading-relaxed mb-6 italic text-base">
                  "{testimonials[currentIndex].review}"
                </p>

                {/* Student Info */}
                <div className="border-t border-[#B2C6BD]/30 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{testimonials[currentIndex].image}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-[#0F172A] text-lg">{testimonials[currentIndex].name}</h4>
                          <p className="text-[#08472C] text-sm font-medium">{testimonials[currentIndex].position}</p>
                          {testimonials[currentIndex].childAge && (
                            <p className="text-[#0F172A]/60 text-sm">Child: {testimonials[currentIndex].childAge}</p>
                          )}
                        </div>
                        <span className="text-xs text-[#08472C] bg-[#08472C]/5 px-2 py-1 rounded">
                          {testimonials[currentIndex].date}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className={`inline-flex items-center gap-1 ${testimonials[currentIndex].course === 'PlayGroup' ? 'bg-[#FCAB17]/10 text-[#FCAB17]' : 'bg-[#08472C]/10 text-[#08472C]'} px-3 py-1 rounded-full text-xs font-medium`}>
                          <GraduationCap className="w-3 h-3" />
                          {testimonials[currentIndex].course}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[#B2C6BD]/50 bg-white hover:bg-[#08472C]/5 hover:border-[#08472C]/30 
                transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#08472C]" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2 mx-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? `bg-gradient-to-r ${testimonials[index].color === 'bg-[#FCAB17]/10' ? 'from-[#FCAB17] to-[#FFD700]' : 'from-[#08472C] to-[#0F172A]'} w-6` 
                      : 'bg-[#B2C6BD]/50 w-2 hover:bg-[#08472C]/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[#B2C6BD]/50 bg-white hover:bg-[#08472C]/5 hover:border-[#08472C]/30 
                transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#08472C]" />
            </button>
          </div>

          {/* Auto-play Indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-[#FCAB17]' : 'bg-[#B2C6BD]'}`} />
              <span className="text-sm text-[#0F172A]/70">
                {isAutoPlaying ? 'Auto-slide enabled' : 'Manual control'}
              </span>
            </div>
          </div>
        </div>

        {/* Additional Testimonials */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-full mb-2">
                <Users className="w-6 h-6 text-[#08472C]" />
              </div>
              <h4 className="text-lg font-semibold text-[#0F172A]">Community Trust</h4>
              <p className="text-sm text-[#0F172A]/70 mt-1">Recommended by 98% of our parents</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#FCAB17]/10 to-[#FFD700]/10 rounded-full mb-2">
                <Award className="w-6 h-6 text-[#FCAB17]" />
              </div>
              <h4 className="text-lg font-semibold text-[#0F172A]">Award Winning</h4>
              <p className="text-sm text-[#0F172A]/70 mt-1">Recognized for excellence in early education</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-full mb-2">
                <Sparkles className="w-6 h-6 text-[#08472C]" />
              </div>
              <h4 className="text-lg font-semibold text-[#0F172A]">Continuous Improvement</h4>
              <p className="text-sm text-[#0F172A]/70 mt-1">Regular feedback incorporated into our programmes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}