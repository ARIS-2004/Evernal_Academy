'use client';

import { CheckCircle, Clock, Award, BookOpen, Users, Shield, Send, Loader2, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function EnrollPage() {
  const [selectedCourse, setSelectedCourse] = useState('playgroup');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    address: '',
    city: '',
    pin: '',
    message: '',
    learningMode: 'full-day',
    experience: 'beginner',
    terms: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const courses = {
    playgroup: { name: 'Playgroup', price: 299, duration: '3 hours/day', age: '1.5-2.5 years' },
    nursery: { name: 'Nursery', price: 349, duration: '4 hours/day', age: '2.5-3.5 years' },
    kindergarten: { name: 'Kindergarten', price: 399, duration: '5 hours/day', age: '3.5-5.5 years' },
    training: { name: 'Teacher Training Programme', price: 599, duration: '6 months', age: '18+ years' },
    daycare: { name: 'Daycare', price: 449, duration: '8 hours/day', age: '1-8 years' },
  };

  const currentCourse = courses[selectedCourse as keyof typeof courses];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms) {
      setError('Please agree to terms and conditions');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedCourse: currentCourse.name,
          coursePrice: currentCourse.price,
          courseDuration: currentCourse.duration,
          courseAge: currentCourse.age,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit enrollment');
      }

      // Success
      setFormSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        address: '',
        city: '',
        pin: '',
        message: '',
        learningMode: 'full-day',
        experience: 'beginner',
        terms: false,
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>


      {/* Hero Section */}
      <section 
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #08472C 0%, #0F172A 100%)',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FCAB17]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FCAB17]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FCAB17] mb-8">
            <BookOpen className="w-10 h-10" style={{ color: '#0F172A' }} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Enroll Your Child
          </h1>
          <p className="text-lg text-[#B2C6BD] max-w-2xl mx-auto">
            Begin your child's educational journey with us. Secure their future with quality education and care.
          </p>
        </div>
      </section>

      {/* Enroll Form */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Form */}
          <div className="lg:col-span-2">
            <div 
              className="rounded-xl p-8 shadow-xl"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #B2C6BD'
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#08472C' }}
                >
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: '#08472C' }}>
                  Student Information
                </h2>
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
                    Enrollment Submitted Successfully!
                  </p>
                  <p className="mb-4" style={{ color: '#15803D' }}>
                    Thank you for enrolling. We have sent a confirmation email to your inbox.
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

                  <form onSubmit={handleEnroll} className="space-y-8">
                    {/* Parent/Guardian Details */}
                    <div className="space-y-6">
                      <h3 className="font-bold text-lg" style={{ color: '#0F172A' }}>
                        Parent/Guardian Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="First name"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="Last name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Child Details */}
                    <div className="space-y-6 pt-8 border-t" style={{ borderColor: '#B2C6BD' }}>
                      <h3 className="font-bold text-lg" style={{ color: '#0F172A' }}>
                        Child Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                            Child's Name *
                          </label>
                          <input
                            type="text"
                            name="childName"
                            value={formData.childName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="Child's full name"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                            Child's Age *
                          </label>
                          <input
                            type="text"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="Age in years"
                          />
                        </div>
                      </div>

                      {/* Course Selection */}
                      <div>
                        <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                          Select Program *
                        </label>
                        <select
                          name="selectedCourse"
                          value={selectedCourse}
                          onChange={(e) => setSelectedCourse(e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                        >
                          <option value="playgroup">Playgroup - $299 (1.5-2.5 years)</option>
                          <option value="nursery">Nursery - $349 (2.5-3.5 years)</option>
                          <option value="kindergarten">Kindergarten - $399 (3.5-5.5 years)</option>
                          <option value="training">Teacher Training Programme - $599 (6 months)</option>
                          <option value="daycare">Daycare - $449 (1-8 years)</option>
                        </select>
                      </div>

                      {/* Learning Mode */}
                      <div>
                        <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                          Program Timing *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all"
                            style={{
                              borderColor: formData.learningMode === 'full-day' ? '#FCAB17' : '#B2C6BD',
                              backgroundColor: formData.learningMode === 'full-day' ? '#FFF7ED' : '#FFFFFF'
                            }}
                          >
                            <input
                              type="radio"
                              name="learningMode"
                              value="full-day"
                              checked={formData.learningMode === 'full-day'}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <div className="w-6 h-6 rounded-full border flex items-center justify-center"
                              style={{ borderColor: '#FCAB17' }}
                            >
                              {formData.learningMode === 'full-day' && (
                                <div className="w-3 h-3 rounded-full bg-[#FCAB17]"></div>
                              )}
                            </div>
                            <div>
                              <p className="font-semibold" style={{ color: '#0F172A' }}>Full Day</p>
                              <p className="text-sm" style={{ color: '#64748B' }}>8:00 AM - 3:00 PM</p>
                            </div>
                          </label>
                          
                          <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all"
                            style={{
                              borderColor: formData.learningMode === 'half-day' ? '#FCAB17' : '#B2C6BD',
                              backgroundColor: formData.learningMode === 'half-day' ? '#FFF7ED' : '#FFFFFF'
                            }}
                          >
                            <input
                              type="radio"
                              name="learningMode"
                              value="half-day"
                              checked={formData.learningMode === 'half-day'}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <div className="w-6 h-6 rounded-full border flex items-center justify-center"
                              style={{ borderColor: '#FCAB17' }}
                            >
                              {formData.learningMode === 'half-day' && (
                                <div className="w-3 h-3 rounded-full bg-[#FCAB17]"></div>
                              )}
                            </div>
                            <div>
                              <p className="font-semibold" style={{ color: '#0F172A' }}>Half Day</p>
                              <p className="text-sm" style={{ color: '#64748B' }}>8:00 AM - 12:00 PM</p>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Address Details */}
                    <div className="space-y-6 pt-8 border-t" style={{ borderColor: '#B2C6BD' }}>
                      <h3 className="font-bold text-lg" style={{ color: '#0F172A' }}>
                        Address Details
                      </h3>
                      <div>
                        <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                          Full Address *
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Street address"
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                            City *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                            PIN Code *
                          </label>
                          <input
                            type="text"
                            name="pin"
                            value={formData.pin}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                              borderColor: '#B2C6BD',
                              backgroundColor: '#FFFFFF'
                            }}
                            placeholder="Postal/ZIP code"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4 pt-8 border-t" style={{ borderColor: '#B2C6BD' }}>
                      <h3 className="font-bold text-lg" style={{ color: '#0F172A' }}>
                        Additional Information
                      </h3>
                      <div>
                        <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                          Special Requirements or Notes
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Any special requirements, allergies, or additional information..."
                        ></textarea>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start gap-3 pt-8 border-t" style={{ borderColor: '#B2C6BD' }}>
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        required
                        className="mt-1 w-5 h-5 rounded"
                        style={{ accentColor: '#08472C' }}
                      />
                      <label className="text-sm" style={{ color: '#64748B' }}>
                        I agree to the terms and conditions and privacy policy. I understand that my child's 
                        admission is subject to availability and final approval by the admission committee. *
                      </label>
                    </div>

                    {/* Submit Button */}
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
                          Processing Enrollment...
                        </>
                      ) : (
                        <>
                          Complete Enrollment
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right - Summary */}
          <div className="space-y-8">
            {/* Enrollment Summary */}
            <div 
              className="rounded-xl p-8 shadow-xl h-fit sticky top-24"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #B2C6BD'
              }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: '#08472C' }}>
                Enrollment Summary
              </h3>

              <div className="space-y-4 mb-6 pb-6 border-b" style={{ borderColor: '#B2C6BD' }}>
                <div>
                  <p className="text-sm mb-1" style={{ color: '#64748B' }}>Selected Program</p>
                  <p className="font-bold text-lg" style={{ color: '#0F172A' }}>
                    {currentCourse.name}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-1 flex items-center gap-1" style={{ color: '#64748B' }}>
                      <Clock className="w-4 h-4" /> Duration
                    </p>
                    <p className="font-semibold" style={{ color: '#0F172A' }}>
                      {currentCourse.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm mb-1 flex items-center gap-1" style={{ color: '#64748B' }}>
                      <Award className="w-4 h-4" /> Age Group
                    </p>
                    <p className="font-semibold" style={{ color: '#0F172A' }}>
                      {currentCourse.age}
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-3 mb-6 pb-6 border-b" style={{ borderColor: '#B2C6BD' }}>
                <h4 className="font-bold" style={{ color: '#0F172A' }}>What's Included</h4>
                {[
                  'Qualified & Trained Teachers',
                  'Safe & Secure Environment',
                  'Daily Progress Reports',
                  'Nutritious Meals Provided',
                  'Educational Materials',
                  'Outdoor Play Activities',
                  'Regular Parent-Teacher Meetings',
                  'Health & Safety Measures',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#FCAB17' }} />
                    <span style={{ color: '#64748B' }}>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-sm mb-2" style={{ color: '#64748B' }}>Total Fees (Monthly)</p>
                <p className="text-4xl font-bold mb-2" style={{ color: '#FCAB17' }}>
                  ${currentCourse.price}
                </p>
                <p className="text-sm" style={{ color: '#64748B' }}>
                  One-time admission fee may apply • Sibling discount available
                </p>
              </div>

              {/* Payment Info */}
              <div 
                className="rounded-lg p-4 text-sm"
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #08472C'
                }}
              >
                <p className="font-semibold mb-2" style={{ color: '#08472C' }}>
                  Flexible Payment Options
                </p>
                <p style={{ color: '#64748B' }}>
                  We accept cash, credit cards, bank transfers, and offer monthly installment plans.
                </p>
              </div>
            </div>

            {/* Franchise Inquiry Box */}
            <div 
              className="rounded-xl p-8 shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #08472C 0%, #0F172A 100%)',
                border: '2px solid #FCAB17'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FCAB17] flex items-center justify-center">
                  <Shield className="w-6 h-6" style={{ color: '#0F172A' }} />
                </div>
                <h3 className="text-xl font-bold text-white">Franchise Opportunity</h3>
              </div>
              
              <p className="mb-6 text-[#B2C6BD]">
                Interested in starting your own branch? Join our successful franchise network and bring quality education to your community.
              </p>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 w-full"
                style={{
                  backgroundColor: '#FCAB17',
                  color: '#0F172A'
                }}
              >
                <Send className="w-5 h-5" />
                Inquire About Franchise
              </a>
              
              <div className="mt-6 pt-6 border-t border-[#B2C6BD]/20">
                <p className="text-sm text-[#B2C6BD]">
                  📞 Call for franchise details: <span className="text-white font-semibold">+1 (555) 789-0123</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: '#08472C' }}
            >
              Enrollment FAQs
            </h2>
            <p className="text-lg" style={{ color: '#64748B' }}>
              Common questions about our enrollment process
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'What is the admission process?',
                answer: 'Submit enrollment form → Receive confirmation email → Schedule orientation visit → Complete documentation → Start classes.',
              },
              {
                question: 'Are there any discounts available?',
                answer: 'Yes! We offer sibling discounts (15% for second child) and early payment discounts. Contact us for more details.',
              },
              {
                question: 'What documents are required?',
                answer: 'Birth certificate, immunization records, 2 passport photos, and previous school records (if applicable).',
              },
              {
                question: 'Can I visit the facility before enrolling?',
                answer: 'Absolutely! We encourage parents to schedule a campus tour before making a decision.',
              },
              {
                question: 'What is the teacher-to-student ratio?',
                answer: 'We maintain a 1:8 ratio for Playgroup/Nursery and 1:10 for Kindergarten to ensure personalized attention.',
              },
              {
                question: 'Is transportation available?',
                answer: 'Yes, we provide safe and reliable transportation services with GPS tracking. Additional charges apply.',
              },
            ].map((faq, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '2px solid transparent',
                  borderLeftColor: '#FCAB17'
                }}
              >
                <h3 className="font-bold text-lg mb-3 group-hover:text-[#08472C] transition-colors">
                  {faq.question}
                </h3>
                <p className="leading-relaxed" style={{ color: '#64748B' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div 
            className="mt-12 rounded-xl p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, #08472C 0%, #0F172A 100%)',
              border: '2px solid #FCAB17'
            }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              Need Help with Enrollment?
            </h3>
            <p className="mb-6 text-[#B2C6BD]">
              Our admission team is available to assist you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: '#FCAB17',
                  color: '#0F172A'
                }}
              >
                <Phone className="w-5 h-5" />
                Call Admission: +1 (555) 123-4567
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105"
                style={{
                  borderColor: '#FCAB17',
                  color: '#FCAB17'
                }}
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}