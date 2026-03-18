"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  Award,
  Shield,
  Brain,
  GraduationCap,
  CheckCircle,
  ChevronRight,
  Sparkles,
  BookOpen,
  Home,
  Heart,
  Loader2,
  Send,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    pinCode: "",
    city: "",
    childName: "",
    childAge: "",
    program: "playgroup",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const programs = {
    playgroup: { name: "Playgroup", age: "1.5–2.5 yrs" },
    nursery: { name: "Nursery", age: "2.5–3.5 yrs" },
    kindergarten: { name: "Kindergarten", age: "3.5–5.5 yrs" },
    training: { name: "Teacher Training Programme", age: "18+ yrs" },
    daycare: { name: "Daycare", age: "1–8 yrs" },
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const sel = programs[formData.program as keyof typeof programs];
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          programName: sel.name,
          programAge: sel.age,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit inquiry");
      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        pinCode: "",
        city: "",
        childName: "",
        childAge: "",
        program: "playgroup",
        message: "",
      });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      number: "01",
      title: "Fill Inquiry Form",
      desc: "Complete our online form with your child's details and contact information.",
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Visit Campus",
      desc: "Schedule a guided tour to experience our learning environment firsthand.",
      icon: Home,
    },
    {
      number: "03",
      title: "Meet Our Educators",
      desc: "Interact with our experienced teachers and discuss your child's needs.",
      icon: Users,
    },
    {
      number: "04",
      title: "Join the Evernal Family",
      desc: "Complete admission formalities and welcome your child to our community.",
      icon: Heart,
    },
  ];

  const advantages = [
    {
      title: "Holistic Learning",
      desc: "Balanced blend of academics, play, and life skills for all-round development.",
      icon: Brain,
    },
    {
      title: "Expert Educators",
      desc: "Skilled teachers dedicated to nurturing every child's unique potential.",
      icon: GraduationCap,
    },
    {
      title: "Safe & Secure",
      desc: "A protected, child-friendly environment ensuring safety and peace of mind.",
      icon: Shield,
    },
    {
      title: "Innovative Methods",
      desc: "Engaging, modern teaching approaches that make learning fun and impactful.",
      icon: Sparkles,
    },
  ];

  const faqs = [
    {
      q: "What sets EvernalAcademy curriculum apart?",
      a: "Our curriculum is based on the NEP 2020 framework — a scientifically designed approach focusing on holistic development through play-based learning, creativity, and life skills tailored for early childhood.",
    },
    {
      q: "Can I tour the facility before enrolling?",
      a: "Absolutely! We encourage all parents to schedule a campus tour. You can visit our facilities, meet our educators, and experience our learning environment firsthand.",
    },
    {
      q: "What educational philosophy does EvernalAcademy follow?",
      a: "We follow a child-centered approach combining Montessori principles with modern pedagogy. Our focus is on nurturing each child's unique potential through experiential learning and creative exploration.",
    },
    {
      q: "What is the teacher-to-child ratio?",
      a: "We maintain an optimal 1:8 teacher-child ratio to ensure personalised attention and care, allowing our educators to focus on individual learning needs and development.",
    },
    {
      q: "What safety measures are in place?",
      a: "We have comprehensive safety protocols including CCTV surveillance, secure entry systems, trained staff, regular health check-ups, and child-friendly facilities with hygienic practices.",
    },
  ];

  const inputCls =
    "w-full px-4 py-3 rounded-xl text-sm text-[#0F172A] placeholder:text-[#0F172A]/40 focus:outline-none focus:ring-2 focus:ring-[#08472C]/30 transition-all";
  const inputStyle = {
    background: "#e8eeeb",
    boxShadow: "inset 3px 3px 7px #c5cac7, inset -3px -3px 7px #ffffff",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image
          src="/gallery/image_1.jpeg"
          alt="Admissions"
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/60 to-transparent" />
        {/* dot texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/70 font-semibold">
              2025–26 Open
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Admissions
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-medium mt-2 max-w-xl">
            Begin your child's journey of discovery, learning &amp; growth.
          </p>
        </div>
        {/* gold bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── Info Strip ── */}
      <section className="bg-[#08472C]">
        <div className="max-w-5xl mx-auto px-6 py-0 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {[
            { icon: Users, label: "500+ Students", sub: "Enrolled" },
            { icon: Award, label: "50+ Centres", sub: "Across India" },
            { icon: MapPin, label: "25+ Cities", sub: "Presence" },
            { icon: CheckCircle, label: "100% Support", sub: "Guaranteed" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-4">
              <div className="w-8 h-8 rounded-lg bg-[#FCAB17]/15 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-[#FCAB17]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">
                  {label}
                </p>
                <p className="text-white/50 text-[11px]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="bg-[#e8eeeb] py-14 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-10">
          {/* Form card */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "#e8eeeb",
              boxShadow: "6px 6px 14px #c5cac7, -6px -6px 14px #ffffff",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">
                Inquiry Form
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#08472C] mb-6">
              Admission Inquiry
            </h2>

            {formSubmitted ? (
              <div
                className="rounded-xl p-8 text-center"
                style={{
                  background: "#e8eeeb",
                  boxShadow:
                    "inset 3px 3px 7px #c5cac7, inset -3px -3px 7px #ffffff",
                }}
              >
                <div className="w-16 h-16 rounded-full bg-[#08472C] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-bold text-[#08472C] mb-1">
                  Inquiry Submitted!
                </p>
                <p className="text-sm text-[#08472C]/70">
                  Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="rounded-lg px-4 py-3 mb-5 bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs shrink-0">
                      !
                    </span>
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="First name"
                        className={inputCls}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Last name"
                        className={inputCls}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email address"
                        className={inputCls}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                        Mobile *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        placeholder="Mobile number"
                        className={inputCls}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        required
                        placeholder="Child's name"
                        className={inputCls}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                        Child's Age *
                      </label>
                      <input
                        type="text"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        required
                        placeholder="Age in years"
                        className={inputCls}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                      Programme *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className={inputCls}
                      style={inputStyle}
                    >
                      <option value="playgroup">Playgroup (1.5–2.5 yrs)</option>
                      <option value="nursery">Nursery (2.5–3.5 yrs)</option>
                      <option value="kindergarten">
                        Kindergarten (3.5–5.5 yrs)
                      </option>
                      <option value="training">
                        Teacher Training Programme (18+ yrs)
                      </option>
                      <option value="daycare">Daycare (1–8 yrs)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="Your city"
                        className={inputCls}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        required
                        placeholder="PIN code"
                        className={inputCls}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#08472C]/70 mb-1.5">
                      Additional Info
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific requirements or questions…"
                      className={`${inputCls} resize-none`}
                      style={inputStyle}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#08472C] text-white text-sm font-semibold hover:bg-[#08472C]/90 disabled:opacity-60 transition-all shadow-md hover:shadow-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit Inquiry
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-[#08472C]/40">
                    By submitting you agree to our Terms &amp; Privacy Policy.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Right info cards */}
          <div className="flex flex-col gap-5">
            {/* Selected programme */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "#e8eeeb",
                boxShadow: "6px 6px 14px #c5cac7, -6px -6px 14px #ffffff",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#FCAB17]" />
                <span className="text-xs font-semibold text-[#08472C]/60 uppercase tracking-wider">
                  Selected Programme
                </span>
              </div>
              <p className="text-xl font-bold text-[#08472C]">
                {programs[formData.program as keyof typeof programs].name}
              </p>
              <p className="text-sm text-[#08472C]/60 mt-0.5">
                Age group:{" "}
                {programs[formData.program as keyof typeof programs].age}
              </p>
              <div className="mt-4 rounded-lg px-4 py-2.5 bg-[#08472C]/8 border border-[#08472C]/15 text-xs text-[#08472C] font-medium">
                ✨ Sibling discount: 15% off for second child
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl p-6 bg-[#08472C]">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
                Contact Us
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    val: "+91 7003999531",
                    href: "tel:+917003999531",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    val: "evernalacademy@gmail.com",
                    href: "mailto:evernalacademy@gmail.com",
                  },
                  {
                    icon: Clock,
                    label: "Office Hours",
                    val: "Mon–Sat: 9 AM – 6 PM",
                    href: null,
                  },
                ].map(({ icon: Icon, label, val, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FCAB17]/15 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#FCAB17]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/40 leading-none mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-white font-medium hover:text-[#FCAB17] transition-colors"
                        >
                          {val}
                        </a>
                      ) : (
                        <p className="text-sm text-white font-medium">{val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "#e8eeeb",
                boxShadow: "6px 6px 14px #c5cac7, -6px -6px 14px #ffffff",
              }}
            >
              <p className="text-xs font-semibold text-[#08472C]/50 uppercase tracking-wider mb-3">
                Why Choose Us
              </p>
              <ul className="space-y-2.5">
                {[
                  "NEP 2020 aligned curriculum",
                  "Optimal 1:8 teacher-child ratio",
                  "CCTV & secure entry systems",
                  "Comprehensive learning materials",
                  "Regular curriculum updates",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-[#08472C]/80"
                  >
                    <CheckCircle className="w-4 h-4 text-[#FCAB17] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-Step Process ── */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">
              How It Works
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C] mb-8">
            Simple 4-Step Admission Process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ number, title, desc, icon: Icon }, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border border-[#e8eeeb] p-6 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* hover accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FCAB17] to-[#08472C] opacity-0 group-hover:opacity-100 transition-opacity rounded-l-2xl" />
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#08472C] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-3xl font-black text-[#08472C]/10">
                    {number}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#08472C] mb-1.5 group-hover:text-[#08472C] transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-[#0F172A]/55 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advantage ── */}
      <section className="bg-[#f7f8f6] py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">
              Our Edge
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C] mb-8">
            The EvernalAcademy Advantage
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-[#e8eeeb] p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#08472C]/8 flex items-center justify-center mb-4 group-hover:bg-[#08472C] transition-colors">
                  <Icon className="w-5 h-5 text-[#08472C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-[#08472C] mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-[#0F172A]/55 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border border-[#e8eeeb] p-5 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FCAB17] opacity-0 group-hover:opacity-100 transition-opacity rounded-l-2xl" />
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#08472C] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#08472C] mb-1.5">
                      {q}
                    </p>
                    <p className="text-xs text-[#0F172A]/60 leading-relaxed">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm text-[#0F172A]/60">
              Still have questions?
            </span>
            <a
              href="tel:+917003999531"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#08472C] text-white text-sm font-semibold hover:bg-[#08472C]/90 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" /> +91 7003999531
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-[#08472C] py-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* gold rules */}
          <div className="h-px bg-[#FCAB17]/40 mb-7" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold mb-1">
                Ready to Begin?
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Start your child's{" "}
                <span className="text-[#FCAB17]">learning journey</span> today.
              </h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FCAB17] text-[#08472C] text-sm font-bold hover:bg-[#FCAB17]/90 transition-colors shadow-md"
              >
                Schedule Visit <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Calendar className="w-4 h-4" /> Fill Form
              </a>
            </div>
          </div>
          <div className="h-px bg-[#FCAB17]/40 mt-7" />
        </div>
      </section>
    </main>
  );
}
