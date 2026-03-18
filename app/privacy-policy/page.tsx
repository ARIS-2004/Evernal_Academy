import Image from 'next/image';
import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'Personal identification information (name, email address, phone number, etc.) provided voluntarily through our inquiry and enrollment forms.',
      'Child information including name, age, and programme preferences for admission processing.',
      'Usage data such as browser type, pages visited, and time spent on our website for analytics purposes.',
      'Communication records when you contact us via email, phone, or our contact form.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'To process admission inquiries and enrollment applications for our programmes.',
      'To communicate with you regarding your child\'s education, events, and academy updates.',
      'To improve our website, services, and overall user experience.',
      'To send newsletters, promotional materials, and important announcements (with your consent).',
      'To comply with legal obligations and protect the rights of Evernal Academy.',
    ],
  },
  {
    title: 'Information Sharing & Disclosure',
    content: [
      'We do not sell, trade, or rent your personal information to third parties.',
      'We may share information with trusted service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.',
      'We may disclose information when required by law or to protect the safety and rights of our students, staff, and academy.',
      'In the event of a merger or acquisition, your information may be transferred as part of that transaction.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We implement appropriate technical and organisational security measures to protect your personal information.',
      'All data transmissions are encrypted using SSL/TLS technology.',
      'Access to personal information is restricted to authorised personnel only.',
      'We regularly review and update our security practices to maintain data integrity.',
    ],
  },
  {
    title: 'Cookies & Tracking',
    content: [
      'Our website uses cookies to enhance your browsing experience and analyse site traffic.',
      'You can choose to disable cookies through your browser settings, though this may affect website functionality.',
      'We use Google Analytics to understand how visitors interact with our website.',
      'No personally identifiable information is collected through cookies without your explicit consent.',
    ],
  },
  {
    title: 'Children\'s Privacy',
    content: [
      'We are committed to protecting the privacy of children in our care.',
      'We collect child information only as necessary for educational and administrative purposes.',
      'Parents and guardians have the right to access, correct, or request deletion of their child\'s information.',
      'We do not publish photographs or videos of children without explicit parental consent.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'You have the right to access the personal information we hold about you.',
      'You may request correction of inaccurate or incomplete information at any time.',
      'You have the right to request deletion of your personal data, subject to legal requirements.',
      'You may opt out of marketing communications at any time by contacting us.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We reserve the right to update this Privacy Policy at any time.',
      'Changes will be posted on this page with an updated revision date.',
      'We encourage you to review this policy periodically to stay informed.',
      'Continued use of our website after changes constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_5.jpeg" alt="Privacy Policy" fill className="object-cover" style={{ objectPosition: 'center 50%' }} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/60 to-transparent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/70 font-semibold">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Privacy Policy</h1>
          <p className="text-base text-white/80 font-medium mt-2">Last updated: January 2025</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── Info Strip ── */}
      <section className="bg-[#08472C] py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FCAB17]/15 flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4 text-[#FCAB17]" />
          </div>
          <p className="text-white/80 text-sm">
            Your privacy matters to us. This policy explains how Evernal Academy collects, uses, and protects your personal information.
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
              <p className="text-white font-bold text-base mb-1">Contact our team</p>
              <p className="text-white/70 text-sm mb-4">If you have any questions about this Privacy Policy, please reach out to us.</p>
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
            <p className="text-white/70 text-sm">Also read our <Link href="/terms-and-conditions" className="text-[#FCAB17] hover:underline font-medium">Terms & Conditions</Link> and <Link href="/refund-policy" className="text-[#FCAB17] hover:underline font-medium">Refund Policy</Link>.</p>
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
