"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const programmes = [
  { name: "Daycare", sub: "6m – 3 Years", href: "/programmes/daycare" },
  { name: "PlayGroup", sub: "2 – 3 Years", href: "/programmes/playgroup" },
  { name: "Nursery", sub: "3 – 4 Years", href: "/programmes/nursery" },
  {
    name: "Kindergarten",
    sub: "4 – 6 Years",
    href: "/programmes/kindergarten",
  },
  {
    name: "Teacher Training",
    sub: "Professional",
    href: "/programmes/teacher-training",
  },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Contact Us", href: "/contact" },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a2e1c] text-white overflow-hidden">
      {/* ── atmosphere glows ── */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[#0d5c35] opacity-30 blur-[130px] pointer-events-none rounded-full -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#FCAB17] opacity-[0.05] blur-[90px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-1/4 w-80 h-56 bg-[#0d5c35] opacity-20 blur-[90px] pointer-events-none rounded-full" />

      {/* ── fine grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── gold top rule ── */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#FCAB17] to-transparent opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ════════════════════════════════════════
            MAIN BODY
        ════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 py-10 border-b border-white/[0.06]">
          {/* ── col 1: BRAND ── */}
          <div className="flex flex-col">
            {/* large logo */}
            <div className="relative w-28 h-28 mb-5">
              <div className="absolute inset-0 rounded-2xl bg-[#08472C]/60 blur-xl scale-90" />
              <div className="relative w-full h-full rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo_2-removebg-preview.png"
                  alt="Evernal Academy"
                  fill
                  className="object-contain p-2"
                  sizes="112px"
                />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight mb-1">
              Evernal Academy
            </h3>
            <p className="text-[10px] text-[#FCAB17]/60 uppercase tracking-[0.2em] mb-4">
              Nurturing Young Minds Since 2010
            </p>
            <p className="text-[11px] text-white/60 leading-relaxed mb-6 max-w-[220px]">
              A premier early childhood education centre committed to holistic
              development through play-based, Montessori-inspired learning.
            </p>

            {/* socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/60 hover:border-[#FCAB17]/60 hover:bg-[#FCAB17]/10 hover:text-[#FCAB17] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── col 2: PROGRAMMES ── */}
          <div className="pt-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-4 h-[1px] bg-[#FCAB17]/50" />
              <p className="text-[9px] uppercase tracking-[0.22em] text-[#FCAB17]/50 font-semibold">
                Programmes
              </p>
            </div>
            <ul className="space-y-1">
              {programmes.map(({ name, sub, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group flex items-center justify-between py-2 border-b border-white/[0.04] hover:border-[#FCAB17]/20 transition-colors"
                  >
                    <div>
                      <p className="text-[12px] text-white/80 group-hover:text-white transition-colors font-medium">
                        {name}
                      </p>
                      <p className="text-[9px] text-white/45 mt-0.5">{sub}</p>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-[#FCAB17] opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── col 3: QUICK LINKS ── */}
          <div className="pt-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-4 h-[1px] bg-[#FCAB17]/50" />
              <p className="text-[9px] uppercase tracking-[0.22em] text-[#FCAB17]/50 font-semibold">
                Quick Links
              </p>
            </div>
            <ul className="space-y-1">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group flex items-center justify-between py-2 border-b border-white/[0.04] hover:border-[#FCAB17]/20 transition-colors"
                  >
                    <p className="text-[12px] text-white/80 group-hover:text-white transition-colors font-medium">
                      {name}
                    </p>
                    <ArrowUpRight className="w-3 h-3 text-[#FCAB17] opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── col 4: CONTACT ── */}
          <div className="pt-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-4 h-[1px] bg-[#FCAB17]/50" />
              <p className="text-[9px] uppercase tracking-[0.22em] text-[#FCAB17]/50 font-semibold">
                Contact
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {/* address card */}
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#FCAB17]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FCAB17]" />
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Shikharbagan, No. 1154, SRCMRD,
                  <br />
                  Rajarhat, Kolkata – 136
                </p>
              </div>

              {/* phone card */}
              <a
                href="tel:+917003999531"
                className="group rounded-xl border border-white/[0.07] bg-white/[0.03] hover:border-[#FCAB17]/30 hover:bg-[#FCAB17]/[0.04] p-3 flex items-center gap-3 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FCAB17]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#FCAB17]" />
                </div>
                <div>
                  <p className="text-[12px] text-white/80 group-hover:text-white transition-colors font-medium">
                    +91 7003999531
                  </p>
                  <p className="text-[9px] text-white/50">
                    Mon – Sat · 8 AM – 6 PM
                  </p>
                </div>
              </a>

              {/* email card */}
              <a
                href="mailto:evernalacademy@gmail.com"
                className="group rounded-xl border border-white/[0.07] bg-white/[0.03] hover:border-[#FCAB17]/30 hover:bg-[#FCAB17]/[0.04] p-3 flex items-center gap-3 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FCAB17]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#FCAB17]" />
                </div>
                <p className="text-[11px] text-white/80 group-hover:text-white transition-colors font-medium break-all">
                  evernalacademy@gmail.com
                </p>
              </a>
            </div>

            {/* enroll CTA */}
            <Link
              href="/enroll"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#FCAB17] text-[#08472C] text-[11px] font-bold hover:bg-[#ffc13d] transition-colors shadow-lg shadow-[#FCAB17]/10"
            >
              Enroll Now <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════
            BOTTOM BAR
        ════════════════════════════════════════ */}
        <div className="py-4 flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="text-[10px] text-white/50">
            © {year} Evernal Academy. All rights reserved.
          </p>
          {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map((l) => {
            const href = l === 'Privacy Policy' ? '/privacy-policy' : l === 'Terms & Conditions' ? '/terms-and-conditions' : '/refund-policy';
            return (
            <span key={l} className="flex items-center gap-3">
              <span className="w-px h-2.5 bg-white/[0.08]" />
              <Link href={href} className="text-[10px] text-white/50 hover:text-[#FCAB17] transition-colors">{l}</Link>
            </span>
          )})}
        </div>
      </div>

      {/* gold bottom rule */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#FCAB17]/50 to-transparent" />
    </footer>
  );
}
