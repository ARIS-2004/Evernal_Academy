import React from 'react';
import Link from 'next/link';

import { FaChild, FaShieldAlt, FaUsers, FaGamepad, FaGraduationCap, FaSchool, FaBrain, FaClock, FaMapMarkerAlt, FaStar, FaQuoteLeft, FaSearch, FaCalculator, FaHeart, FaUserTie, FaBookOpen } from 'react-icons/fa';

const EnrollPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
         
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Enroll Your Child at EuroKids
          </h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            Give your child the gift of quality early education at India&apos;s Most Awarded Pre-school
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Admission Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaChild className="mr-3 text-[#0A5C3A]" />
              Admission Form
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Full Name*</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                  placeholder="Enter child's full name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Mobile Number*</label>
                  <div className="flex">
                    <div className="flex items-center px-4 py-3 border border-gray-300 border-r-0 rounded-l-lg bg-gray-50">
                      <span className="text-gray-600">+91</span>
                    </div>
                    <input 
                      type="tel" 
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email*</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Search by Pincode*</label>
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                      placeholder="Enter pincode"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Select Centre*</label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                    required
                  >
                    <option value="">Select nearest centre</option>
                    <option value="centre1">EuroKids Mumbai Central</option>
                    <option value="centre2">EuroKids Delhi South</option>
                    <option value="centre3">EuroKids Bangalore East</option>
                    <option value="centre4">EuroKids Chennai West</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Select a Program*</label>
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                  required
                >
                  <option value="">Select program</option>
                  <option value="playgroup">PlayGroup (2-3 years)</option>
                  <option value="nursery">Nursery (3-4 years)</option>
                  <option value="eurojunior">EuroJunior (4-5 years)</option>
                  <option value="eurosenior">EuroSenior (5-6 years)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  11 + 11 = ?*
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                  placeholder="Enter answer"
                  required
                />
              </div>

              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="privacy"
                  className="mt-1 mr-3 h-5 w-5 text-[#0A5C3A] rounded focus:ring-[#0A5C3A]"
                  required
                />
                <label htmlFor="privacy" className="text-gray-700">
                  I have read and agree to the Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white font-bold rounded-lg hover:from-[#0A5C3A] hover:to-[#08472C] transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            {/* Programs Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaBookOpen className="mr-3 text-[#FCAB17]" />
                Our Pre-school Programs
              </h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <FaChild className="mt-1 mr-3 text-[#0A5C3A]" />
                  <div>
                    <h4 className="font-bold text-gray-800">PlayGroup (2-3 years)</h4>
                    <p className="text-sm text-gray-600 mt-1">Hands-on activities fostering discovery</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                  <FaGraduationCap className="mt-1 mr-3 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Nursery (3-4 years)</h4>
                    <p className="text-sm text-gray-600 mt-1">Fundamental life skills through art and music</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                  <FaBrain className="mt-1 mr-3 text-yellow-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">EuroJunior (4-5 years)</h4>
                    <p className="text-sm text-gray-600 mt-1">Cultivating language skills</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <FaSchool className="mt-1 mr-3 text-purple-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">EuroSenior (5-6 years)</h4>
                    <p className="text-sm text-gray-600 mt-1">Preparation for elementary school</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Age Calculator */}
            <div className="bg-gradient-to-r from-[#FCAB17] to-[#FFD700] rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaCalculator className="mr-3" />
                Admission Age Calculator
              </h3>
              <p className="mb-4">Find the right program for your child</p>
              <button className="w-full py-3 bg-white text-[#08472C] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Calculate Age
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose EuroKids?</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <FaShieldAlt className="mx-auto text-2xl text-[#0A5C3A] mb-2" />
                  <p className="text-sm font-medium">Safety First</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <FaUsers className="mx-auto text-2xl text-blue-600 mb-2" />
                  <p className="text-sm font-medium">1:10 Ratio</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <FaGamepad className="mx-auto text-2xl text-yellow-600 mb-2" />
                  <p className="text-sm font-medium">Play-based</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <FaMapMarkerAlt className="mx-auto text-2xl text-purple-600 mb-2" />
                  <p className="text-sm font-medium">Multiple Centers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why EuroKids?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4 text-[#0A5C3A]">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Parent Speak</h2>
            <FaQuoteLeft className="text-4xl opacity-20" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <FaUserTie className="text-xl" />
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
      </div>
     
    </div>
  );
};

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Safety & Hygiene",
    description: "Child-safe environment with CCTV surveillance and regular sanitization"
  },
  {
    icon: <FaUsers />,
    title: "Trained Staff",
    description: "Well-trained teachers with child development expertise"
  },
  {
    icon: <FaBrain />,
    title: "Mindful Learning",
    description: "Research-based curriculum focusing on holistic development"
  },
  {
    icon: <FaClock />,
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


export default EnrollPage;