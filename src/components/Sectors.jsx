import React, { useRef } from 'react';
import { Trash2, Flame, Server, Home, Stethoscope, Droplets, Truck, Sprout, Sun } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sectors = [
  { icon: Trash2, title: 'Solid Waste', blurb: 'Integrated waste systems, circularity, and resource recovery.' },
  { icon: Flame, title: 'Oil & Gas', blurb: 'Transition planning, decarbonisation, and asset optimisation.' },
  { icon: Server, title: 'Digital Infrastructure', blurb: 'Data centres, connectivity, and smart infrastructure.' },
  { icon: Home, title: 'Real Estate & Housing', blurb: 'Sustainable development, retrofits, and financing models.' },
  { icon: Stethoscope, title: 'Healthcare & Hospitals', blurb: 'Resilient healthcare assets and operational excellence.' },
  { icon: Droplets, title: 'Water & Waste Water', blurb: 'Treatment, reuse, and resilient water networks.' },
  { icon: Truck, title: 'Transport & Logistics', blurb: 'Low-emission mobility and efficient supply chains.' },
  { icon: Sprout, title: 'Agri-Logistics & Supply Chain', blurb: 'Cold chains, traceability, and sustainable yields.' },
  { icon: Sun, title: 'Renewables & Storage', blurb: 'Solar, wind, hybrid systems, and storage integration.' },
];

export default function Sectors() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section id="sectors" ref={ref} className="relative w-full bg-slate-50 py-20 overflow-hidden">
      {/* Parallax background layers */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#00A676]/10 blur-3xl"
        style={{ y: ySlow }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-10 h-[360px] w-[360px] rounded-full bg-[#003366]/10 blur-3xl"
        style={{ y: yFast }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#003366] sm:text-4xl">
            Overview of Key Sectors
          </h2>
          <p className="mt-3 text-slate-600">
            Domain depth across essential economic systems driving sustainable growth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map(({ icon: Icon, title, blurb }, i) => (
            <motion.div
              key={title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -8, rotateX: 0, rotateY: 0 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(0,166,118,0.1)] text-[#00A676] ring-1 ring-[rgba(0,166,118,0.25)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{blurb}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-[#007e5d] hover:text-[#006e52]">
                Discuss opportunities →
              </a>
              {/* Subtle inner highlight that moves slower for depth */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00A676]/[0.05] to-transparent"
                style={{ y: ySlow }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
