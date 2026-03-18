import Link from "next/link";
import { ArrowRight, Phone, Mail, ShieldCheck, Star, Target } from "lucide-react";

const features = [
  { icon: ShieldCheck, label: "Safe Environment" },
  { icon: Star,        label: "Expert Teachers"  },
  { icon: Target,      label: "Holistic Learning" },
];

export default function CTASection() {
  return (
    <section className="relative bg-[#08472C] overflow-hidden">
      {/* subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
      />
      {/* gold ambient glow — right */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#FCAB17] opacity-[0.08] rounded-full blur-[80px] pointer-events-none" />
      {/* faint glow — left */}
      <div className="absolute -left-16 bottom-0 w-56 h-56 bg-[#FCAB17] opacity-[0.05] rounded-full blur-[60px] pointer-events-none" />

      {/* gold top rule */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FCAB17] to-transparent opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-9 relative z-10">

        {/* main row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* left — copy */}
          <div className="flex items-start gap-4">
            {/* vertical gold accent */}
            <div className="hidden sm:block w-[3px] self-stretch rounded-full bg-gradient-to-b from-[#FCAB17] to-[#FCAB17]/10 flex-shrink-0" />
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#FCAB17]/60 font-semibold mb-1.5">
                Admissions Open
              </p>
              <h2 className="text-xl sm:text-[22px] font-bold text-white leading-snug">
                Start Your Child&apos;s{" "}
                <span className="text-[#FCAB17]">Learning Journey</span> Today
              </h2>
              {/* feature pills */}
              <div className="flex flex-wrap items-center gap-2 mt-3.5">
                {features.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 text-[10px] font-medium text-white/60 bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-full"
                  >
                    <Icon className="w-3 h-3 text-[#FCAB17]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* right — actions + contact */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-shrink-0">

            {/* contact */}
            <div className="flex flex-col gap-1.5 sm:border-r sm:border-white/10 sm:pr-5">
              <a
                href="tel:+917003999531"
                className="flex items-center gap-2 text-[11px] text-white/55 hover:text-white transition-colors group"
              >
                <span className="w-5 h-5 rounded-md bg-white/[0.07] flex items-center justify-center group-hover:bg-[#FCAB17]/20 transition-colors">
                  <Phone className="w-2.5 h-2.5 text-[#FCAB17]" />
                </span>
                +91 7003999531
              </a>
              <a
                href="mailto:evernalacademy@gmail.com"
                className="flex items-center gap-2 text-[11px] text-white/55 hover:text-white transition-colors group"
              >
                <span className="w-5 h-5 rounded-md bg-white/[0.07] flex items-center justify-center group-hover:bg-[#FCAB17]/20 transition-colors">
                  <Mail className="w-2.5 h-2.5 text-[#FCAB17]" />
                </span>
                evernalacademy@gmail.com
              </a>
            </div>

            {/* buttons */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/enroll"
                className="inline-flex items-center gap-2 bg-[#FCAB17] text-[#08472C] text-[11px] font-bold px-5 py-2.5 rounded-xl hover:bg-[#ffc13d] transition-colors shadow-lg shadow-[#FCAB17]/20"
              >
                Enroll Now <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-[11px] font-semibold px-5 py-2.5 rounded-xl hover:border-[#FCAB17]/50 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                Schedule Visit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* gold bottom rule */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#FCAB17]/30 to-transparent" />
    </section>
  );
}
