import Image from 'next/image';
import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using the Evernal Academy website and services, you accept and agree to be bound by these Terms and Conditions.',
      'If you do not agree to these terms, please do not use our website or services.',
      'These terms apply to all visitors, users, parents, guardians, and students of Evernal Academy.',
      'We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.',
    ],
  },
  {
    title: 'Admission & Enrollment',
    content: [
      'Admission to Evernal Academy programmes is subject to availability and meeting the age eligibility criteria for each programme.',
      'Submission of an inquiry form does not guarantee admission. Admission is confirmed only upon completion of all formalities and payment of fees.',
      'All information provided during the admission process must be accurate and complete. Misrepresentation may result in cancellation of admission.',
      'Evernal Academy reserves the right to refuse admission at its sole discretion.',
    ],
  },
  {
    title: 'Fees & Payment',
    content: [
      'All fees must be paid as per the schedule communicated at the time of admission.',
      'Fees once paid are non-refundable except as outlined in our Refund Policy.',
      'Late payment of fees may attract a penalty as specified in the fee schedule.',
      'Evernal Academy reserves the right to revise fee structures with prior notice to parents and guardians.',
      'Sibling discounts and other concessions are subject to verification and approval by the management.',
    ],
  },
  {
    title: 'Code of Conduct',
    content: [
      'Parents, guardians, and students are expected to maintain respectful and courteous behaviour towards staff, educators, and other families.',
      'Any form of harassment, discrimination, or abusive behaviour will not be tolerated and may result in termination of enrollment.',
      'Parents are requested to adhere to drop-off and pick-up timings as communicated by the academy.',
      'Mobile phones and electronic devices are not permitted in classrooms during school hours.',
    ],
  },
  {
    title: 'Health & Safety',
    content: [
      'Parents must inform the academy of any medical conditions, allergies, or special needs of their child at the time of admission.',
      'Children who are unwell should not be sent to school. The academy reserves the right to send a child home if they appear unwell.',
      'In case of a medical emergency, the academy will attempt to contact parents immediately and may seek medical assistance.',
      'All staff are trained in basic first aid and child safety protocols.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content on the Evernal Academy website, including text, images, logos, and curriculum materials, is the intellectual property of Evernal Academy.',
      'Reproduction, distribution, or use of any content without prior written permission is strictly prohibited.',
      'The Evernal Academy name, logo, and brand identity are registered trademarks and may not be used without authorisation.',
      'User-generated content submitted to us grants Evernal Academy a non-exclusive licence to use such content for promotional purposes.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'Evernal Academy shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.',
      'We make no warranties, express or implied, regarding the accuracy or completeness of information on our website.',
      'Our liability in any matter is limited to the fees paid by the parent or guardian for the relevant programme.',
      'Evernal Academy is not responsible for loss or damage to personal belongings brought to the academy premises.',
    ],
  },
  {
    title: 'Governing Law',
    content: [
      'These Terms and Conditions are governed by the laws of India and the jurisdiction of Kolkata, West Bengal.',
      'Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata.',
      'We encourage amicable resolution of disputes before resorting to legal proceedings.',
      'These terms constitute the entire agreement between you and Evernal Academy regarding the use of our services.',
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_9.jpeg" alt="Terms and Conditions" fill className="object-cover" style={{ objectPosition: 'center 50%' }} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/60 to-transparent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/70 font-semibold">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Terms &amp; Conditions</h1>
          <p className="text-base text-white/80 font-medium mt-2">Last updated: January 2025</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── Info Strip ── */}
      <section className="bg-[#08472C] py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FCAB17]/15 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4 text-[#FCAB17]" />
          </div>
          <p className="text-white/80 text-sm">
            Please read these terms carefully before using our services. By enrolling or using our website, you agree to these terms.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 px-6 bg-[#f7f8f6]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[220px_1fr] gap-10">

          {/* Sidebar nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-[#e8eeeb] bg-white p-5 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold mb-4">Contents</p>
              <ul className="space-y-1">
                {sections.map(({ title }, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="flex items-center gap-2 text-xs text-[#08472C]/60 hover:text-[#08472C] py-1.5 transition-colors group">
                      <span className="w-4 h-4 rounded bg-[#08472C]/8 text-[#08472C] text-[9px] font-bold flex items-center justify-center shrink-0 group-hover:bg-[#08472C] group-hover:text-white transition-colors">
                        {i + 1}
                      </span>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map(({ title, content }, i) => (
              <div key={i} id={`section-${i}`} className="bg-white rounded-2xl border border-[#e8eeeb] p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-[#08472C] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-base font-bold text-[#08472C]">{title}</h2>
                </div>
                <div className="h-px bg-[#FCAB17]/30 mb-4" />
                <ul className="space-y-2.5">
                  {content.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#0F172A]/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FCAB17] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact box */}
            <div className="bg-[#08472C] rounded-2xl p-6">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Questions?</p>
              <p className="text-white font-bold text-base mb-1">Need clarification?</p>
              <p className="text-white/70 text-sm mb-4">If you have any questions about these Terms & Conditions, our team is happy to help.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FCAB17] text-[#08472C] text-sm font-bold hover:bg-[#FCAB17]/90 transition-colors">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-[#08472C] py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="h-px bg-[#FCAB17]/40 mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">Also read our <Link href="/privacy-policy" className="text-[#FCAB17] hover:underline font-medium">Privacy Policy</Link> and <Link href="/refund-policy" className="text-[#FCAB17] hover:underline font-medium">Refund Policy</Link>.</p>
            <Link href="/admissions" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FCAB17] text-[#08472C] text-sm font-bold hover:bg-[#FCAB17]/90 transition-colors shadow-md shrink-0">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="h-px bg-[#FCAB17]/40 mt-6" />
        </div>
      </section>

    </main>
  );
}
