'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { CheckCircle, Clock, Award } from 'lucide-react';
import { useState } from 'react';

export default function EnrollPage() {
  const [selectedCourse, setSelectedCourse] = useState('web');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const courses = {
    web: { name: 'Web Development Bootcamp', price: 499, duration: '12 weeks' },
    mobile: { name: 'Mobile App Development', price: 399, duration: '10 weeks' },
    data: { name: 'Data Science & AI', price: 599, duration: '14 weeks' },
    ui: { name: 'UI/UX Design Mastery', price: 349, duration: '8 weeks' },
    cloud: { name: 'Cloud Computing & AWS', price: 449, duration: '10 weeks' },
    security: { name: 'Cybersecurity Basics', price: 379, duration: '9 weeks' },
  };

  const currentCourse = courses[selectedCourse as keyof typeof courses];

  const handleEnroll = (e: any) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Enroll Now</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Start your learning journey today. Choose your course and begin your transformation.
          </p>
        </div>
      </section>

      {/* Enroll Form */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleEnroll} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary mb-8">Your Information</h2>

              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-foreground">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    required
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    required
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="font-bold text-lg text-foreground">Select Course</h3>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary"
                >
                  <option value="web">Web Development Bootcamp - $499</option>
                  <option value="mobile">Mobile App Development - $399</option>
                  <option value="data">Data Science & AI - $599</option>
                  <option value="ui">UI/UX Design Mastery - $349</option>
                  <option value="cloud">Cloud Computing & AWS - $449</option>
                  <option value="security">Cybersecurity Basics - $379</option>
                </select>
              </div>

              {/* Learning Mode */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="font-bold text-lg text-foreground">Learning Mode *</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 p-4 border border-secondary rounded-lg cursor-pointer bg-secondary/5">
                    <input type="radio" name="mode" value="online" defaultChecked />
                    <div>
                      <p className="font-semibold text-foreground">Online</p>
                      <p className="text-sm text-muted">Learn at your own pace</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:border-secondary transition-colors">
                    <input type="radio" name="mode" value="offline" />
                    <div>
                      <p className="font-semibold text-foreground">In-Person</p>
                      <p className="text-sm text-muted">Live classes available</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Experience Level */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="font-bold text-lg text-foreground">Experience Level *</h3>
                <select
                  defaultValue="beginner"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary"
                >
                  <option value="beginner">Beginner - No prior experience</option>
                  <option value="intermediate">Intermediate - Some experience</option>
                  <option value="advanced">Advanced - Looking to upskill</option>
                </select>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-4 border-t border-border">
                <input type="checkbox" required className="mt-1" />
                <label className="text-muted text-sm">
                  I agree to the terms and conditions and privacy policy *
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-secondary/90 transition-all text-lg mt-6"
              >
                Complete Enrollment
              </button>

              {formSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-green-700 font-semibold">Enrollment successful!</p>
                  <p className="text-green-600 text-sm">Check your email for further instructions.</p>
                </div>
              )}
            </form>
          </div>

          {/* Right - Summary */}
          <div className="bg-background rounded-xl p-8 border border-border h-fit sticky top-24">
            <h3 className="text-xl font-bold text-primary mb-6">Enrollment Summary</h3>

            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              <div>
                <p className="text-muted text-sm mb-1">Course</p>
                <p className="font-bold text-foreground">{currentCourse.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted text-sm mb-1 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Duration
                  </p>
                  <p className="font-semibold text-foreground">{currentCourse.duration}</p>
                </div>
                <div>
                  <p className="text-muted text-sm mb-1 flex items-center gap-1">
                    <Award className="w-4 h-4" /> Certificate
                  </p>
                  <p className="font-semibold text-foreground">Included</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-6 pb-6 border-b border-border">
              <h4 className="font-bold text-foreground">What's Included</h4>
              {[
                'Lifetime access to course materials',
                'Live instructor sessions',
                'Hands-on projects',
                'Industry certification',
                'Placement assistance',
                'Community support',
                '24/7 doubt support',
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-muted text-sm mb-2">Total Amount</p>
              <p className="text-4xl font-bold text-secondary">${currentCourse.price}</p>
              <p className="text-muted text-sm mt-2">One-time payment • 30-day money-back guarantee</p>
            </div>

            {/* Payment Info */}
            <div className="bg-accent/10 rounded-lg p-4 text-sm text-foreground">
              <p className="font-semibold mb-2">Flexible Payment Options</p>
              <p className="text-muted">
                We accept credit cards, bank transfers, and offer installment plans for eligible students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12">Enrollment FAQs</h2>
          <div className="space-y-4">
            {[
              {
                q: 'When does the course start?',
                a: 'New batches start every Monday. You can join the next available batch after enrollment.',
              },
              {
                q: 'Can I get a refund?',
                a: 'Yes! We offer a 30-day money-back guarantee if you\'re not satisfied with the course.',
              },
              {
                q: 'Is there a payment plan available?',
                a: 'Yes, we offer flexible payment plans. Contact our team for more details.',
              },
              {
                q: 'What if I have prior experience?',
                a: 'You can choose your experience level during enrollment. We have courses for all levels.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border">
                <p className="font-bold text-primary mb-3">{item.q}</p>
                <p className="text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
