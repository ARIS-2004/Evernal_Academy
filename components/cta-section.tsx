import Link from 'next/link';
import { ArrowRight, Phone, Mail, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#08472C] via-[#0F172A] to-[#08472C] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#FCAB17] opacity-10 rounded-full blur-3xl -mr-32 md:-mr-48 -mt-32 md:-mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#FCAB17] opacity-10 rounded-full blur-3xl -ml-32 md:-ml-48 -mb-32 md:-mb-48"></div>
      
      {/* Accent sparkles */}
      <div className="absolute top-1/4 left-10 w-2 h-2 md:w-3 md:h-3 bg-[#FCAB17] rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 md:w-3 md:h-3 bg-[#FCAB17] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 bg-[#FCAB17] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Academy Tag */}
        <div className="inline-flex items-center gap-2 bg-[#FCAB17]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FCAB17]/30 mb-8">
          <Sparkles className="w-4 h-4 text-[#FCAB17]" />
          <span className="text-[#FCAB17] font-medium text-sm">Limited Spots Available</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Start Your Child's 
          <span className="block text-[#FCAB17] mt-2">
            Learning Journey Today
          </span>
        </h2>
        
        <div className="relative mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of happy parents who have chosen Jaiago Academy for their children's 
            early education. Give your child the best start in their learning journey.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/admission"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#FCAB17]/40 transition-all duration-300 transform hover:scale-105"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-[#FCAB17]"
          >
            <Phone className="w-5 h-5" />
            <span>Schedule Visit</span>
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FCAB17]/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-[#08472C] to-[#0F5C3C] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Safe Environment</h3>
            <p className="text-white/70 text-sm">Child-friendly facilities with 24/7 security</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FCAB17]/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-[#0F172A] font-bold text-lg">⭐</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Expert Teachers</h3>
            <p className="text-white/70 text-sm">Certified and experienced educators</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FCAB17]/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B2C6BD] to-white rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-[#08472C] font-bold text-lg">🎯</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Holistic Learning</h3>
            <p className="text-white/70 text-sm">Focus on cognitive and emotional development</p>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="pt-8 border-t border-white/20 max-w-3xl mx-auto">
          <h3 className="text-white font-semibold mb-6 text-lg">Get in Touch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <a
                href="tel:+880XXXXXXXXXX"
                className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-[#FCAB17]/30"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#08472C] to-[#0F5C3C] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/70 mb-1">Call us for admission</p>
                  <p className="font-bold text-white group-hover:text-[#FCAB17] transition-colors duration-300">+880 XXXX-XXXXXX</p>
                </div>
              </a>
            </div>
            
            <div className="group">
              <a
                href="mailto:admission@jaiagoacademy.com"
                className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-[#FCAB17]/30"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/70 mb-1">Email for inquiries</p>
                  <p className="font-bold text-white group-hover:text-[#FCAB17] transition-colors duration-300">admission@jaiagoacademy.com</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              <span className="text-[#FCAB17] font-medium">Working Hours:</span> Sunday-Thursday, 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#08472C] to-[#0F5C3C] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span className="text-white/90 text-sm">ISO Certified</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-full flex items-center justify-center">
              <span className="text-[#0F172A] text-xs font-bold">★</span>
            </div>
            <span className="text-white/90 text-sm">4.9/5 Parent Rating</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#B2C6BD] to-white rounded-full flex items-center justify-center">
              <span className="text-[#08472C] text-xs font-bold">🏆</span>
            </div>
            <span className="text-white/90 text-sm">Award-Winning Academy</span>
          </div>
        </div>
      </div>
    </section>
  );
}