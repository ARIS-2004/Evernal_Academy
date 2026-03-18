import Image from 'next/image';
import Link from 'next/link';
import { RefreshCw, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const sections = [
  {
    title: 'Registration & Admission Fees',
    content: [
      'Registration fees paid at the time of inquiry are non-refundable under any circumstances.',
      'Admission processing fees are non-refundable once the admission process has been initiated.',
      'In the event that Evernal Academy is unable to offer a seat in the applied programme, the registration fee will be fully refunded.',
      'Refunds for registration fees in exceptional circumstances are at the sole discretion of the management.',
    ],
  },
  {
    title: 'Programme Fees — Withdrawal Before Commencement',
    content: [
      'If a student withdraws before the programme commencement date, 75% of the programme fee will be refunded.',
      'Withdrawal requests must be submitted in writing at least 15 days before the programme start date to be eligible for this refund.',
      'Requests submitted less than 15 days before commencement will be eligible for a 50% refund of the programme fee.',
      'No refund will be issued for withdrawals submitted on or after the programme commencement date.',
    ],
  },
  {
    title: 'Programme Fees — Withdrawal After Commencement',
    content: [
      'No refund will be issued for fees paid once the programme has commenced, except in exceptional medical circumstances.',
      'Medical withdrawal requests must be supported by a certified medical certificate from a registered physician.',
      'Approved medical withdrawals may be eligible for a pro-rata refund of the remaining programme duration, at management\'s discretion.',
      'Transfer of fees to a future programme or batch may be considered in lieu of a refund, subject to availability.',
    ],
  },
  {
    title: 'Daycare Fees',
    content: [
      'Monthly daycare fees are payable in advance and are non-refundable for the month in which withdrawal occurs.',
      'A minimum of 30 days\' written notice is required for withdrawal from the daycare programme.',
      'Fees paid beyond the notice period will be refunded within 15 working days of the withdrawal date.',
      'No refund will be issued for days missed due to illness, holidays, or other personal reasons.',
    ],
  },
  {
    title: 'Teacher Training Programme',
    content: [
      'A 50% refund is available for withdrawals made at least 30 days before the programme start date.',
      'No refund is available for withdrawals made within 30 days of the programme start date.',
      'Once the programme has commenced, no refund will be issued regardless of the reason for withdrawal.',
      'Course materials and resources provided are non-refundable once distributed.',
    ],
  },
  {
    title: 'Refund Process',
    content: [
      'All refund requests must be submitted in writing to evernalacademy@gmail.com or in person at the academy office.',
      'Refund requests will be reviewed and processed within 10–15 working days of receipt.',
      'Approved refunds will be credited to the original payment method or via bank transfer.',
      'Evernal Academy reserves the right to deduct any outstanding dues before processing a refund.',
    ],
  },
  {
    title: 'Non-Refundable Items',
    content: [
      'Uniforms, books, stationery kits, and other physical materials once issued are non-refundable.',
      'Activity fees, excursion fees, and event fees are non-refundable once the activity has taken place.',
      'Annual day, sports day, and other event participation fees are non-refundable.',
      'Any fees paid for optional add-on services are non-refundable once the service has been availed.',
    ],
  },
  {
    title: 'Exceptional Circumstances',
    content: [
      'In cases of relocation outside the city, a partial refund may be considered upon submission of proof of relocation.',
      'Refunds due to programme cancellation by Evernal Academy will be processed in full within 10 working days.',
      'Force majeure events (natural disasters, government orders, etc.) will be handled on a case-by-case basis.',
      'All exceptional refund requests are subject to management approval and are final.',
    ],
  },
];

const refundSummary = [
  { scenario: 'Registration Fee',                    refund: 'Non-refundable',  eligible: false },
  { scenario: 'Withdrawal 15+ days before start',    refund: '75% refund',      eligible: true  },
  { scenario: 'Withdrawal <15 days before start',    refund: '50% refund',      eligible: true  },
  { scenario: 'Withdrawal after commencement',       refund: 'No refund',       eligible: false },
  { scenario: 'Medical withdrawal (with cert.)',     refund: 'Pro-rata refund', eligible: true  },
  { scenario: 'Programme cancelled by academy',      refund: 'Full refund',     eligible: true  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_11.jpeg" alt="Refund Policy" fill className="object-cover" style={{ objectPosition: 'center 50%' }} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/60 to-transparent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/70 font-semibold">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Refund Policy</h1>
          <p className="text-base text-white/80 font-medium mt-2">Last updated: January 2025</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── Info Strip ── */}
      <section className="bg-[#08472C] py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FCAB17]/15 flex items-center justify-center shrink-0">
            <RefreshCw className="w-4 h-4 text-[#FCAB17]" />
          </div>
          <p className="text-white/80 text-sm">
            We strive to be transparent about our refund policy. Please read carefully before enrolling in any programme.
          </p>
        </div>
      </section>

      {/* ── Quick Summary ── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Quick Reference</span>
          </div>
          <h2 className="text-2xl font-bold text-[#08472C] mb-6">Refund Summary</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {refundSummary.map(({ scenario, refund, eligible }) => (
              <div key={scenario} className="flex items-start gap-3 bg-white rounded-xl border border-[#e8eeeb] p-4 shadow-sm">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${eligible ? 'bg-[#08472C]/10' : 'bg-red-50'}`}>
                  {eligible
                    ? <CheckCircle className="w-4 h-4 text-[#08472C]" />
                    : <XCircle className="w-4 h-4 text-red-400" />
                  }
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#08472C]">{scenario}</p>
                  <p className={`text-xs mt-0.5 font-medium ${eligible ? 'text-[#08472C]/60' : 'text-red-400'}`}>{refund}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-10 px-6 bg-[#f7f8f6]">
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
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Need Help?</p>
              <p className="text-white font-bold text-base mb-1">Submit a refund request</p>
              <p className="text-white/70 text-sm mb-4">For refund requests or queries, contact us at <span className="text-[#FCAB17]">evernalacademy@gmail.com</span> or visit us in person.</p>
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
            <p className="text-white/70 text-sm">Also read our <Link href="/privacy-policy" className="text-[#FCAB17] hover:underline font-medium">Privacy Policy</Link> and <Link href="/terms-and-conditions" className="text-[#FCAB17] hover:underline font-medium">Terms & Conditions</Link>.</p>
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
