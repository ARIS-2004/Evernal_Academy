'use client';

import Image from 'next/image';
import { CheckCircle, Clock, Award, Users, Send, Loader2, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const courses = {
  playgroup: { name: 'Playgroup', duration: '3 hrs/day', age: '2 – 3 Years' },
  nursery: { name: 'Nursery', duration: '3 hrs/day', age: '3 – 4 Years' },
  kindergarten: { name: 'Kindergarten', duration: '4–5 hrs/day', age: '4 – 5 Years' },
  training: { name: 'Teacher Training', duration: 'Varies', age: 'Professional' },
  daycare: { name: 'Daycare', duration: 'Flexible', age: '6m – 5 Years' },
};

const inputCls = "w-full px-4 py-2.5 text-[12px] bg-white border border-[#e2e8e4] rounded-xl text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#08472C]/40 transition-colors";
const labelCls = "block text-[10px] uppercase tracking-[0.15em] font-semibold text-[#08472C]/60 mb-1.5";

export default function EnrollPage() {
  const [selectedCourse, setSelectedCourse] = useState('playgroup');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    childName: '', childAge: '', address: '', city: '', pin: '',
    message: '', learningMode: 'full-day', terms: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const currentCourse = courses[selectedCourse as keyof typeof courses];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (error) setError('');
  };

  const handleEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) { setError('Please agree to the terms and conditions'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, selectedCourse: currentCourse.name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to submit');
      setFormSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', childName: '', childAge: '', address: '', city: '', pin: '', message: '', learningMode: 'full-day', terms: false });
      setTimeout(() => setFormSubmitted(false), 6000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_6.jpeg" alt="Enroll" fill className="object-cover" style={{ objectPosition: 'center 45%' }} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/55 to-[#08472C]/80" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#FCAB17] font-semibold">Admissions Open</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Enroll Your <span className="text-[#FCAB17]">Child</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── DARK GREEN STRIP ── */}
      <section className="bg-[#08472C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Users, label: 'Teacher Ratio', value: '1:8 Students' },
              { icon: Clock, label: 'Response Time', value: 'Within 24 hrs' },
              { icon: Award, label: 'Certified', value: 'NEP Aligned' },
              { icon: CheckCircle, label: 'Safe Campus', value: 'CCTV Monitored' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FCAB17]/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#FCAB17]" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/45 font-semibold">{label}</p>
                  <p className="text-[12px] font-bold text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-14 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">

            {/* ── FORM ── */}
            <div className="rounded-2xl bg-white border border-[#f0f0f0] overflow-hidden">
              {/* form header */}
              <div className="bg-[#08472C] px-7 py-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FCAB17]/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-[#FCAB17]" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#FCAB17]/60 font-semibold">Step 1 of 1</p>
                  <p className="text-[14px] font-bold text-white">Student Enrollment Form</p>
                </div>
              </div>

              <div className="p-7">
                {formSubmitted ? (
                  <div className="rounded-2xl bg-[#f0fdf4] border border-green-200 p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-[14px] font-bold text-green-800 mb-1">Enrollment Submitted!</p>
                    <p className="text-[11px] text-green-700">Our admission team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    {error && (
                      <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 mb-6 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">!</span>
                        <p className="text-[11px] text-red-600 font-medium">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleEnroll} className="space-y-8">

                      {/* Parent Details */}
                      <div>
                        <div className="flex items-center gap-2 mb-5">
                          <span className="h-px w-6 bg-[#FCAB17]" />
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#08472C]/50 font-semibold">Parent / Guardian Details</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label className={labelCls}>First Name *</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputCls} placeholder="First name" /></div>
                          <div><label className={labelCls}>Last Name *</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputCls} placeholder="Last name" /></div>
                          <div><label className={labelCls}>Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputCls} placeholder="your@email.com" /></div>
                          <div><label className={labelCls}>Phone Number *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputCls} placeholder="+91 XXXXX XXXXX" /></div>
                        </div>
                      </div>

                      {/* Child Details */}
                      <div className="pt-6 border-t border-[#f0f0f0]">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="h-px w-6 bg-[#FCAB17]" />
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#08472C]/50 font-semibold">Child Details</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label className={labelCls}>Child's Name *</label><input type="text" name="childName" value={formData.childName} onChange={handleChange} required className={inputCls} placeholder="Child's full name" /></div>
                          <div><label className={labelCls}>Child's Age *</label><input type="text" name="childAge" value={formData.childAge} onChange={handleChange} required className={inputCls} placeholder="e.g. 3 years" /></div>
                        </div>
                        <div className="mt-4">
                          <label className={labelCls}>Select Programme *</label>
                          <select name="selectedCourse" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} className={inputCls}>
                            <option value="playgroup">Playgroup — 2 to 3 Years</option>
                            <option value="nursery">Nursery — 3 to 4 Years</option>
                            <option value="kindergarten">Kindergarten — 4 to 5 Years</option>
                            <option value="training">Teacher Training Programme</option>
                            <option value="daycare">Daycare — 6 Months to 5 Years</option>
                          </select>
                        </div>
                        <div className="mt-4">
                          <label className={labelCls}>Programme Timing *</label>
                          <div className="grid sm:grid-cols-2 gap-3 mt-1">
                            {[{ val: 'full-day', label: 'Full Day', sub: '8:00 AM – 3:00 PM' }, { val: 'half-day', label: 'Half Day', sub: '8:00 AM – 12:00 PM' }].map(opt => (
                              <label key={opt.val} className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${formData.learningMode === opt.val ? 'border-[#08472C]/40 bg-[#08472C]/4' : 'border-[#e2e8e4] bg-white'}`}>
                                <input type="radio" name="learningMode" value={opt.val} checked={formData.learningMode === opt.val} onChange={handleChange} className="hidden" />
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.learningMode === opt.val ? 'border-[#08472C]' : 'border-[#c5cac7]'}`}>
                                  {formData.learningMode === opt.val && <div className="w-2 h-2 rounded-full bg-[#08472C]" />}
                                </div>
                                <div>
                                  <p className="text-[12px] font-bold text-[#08472C]">{opt.label}</p>
                                  <p className="text-[10px] text-[#0F172A]/40">{opt.sub}</p>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="pt-6 border-t border-[#f0f0f0]">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="h-px w-6 bg-[#FCAB17]" />
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#08472C]/50 font-semibold">Address Details</p>
                        </div>
                        <div className="space-y-4">
                          <div><label className={labelCls}>Full Address *</label><textarea name="address" value={formData.address} onChange={handleChange} required rows={2} className={`${inputCls} resize-none`} placeholder="Street address" /></div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div><label className={labelCls}>City *</label><input type="text" name="city" value={formData.city} onChange={handleChange} required className={inputCls} placeholder="City" /></div>
                            <div><label className={labelCls}>PIN Code *</label><input type="text" name="pin" value={formData.pin} onChange={handleChange} required className={inputCls} placeholder="Postal code" /></div>
                          </div>
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="pt-6 border-t border-[#f0f0f0]">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="h-px w-6 bg-[#FCAB17]" />
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#08472C]/50 font-semibold">Additional Information</p>
                        </div>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className={`${inputCls} resize-none`} placeholder="Any special requirements, allergies, or additional notes…" />
                      </div>

                      {/* Terms */}
                      <div className="pt-6 border-t border-[#f0f0f0] flex items-start gap-3">
                        <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required className="mt-0.5 w-4 h-4 rounded accent-[#08472C] flex-shrink-0" />
                        <p className="text-[11px] text-[#0F172A]/50 leading-relaxed">
                          I agree to the terms and conditions and privacy policy. I understand that admission is subject to availability and final approval by the admission committee. *
                        </p>
                      </div>

                      {/* Submit */}
                      <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 bg-[#08472C] text-white text-[12px] font-bold px-6 py-3.5 rounded-xl hover:bg-[#063d26] disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
                        {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Processing…</> : <><Send className="w-4 h-4" /> Complete Enrollment</>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-5">

              {/* Enrollment Summary */}
              <div className="rounded-2xl bg-white border border-[#f0f0f0] overflow-hidden">
                <div className="bg-[#08472C] px-5 py-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#FCAB17]/60 font-semibold mb-0.5">Selected</p>
                  <p className="text-[14px] font-bold text-white">{currentCourse.name}</p>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 mb-5 text-[11px] text-[#0F172A]/50">
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{currentCourse.duration}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3 h-3" />{currentCourse.age}</span>
                  </div>
                  <div className="space-y-2 mb-5 pb-5 border-b border-[#f0f0f0]">
                    <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#08472C]/50 mb-3">What's Included</p>
                    {['Qualified & Trained Teachers', 'Safe & Secure Environment', 'Daily Progress Reports', 'Educational Materials', 'Outdoor Play Activities', 'Parent-Teacher Meetings'].map(b => (
                      <div key={b} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-[#FCAB17] flex-shrink-0" />
                        <span className="text-[11px] text-[#0F172A]/55">{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl bg-[#f7f8f6] border border-[#08472C]/08 p-4">
                    <p className="text-[10px] font-bold text-[#08472C] mb-1">Flexible Payment Options</p>
                    <p className="text-[10px] text-[#0F172A]/50 leading-relaxed">Cash, cards, bank transfers & monthly installment plans available.</p>
                  </div>
                </div>
              </div>

              {/* Contact box */}
              <div className="rounded-2xl bg-[#08472C] p-5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#FCAB17]/60 font-semibold mb-1">Need Help?</p>
                  <p className="text-[13px] font-bold text-white mb-4">Talk to Our Admission Team</p>
                  <a href="tel:+917003999531" className="flex items-center gap-2 text-[11px] font-bold text-white mb-2 hover:text-[#FCAB17] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#FCAB17]" /> +91 7003999531
                  </a>
                  <a href="mailto:evernalacademy@gmail.com" className="flex items-center gap-2 text-[11px] font-bold text-white hover:text-[#FCAB17] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#FCAB17]" /> evernalacademy@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Enrollment FAQs</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { q: 'What is the admission process?', a: 'Submit form → Receive confirmation → Schedule orientation → Complete documentation → Start classes.' },
              { q: 'Are there any discounts available?', a: 'Yes! We offer sibling discounts (15% for second child) and early payment discounts.' },
              { q: 'What documents are required?', a: 'Birth certificate, immunization records, 2 passport photos, and previous school records if applicable.' },
              { q: 'Can I visit before enrolling?', a: 'Absolutely! We encourage parents to schedule a campus tour before making a decision.' },
              { q: 'What is the teacher-to-student ratio?', a: 'We maintain a 1:8 ratio for Playgroup/Nursery and 1:10 for Kindergarten.' },
              { q: 'Is transportation available?', a: 'Yes, we provide safe transportation with GPS tracking. Additional charges apply.' },
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl border border-[#f0f0f0] bg-white p-5 hover:border-[#08472C]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#08472C] flex items-center justify-center text-[#FCAB17] text-[10px] font-bold flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-[12px] font-bold text-[#08472C] mb-1.5">{faq.q}</p>
                    <p className="text-[11px] text-[#0F172A]/55 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-[#08472C] py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="h-px bg-[#FCAB17]/40 absolute top-0 left-0 right-0" />
        <div className="h-px bg-[#FCAB17]/40 absolute bottom-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#FCAB17]/60 font-semibold mb-1">Explore More</p>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Browse All Programmes</h2>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/programmes" className="inline-flex items-center gap-2 bg-[#FCAB17] text-[#08472C] text-[11px] font-bold px-5 py-2.5 rounded-xl hover:bg-[#ffc13d] transition-colors">
              View Programmes <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white text-[11px] font-bold px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
