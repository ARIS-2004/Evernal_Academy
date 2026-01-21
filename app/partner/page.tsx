import React from 'react';
import Link from 'next/link';
import { FaBuilding, FaChartLine, FaMapMarkerAlt, FaUsers, FaAward, FaGlobeAsia, FaHandshake, FaTools, FaGraduationCap, FaBullhorn, FaLaptop, FaShieldAlt, FaQuestionCircle, FaRupeeSign, FaHome, FaLightbulb } from 'react-icons/fa';

const PartnerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Partner with Most Trusted Preschool Franchise in India
          </h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            Join Our Play School Franchise Network with 23+ Years of Excellence
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Franchise Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaHandshake className="mr-3 text-[#0A5C3A]" />
                Become a Franchise Partner
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Full Name*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email Id*</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Mobile*</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Select State*</label>
                    <select 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="delhi">Delhi</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="tamilnadu">Tamil Nadu</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="westbengal">West Bengal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Select City*</label>
                    <select 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C3A] focus:border-transparent"
                      required
                    >
                      <option value="">Select City</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="chennai">Chennai</option>
                      <option value="ahmedabad">Ahmedabad</option>
                      <option value="kolkata">Kolkata</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy-partner"
                    className="mt-1 mr-3 h-5 w-5 text-[#0A5C3A] rounded focus:ring-[#0A5C3A]"
                    required
                  />
                  <label htmlFor="privacy-partner" className="text-gray-700">
                    I have read and agree to the Privacy Policy
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white font-bold rounded-lg hover:from-[#0A5C3A] hover:to-[#08472C] transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                >
                  Request Franchise Details
                </button>
              </form>
            </div>

            {/* Investment Info */}
            <div className="bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Franchise Investment Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaRupeeSign className="mt-1 mr-4 text-2xl" />
                  <div>
                    <h4 className="font-bold text-lg">Investment Required</h4>
                    <p className="text-lg">₹ 15-20 Lakh*</p>
                    <p className="text-sm opacity-90 mt-1">Inclusive of all setup costs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaLightbulb className="mt-1 mr-4 text-2xl" />
                  <div>
                    <h4 className="font-bold text-lg">Long Term Vision</h4>
                    <p className="text-lg">23+ Years Experience</p>
                    <p className="text-sm opacity-90 mt-1">Proven business model</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaHome className="mt-1 mr-4 text-2xl" />
                  <div>
                    <h4 className="font-bold text-lg">Space Requirement</h4>
                    <p className="text-lg">1500 Sq Ft Minimum</p>
                    <p className="text-sm opacity-90 mt-1">Ground or commercial space</p>
                  </div>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-sm italic">
                    *Investment may vary based on location and facility requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose EuroKids Franchise */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose EuroKids Preschool Franchise?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4 text-[#0A5C3A] mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <h3 className="font-bold text-lg mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EDGE360 Support */}
        <div className="mb-12 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-8 text-center">All-round Franchise Support with EDGE360</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-4 text-[#FCAB17]">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <FaQuestionCircle className="mr-3 text-[#0A5C3A]" />
            Frequently Asked Questions (FAQs)
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-start">
                  <span className="bg-[#0A5C3A] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Preschool Franchise?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Join hundreds of successful edupreneurs across India who have built thriving preschools with EuroKids. 
            Take the first step towards owning a profitable and purpose-driven preschool franchise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white font-bold rounded-lg hover:from-[#0A5C3A] hover:to-[#08472C] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Download Franchise Brochure
            </Link>
            <Link
              href="/enroll"
              className="px-8 py-4 bg-white border-2 border-[#0A5C3A] text-[#0A5C3A] font-bold rounded-lg hover:bg-[#0A5C3A] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Admission Page
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

const stats = [
  {
    icon: <FaBuilding />,
    value: "1,700+",
    title: "Pre-schools",
    description: "Across India and growing"
  },
  {
    icon: <FaChartLine />,
    value: "23+",
    title: "Years Expertise",
    description: "In early childhood education"
  },
  {
    icon: <FaUsers />,
    value: "7,00,000+",
    title: "Children Nurtured",
    description: "Successful alumni network"
  },
  {
    icon: <FaGlobeAsia />,
    value: "3",
    title: "Countries",
    description: "International presence"
  }
];

const supportFeatures = [
  {
    icon: <FaBuilding />,
    title: "Infrastructure Design",
    description: "Complete ambience and layout planning"
  },
  {
    icon: <FaTools />,
    title: "Furniture & Equipment",
    description: "Quality learning materials supply"
  },
  {
    icon: <FaGraduationCap />,
    title: "Researched Curriculum",
    description: "Proven teaching methodology"
  },
  {
    icon: <FaLaptop />,
    title: "Business Portal",
    description: "Digital management system"
  },
  {
    icon: <FaUsers />,
    title: "Teacher Training",
    description: "Continuous skill development"
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Support",
    description: "Admission and brand promotion"
  },
  {
    icon: <FaShieldAlt />,
    title: "Lead Management",
    description: "Student enrollment assistance"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Intercity Transfer",
    description: "Student relocation support"
  }
];

const faqs = [
  {
    question: "Is a preschool franchise profitable in India?",
    answer: "Yes, a preschool franchise in India can be highly profitable when backed by a proven business model. EuroKids offers structured systems, parent-trusted pedagogy, and operational support that help partners build sustainable and scalable preschool businesses."
  },
  {
    question: "What is the total investment required to start a Preschool franchise in India?",
    answer: "The total investment ranges from ₹ 15-20 lakhs*, which includes franchise fee, infrastructure setup, furniture, equipment, and initial operational costs. Exact investment may vary based on location and facility size."
  },
  {
    question: "What Support Does EuroKids Offer to Franchise Partners?",
    answer: "EuroKids provides comprehensive 360° support including infrastructure design, curriculum delivery, teacher training, marketing assistance, operational guidance, and ongoing business consultation through our EDGE360 program."
  },
  {
    question: "Do I need prior experience to start a preschool franchise?",
    answer: "No prior experience in education is required. We provide complete training and support. Many of our successful partners come from diverse professional backgrounds."
  },
  {
    question: "Why EuroKids is the best preschool franchise in India?",
    answer: "EuroKids is India's most awarded preschool with 23+ years of experience, research-backed curriculum, strong brand recognition, and proven success track record across 1700+ centers."
  }
];

export default PartnerPage;