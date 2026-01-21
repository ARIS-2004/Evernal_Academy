'use client';

import { useState } from 'react';
import {
  Brain,
  Users,
  BookOpen,
  Award,
  GraduationCap,
  Clock,
  Star,
  Target,
  MessageCircle
} from 'lucide-react';

export default function EarlyEducationSection() {
  const [activeTab, setActiveTab] = useState<'importance' | 'expertise'>('importance');

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-10 border-b mb-12">
          <button
            onClick={() => setActiveTab('importance')}
            className={`pb-4 font-semibold text-lg ${
              activeTab === 'importance'
                ? 'text-[#08472C] border-b-4 border-[#FCAB17]'
                : 'text-gray-400'
            }`}
          >
            Importance of Early School
          </button>

          <button
            onClick={() => setActiveTab('expertise')}
            className={`pb-4 font-semibold text-lg ${
              activeTab === 'expertise'
                ? 'text-[#08472C] border-b-4 border-[#FCAB17]'
                : 'text-gray-400'
            }`}
          >
            EuroKids Expertise
          </button>
        </div>

        {/* CONTENT */}
        {activeTab === 'importance' && (
          <div>
            <h2 className="text-4xl font-bold text-center text-[#08472C] mb-4">
              Is Early Childhood Education important?
            </h2>

            <p className="text-center text-lg text-[#0F172A] mb-12">
              <strong>90%</strong> of brain development happens before the age of 6.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <h3 className="text-xl font-semibold text-[#FCAB17] mb-6">
                  Brain development progression
                </h3>

                <div className="grid grid-cols-2 gap-6 text-center">
                  {['New Born', '1 Month', '9 Months', '2 Years', 'Adult'].map((item) => (
                    <div
                      key={item}
                      className="border rounded-xl p-6 bg-[#B2C6BD]/20"
                    >
                      <Brain className="mx-auto mb-3 text-[#08472C]" />
                      <p className="font-medium text-[#0F172A]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-[#0F172A]">
                  Here's what your child could miss out without early schooling at the right age.
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Users, text: 'Improved social skills' },
                    { icon: BookOpen, text: 'No need for special education instruction' },
                    { icon: Target, text: 'Better marks and enhanced attention spans' },
                    { icon: MessageCircle, text: 'Fewer behavioural problems' },
                    { icon: Star, text: 'Development milestones achieved' },
                    { icon: GraduationCap, text: 'Better language development' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white shadow-md p-5 rounded-xl"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FCAB17]">
                        <item.icon className="text-white" />
                      </div>
                      <p className="font-medium text-[#0F172A]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'expertise' && (
          <div>
            <h2 className="text-4xl font-bold text-center text-[#08472C] mb-12">
              EuroKids Expertise
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: 'Certified and trained teachers',
                },
                {
                  icon: Clock,
                  title: '23+ Years of experience',
                },
                {
                  icon: Users,
                  title: '7 lakh+ students nurtured',
                },
                {
                  icon: BookOpen,
                  title: '35,000+ hours curriculum research',
                },
                {
                  icon: Award,
                  title: '60+ awards',
                },
                {
                  icon: Star,
                  title: '6 lakh+ hours of partner training',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#08472C]">
                    <item.icon className="text-white w-8 h-8" />
                  </div>
                  <p className="font-semibold text-lg text-[#0F172A]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
