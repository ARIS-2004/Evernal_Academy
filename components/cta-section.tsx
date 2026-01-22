import Link from "next/link";
import { ArrowRight, Phone, Mail, Star } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-[#08472C] via-[#0F172A] to-[#08472C] text-white relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FCAB17] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FCAB17] opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Start Your Child&apos;s
          <span className="block text-[#FCAB17] mt-2">
            Learning Journey Today
          </span>
        </h2>

        <div className="mb-10">
          <div className="w-20 h-1 bg-gradient-to-r from-[#FCAB17] to-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            Join hundreds of happy parents who trust Evernal Academy for quality
            early education and holistic child development.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/enroll"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Enroll Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold border-2 border-white/30 hover:border-[#FCAB17] hover:bg-white/10 transition-all"
          >
            <Phone className="w-5 h-5" />
            Schedule Visit
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Safe Environment */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FCAB17]/40 transition">
            <div className="w-12 h-12 bg-[#08472C] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-xl font-bold">✓</span>
            </div>
            <h3 className="font-semibold mb-2">Safe Environment</h3>
            <p className="text-white/70 text-sm">
              Child-friendly facilities with complete security
            </p>
          </div>

          {/* Expert Teachers (FIXED) */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FCAB17]/40 transition">
            <div className="w-12 h-12 bg-[#C6920A] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Expert Teachers</h3>
            <p className="text-white/70 text-sm">
              Certified and experienced educators
            </p>
          </div>

          {/* Holistic Learning */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FCAB17]/40 transition">
            <div className="w-12 h-12 bg-[#B2C6BD] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-[#08472C] text-xl font-bold">🎯</span>
            </div>
            <h3 className="font-semibold mb-2">Holistic Learning</h3>
            <p className="text-white/70 text-sm">
              Focus on cognitive & emotional growth
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="pt-6 border-t border-white/20 max-w-3xl mx-auto">
          <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:+880XXXXXXXXXX"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition"
            >
              <Phone className="w-6 h-6 text-[#FCAB17]" />
              <span className="font-bold">+91 7003999531</span>
            </a>

            <a
              href="mailto:admission@Evernalacademy.com"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition"
            >
              <Mail className="w-6 h-6 text-[#FCAB17]" />
              <span className="font-bold">
                Evernalacademy@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
