'use client';

import { getProgrammeById } from '@/lib/programmes';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function KindergartenPage() {
  const programme = getProgrammeById('kindergarten');

  if (!programme) return <div>Programme not found</div>;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
    

      {/* Breadcrumb */}
      <div className="bg-[#08472C]/5 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm flex-wrap">
          <Link href="/" className="text-[#08472C] hover:underline">Home</Link>
          <ChevronRight size={16} className="text-[#B2C6BD]" />
          <Link href="/programmes" className="text-[#08472C] hover:underline">Programmes</Link>
          <ChevronRight size={16} className="text-[#B2C6BD]" />
          <span className="text-[#0F172A] font-medium">{programme.name}</span>
        </div>
      </div>

      {/* Hero Section with Video Background */}
      <div className="relative bg-gradient-to-r from-[#08472C] to-[#0F172A] text-white overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={programme.heroVideo}
        />
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{programme.name}</h1>
            <p className="text-lg text-[#B2C6BD] mb-6">{programme.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm text-[#B2C6BD]">Age Group</p>
                <p className="text-2xl font-bold">{programme.ageGroup}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm text-[#B2C6BD]">Duration</p>
                <p className="text-2xl font-bold">{programme.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Note Section */}
        <div className="bg-[#FCAB17]/10 border-l-4 border-[#FCAB17] p-6 rounded-lg mb-12">
          <p className="text-[#0F172A]">
            <span className="font-semibold">*{programme.note}</span>
          </p>
        </div>

        {/* Hero Image */}
        <section className="mb-12">
          <div className="relative h-64 sm:h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={programme.heroImage || "/placeholder.svg"}
              alt={programme.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Child Behavior Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#08472C] mb-6">Child Behavior & Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programme.behavior.map((behavior, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#B2C6BD]/20 to-[#FCAB17]/10 p-6 rounded-lg border border-[#B2C6BD]/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FCAB17] flex items-center justify-center flex-shrink-0 text-[#0F172A] font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-[#0F172A] font-medium">{behavior}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#08472C] mb-6">Overview</h2>
          <p className="text-lg text-[#0F172A] leading-relaxed">
            {programme.overview}
          </p>
        </section>

        {/* Key Areas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#08472C] mb-6">Key Areas in Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programme.keyAreas.map((area, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#B2C6BD]/10 p-4 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[#FCAB17] mt-2 flex-shrink-0"></div>
                <p className="text-[#0F172A]">{area}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kidzee Special Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#08472C] mb-6">Kidzee Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programme.specialPrograms.map((prog, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#08472C]/10 to-[#FCAB17]/10 p-4 rounded-lg border border-[#B2C6BD]/30 hover:shadow-lg transition-shadow"
              >
                <p className="text-[#08472C] font-semibold">{prog}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kidzee Sessions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#08472C] mb-6">Kidzee Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programme.kidzeeSession.map((session, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#0F172A]/5 p-4 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[#FCAB17]"></div>
                <p className="text-[#0F172A]">{session}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#08472C] mb-6">Activities & Events</h2>
          <div className="space-y-3">
            {programme.activities.map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3 text-[#0F172A] bg-white p-4 rounded-lg border border-[#B2C6BD]/20">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FCAB17] text-white text-sm font-bold">
                  {idx + 1}
                </span>
                <p>{activity}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#08472C] mb-6">Programme Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {programme.images.map((image, idx) => (
              <div key={idx} className="relative h-48 sm:h-56 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${programme.name} Gallery ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#08472C] mb-6">Programme Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programme.videos.map((video, idx) => (
              <div key={idx} className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg bg-[#0F172A]">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster={programme.heroImage}
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#08472C] to-[#0F172A] rounded-lg p-8 sm:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-lg text-[#B2C6BD] mb-8">Join us today and give your child the best start in their educational journey!</p>
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
