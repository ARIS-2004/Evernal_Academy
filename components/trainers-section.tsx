"use client";

import { useRef, useEffect, useState } from "react";
import { Star, Users, GraduationCap, Award } from "lucide-react";

const teachers = [
  {
    name: "Priya Sharma",
    role: "Head Teacher",
    dept: "Kindergarten",
    experience: "15 yrs",
    bio: "Specialized in child psychology and early childhood development. Passionate about creating engaging learning environments.",
    qualifications: ["M.Ed in Early Childhood", "Montessori Certified", "First Aid Trained"],
    specializations: ["Child Psychology", "Montessori", "Language Development"],
    rating: 4.9,
    students: 450,
    accent: "#08472C",
  },
  {
    name: "Rajesh Kumar",
    role: "Senior Educator",
    dept: "PlayGroup",
    experience: "12 yrs",
    bio: "Expert in sensory play and motor skills development. Believes in learning through play and exploration.",
    qualifications: ["B.Ed in ECE", "Special Needs Training", "CPR Certified"],
    specializations: ["Sensory Play", "Motor Skills", "Social Development"],
    rating: 4.8,
    students: 320,
    accent: "#063d26",
  },
  {
    name: "Dr. Sunita Mehta",
    role: "Academic Director",
    dept: "Curriculum",
    experience: "20 yrs",
    bio: "PhD in Child Development. Former university professor turned early education specialist focused on curriculum design.",
    qualifications: ["PhD in Child Development", "NEP 2020 Expert", "Published Author"],
    specializations: ["Curriculum Design", "Child Development", "Assessment"],
    rating: 4.9,
    students: 1200,
    accent: "#0a5c38",
  },
  {
    name: "Aisha Khan",
    role: "Montessori Specialist",
    dept: "Primary",
    experience: "10 yrs",
    bio: "Trained in AMI Montessori method. Creates self-directed learning environments that foster independence.",
    qualifications: ["AMI Certified", "Sensory Integration", "Child Nutrition"],
    specializations: ["Montessori Method", "Practical Life", "Self-Directed Learning"],
    rating: 4.7,
    students: 280,
    accent: "#052e1c",
  },
  {
    name: "Maya Patel",
    role: "Music & Movement",
    dept: "Creative Arts",
    experience: "8 yrs",
    bio: "Professional musician turned educator. Uses music and movement to enhance cognitive development and creativity.",
    qualifications: ["Music Degree", "Creative Arts Therapy", "Dance Instructor"],
    specializations: ["Music Therapy", "Creative Movement", "Rhythm Development"],
    rating: 4.8,
    students: 350,
    accent: "#0d6b42",
  },
  {
    name: "Sonia Verma",
    role: "Art & Creativity",
    dept: "Creative Arts",
    experience: "9 yrs",
    bio: "Fine arts graduate with a passion for nurturing creativity in young children. Focuses on process over product.",
    qualifications: ["BFA in Fine Arts", "Art Therapy Training", "Craft Specialist"],
    specializations: ["Creative Arts", "Fine Motor Skills", "Self-Expression"],
    rating: 4.6,
    students: 400,
    accent: "#074d30",
  },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2);
}

export default function TrainersSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-[#f7f8f6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Our Team</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C]">
              Meet Our <span className="text-[#FCAB17]">Expert</span> Educators
            </h2>
            <p className="text-[#0F172A]/40 text-xs max-w-xs leading-relaxed">
              Highly qualified educators dedicated to nurturing every young mind.
            </p>
          </div>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teachers.map((t, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* portrait band */}
              <div className="relative h-[88px]" style={{ background: t.accent }}>
                {/* dot texture */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "16px 16px" }}
                />
                {/* diagonal slice */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8"
                  style={{ background: "white", clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
                />

                {/* rating badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
                  <Star className="w-2.5 h-2.5 text-[#FCAB17] fill-[#FCAB17]" />
                  <span className="text-[11px] font-bold text-white">{t.rating}</span>
                </div>

                {/* dept pill */}
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-semibold text-white/70 uppercase tracking-widest">{t.dept}</span>
                </div>
              </div>

              {/* avatar — overlaps band */}
              <div className="absolute left-5 top-[52px] z-10">
                <div
                  className="w-14 h-14 rounded-2xl border-[3px] border-white shadow-lg flex items-center justify-center"
                  style={{ background: t.accent }}
                >
                  <span className="text-base font-black text-white tracking-tight">{initials(t.name)}</span>
                </div>
              </div>

              {/* content */}
              <div className="px-5 pt-3 pb-5">
                {/* name row */}
                <div className="flex items-start justify-between mb-0.5 pl-[72px]">
                  <div>
                    <h3 className="text-sm font-bold text-[#08472C] leading-tight">{t.name}</h3>
                    <p className="text-[10px] font-semibold text-[#FCAB17] uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>

                {/* divider */}
                <div className="h-px bg-gradient-to-r from-[#08472C]/10 via-[#FCAB17]/30 to-transparent my-3" />

                {/* bio */}
                <p className="text-[11px] text-[#0F172A]/50 leading-relaxed mb-4">{t.bio}</p>

                {/* qualifications */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {t.qualifications.map((q, j) => (
                    <span key={j} className="inline-flex items-center gap-1 text-[9px] font-semibold text-[#08472C] bg-[#08472C]/5 border border-[#08472C]/10 px-2 py-0.5 rounded-full">
                      <Award className="w-2 h-2 opacity-60" />
                      {q}
                    </span>
                  ))}
                </div>

                {/* specializations */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {t.specializations.map((s, j) => (
                    <span key={j} className="inline-flex items-center gap-1 text-[9px] font-medium text-[#0F172A]/55 bg-[#f4f4f4] px-2 py-0.5 rounded-full">
                      <span className="w-1 h-1 rounded-full bg-[#FCAB17] inline-block flex-shrink-0" />
                      {s}
                    </span>
                  ))}
                </div>

                {/* stats */}
                <div className="flex items-center gap-5 pt-3 border-t border-[#f0f0f0]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-[#08472C]/6 flex items-center justify-center">
                      <Users className="w-3 h-3 text-[#08472C]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#08472C] leading-none">{t.students}+</p>
                      <p className="text-[9px] text-[#0F172A]/35 leading-none mt-0.5">students</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-[#FCAB17]/10 flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 text-[#FCAB17]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#08472C] leading-none">{t.experience}</p>
                      <p className="text-[9px] text-[#0F172A]/35 leading-none mt-0.5">experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* hover left accent bar */}
              <div
                className="absolute left-0 top-[88px] bottom-0 w-[3px] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to bottom, ${t.accent}, #FCAB17)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
