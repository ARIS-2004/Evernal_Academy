'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaBuilding, FaChartLine, FaMapMarkerAlt, FaUsers, FaAward, 
  FaGlobeAsia, FaHandshake, FaTools, FaGraduationCap, FaBullhorn, 
  FaLaptop, FaShieldAlt, FaQuestionCircle, FaRupeeSign, FaHome, 
  FaLightbulb, FaPhone, FaEnvelope, FaCheckCircle, FaStar 
} from 'react-icons/fa';
import { Loader2, Send, Award, Shield, Users, Calendar, Mail, Phone, ChevronRight, Target } from 'lucide-react';

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    state: '',
    city: '',
    investmentRange: '',
    experience: '',
    message: '',
    privacy: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    
    if (!formData.privacy) {
      setError('Please agree to the Privacy Policy');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/franchise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit inquiry');
      }

      // Success
      setFormSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        state: '',
        city: '',
        investmentRange: '',
        experience: '',
        message: '',
        privacy: false,
      });
      
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      icon: <FaBuilding className="text-3xl" />,
      value: "50+",
      title: "Franchise Centers",
      description: "Across India and growing rapidly"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      value: "15+",
      title: "Years Expertise",
      description: "In early childhood education"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      value: "10,000+",
      title: "Children Nurtured",
      description: "Successful alumni network"
    },
    {
      icon: <FaAward className="text-3xl" />,
      value: "Awarded",
      title: "Best Preschool",
      description: "Recognized excellence in education"
    }
  ];

  const supportFeatures = [
    {
      icon: <FaBuilding className="text-2xl" />,
      title: "Infrastructure Design",
      description: "Complete ambience and layout planning"
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Furniture & Equipment",
      description: "Quality learning materials supply"
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Researched Curriculum",
      description: "Proven teaching methodology"
    },
    {
      icon: <FaLaptop className="text-2xl" />,
      title: "Business Portal",
      description: "Digital management system"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Teacher Training",
      description: "Continuous skill development"
    },
    {
      icon: <FaBullhorn className="text-2xl" />,
      title: "Marketing Support",
      description: "Admission and brand promotion"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Lead Management",
      description: "Student enrollment assistance"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Site Selection",
      description: "Optimal location guidance"
    }
  ];

  const faqs = [
    {
      question: "Is a preschool franchise profitable in India?",
      answer: "Yes, a preschool franchise in India can be highly profitable when backed by a proven business model. EvernalAcademy offers structured systems, parent-trusted pedagogy, and operational support that help partners build sustainable and scalable preschool businesses."
    },
    {
      question: "What is the total investment required to start a Preschool franchise?",
      answer: "The total investment ranges from ₹ 15-20 lakhs*, which includes franchise fee, infrastructure setup, furniture, equipment, and initial operational costs. Exact investment may vary based on location and facility size."
    },
    {
      question: "What Support Does Evernal Academy Offer to Franchise Partners?",
      answer: "EvernalAcademy provides comprehensive 360° support including infrastructure design, curriculum delivery, teacher training, marketing assistance, operational guidance, and ongoing business consultation through our complete support program."
    },
    {
      question: "Do I need prior experience to start a preschool franchise?",
      answer: "No prior experience in education is required. We provide complete training and support. Many of our successful partners come from diverse professional backgrounds including business, corporate, and other industries."
    },
    {
      question: "Why EvernalAcademy is the best preschool franchise?",
      answer: "EvernalAcademy is one of the fastest growing preschool brands with research-backed curriculum, strong brand recognition, and proven success track record. We offer comprehensive support and competitive advantage in the education sector."
    }
  ];

  const investmentOptions = [
    { range: "₹ 15-20 Lakhs", desc: "Standard Center (1500-2000 sq ft)" },
    { range: "₹ 20-25 Lakhs", desc: "Premium Center (2000-3000 sq ft)" },
    { range: "₹ 25-30 Lakhs", desc: "Flagship Center (3000+ sq ft)" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#B2C6BD]/20">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" 
                   style={{ backgroundColor: '#08472C' }}>
                <FaBuilding className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold" style={{ color: '#08472C' }}>Evernal</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="font-medium hover:text-[#FCAB17] transition-colors" 
                    style={{ color: '#0F172A' }}>
                Home
              </Link>
              <Link href="/admissions" className="font-medium hover:text-[#FCAB17] transition-colors" 
                    style={{ color: '#0F172A' }}>
                Admissions
              </Link>
              <a href="tel:+915551234567" className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium" 
                 style={{ backgroundColor: '#FCAB17', color: '#0F172A' }}>
                <Phone className="w-4 h-4" />
                Franchise Inquiry: +91 555 123 4567
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#08472C] via-[#0A5C3A] to-[#0F172A] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Partner with <span className="text-[#FCAB17]">EvernalAcademy</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join India's Fastest Growing Preschool Franchise Network with Proven Success Track Record
          </p>
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full" 
               style={{ backgroundColor: 'rgba(252, 171, 23, 0.1)', border: '1px solid #FCAB17' }}>
            <Award className="w-5 h-5 text-[#FCAB17]" />
            <span className="font-medium">Award-Winning Curriculum • Complete Support • High Profit Margins</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Franchise Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 border" 
             style={{ borderColor: '#B2C6BD' }}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaHandshake className="mr-3" style={{ color: '#08472C' }} />
                <span style={{ color: '#0F172A' }}>Become a Franchise Partner</span>
              </h2>
              
              {formSubmitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <FaCheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-xl font-bold mb-2" style={{ color: '#166534' }}>
                    Inquiry Submitted Successfully!
                  </p>
                  <p className="mb-4" style={{ color: '#15803D' }}>
                    Thank you for your interest in EvernalAcademy franchise. We have sent detailed information to your email.
                  </p>
                  <p className="text-sm" style={{ color: '#166534' }}>
                    Our franchise team will contact you within 24 hours for a detailed discussion.
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
                        Full Name*
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: '#B2C6BD',
                          backgroundColor: '#FFFFFF'
                        }}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Email Id*
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

                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Mobile Number*
                        </label>
                        <input 
                          type="tel" 
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Enter mobile number"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Select State*
                        </label>
                        <select 
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          required
                        >
                          <option value="">Select State</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="delhi">Delhi</option>
                          <option value="karnataka">Karnataka</option>
                          <option value="tamilnadu">Tamil Nadu</option>
                          <option value="gujarat">Gujarat</option>
                          <option value="westbengal">West Bengal</option>
                          <option value="uttarpradesh">Uttar Pradesh</option>
                          <option value="rajasthan">Rajasthan</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Select City*
                        </label>
                        <select 
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          required
                        >
                          <option value="">Select City</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="delhi">Delhi</option>
                          <option value="bangalore">Bangalore</option>
                          <option value="chennai">Chennai</option>
                          <option value="ahmedabad">Ahmedabad</option>
                          <option value="kolkata">Kolkata</option>
                          <option value="pune">Pune</option>
                          <option value="hyderabad">Hyderabad</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Investment Range*
                        </label>
                        <select 
                          name="investmentRange"
                          value={formData.investmentRange}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          required
                        >
                          <option value="">Select Investment Range</option>
                          <option value="15-20">₹ 15-20 Lakhs</option>
                          <option value="20-25">₹ 20-25 Lakhs</option>
                          <option value="25-30">₹ 25-30 Lakhs</option>
                          <option value="30+">₹ 30+ Lakhs</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                          Business Experience*
                        </label>
                        <select 
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          required
                        >
                          <option value="">Select Experience</option>
                          <option value="none">No Prior Experience</option>
                          <option value="education">Education Background</option>
                          <option value="business">Business Experience</option>
                          <option value="corporate">Corporate Background</option>
                          <option value="other">Other Experience</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 font-medium" style={{ color: '#0F172A' }}>
                        Additional Information (Optional)
                      </label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                        style={{
                          borderColor: '#B2C6BD',
                          backgroundColor: '#FFFFFF'
                        }}
                        placeholder="Tell us about your background, expectations, or any questions..."
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="privacy-partner"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="mt-1 mr-3 h-5 w-5 rounded"
                        style={{ accentColor: '#08472C' }}
                        required
                      />
                      <label htmlFor="privacy-partner" style={{ color: '#0F172A' }}>
                        I have read and agree to the Privacy Policy and Franchise Terms & Conditions
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
                          Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          Request Franchise Details
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Investment Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Franchise Investment Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaRupeeSign className="mt-1 mr-4 text-2xl" style={{ color: '#0F172A' }} />
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: '#0F172A' }}>Investment Required</h4>
                      <p className="text-xl font-bold" style={{ color: '#0F172A' }}>₹ 15-30 Lakhs*</p>
                      <p className="text-sm opacity-90 mt-1" style={{ color: '#0F172A' }}>Inclusive of all setup costs</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaLightbulb className="mt-1 mr-4 text-2xl" style={{ color: '#0F172A' }} />
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: '#0F172A' }}>Long Term Vision</h4>
                      <p className="text-lg font-bold" style={{ color: '#0F172A' }}>15+ Years Experience</p>
                      <p className="text-sm opacity-90 mt-1" style={{ color: '#0F172A' }}>Proven business model</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaHome className="mt-1 mr-4 text-2xl" style={{ color: '#0F172A' }} />
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: '#0F172A' }}>Space Requirement</h4>
                      <p className="text-lg font-bold" style={{ color: '#0F172A' }}>1500-3000 Sq Ft</p>
                      <p className="text-sm opacity-90 mt-1" style={{ color: '#0F172A' }}>Ground or commercial space</p>
                    </div>
                  </div>

                  <div className="bg-white/30 p-4 rounded-lg" style={{ color: '#0F172A' }}>
                    <p className="text-sm italic">
                      *Investment varies based on location, size, and facility requirements
                    </p>
                  </div>
                </div>
              </div>

              {/* Investment Options */}
              <div className="bg-white rounded-2xl p-6 border" style={{ borderColor: '#B2C6BD' }}>
                <h3 className="text-xl font-bold mb-6 flex items-center" style={{ color: '#0F172A' }}>
                  <FaChartLine className="mr-3" style={{ color: '#FCAB17' }} />
                  Investment Options
                </h3>
                <div className="space-y-4">
                  {investmentOptions.map((option, index) => (
                    <div key={index} 
                         className="p-4 rounded-lg hover:shadow-md transition-all duration-300"
                         style={{ 
                           backgroundColor: '#F8FAFC',
                           borderLeft: '4px solid #08472C'
                         }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold" style={{ color: '#08472C' }}>{option.range}</span>
                        <span className="text-sm px-3 py-1 rounded-full" 
                              style={{ backgroundColor: '#FCAB17', color: '#0F172A' }}>
                          Popular
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: '#64748B' }}>{option.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-[#08472C] to-[#0F172A] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Phone className="mr-3" style={{ color: '#FCAB17' }} />
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#FCAB17' }}>
                      <Phone className="w-4 h-4" style={{ color: '#0F172A' }} />
                    </div>
                    <div>
                      <p className="font-bold">Franchise Helpline</p>
                      <p>+91 7003999531</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#FCAB17' }}>
                      <Mail className="w-4 h-4" style={{ color: '#0F172A' }} />
                    </div>
                    <div>
                      <p className="font-bold">Email Support</p>
                      <p>evernalacademy@gmail.com</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm">
                      <Calendar className="inline mr-2 w-4 h-4" />
                      Schedule a call: Mon-Sat, 9AM-6PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose EvernalAcademy Franchise */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#0F172A' }}>
            Why Choose <span style={{ color: '#08472C' }}>EvernalAcademy</span> Franchise?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300 text-center"
                   style={{ borderColor: '#B2C6BD' }}>
                <div className="mb-4" style={{ color: '#08472C' }}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: '#0F172A' }}>{stat.value}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#0F172A' }}>{stat.title}</h3>
                <p style={{ color: '#64748B' }}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive Support */}
        <div className="mb-12 bg-gradient-to-r from-[#08472C] to-[#0F172A] rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-8 text-center">
            All-round Franchise Support with <span style={{ color: '#FCAB17' }}>Complete Assistance</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <div className="mb-4" style={{ color: '#FCAB17' }}>
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-lg">
              <Shield className="inline mr-2" />
              <strong>360° Support</strong> from Day 1 to Success
            </p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border mb-12" style={{ borderColor: '#B2C6BD' }}>
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <FaQuestionCircle className="mr-3" style={{ color: '#08472C' }} />
            <span style={{ color: '#0F172A' }}>Frequently Asked Questions (FAQs)</span>
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-6" style={{ borderColor: '#B2C6BD' }}>
                <h3 className="text-lg font-bold mb-2 flex items-start" style={{ color: '#0F172A' }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-1"
                        style={{ backgroundColor: '#08472C', color: '#FFFFFF' }}>
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="ml-9" style={{ color: '#64748B' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12 bg-gradient-to-br from-[#FCAB17]/10 to-[#FFD700]/5 rounded-2xl p-8 border" 
             style={{ borderColor: '#B2C6BD' }}>
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#0F172A' }}>
            Success Stories of Our <span style={{ color: '#08472C' }}>Franchise Partners</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                     style={{ backgroundColor: '#08472C' }}>
                  <FaStar className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: '#0F172A' }}>Rajesh Kumar</h4>
                  <p className="text-sm" style={{ color: '#64748B' }}>Bangalore Center (Since 2018)</p>
                </div>
              </div>
              <p className="italic" style={{ color: '#64748B' }}>
                "EvernalAcademy's support system helped me build a successful preschool within 6 months. 
                Today we have 150+ happy students."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                     style={{ backgroundColor: '#08472C' }}>
                  <FaStar className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: '#0F172A' }}>Priya Sharma</h4>
                  <p className="text-sm" style={{ color: '#64748B' }}>Delhi Center (Since 2019)</p>
                </div>
              </div>
              <p className="italic" style={{ color: '#64748B' }}>
                "Coming from a corporate background, I had no education experience. 
                The training and ongoing support made my journey smooth and profitable."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                     style={{ backgroundColor: '#08472C' }}>
                  <FaStar className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: '#0F172A' }}>Amit Patel</h4>
                  <p className="text-sm" style={{ color: '#64748B' }}>Mumbai Center (Since 2020)</p>
                </div>
              </div>
              <p className="italic" style={{ color: '#64748B' }}>
                "The marketing support and brand recognition helped me achieve full capacity 
                within the first year. Excellent ROI!"
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PartnerPage;
