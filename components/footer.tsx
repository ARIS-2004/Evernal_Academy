'use client';

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Heart,
  ArrowRight,
  Calendar,
  Users,
  Award,
  BookOpen,
  GraduationCap
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08472C] text-white">
      {/* Top Decorative Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FCAB17] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Logo & Brand Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 relative">
              <Image
                src="/logo_2.png"
                alt="Jaiago Academy Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80px, 96px"
              />
            </div>
           
          </div>

          {/* Quick Contact */}
          <div className="bg-[#0F172A]/30 rounded-xl p-4 md:p-6 border border-[#B2C6BD]/20">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FCAB17]/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#FCAB17]" />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Now</p>
                  <a href="tel:+919876543210" className="text-[#FCAB17] font-bold text-lg hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-[#B2C6BD]/30"></div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#FCAB17]" />
              About Us
            </h4>
            <p className="text-[#B2C6BD] text-sm leading-relaxed mb-6">
              Jaiago Academy is a premier early childhood education center committed to 
              nurturing young minds through play-based learning and holistic development 
              approaches for over 12 years.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FCAB17]/10 rounded flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-[#FCAB17]" />
                </div>
                <span className="text-sm text-[#B2C6BD]">Established: 2010</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FCAB17]/10 rounded flex items-center justify-center">
                  <Users className="w-4 h-4 text-[#FCAB17]" />
                </div>
                <span className="text-sm text-[#B2C6BD]">1000+ Happy Families</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FCAB17]/10 rounded flex items-center justify-center">
                  <Award className="w-4 h-4 text-[#FCAB17]" />
                </div>
                <span className="text-sm text-[#B2C6BD]">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#FCAB17]" />
              Our Programmes
            </h4>
            <ul className="space-y-3">
              {[
                { name: "PlayGroup (2-3 Years)", href: "/programmes/playgroup" },
                { name: "Nursery (3-4 Years)", href: "/programmes/nursery" },
                { name: "Kindergarten (4-6 Years)", href: "/programmes/kindergarten" },
                { name: "Daycare Facility", href: "/programmes/daycare" },
                { name: "Teacher Training", href: "/programmes/teacher-training" },
                { name: "Summer Workshops", href: "/programmes/summer" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#B2C6BD] hover:text-[#FCAB17] transition-colors duration-300 group flex items-center gap-2 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Admissions", href: "/admissions" },
                { name: "Gallery", href: "/gallery" },
                { name: "Parent Testimonials", href: "/testimonials" },
                { name: "Blog & Articles", href: "/blog" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#B2C6BD] hover:text-[#FCAB17] transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#FCAB17] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#B2C6BD] text-sm">
                    123 Learning Lane, Education District,<br />
                    Kolkata, West Bengal 700001
                  </p>
                  <button className="text-[#FCAB17] text-sm font-medium mt-1 hover:underline">
                    Get Directions →
                  </button>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#FCAB17] flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-white hover:text-[#FCAB17] transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-[#B2C6BD] text-xs mt-1">Mon-Sat: 8 AM - 6 PM</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#FCAB17] flex-shrink-0" />
                <a href="mailto:info@jaiagoacademy.com" className="text-white hover:text-[#FCAB17] transition-colors">
                  info@jaiagoacademy.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 pt-6 border-t border-[#B2C6BD]/20">
              <p className="text-[#B2C6BD] text-sm mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Youtube, label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FCAB17]/10 text-[#FCAB17] hover:bg-[#FCAB17] hover:text-[#0F172A] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-[#0F172A]/30 rounded-xl p-6 mb-8 border border-[#B2C6BD]/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-[#B2C6BD] text-sm">
                Get updates on events, parenting tips, and early education insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-white/10 border border-[#B2C6BD]/30 text-white placeholder:text-[#B2C6BD] focus:outline-none focus:border-[#FCAB17] flex-grow sm:w-64"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#B2C6BD]/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-[#B2C6BD] text-sm">
                © {currentYear} Jaiago Academy. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-[#B2C6BD]">
                <Link href="/privacy-policy" className="hover:text-[#FCAB17] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="hover:text-[#FCAB17] transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/refund-policy" className="hover:text-[#FCAB17] transition-colors">
                  Refund Policy
                </Link>
                <Link href="/sitemap" className="hover:text-[#FCAB17] transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Made By */}
            <div className="text-center md:text-right">
              <p className="text-xs text-[#B2C6BD]">
                Made with <Heart className="w-3 h-3 inline mx-1 text-[#FCAB17] fill-current" /> by{" "}
                <span className="text-[#FCAB17] font-medium">Mindverge</span>
              </p>
              <p className="text-xs text-[#B2C6BD] mt-2">
                Committed to excellence in early childhood education
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FCAB17] to-transparent"></div>
    </footer>
  );
}