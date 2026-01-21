'use client';

import { Phone, Mail, MapPin, Clock, Send, Loader2, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    pin: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      // Success
      setSubmitted(true);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        city: '', 
        pin: '', 
        message: '' 
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
    

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
            <MessageSquare className="w-10 h-10 text-[#0F172A]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Let's Connect
          </h1>
          <p className="text-lg text-[#B2C6BD] max-w-2xl mx-auto">
            Have questions? Our team is here to help you on your learning journey. 
            We're just a message away!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#08472C' }}>
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div 
                  className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #FCAB17' }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FCAB17' }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: '#0F172A' }}>Phone</p>
                    <p className="text-[#64748B]">+1 (555) 123-4567</p>
                    <p className="text-[#64748B]">+1 (555) 987-6543</p>
                  </div>
                </div>

                {/* Email */}
                <div 
                  className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #08472C' }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#08472C' }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: '#0F172A' }}>Email</p>
                    <p className="text-[#64748B]">info@eliteacademy.com</p>
                    <p className="text-[#64748B]">support@eliteacademy.com</p>
                  </div>
                </div>

                {/* Address */}
                <div 
                  className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #FCAB17' }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FCAB17' }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: '#0F172A' }}>Address</p>
                    <p className="text-[#64748B]">123 Education Street</p>
                    <p className="text-[#64748B]">Tech City, TC 12345</p>
                  </div>
                </div>

                {/* Hours */}
                <div 
                  className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #08472C' }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#08472C' }}
                  >
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: '#0F172A' }}>Business Hours</p>
                    <p className="text-[#64748B]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[#64748B]">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div 
              className="rounded-xl p-6 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #08472C 0%, #0F172A 100%)',
                border: '2px solid #FCAB17'
              }}
            >
              <h4 className="font-bold text-lg mb-3 text-white">For Quick Assistance</h4>
              <p className="text-[#B2C6BD] mb-6">
                Need immediate help? Contact us directly through:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#FCAB17' }}
                  >
                    <Phone className="w-5 h-5 text-[#0F172A]" />
                  </div>
                  <div>
                    <span className="font-medium text-white">+1 (555) 123-4567</span>
                    <p className="text-sm text-[#B2C6BD]">Primary Support</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#FCAB17' }}
                  >
                    <Mail className="w-5 h-5 text-[#0F172A]" />
                  </div>
                  <div>
                    <span className="font-medium text-white">support@eliteacademy.com</span>
                    <p className="text-sm text-[#B2C6BD]">Email Support</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#B2C6BD]/20">
                <p className="text-sm text-[#B2C6BD]">
                  Average response time: <span className="text-[#FCAB17] font-bold">Under 2 hours</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-2">
            <div 
              className="rounded-xl p-8 shadow-xl"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #B2C6BD'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#08472C' }}
                >
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#08472C' }}>
                  Send us a Message
                </h3>
              </div>

              {submitted ? (
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
                    Message Sent Successfully!
                  </p>
                  <p className="mb-4" style={{ color: '#15803D' }}>
                    Thank you for contacting us. We have sent a confirmation email to your inbox.
                  </p>
                  <p className="text-sm" style={{ color: '#166534' }}>
                    Our team will get back to you within 24 hours. For urgent matters, please call us directly.
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
                        <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                          Email *
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Your city"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                          PIN Code
                        </label>
                        <input
                          type="text"
                          name="pin"
                          value={formData.pin}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                          style={{
                            borderColor: '#B2C6BD',
                            backgroundColor: '#FFFFFF'
                          }}
                          placeholder="Postal/ZIP code"
                        />
                      </div>
                      <div className="flex items-end">
                        <div className="text-sm" style={{ color: '#64748B' }}>
                          Optional fields help us serve you better
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold mb-2" style={{ color: '#0F172A' }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                        style={{
                          borderColor: '#B2C6BD',
                          backgroundColor: '#FFFFFF'
                        }}
                        placeholder="Tell us about your learning goals or any questions you have..."
                      ></textarea>
                      <div className="flex justify-between mt-2">
                        <span className="text-sm" style={{ color: '#64748B' }}>
                          Please provide detailed information for better assistance
                        </span>
                        <span className="text-sm" style={{ color: formData.message.length > 500 ? '#DC2626' : '#64748B' }}>
                          {formData.message.length}/500
                        </span>
                      </div>
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
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: '#08472C' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg" style={{ color: '#64748B' }}>
              Find quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'How long does it take to get a response?',
                answer: 'We typically respond within 24 hours on business days. For urgent inquiries, please call us directly at +1 (555) 123-4567.',
              },
              {
                question: 'Can I visit your office in person?',
                answer: 'Yes! Our office at 123 Education Street is open during business hours. We recommend scheduling an appointment first for better assistance.',
              },
              {
                question: 'Do you offer phone consultations?',
                answer: 'Yes, we offer free 15-minute phone consultations. You can request one through our contact form or by calling our support line.',
              },
              {
                question: 'What information should I include in my message?',
                answer: 'Please include your name, contact details, specific course interests, and any questions or requirements so we can assist you better.',
              },
              {
                question: 'Is my personal information secure?',
                answer: 'Yes, we take data privacy seriously. Your information is encrypted and never shared with third parties. We comply with all data protection regulations.',
              },
              {
                question: 'Do you offer support on weekends?',
                answer: 'Yes! We offer limited support on Saturdays from 10:00 AM to 4:00 PM. Email responses may take slightly longer during weekend hours.',
              },
            ].map((faq, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                style={{
                  backgroundColor: '#FFFFFF',
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

          {/* Additional Help */}
          <div 
            className="mt-12 rounded-xl p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, #08472C 0%, #0F172A 100%)',
              border: '2px solid #FCAB17'
            }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              Still Have Questions?
            </h3>
            <p className="mb-6 text-[#B2C6BD]">
              Can't find what you're looking for? Our support team is ready to help!
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
                Call Now
              </a>
              <a
                href="mailto:support@eliteacademy.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105"
                style={{
                  borderColor: '#FCAB17',
                  color: '#FCAB17'
                }}
              >
                <Mail className="w-5 h-5" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}