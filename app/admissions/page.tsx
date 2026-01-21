'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Calendar, Users, Award, Shield, 
  Brain, Heart, BookOpen, GraduationCap, CheckCircle, 
  ChevronRight, Star, Clock, Home, Globe, Target, 
  Sparkles, Baby, Apple, Cloud, Sun, Moon, Loader2, Send
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
    childName: '',
    childAge: '',
    program: 'playgroup',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const programs = {
    playgroup: { name: 'Playgroup', age: '1.5-2.5 years', fee: 299 },
    nursery: { name: 'Nursery', age: '2.5-3.5 years', fee: 349 },
    kindergarten: { name: 'Kindergarten', age: '3.5-5.5 years', fee: 399 },
    training: { name: 'Teacher Training Programme', age: '18+ years', fee: 599 },
    daycare: { name: 'Daycare', age: '1-8 years', fee: 449 },
  };

  const selectedProgram = programs[formData.program as keyof typeof programs];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          programName: selectedProgram.name,
          programAge: selectedProgram.age,
          programFee: selectedProgram.fee,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit inquiry');
      }

      // Success
      setFormSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        pinCode: '',
        country: 'India',
        state: '',
        city: '',
        location: '',
        childName: '',
        childAge: '',
        program: 'playgroup',
        message: ''
      });
      
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      number: '01',
      title: 'Fill the School Admission Inquiry Form',
      description: 'Complete our online inquiry form with basic details about your child and contact information.',
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-[#08472C] to-[#0F172A]'
    },
    {
      number: '02',
      title: 'Visit Campus for Guided Tour',
      description: 'Schedule a campus tour to experience our learning environment and facilities firsthand.',
      icon: <Home className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-[#FCAB17] to-[#FFD700]'
    },
    {
      number: '03',
      title: 'Meet Our Educators',
      description: 'Interact with our experienced teachers and discuss your child\'s educational needs.',
      icon: <Users className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-[#08472C] to-[#B2C6BD]'
    },
    {
      number: '04',
      title: 'Join the EvernalFamily',
      description: 'Complete admission formalities and welcome your child to our nurturing community.',
      icon: <Heart className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-[#FCAB17] to-[#FFD700]'
    }
  ];

  const stats = [
    { value: '100%', label: 'Support', icon: '🤝' },
    { value: '50+', label: 'Centres', icon: '🏫' },
    { value: '25+', label: 'Cities', icon: '🌆' },
    { value: '500+', label: 'Happy Students', icon: '🎒' }
  ];

  const faqs = [
    {
      question: 'What sets EvernalAcademy curriculum apart from other preschools?',
      answer: 'Our curriculum is based on the NEP 2020 framework, a scientifically designed approach that focuses on holistic development through play-based learning, creativity, and life skills development tailored for early childhood education.'
    },
    {
      question: 'Can I tour the EvernalAcademy facility before enrolling my child?',
      answer: 'Absolutely! We encourage all parents to schedule a campus tour. You can visit our facilities, meet our educators, and experience our learning environment firsthand before making a decision.'
    },
    {
      question: 'What educational philosophy does EvernalAcademy follow?',
      answer: 'We follow a child-centered approach combining Montessori principles with modern pedagogical methods. Our focus is on nurturing each child\'s unique potential through experiential learning and creative exploration.'
    },
    {
      question: 'What is the teacher-to-child ratio at EvernalAcademy?',
      answer: 'We maintain an optimal 1:8 teacher-child ratio to ensure personalized attention and care for every child, allowing our educators to focus on individual learning needs and development.'
    },
    {
      question: 'What safety measures are in place at EvernalAcademy?',
      answer: 'We have comprehensive safety protocols including CCTV surveillance, secure entry systems, trained staff, regular health check-ups, and child-friendly facilities with soft play areas and hygienic practices.'
    }
  ];

  const advantages = [
    {
      title: 'Holistic Learning',
      description: 'Fostering all-round development through a balanced blend of academics, play, and life skills.',
      icon: <Brain className="w-6 h-6 text-[#08472C]" />
    },
    {
      title: 'Expert Educators',
      description: 'Skilled teachers dedicated to nurturing every child\'s unique potential.',
      icon: <GraduationCap className="w-6 h-6 text-[#08472C]" />
    },
    {
      title: 'Safe and Secure',
      description: 'A protected, child-friendly environment ensuring safety and peace of mind.',
      icon: <Shield className="w-6 h-6 text-[#08472C]" />
    },
    {
      title: 'Innovative Learning',
      description: 'Engaging, modern teaching methods that make learning fun and impactful.',
      icon: <Sparkles className="w-6 h-6 text-[#08472C]" />
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#B2C6BD]/20">
   

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
            Evernal<span className="text-[#FCAB17]">Academy</span> Admissions
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-medium mb-10">
            Begin Your Child's Journey of Discovery, Learning, and Growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-[#FCAB17]" />
                <Link href="/" className="font-medium hover:text-[#FCAB17] transition-colors">Home</Link>
              </div>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="font-bold text-[#FCAB17]">Admissions</span>
            </div>
            <a 
              href="tel:+915551234567" 
              className="group px-8 py-3 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span>Enquire Now: +91 555 123 4567</span>
            </a>
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

              {formSubmitted ? (
                <div 
                  className="rounded-xl p-8 text-center"
                  style={{
                    backgroundColor: '#F0FDF4',
                    border: '2px solid #16A34A'
                  }}
                >
                  <div 
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                    style={{ backgroundColor: '#16A34A' }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xl font-bold mb-2" style={{ color: '#166534' }}>
                    Inquiry Submitted Successfully!
                  </p>
                  <p className="mb-4" style={{ color: '#15803D' }}>
                    Thank you for your interest. We have sent a confirmation email to your inbox.
                  </p>
                  <p className="text-sm" style={{ color: '#166534' }}>
                    Our admission team will contact you within 24 hours for further process.
                  </p>
                </div>
              ) : (
                <>
                  {error && (
                    <div 
                      className="rounded-lg p-4 mb-6"
                      style={{
                        backgroundColor: '#FEF2F2',
                        border: '1px solid #F87171'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="text-white text-sm">!</span>
                        </div>
                        <p className="font-medium" style={{ color: '#DC2626' }}>
                          {error}
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                          Mobile *
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter mobile number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                          Child's Name *
                        </label>
                        <input
                          type="text"
                          name="childName"
                          value={formData.childName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter child's name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                          Child's Age *
                        </label>
                        <input
                          type="text"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter age in years"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                        Select Program *
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: '#B2C6BD',
                          backgroundColor: '#FFFFFF'
                        }}
                      >
                        <option value="playgroup">Playgroup (1.5-2.5 years)</option>
                        <option value="nursery">Nursery (2.5-3.5 years)</option>
                        <option value="kindergarten">Kindergarten (3.5-5.5 years)</option>
                        <option value="training">Teacher Training Programme (18+ years)</option>
                        <option value="daycare">Daycare (1-8 years)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter city"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                          PIN Code *
                        </label>
                        <input
                          type="text"
                          name="pinCode"
                          value={formData.pinCode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter pin code"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                        Additional Information
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                        style={{
                          borderColor: '#B2C6BD',
                          backgroundColor: '#FFFFFF'
                        }}
                        placeholder="Any specific requirements or questions..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 w-full hover:shadow-lg"
                      style={{
                        background: loading 
                          ? '#B2C6BD' 
                          : 'linear-gradient(135deg, #08472C 0%, #0F172A 100%)',
                        color: '#FFFFFF'
                      }}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center" style={{ color: '#64748B' }}>
                      By submitting this form, you agree to our Terms & Conditions and Privacy Policy
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Stats and Images */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-[#B2C6BD]/30 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#08472C' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#0F172A' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Program Info */}
              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#B2C6BD'
                }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6" style={{ color: '#FCAB17' }} />
                  <span style={{ color: '#0F172A' }}>Selected Program</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm mb-1" style={{ color: '#64748B' }}>Program Name</p>
                    <p className="font-bold text-lg" style={{ color: '#08472C' }}>
                      {selectedProgram.name}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm mb-1" style={{ color: '#64748B' }}>Age Group</p>
                      <p className="font-semibold" style={{ color: '#0F172A' }}>
                        {selectedProgram.age}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: '#64748B' }}>Monthly Fee</p>
                      <p className="font-semibold" style={{ color: '#FCAB17' }}>
                        ${selectedProgram.fee}
                      </p>
                    </div>
                  </div>
                  <div 
                    className="mt-4 rounded-lg p-4"
                    style={{
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #08472C'
                    }}
                  >
                    <p className="text-sm text-center" style={{ color: '#08472C' }}>
                      ✨ <strong>Sibling Discount:</strong> 15% off for second child
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div 
                className="rounded-3xl p-8"
                style={{
                  background: 'linear-gradient(135deg, #08472C 0%, #0F172A 100%)',
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <Phone className="w-6 h-6" style={{ color: '#FCAB17' }} />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FCAB17' }}>
                      <Phone className="w-5 h-5 text-[#0F172A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Phone</p>
                      <p className="text-[#B2C6BD]">+91 555 123 4567</p>
                      <p className="text-[#B2C6BD]">+91 555 987 6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FCAB17' }}>
                      <Mail className="w-5 h-5 text-[#0F172A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Email</p>
                      <p className="text-[#B2C6BD]">admissions@eliteacademy.com</p>
                      <p className="text-[#B2C6BD]">info@eliteacademy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FCAB17' }}>
                      <Clock className="w-5 h-5 text-[#0F172A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Office Hours</p>
                      <p className="text-[#B2C6BD]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-[#B2C6BD]">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EvernalAcademy Advantage */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#0F172A' }}>
              The <span style={{ color: '#08472C' }}>EvernalAcademy Advantage</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#0F172A' }}>
              EvernalAcademy is a leader in Early Childhood Care and Education (ECCE). 
              Our proven pedagogy, comprehensive support, and innovative approaches make us the preferred choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-b from-white to-[#B2C6BD]/5 rounded-2xl p-8 border border-[#B2C6BD]/30 shadow-lg hover:shadow-2xl transition-all duration-500 h-full hover:translate-y-[-8px]">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#0F172A' }}>
                    {advantage.title}
                  </h3>
                  <p style={{ color: '#0F172A' }}>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl p-8 border" style={{ 
            backgroundColor: '#F8FAFC',
            borderColor: '#B2C6BD'
          }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#0F172A' }}>
                  Why Choose EvernalAcademy?
                </h4>
                <p className="mb-4" style={{ color: '#0F172A' }}>
                  EvernalAcademy is your trusted partner in providing exceptional early education for your child. 
                  Here's why EvernalAcademy stands out as the preferred choice for parents seeking the best for their little ones.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#FCAB17' }} />
                    <span style={{ color: '#0F172A' }}>Proven NEP 2020 aligned pedagogy framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#FCAB17' }} />
                    <span style={{ color: '#0F172A' }}>Comprehensive learning materials and resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#FCAB17' }} />
                    <span style={{ color: '#0F172A' }}>Regular training and curriculum updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#FCAB17' }} />
                    <span style={{ color: '#0F172A' }}>Safe and nurturing learning environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#FCAB17' }} />
                    <span style={{ color: '#0F172A' }}>Qualified and experienced teaching staff</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="rounded-2xl p-6 border" style={{ 
                  backgroundColor: '#FFFFFF',
                  borderColor: '#08472C'
                }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ 
                      backgroundColor: '#FFF7ED'
                    }}>
                      <Target className="w-6 h-6" style={{ color: '#FCAB17' }} />
                    </div>
                    <div>
                      <div className="font-bold text-lg" style={{ color: '#0F172A' }}>Success Through Service</div>
                      <div className="text-sm" style={{ color: '#0F172A' }}>Our secret to success is exceptional support</div>
                    </div>
                  </div>
                  <p style={{ color: '#0F172A' }}>
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
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#0F172A' }}>
              Frequently Asked <span style={{ color: '#08472C' }}>Questions</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#08472C] to-[#FCAB17] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg" style={{ color: '#0F172A' }}>
              Find answers to common questions about admissions and our programs
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-[#B2C6BD]/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ 
                    backgroundColor: '#F8FAFC'
                  }}>
                    <div className="text-lg font-bold" style={{ color: '#08472C' }}>?</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3" style={{ color: '#0F172A' }}>
                      {faq.question}
                    </h4>
                    <p style={{ color: '#0F172A' }}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full" style={{ 
              backgroundColor: '#FFFFFF',
              border: '1px solid #B2C6BD'
            }}>
              <Phone className="w-5 h-5" style={{ color: '#FCAB17' }} />
              <span className="font-medium" style={{ color: '#0F172A' }}>Still have questions? Call us at </span>
              <a href="tel:+915551234567" className="font-bold hover:underline" style={{ color: '#08472C' }}>
                +91 555 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 md:py-24 px-4"
        style={{
          background: 'linear-gradient(135deg, #08472C 0%, #0F172A 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Ready to Begin Your Child's <span className="text-[#FCAB17]">Learning Journey</span>?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of happy parents who have chosen EvernalAcademy for their child's early education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/contact" 
              className="group px-10 py-4 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              <span>Schedule Campus Visit</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#form" 
              className="group px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Calendar className="w-6 h-6 group-hover:animate-pulse" />
              <span>Fill Admission Form</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div className="flex flex-col items-center gap-3">
              <Mail className="w-8 h-8 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 mb-1">Email us at</p>
                <p className="text-xl font-bold text-white">admissions@eliteacademy.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-8 h-8 text-[#FCAB17]" />
              <div>
                <p className="text-white/80 mb-1">Visit our campus</p>
                <p className="text-xl font-bold text-white">Multiple locations available</p>
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
      </section>

    </main>
  );
}