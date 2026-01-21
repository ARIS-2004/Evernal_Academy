'use client';

import { programmes } from '@/lib/programmes';

import Link from 'next/link';
import { ChevronRight, Users, BookOpen, Heart, Briefcase } from 'lucide-react';

export default function ProgrammesPage() {
  const icons = [
    <Users key="users" className="w-8 h-8" />,
    <BookOpen key="book" className="w-8 h-8" />,
    <Heart key="heart" className="w-8 h-8" />,
    <Briefcase key="briefcase" className="w-8 h-8" />,
    <Users key="users2" className="w-8 h-8" />
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
     

      {/* Breadcrumb */}
      <div className="bg-[#08472C]/5 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#08472C] hover:underline">Home</Link>
          <ChevronRight size={16} className="text-[#B2C6BD]" />
          <span className="text-[#0F172A] font-medium">Programmes</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#08472C] to-[#0F172A] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Our Programmes</h1>
          <p className="text-lg text-[#B2C6BD] max-w-2xl mx-auto">
            Comprehensive educational programmes designed for every stage of early childhood development, from infants to school-ready children
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Section */}
        <div className="mb-16">
          <p className="text-lg text-[#0F172A] leading-relaxed text-center max-w-3xl mx-auto">
            At our institution, we believe every child is unique and deserves personalized attention. Our carefully crafted programmes blend play-based learning with structured academics, fostering holistic development across all domains.
          </p>
        </div>

        {/* Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programmes.map((programme, idx) => (
            <Link key={programme.id} href={programme.href}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#B2C6BD]/20 hover:border-[#FCAB17]/50 h-full flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#08472C] to-[#0F172A] p-6 text-white flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{programme.name}</h3>
                    <p className="text-[#B2C6BD] text-sm">{programme.ageGroup}</p>
                  </div>
                  <div className="text-[#FCAB17]">
                    {icons[idx]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-[#0F172A] mb-4 flex-grow">{programme.description}</p>
                  
                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-[#FCAB17] font-semibold">Duration:</span>
                      <span className="text-[#0F172A]">{programme.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FCAB17] font-semibold">Focus Areas:</span>
                      <span className="text-[#0F172A]">{programme.keyAreas.length} key areas</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-[#08472C] font-semibold hover:text-[#FCAB17] transition-colors">
                    Learn More <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <section className="bg-gradient-to-r from-[#08472C]/10 to-[#FCAB17]/10 rounded-xl p-8 sm:p-12 border border-[#B2C6BD]/30 mb-12">
          <h2 className="text-3xl font-bold text-[#08472C] mb-8 text-center">Why Choose Our Programmes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#FCAB17] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">✓</div>
              <h3 className="font-semibold text-[#08472C] mb-2">Expert Educators</h3>
              <p className="text-[#0F172A] text-sm">Trained professionals with child development expertise</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#FCAB17] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">✓</div>
              <h3 className="font-semibold text-[#08472C] mb-2">Safe Environment</h3>
              <p className="text-[#0F172A] text-sm">Secure, nurturing spaces designed for optimal learning</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#FCAB17] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">✓</div>
              <h3 className="font-semibold text-[#08472C] mb-2">Holistic Development</h3>
              <p className="text-[#0F172A] text-sm">Balanced focus on academic, social, and emotional growth</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#FCAB17] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">✓</div>
              <h3 className="font-semibold text-[#08472C] mb-2">Parent Partnership</h3>
              <p className="text-[#0F172A] text-sm">Regular communication and involvement in child's learning</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#08472C] to-[#0F172A] rounded-xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Child's Journey?</h2>
          <p className="text-lg text-[#B2C6BD] mb-8">Explore our programmes and find the perfect fit for your child's developmental stage</p>
          <Link
            href="/enroll"
            className="inline-block bg-[#FCAB17] text-[#0F172A] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-colors"
          >
            Enroll Now
          </Link>
        </section>
      </div>
    </div>
  );
}
