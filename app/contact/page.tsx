'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { q: 'How long does it take to get a response?', a: 'We typically respond within 24 hours on business days. For urgent inquiries, please call us directly.' },
  { q: 'Can I visit your campus in person?', a: 'Yes! Our campus is open during business hours. We recommend scheduling a visit first for a guided tour.' },
  { q: 'Do you offer phone consultations?', a: 'Yes, we offer free 15-minute phone consultations. Request one through the form or call our support line.' },
  { q: 'What should I include in my message?', a: 'Please include your name, contact details, child\'s age, and any specific programme questions for better assistance.' },
  { q: 'Do you offer support on weekends?', a: 'Yes — limited support on Saturdays from 10 AM to 4 PM. Email responses may take slightly longer.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', pin: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send message');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', city: '', pin: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full px-4 py-2.5 text-sm bg-[#e8eeeb] border border-[#c5cac7] rounded-xl text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#08472C]/50 focus:bg-white transition-all shadow-[inset_2px_2px_5px_#c5cac7,inset_-2px_-2px_5px_#ffffff]";
  const labelCls = "block text-[10px] uppercase tracking-[0.18em] font-semibold text-[#08472C]/60 mb-1.5";

  return (
    <main className="min-h-screen bg-white">

      {/* ══════════════════════════════════════
          HERO — full-bleed image with overlay
      ══════════════════════════════════════ */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image
          src="/gallery/hero_img_5.webp"
          alt="Contact Evernal Academy"
          fill
          className="object-cover object-[center_30%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/50 to-[#08472C]/75" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#FCAB17] font-semibold">Get In Touch</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Contact <span className="text-[#FCAB17]">Us</span>
          </h1>
          <p className="text-white/80 text-sm mt-2 max-w-xl leading-relaxed font-medium">
            Questions about admissions, programmes, or a visit? We're here to help.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FCAB17]/50 to-transparent" />
      </section>

      {/* ══════════════════════════════════════
          QUICK INFO STRIP
      ══════════════════════════════════════ */}
      <section className="bg-[#08472C] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Phone, label: 'Call Us', value: '+91 7003999531', href: 'tel:+917003999531' },
              { icon: Mail, label: 'Email Us', value: 'evernalacademy@gmail.com', href: 'mailto:evernalacademy@gmail.com' },
              { icon: MapPin, label: 'Visit Us', value: 'Rajarhat, Kolkata – 136', href: '#' },
              { icon: Clock, label: 'Hours', value: 'Mon–Sat · 8 AM – 6 PM', href: '#' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="group flex items-center gap-3 py-1">
                <div className="w-8 h-8 rounded-lg bg-[#FCAB17]/12 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FCAB17]/20 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-[#FCAB17]" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 font-semibold leading-none mb-0.5">{label}</p>
                  <p className="text-[12px] text-white/80 font-semibold leading-none group-hover:text-white transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FORM + SIDEBAR
      ══════════════════════════════════════ */}
      <section className="py-12 bg-[#e8eeeb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.9fr] gap-6">

            {/* ── sidebar ── */}
            <div className="space-y-3">
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="h-px w-8 bg-[#FCAB17]" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Contact Info</span>
                </div>
                <h2 className="text-lg font-bold text-[#08472C]">Let's Start a <span className="text-[#FCAB17]">Conversation</span></h2>
              </div>

              {[
                { icon: Phone, title: 'Phone', lines: ['+91 7003999531'], href: 'tel:+917003999531' },
                { icon: Mail, title: 'Email', lines: ['evernalacademy@gmail.com'], href: 'mailto:evernalacademy@gmail.com' },
                { icon: MapPin, title: 'Address', lines: ['Shikharbagan, No. 1154, SRCMRD,', 'Rajarhat, Kolkata – 136'], href: '#' },
                { icon: Clock, title: 'Business Hours', lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 4:00 PM'], href: '#' },
              ].map(({ icon: Icon, title, lines, href }) => (
                <a
                  key={title}
                  href={href}
                  className="group flex items-center gap-3 bg-[#e8eeeb] rounded-xl p-3.5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: '4px 4px 10px #c5cac7, -4px -4px 10px #ffffff' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#e8eeeb] transition-all duration-300 group-hover:bg-[#08472C]"
                    style={{ boxShadow: 'inset 2px 2px 5px #c5cac7, inset -2px -2px 5px #ffffff' }}
                  >
                    <Icon className="w-4 h-4 text-[#08472C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-[#08472C]/45 leading-none mb-0.5">{title}</p>
                    {lines.map((l, i) => (
                      <p key={i} className="text-[11px] text-[#0F172A]/65 leading-snug">{l}</p>
                    ))}
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#FCAB17] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              ))}

              <div
                className="rounded-xl overflow-hidden h-40"
                style={{ boxShadow: '4px 4px 10px #c5cac7, -4px -4px 10px #ffffff' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6!2d88.4700707!3d22.6430864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f003073bdd3%3A0x45238c6bc0031cb4!2sShikhar%20bagan!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* ── form ── */}
            <div className="bg-[#e8eeeb] rounded-2xl p-6" style={{ boxShadow: '6px 6px 14px #c5cac7, -6px -6px 14px #ffffff' }}>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="h-px w-8 bg-[#FCAB17]" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Message Us</span>
                </div>
                <h2 className="text-lg font-bold text-[#08472C]">Send Us a <span className="text-[#FCAB17]">Message</span></h2>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#08472C]/8 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#08472C]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#08472C] mb-2">Message Sent!</h3>
                  <p className="text-sm text-[#0F172A]/50 max-w-xs leading-relaxed">
                    Thank you for reaching out. We've sent a confirmation to your inbox and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className={inputCls} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Your city" className={inputCls} />
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>PIN Code</label>
                      <input type="text" name="pin" value={formData.pin} onChange={handleChange} placeholder="Postal / ZIP code" className={`${inputCls} sm:w-1/2`} />
                    </div>

                    <div>
                      <label className={labelCls}>Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your child's age, programme interest, or any questions…"
                        className={`${inputCls} resize-none`}
                      />
                      <p className="text-[10px] text-[#0F172A]/30 mt-1 text-right">{formData.message.length}/500</p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#08472C] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#063d26] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                      style={{ boxShadow: '4px 4px 10px #c5cac7, -2px -2px 8px #ffffff' }}
                    >
                      {loading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">FAQ</span>
            </div>
            <h2 className="text-xl font-bold text-[#08472C]">Frequently Asked <span className="text-[#FCAB17]">Questions</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border border-[#f0f0f0] hover:border-[#08472C]/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden p-5"
              >
                {/* gold left accent bar */}
                <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full bg-gradient-to-b from-[#FCAB17] to-[#FCAB17]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* number badge */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-xl bg-[#08472C] flex items-center justify-center mt-0.5">
                    <span className="text-[10px] font-black text-[#FCAB17]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#08472C] leading-snug mb-2">{q}</p>
                    <div className="h-px w-8 bg-[#FCAB17]/40 mb-2" />
                    <p className="text-[11px] text-[#0F172A]/50 leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* still have questions */}
          <div className="mt-8 rounded-2xl bg-[#08472C] relative overflow-hidden p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />
            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#FCAB17]/70 font-semibold mb-1">Still Unsure?</p>
              <h3 className="text-lg font-bold text-white">Can't find what you're looking for?</h3>
              <p className="text-sm text-white/50 mt-1">Our team is ready to help with any question.</p>
            </div>
            <div className="relative z-10 flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:+917003999531"
                className="inline-flex items-center gap-2 bg-[#FCAB17] text-[#08472C] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#ffc13d] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="mailto:evernalacademy@gmail.com"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:border-[#FCAB17]/50 hover:bg-white/5 transition-all"
              >
                <Mail className="w-3.5 h-3.5" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
