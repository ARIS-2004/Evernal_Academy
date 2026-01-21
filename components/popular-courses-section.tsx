'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Zap, Award, ArrowRight, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';

const courses = [
  {
    id: 1,
    name: 'Web Development Bootcamp',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    description: 'Master HTML, CSS, JavaScript, React, and Node.js with hands-on projects.',
    icon: '💻',
    students: 2500,
    rating: 4.8,
    features: ['Full Stack', 'Live Projects', 'Certification'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 2,
    name: 'Mobile App Development',
    duration: '10 Weeks',
    level: 'Intermediate',
    description: 'Build iOS and Android apps using Flutter and React Native.',
    icon: '📱',
    students: 1800,
    rating: 4.7,
    features: ['Cross Platform', 'Real Apps', 'App Store'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 3,
    name: 'Data Science & AI',
    duration: '14 Weeks',
    level: 'Advanced',
    description: 'Learn Python, ML, Deep Learning, and real-world data analysis.',
    icon: '🤖',
    students: 1200,
    rating: 4.9,
    features: ['Python ML', 'AI Models', 'Big Data'],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 4,
    name: 'UI/UX Design Mastery',
    duration: '8 Weeks',
    level: 'Beginner to Intermediate',
    description: 'Design thinking, prototyping, and user-centered design principles.',
    icon: '🎨',
    students: 950,
    rating: 4.6,
    features: ['Figma', 'Prototyping', 'User Research'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 5,
    name: 'Cloud Computing & AWS',
    duration: '10 Weeks',
    level: 'Intermediate',
    description: 'Deploy, manage, and scale applications on AWS platform.',
    icon: '☁️',
    students: 1100,
    rating: 4.8,
    features: ['AWS Certified', 'DevOps', 'Scalability'],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    id: 6,
    name: 'Cybersecurity Basics',
    duration: '9 Weeks',
    level: 'Beginner to Intermediate',
    description: 'Network security, ethical hacking, and security best practices.',
    icon: '🔒',
    students: 800,
    rating: 4.7,
    features: ['Ethical Hacking', 'Network Security', 'Certified'],
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50'
  },
];

export default function PopularCoursesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

    const section = document.getElementById('courses-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="courses-section" className="py-16 md:py-20 gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Trending Courses
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Courses</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Industry-relevant courses designed by experts to launch your tech career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative bg-white rounded-xl border border-gray-200 overflow-hidden 
                transition-all duration-500 hover:shadow-xl hover:-translate-y-2 
                ${hoveredCard === course.id ? 'shadow-lg border-blue-300' : 'hover:border-gray-300'}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Course Header */}
              <div className={`p-6 ${course.bgColor} relative overflow-hidden`}>
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 
                  group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl transform group-hover:scale-110 transition-transform duration-300`}>
                      {course.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
                        {course.rating >= 4.8 && (
                          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                            <Star className="w-3 h-3 fill-current" />
                            Popular
                          </span>
                        )}
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {course.rating} ({course.students.toLocaleString()}+)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Course Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-medium">{course.level}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium">{course.students.toLocaleString()} students enrolled</span>
                  </div>
                </div>

                {/* Enroll Button */}
                <div className="relative">
                  <Link
                    href={`/courses/${course.id}`}
                    className={`group/btn flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg 
                      font-semibold transition-all duration-300 overflow-hidden
                      ${hoveredCard === course.id 
                        ? `bg-gradient-to-r ${course.color} text-white` 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                  >
                    <span className="relative z-10">Enroll Now</span>
                    <ArrowRight className={`w-4 h-4 relative z-10 transition-transform duration-300 
                      ${hoveredCard === course.id ? 'translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
                    
                    {/* Button Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 
                      group-hover/btn:opacity-100 transition-opacity duration-300`} />
                  </Link>
                </div>
              </div>

              {/* Card Corner Decoration */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${course.color} 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Card Hover Border */}
              <div className={`absolute inset-0 border-2 rounded-xl pointer-events-none 
                ${hoveredCard === course.id ? `border-opacity-30 border-gradient-to-r ${course.color}` : 'border-transparent'}
                transition-all duration-300`} />
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-4">
            <p className="text-gray-600">
              Looking for something specific? Explore all our courses
            </p>
          </div>
          
          <Link
            href="/courses"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 
              text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 
              transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}