'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Have questions? Our team is here to help you on your learning journey.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-muted">+1 (555) 123-4567</p>
                    <p className="text-muted">+1 (555) 987-6543</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted">info@eliteacademy.com</p>
                    <p className="text-muted">support@eliteacademy.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted">123 Education Street</p>
                    <p className="text-muted">Tech City, TC 12345</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Business Hours</p>
                    <p className="text-muted">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <p className="text-green-700 font-semibold mb-2">Message Sent Successfully!</p>
                  <p className="text-green-600">
                    Thank you for contacting us. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-semibold mb-2">Interested Course</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                      >
                        <option value="">Select a course</option>
                        <option value="web">Web Development Bootcamp</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="data">Data Science & AI</option>
                        <option value="ui">UI/UX Design Mastery</option>
                        <option value="cloud">Cloud Computing & AWS</option>
                        <option value="security">Cybersecurity Basics</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors resize-none"
                      placeholder="Tell us about your learning goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 w-full justify-center"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'Do you offer any scholarships or discounts?',
                answer:
                  'Yes! We offer scholarships for deserving students and regular discounts. Contact us to learn about available options.',
              },
              {
                question: 'Can I switch courses after enrollment?',
                answer:
                  'Absolutely. You have 7 days from enrollment to switch to another course without any additional charges.',
              },
              {
                question: 'Is there a money-back guarantee?',
                answer:
                  'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with the course. No questions asked.',
              },
              {
                question: 'How long do I have access to the course materials?',
                answer:
                  'You get lifetime access to all course materials. You can learn at your own pace and revisit the content anytime.',
              },
              {
                question: 'What if I need additional help?',
                answer:
                  'We provide 24/7 support through email and chat. Our instructors are also available for doubt sessions.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-all">
                <h3 className="font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
