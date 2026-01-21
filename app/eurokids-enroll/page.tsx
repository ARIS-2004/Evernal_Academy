'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaChild, FaShieldAlt, FaUsers, FaGamepad, FaGraduationCap, 
  FaSchool, FaBrain, FaClock, FaMapMarkerAlt, FaStar, FaQuoteLeft, 
  FaSearch, FaCalculator, FaHeart, FaUserTie, FaBookOpen, 
  FaPhone, FaEnvelope, FaMapMarker, FaCheckCircle 
} from 'react-icons/fa';
import { Loader2, Send, Award, Calendar, Shield, Users, Home, Mail, Phone } from 'lucide-react';

const EnrollPage = () => {
  const [formData, setFormData] = useState({
    childName: '',
    mobile: '',
    email: '',
    pincode: '',
    centre: '',
    program: '',
    parentName: '',
    captcha: '',
    privacy: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [captchaAnswer] = useState('22'); // 11 + 11 = 22

  const programs = {
    playgroup: { name: 'PlayGroup', age: '2-3 years', description: 'Hands-on activities fostering discovery' },
    nursery: { name: 'Nursery', age: '3-4 years', description: 'Fundamental life skills through art and music' },
    eurojunior: { name: 'EuroJunior', age: '4-5 years', description: 'Cultivating language skills' },
    eurosenior: { name: 'EuroSenior', age: '5-6 years', description: 'Preparation for elementary school' },
  };

  const selectedProgram = programs[formData.program as keyof typeof programs] || programs.playgroup;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
    
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CAPTCHA
    if (formData.captcha !== captchaAnswer) {
      setError('Please enter the correct answer for the math question');
      return;
    }

    if (!formData.privacy) {
      setError('Please agree to the Privacy Policy');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/eurokids-enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          programName: selectedProgram.name,
          programAge: selectedProgram.age,
          programDescription: selectedProgram.description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit application');
      }

      // Success
      setFormSubmitted(true);
      setFormData({
        childName: '',
        mobile: '',
        email: '',
        pincode: '',
        centre: '',
        program: '',
        parentName: '',
        captcha: '',
        privacy: false,
      });
      
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <FaShieldAlt className="text-3xl" style={{ color: '#08472C' }} />,
      title: "Safety & Hygiene",
      description: "Child-safe environment with CCTV surveillance and regular sanitization"
    },
    {
      icon: <FaUsers className="text-3xl" style={{ color: '#08472C' }} />,
      title: "Trained Staff",
      description: "Well-trained teachers with child development expertise"
    },
    {
      icon: <FaBrain className="text-3xl" style={{ color: '#08472C' }} />,
      title: "Mindful Learning",
      description: "Research-based curriculum focusing on holistic development"
    },
    {
      icon: <FaClock className="text-3xl" style={{ color: '#08472C' }} />,
      title: "Flexible Timings",
      description: "Convenient multiple shifts to suit your schedule"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      child: "Parent of Arjun (Nursery)",
      comment: "EuroKids has transformed my shy child into a confident communicator. The teachers are amazing!"
    },
    {
      name: "Rajesh Kumar",
      child: "Parent of Meera (PlayGroup)",
      comment: "The safety measures and daily updates through the app give us complete peace of mind."
    },
    {
      name: "Anjali Patel",
      child: "Parent of Rohan (EuroSenior)",
      comment: "Best decision we made for our child's early education. The curriculum is perfectly balanced."
    }
  ];

  const quickLinks = [
    { icon: <FaShieldAlt className="text-xl" />, text: "Safety First", color: "bg-gradient-to-br from-[#08472C] to-[#0A5C3A]" },
    { icon: <FaUsers className="text-xl" />, text: "1:10 Ratio", color: "bg-gradient-to-br from-[#FCAB17] to-[#FFD700]" },
    { icon: <FaGamepad className="text-xl" />, text: "Play-based", color: "bg-gradient-to-br from-[#08472C] to-[#0A5C3A]" },
    { icon: <FaMapMarkerAlt className="text-xl" />, text: "Multiple Centers", color: "bg-gradient-to-br from-[#FCAB17] to-[#FFD700]" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#B2C6BD]/20">
      {/* Navbar */}


      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#08472C] via-[#0A5C3A] to-[#0F172A] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Enroll Your Child at <span className="text-[#FCAB17]">Evernal Academy</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Give your child the gift of quality early education at India's Most Trusted Pre-school
          </p>
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full" 
               style={{ backgroundColor: 'rgba(252, 171, 23, 0.1)', border: '1px solid #FCAB17' }}>
            <Award className="w-5 h-5 text-[#FCAB17]" />
            <span className="font-medium">Award-Winning Curriculum • NEP 2020 Aligned • Safe & Secure Environment</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Admission Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border" 
                 style={{ borderColor: '#B2C6BD' }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaChild className="mr-3" style={{ color: '#08472C' }} />
                <span style={{ color: '#0F172A' }}>Admission Form</span>
              </h2>
              
              {formSubmitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <FaCheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-xl font-bold mb-2" style={{ color: '#166534' }}>
                    Application Submitted Successfully!
                  </p>
                  <p className="mb-4" style={{ color: '#15803D' }}>
                    Thank you for your application. We have sent a confirmation email to your inbox.
                  </p>
                  <p className="text-sm" style={{ color: '#166534' }}>
                    Our admission team will contact you within 24 hours for further process.
                  </p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="text-white text-sm">!</span>
                        </div>
                        <p className="font-medium" style={{ color: '#DC2626' }}>{error}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                        Child's Full Name*
                      </label>
                      <input 
                        type="text" 
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: '#B2C6BD',
                          backgroundColor: '#FFFFFF'
                        }}
                        placeholder="Enter child's full name"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Mobile Number*
                        </label>
                        <div className="flex">
                          <div className="flex items-center px-4 py-3 border rounded-l-lg" 
                               style={{ backgroundColor: '#F8FAFC', borderColor: '#B2C6BD' }}>
                            <span style={{ color: '#0F172A' }}>+91</span>
                          </div>
                          <input 
                            type="tel" 
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="flex-1 px-4 py-3 border rounded-r-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="Enter mobile number"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Email Address*
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Parent's Name*
                        </label>
                        <input 
                          type="text" 
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter parent's name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Search by Pincode*
                        </label>
                        <div className="relative">
                          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" 
                                   style={{ color: '#B2C6BD' }} />
                          <input 
                            type="text" 
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="Enter pincode"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Select Centre*
                        </label>
                        <select 
                          name="centre"
                          value={formData.centre}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          required
                        >
                          <option value="">Select nearest centre</option>
                          <option value="centre1">Evernal Academy Mumbai Central</option>
                          <option value="centre2">Evernal Academy Delhi South</option>
                          <option value="centre3">Evernal Academy Bangalore East</option>
                          <option value="centre4">Evernal Academy Chennai West</option>
                          <option value="centre5">Evernal Academy Kolkata North</option>
                          <option value="centre6">Evernal Academy Hyderabad Central</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Select a Program*
                        </label>
                        <select 
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          required
                        >
                          <option value="">Select program</option>
                          <option value="playgroup">PlayGroup (2-3 years)</option>
                          <option value="nursery">Nursery (3-4 years)</option>
                          <option value="eurojunior">Junior Program (4-5 years)</option>
                          <option value="eurosenior">Senior Program (5-6 years)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                        11 + 11 = ?* (Simple math question)
                      </label>
                      <input 
                        type="text" 
                        name="captcha"
                        value={formData.captcha}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: '#B2C6BD',
                          backgroundColor: '#FFFFFF'
                        }}
                        placeholder="Enter answer (e.g., 22)"
                        required
                      />
                    </div>

                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="mt-1 mr-3 h-5 w-5 rounded"
                        style={{ accentColor: '#08472C' }}
                        required
                      />
                      <label htmlFor="privacy" style={{ color: '#0F172A' }}>
                        I have read and agree to the Privacy Policy and Terms & Conditions
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg"
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
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info Box */}
            <div className="mt-8 bg-gradient-to-r from-[#08472C] to-[#0F172A] rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <FaPhone className="mr-3" style={{ color: '#FCAB17' }} />
                Need Help? Contact Us
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#FCAB17' }}>
                    <Phone className="w-6 h-6" style={{ color: '#0F172A' }} />
                  </div>
                  <div>
                    <p className="font-bold">Phone Support</p>
                    <p>+91 555 123 4567</p>
                    <p className="text-sm opacity-80">Mon-Sat, 9AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#FCAB17' }}>
                    <Mail className="w-6 h-6" style={{ color: '#0F172A' }} />
                  </div>
                  <div>
                    <p className="font-bold">Email Support</p>
                    <p>admissions@ebernalacademy.com</p>
                    <p className="text-sm opacity-80">Response within 24h</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#FCAB17' }}>
                    <Home className="w-6 h-6" style={{ color: '#0F172A' }} />
                  </div>
                  <div>
                    <p className="font-bold">Visit Center</p>
                    <p>Schedule a tour</p>
                    <p className="text-sm opacity-80">By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            {/* Programs Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border" 
                 style={{ borderColor: '#B2C6BD' }}>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <FaBookOpen className="mr-3" style={{ color: '#FCAB17' }} />
                <span style={{ color: '#0F172A' }}>Our Pre-school Programs</span>
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #08472C' }}>
                  <div className="flex items-start">
                    <FaChild className="mt-1 mr-3" style={{ color: '#08472C' }} />
                    <div>
                      <h4 className="font-bold" style={{ color: '#0F172A' }}>PlayGroup (2-3 years)</h4>
                      <p className="text-sm mt-1" style={{ color: '#64748B' }}>Hands-on activities fostering discovery and exploration</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #FCAB17' }}>
                  <div className="flex items-start">
                    <FaGraduationCap className="mt-1 mr-3" style={{ color: '#FCAB17' }} />
                    <div>
                      <h4 className="font-bold" style={{ color: '#0F172A' }}>Nursery (3-4 years)</h4>
                      <p className="text-sm mt-1" style={{ color: '#64748B' }}>Fundamental life skills through art, music, and play</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #08472C' }}>
                  <div className="flex items-start">
                    <FaBrain className="mt-1 mr-3" style={{ color: '#08472C' }} />
                    <div>
                      <h4 className="font-bold" style={{ color: '#0F172A' }}>Junior Program (4-5 years)</h4>
                      <p className="text-sm mt-1" style={{ color: '#64748B' }}>Cultivating language, math, and social skills</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #FCAB17' }}>
                  <div className="flex items-start">
                    <FaSchool className="mt-1 mr-3" style={{ color: '#FCAB17' }} />
                    <div>
                      <h4 className="font-bold" style={{ color: '#0F172A' }}>Senior Program (5-6 years)</h4>
                      <p className="text-sm mt-1" style={{ color: '#64748B' }}>Preparation for elementary school with advanced learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Age Calculator */}
            {/* <div className="bg-gradient-to-r from-[#FCAB17] to-[#FFD700] rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaCalculator className="mr-3" />
                Admission Age Calculator
              </h3>
              <p className="mb-6" style={{ color: '#0F172A' }}>
                Find the right program for your child based on their age
              </p>
              <button className="w-full py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#08472C', color: '#FFFFFF' }}>
                Calculate Age
              </button>
            </div> */}

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border" 
                 style={{ borderColor: '#B2C6BD' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#0F172A' }}>
                Why Choose Evernal Academy?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <div key={index} 
                       className={`text-center p-4 rounded-lg ${link.color} text-white`}>
                    <div className="mb-2 flex justify-center">
                      {link.icon}
                    </div>
                    <p className="text-sm font-medium">{link.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-lg" 
                   style={{ backgroundColor: '#F8FAFC', border: '1px solid #08472C' }}>
                <p className="text-sm text-center" style={{ color: '#08472C' }}>
                  <FaStar className="inline mr-2" />
                  <strong>1,000+ Happy Parents</strong> trust us with their children's education
                </p>
              </div>
            </div>

            {/* Program Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border" 
                 style={{ borderColor: '#B2C6BD' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#0F172A' }}>
                <Award className="mr-3" style={{ color: '#FCAB17' }} />
                Selected Program Info
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span style={{ color: '#64748B' }}>Program:</span>
                  <span className="font-bold" style={{ color: '#08472C' }}>{selectedProgram.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: '#64748B' }}>Age Group:</span>
                  <span className="font-bold" style={{ color: '#0F172A' }}>{selectedProgram.age}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: '#64748B' }}>Focus Area:</span>
                  <span className="font-medium" style={{ color: '#0F172A' }}>{selectedProgram.description}</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: '#B2C6BD' }}>
                <p className="text-sm text-center" style={{ color: '#64748B' }}>
                  <Shield className="inline mr-2" style={{ color: '#FCAB17' }} />
                  <strong>Certified Teachers</strong> • <strong>Safe Environment</strong> • <strong>NEP 2020 Aligned</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#0F172A' }}>
            Why Evernal Academy?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
                   style={{ borderColor: '#B2C6BD' }}>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#0F172A' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#64748B' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 bg-gradient-to-r from-[#08472C] to-[#0F172A] rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <FaQuoteLeft className="mr-3" style={{ color: '#FCAB17' }} />
              Parent Speak
            </h2>
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FCAB17]" />
              <FaStar className="text-[#FCAB17]" />
              <FaStar className="text-[#FCAB17]" />
              <FaStar className="text-[#FCAB17]" />
              <FaStar className="text-[#FCAB17]" />
              <span className="ml-2 font-bold">4.8/5 Rating</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                       style={{ backgroundColor: '#FCAB17' }}>
                    <FaUserTie className="text-xl" style={{ color: '#0F172A' }} />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-white/80">{testimonial.child}</p>
                  </div>
                </div>
                <p className="italic">&quot;{testimonial.comment}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl shadow-xl" 
               style={{ backgroundColor: '#FFFFFF', border: '2px solid #08472C' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Still Have Questions?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Our admission team is ready to help you with any questions about our programs, 
              fees, or admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+915551234567" 
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                 style={{ backgroundColor: '#FCAB17', color: '#0F172A' }}>
                <Phone className="w-5 h-5" />
                Call Now: +91 555 123 4567
              </a>
              <a href="/contact" 
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105"
                 style={{ borderColor: '#FCAB17', color: '#FCAB17' }}>
                <Mail className="w-5 h-5" />
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default EnrollPage;