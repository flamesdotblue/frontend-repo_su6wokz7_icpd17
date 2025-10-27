import React, { useRef, useState } from 'react';
import { ChevronDown, FileText, ShieldCheck, BarChart3, Calculator, Gavel, Map, Briefcase, Users, Landmark, Layers, Banknote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const offerings = [
  { title: 'Comprehensive Risk Assessment', icon: ShieldCheck, slug: 'comprehensive-risk-assessment', desc: 'Holistic identification, quantification, and mitigation of technical, financial, and regulatory risks across the project lifecycle.' },
  { title: 'Due Diligence Studies', icon: FileText, slug: 'due-diligence-studies', desc: 'Independent technical, commercial, ESG and legal reviews to inform investment and partnership decisions.' },
  { title: 'Feasibility & Bankability Studies', icon: BarChart3, slug: 'feasibility-and-bankability-studies', desc: 'Demand, technical, environmental and financial feasibility with clear pathways to bankability.' },
  { title: 'Financial Modeling & Structuring', icon: Calculator, slug: 'financial-modeling-and-structuring', desc: 'Investment-grade models, scenario analysis and optimal capital structures.' },
  { title: 'Policy & Regulatory Assessment', icon: Gavel, slug: 'policy-and-regulatory-assessment', desc: 'Impact assessments, market design and compliance strategies aligned with evolving standards.' },
  { title: 'Market Entry & Growth Strategy', icon: Map, slug: 'market-entry-and-growth-strategy', desc: 'Go-to-market, partnerships, and localisation strategies for ASEAN and wider Asia.' },
  { title: 'Commercial Assessment & Strategy', icon: Briefcase, slug: 'commercial-assessment-and-strategy', desc: 'Pricing, contract strategy, and competitive positioning to improve returns.' },
  { title: 'Stakeholder Management', icon: Users, slug: 'stakeholder-management', desc: 'Design and facilitation of multi-party alignment, communications, and governance.' },
  { title: 'Government Advisory', icon: Landmark, slug: 'government-advisory', desc: 'Public policy advisory, PPP frameworks, and program delivery support.' },
  { title: 'Asset Mergers & Acquisitions', icon: Layers, slug: 'asset-mergers-and-acquisitions', desc: 'Buy- and sell-side support including screening, valuation input, and integration planning.' },
  { title: 'Climate & Project Finance (PPP)', icon: Banknote, slug: 'climate-and-project-finance-ppp', desc: 'Green finance, taxonomy alignment, blended finance and PPP transaction advisory.' },
];

export default function Offerings() {
  const [open, setOpen] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <section id="offerings" ref={ref} className="relative w-full bg-white py-20 overflow-hidden">
      {/* Parallax ribbon */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 top-24 h-40 rounded-full bg-gradient-to-r from-[#003366]/10 via-transparent to-[#00A676]/10 blur-2xl"
        style={{ y: yBg }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#003366] sm:text-4xl">
            Services / Key Offerings
          </h2>
          <p className="mt-3 text-slate-600">
            Flexible engagement models—from rapid diagnostics to full lifecycle advisory and delivery assurance.
          </p>
        </div>

        <motion.div
          className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          {offerings.map(({ title, icon: Icon, desc, slug }, idx) => {
            const isOpen = open === idx;
            return (
              <div key={title} className="overflow-hidden">
                <button
                  className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-slate-50"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[rgba(0,166,118,0.1)] text-[#00A676] ring-1 ring-[rgba(0,166,118,0.25)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1 font-medium text-slate-900">{title}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="min-h-0 overflow-hidden px-5 pb-5 text-sm leading-relaxed text-slate-600">
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      {desc}
                    </motion.p>
                    <a
                      href={`/#offering-${slug}`}
                      className="mt-3 inline-block text-sm font-medium text-[#007e5d] hover:text-[#006e52]"
                    >
                      View details →
                    </a>
                    <div id={`offering-${slug}`} className="sr-only">{title} details</div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
