'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { 
  Phone, Mail, MapPin, Calendar, Users, Award, Shield, 
  Brain, Heart, BookOpen, GraduationCap, CheckCircle, 
  ChevronRight, Star, Clock, Home, Globe, Target, 
  Sparkles, Baby, Apple, Cloud, Sun, Moon
} from 'lucide-react';

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    pinCode: '',
    country: 'India',
    state: '',
    city: '',
    location: '',
    captcha: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const steps = [
    {
      number: '01',
      title: 'Fill the School Admission Inquiry Form',
      description: 'Complete our online inquiry form with basic details about your child and contact information.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-[#08472C] to-[#0F172A]'
    },
    {
      number: '02',
      title: 'Visit Campus for Guided Tour',
      description: 'Schedule a campus tour to experience our learning environment and facilities firsthand.',
      icon: <Home className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-[#FCAB17] to-[#FFD700]'
    },
    {
      number: '03',
      title: 'Meet Our Educators',
      description: 'Interact with our experienced teachers and discuss your child\'s educational needs.',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-[#08472C] to-[#B2C6BD]'
    },
    {
      number: '04',
      title: 'Join the Evernal Family',
      description: 'Complete admission formalities and welcome your child to our nurturing community.',
      icon: <Heart className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-[#FCAB17] to-[#FFD700]'
    }
  ];

  const stats = [
    { value: '100%', label: 'Support', icon: '🤝' },
    { value: '2500+', label: 'Centres', icon: '🏫' },
    { value: '600+', label: 'Cities', icon: '🌆' },
    { value: '750+', label: 'Learning Elements', icon: '🎒' }
  ];

  const faqs = [
    {
      question: 'What sets evernal\'s curriculum apart from other preschools?',
      answer: 'Our curriculum is based on the PéNTEMiND framework, a scientifically designed approach that focuses on holistic development through play-based learning, creativity, and life skills development tailored for early childhood education.'
    },
    {
      question: 'Can I tour the Evernal Academy facility before enrolling my child?',
      answer: 'Absolutely! We encourage all parents to schedule a campus tour. You can visit our facilities, meet our educators, and experience our learning environment firsthand before making a decision.'
    },
    {
      question: 'What educational philosophy does Evernal Academy follow?',
      answer: 'We follow a child-centered approach combining Montessori principles with modern pedagogical methods. Our focus is on nurturing each child\'s unique potential through experiential learning and creative exploration.'
    },
    {
      question: 'What is the teacher-to-child ratio at Evernal?',
      answer: 'We maintain an optimal 1:8 teacher-child ratio to ensure personalized attention and care for every child, allowing our educators to focus on individual learning needs and development.'
    },
    {
      question: 'What safety measures are in place at Evernal?',
      answer: 'We have comprehensive safety protocols including CCTV surveillance, secure entry systems, trained staff, regular health check-ups, and child-friendly facilities with soft play areas and hygienic practices.'
    }
  ];

  const advantages = [
    {
      title: 'Holistic Learning',
      description: 'Fostering all-round development through a balanced blend of academics, play, and life skills.',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Expert Educators',
      description: 'Skilled teachers dedicated to nurturing every child\'s unique potential.',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: 'Safe and Secure',
      description: 'A protected, child-friendly environment ensuring safety and peace of mind.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Innovative Learning',
      description: 'Engaging, modern teaching methods that make learning fun and impactful.',
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#B2C6BD]/20">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-r from-[#08472C] via-[#08472C]/90 to-[#0F172A]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FCAB17]/10 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B2C6BD]/5 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCAB17]/20 to-[#FFD700]/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#FCAB17]/30">
            <Calendar className="w-5 h-5 text-[#FCAB17]" />
            Admissions Open for 2025-26
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Evernal <span className="text-[#FCAB17]">Academy</span> Admissions
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-medium mb-10">
            Begin Your Child's Journey of Discovery, Learning, and Growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-[#FCAB17]" />
                <span className="font-medium">Home</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="font-bold text-[#FCAB17]">Admissions</span>
            </div>
            <button className="group px-8 py-3 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              <span>Enquire Now: +91 98765 43210</span>
            </button>
          </div>
        </div>
      </section>

      {/* Admissions Process Steps */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Simple <span className="text-[#08472C]">4-Step</span> Admission Process
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              A straightforward process designed to make your child's enrollment journey smooth and comfortable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 ${step.color} rounded-2xl transform group-hover:scale-105 transition-all duration-500 opacity-5`}></div>
                <div className="relative bg-white rounded-2xl p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className="text-4xl font-bold text-[#08472C] opacity-20">0{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#08472C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#0F172A]/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#B2C6BD]/30 shadow-xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                  Admission <span className="text-[#08472C]">Inquiry Form</span>
                </h2>
                <p className="text-[#0F172A]/70">
                  Fill in your details and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      First Name <span className="text-[#FCAB17]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      Last Name <span className="text-[#FCAB17]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">
                    Email <span className="text-[#FCAB17]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      Mobile <span className="text-[#FCAB17]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      Pin Code <span className="text-[#FCAB17]">*</span>
                    </label>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300"
                      placeholder="Enter pin code"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300 bg-white"
                    >
                      <option value="India">India</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">State/District</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300"
                      placeholder="Enter state"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300"
                      placeholder="Enter city"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Nearest Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300"
                    placeholder="Enter nearest center location"
                  />
                </div>

                <div className="bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/10 p-6 rounded-xl border border-[#B2C6BD]/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-[#0F172A]">TutoJe</div>
                    <div className="text-sm text-[#0F172A]/70">Enter the text as displayed</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      Type CAPTCHA Here <span className="text-[#FCAB17]">*</span>
                    </label>
                    <input
                      type="text"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#B2C6BD]/50 focus:border-[#08472C] focus:ring-2 focus:ring-[#08472C]/20 outline-none transition-all duration-300"
                      placeholder="Enter CAPTCHA"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#08472C] to-[#0F172A] text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Stats and Images */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-[#B2C6BD]/30 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold text-[#08472C] mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-[#0F172A]/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Decorative Images */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-[#FCAB17]/10 to-[#FFD700]/5 rounded-2xl p-6 border border-[#FCAB17]/20 flex items-center justify-center">
                  <div className="text-5xl">🍫</div>
                </div>
                <div className="bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/5 rounded-2xl p-6 border border-[#08472C]/20 flex items-center justify-center">
                  <div className="text-5xl">👜</div>
                </div>
                <div className="bg-gradient-to-br from-[#FCAB17]/10 to-[#FFD700]/5 rounded-2xl p-6 border border-[#FCAB17]/20 flex items-center justify-center">
                  <div className="text-5xl">🦋</div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-gradient-to-br from-[#08472C] to-[#0F172A] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#FCAB17]" />
                  About Evernal Academy
                </h3>
                <p className="text-white/90 mb-4">
                  Evernal Academy is a leading chain of preschools backed by years of experience in early childhood education. 
                  We have nurtured thousands of children throughout India with our innovative learning approaches.
                </p>
                <p className="text-white/90 mb-6">
                  Being one of the most trusted preschool networks, Evernal has multiple centres across various cities, 
                  providing quality early education with proven pedagogical frameworks.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FCAB17]" />
                    <span className="text-sm">Experienced Educators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FCAB17]" />
                    <span className="text-sm">Safe Environment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evernal Advantage */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              The <span className="text-[#08472C]">Evernal Advantage</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-3xl mx-auto">
              Evernal is a leader and trendsetter in Early Childhood Care and Education (ECCE). 
              Our proven pedagogy, comprehensive support, and innovative approaches make us the preferred choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-b from-white to-[#B2C6BD]/5 rounded-2xl p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full hover:translate-y-[-8px]">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#08472C]">
                      {advantage.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">{advantage.title}</h3>
                  <p className="text-[#0F172A]/70">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#08472C]/5 via-[#B2C6BD]/10 to-[#FCAB17]/5 rounded-3xl p-8 border border-[#B2C6BD]/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-[#0F172A] mb-4">Why Choose  ?</h4>
                <p className="text-[#0F172A]/70 mb-4">
                  Evernal Academy is your experienced trusted partner in providing exceptional early education for your child. 
                  Here's why Evernal stands out as the preferred choice for parents seeking the best for their little ones.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FCAB17] mt-1 flex-shrink-0" />
                    <span className="text-[#0F172A]/70">Proven PéNTEMiND pedagogy framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FCAB17] mt-1 flex-shrink-0" />
                    <span className="text-[#0F172A]/70">Comprehensive pre-opening and operational support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FCAB17] mt-1 flex-shrink-0" />
                    <span className="text-[#0F172A]/70">Regular training and curriculum updates</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-white rounded-2xl p-6 border border-[#B2C6BD]/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FCAB17]/10 to-[#FFD700]/5 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-[#FCAB17]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-lg">Success Through Service</div>
                      <div className="text-sm text-[#0F172A]/70">Our secret to success is exceptional support</div>
                    </div>
                  </div>
                  <p className="text-[#0F172A]/70">
                    We provide ongoing support beyond just the name - comprehensive guidelines, prescribed materials, 
                    and continuous assistance to ensure your child's successful learning journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Frequently Asked <span className="text-[#08472C]">Questions</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70">
              Find answers to common questions about admissions and our programs
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-[#B2C6BD]/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-lg font-bold text-[#08472C]">?</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0F172A] mb-3">{faq.question}</h4>
                    <p className="text-[#0F172A]/70">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#08472C]/5 to-[#B2C6BD]/5 px-6 py-4 rounded-full">
              <Phone className="w-5 h-5 text-[#FCAB17]" />
              <span className="text-[#0F172A] font-medium">Still have questions? Call us at </span>
              <a href="tel:+919876543210" className="text-[#08472C] font-bold hover:underline">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#08472C] via-[#08472C]/90 to-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Ready to Begin Your Child's <span className="text-[#FCAB17]">Learning Journey</span>?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of happy parents who have chosen Evernal for their child's early education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-10 py-4 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              <span>Schedule Campus Visit</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6 group-hover:animate-pulse" />
              <span>Download Brochure</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div className="flex flex-col items-center gap-3">
              <Mail className="w-8 h-8 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 mb-1">Email us at</p>
                <p className="text-xl font-bold text-white">admissions@Evernalacademy.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-8 h-8 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 mb-1">Visit our campus</p>
                <p className="text-xl font-bold text-white">Multiple locations across India</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="w-8 h-8 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 mb-1">Office Hours</p>
                <p className="text-xl font-bold text-white">Mon-Sat: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}