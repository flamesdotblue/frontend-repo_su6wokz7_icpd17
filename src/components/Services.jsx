import React, { useRef } from 'react';
import { Building2, LineChart, Leaf, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    icon: Building2,
    title: 'Infrastructure Advisory',
    points: [
      'Project structuring and feasibility',
      'PPP design and risk allocation',
      'Capital planning and financing strategy',
    ],
  },
  {
    icon: LineChart,
    title: 'Management Consulting',
    points: [
      'Operating model and transformation',
      'Governance, PMO and delivery assurance',
      'Data-driven performance improvement',
    ],
  },
  {
    icon: Leaf,
    title: 'Climate & Sustainability',
    points: [
      'Net-zero pathways and decarbonisation',
      'Climate risk and resilience planning',
      'Green finance, taxonomy and reporting',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Policy & Regulatory',
    points: [
      'Regulatory impact assessments',
      'Market design and incentives',
      'Standards, compliance and assurance',
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="services" ref={ref} className="relative w-full bg-white py-20 text-slate-900 overflow-hidden">
      {/* Parallax soft gradient shapes */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#00A676]/10 blur-3xl"
        style={{ y: yBg }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#003366]/10 blur-3xl"
        style={{ y: yBg }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#003366]">
            Expertise that drives sustainable outcomes
          </h2>
          <p className="mt-3 text-slate-600">
            We partner with governments, investors and enterprises to deliver resilient, future-ready solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, points }, i) => (
            <motion.div
              key={title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(0,166,118,0.1)] text-[#00A676] ring-1 ring-[rgba(0,166,118,0.25)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {points.map((p) => (
                  <li key={p} className="leading-relaxed">• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
