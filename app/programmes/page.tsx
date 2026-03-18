import { programmes } from "@/lib/programmes";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Users, Phone } from "lucide-react";

const icons = ["🧸", "📚", "🎓", "👩🏫", "🏠"];

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_5.jpeg" alt="Our Programmes" fill className="object-cover" style={{ objectPosition: "center 100%" }} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/55 to-[#08472C]/80" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#FCAB17] font-semibold">Early Childhood Education</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Our <span className="text-[#FCAB17]">Programmes</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── PROGRAMMES ── */}
      <section className="py-12 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">All Programmes</span>
          </div>

          <div className="space-y-4">
            {programmes.map((p, idx) => (
              <Link
                key={p.id}
                href={p.href}
                className="group flex flex-col sm:flex-row bg-white border border-[#eaeaea] rounded-2xl overflow-hidden hover:border-[#08472C]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* image */}
                <div className="relative w-full sm:w-48 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                  <Image src={p.heroImage} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px)100vw,192px" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#08472C]/30 sm:bg-gradient-to-b sm:from-transparent sm:to-[#08472C]/40" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-[#08472C]/75 backdrop-blur-sm border border-[#FCAB17]/25 px-2 py-1 rounded-lg">
                    <span className="w-3.5 h-3.5 rounded-sm bg-[#FCAB17] flex items-center justify-center text-[7px] font-black text-[#08472C]">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/75 font-semibold">Programme</span>
                  </span>
                  <span className="absolute bottom-3 left-3 text-xl">{icons[idx]}</span>
                </div>

                {/* content */}
                <div className="flex flex-col flex-1 min-w-0">
                  {/* header band */}
                  <div className="bg-[#08472C] px-5 py-3 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-[14px] font-bold text-white truncate">{p.name}</h3>
                      <p className="text-[10px] text-[#FCAB17] font-semibold mt-0.5">{p.ageGroup}</p>
                    </div>
                    <div className="flex items-center gap-1 text-white/50 text-[10px] flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{p.duration}</span>
                    </div>
                  </div>

                  {/* body */}
                  <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
                    <p className="text-[12px] text-[#0F172A]/55 leading-relaxed flex-1">{p.description}</p>

                    <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                      <div className="flex flex-wrap gap-1.5">
                        {p.keyAreas.slice(0, 2).map((a) => (
                          <span key={a} className="text-[9px] font-semibold text-[#08472C]/65 bg-[#08472C]/6 border border-[#08472C]/10 px-2 py-0.5 rounded-full whitespace-nowrap">{a}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-[#0F172A]/35 flex items-center gap-1 whitespace-nowrap">
                          <Users className="w-3 h-3" />{p.keyAreas.length} areas
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#08472C] group-hover:text-[#FCAB17] transition-colors whitespace-nowrap">
                          Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Why Choose Our Programmes</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", title: "Expert Educators", desc: "Trained professionals with child development expertise" },
              { n: "02", title: "Safe Environment", desc: "Secure, nurturing spaces designed for optimal learning" },
              { n: "03", title: "Holistic Development", desc: "Balanced focus on academic, social, and emotional growth" },
              { n: "04", title: "Parent Partnership", desc: "Regular communication and involvement in child's learning" },
            ].map(({ n, title, desc }) => (
              <div key={n} className="rounded-2xl border border-[#f0f0f0] bg-white p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#08472C] flex items-center justify-center text-[10px] font-black text-[#FCAB17]">{n}</span>
                </div>
                <h3 className="text-[13px] font-bold text-[#08472C] mb-1">{title}</h3>
                <p className="text-[11px] text-[#0F172A]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-[#08472C] py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="h-px bg-[#FCAB17]/40 absolute top-0 left-0 right-0" />
        <div className="h-px bg-[#FCAB17]/40 absolute bottom-0 left-0 right-0" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#FCAB17]/60 font-semibold mb-1">Ready to Begin?</p>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Start Your Child's Journey Today</h2>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/enroll" className="inline-flex items-center gap-2 bg-[#FCAB17] text-[#08472C] text-[11px] font-bold px-5 py-2.5 rounded-xl hover:bg-[#ffc13d] transition-colors">
              Enroll Now <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a href="tel:+917003999531" className="inline-flex items-center gap-2 border border-white/20 text-white text-[11px] font-bold px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors">
              <Phone className="w-3.5 h-3.5" /> Call Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
