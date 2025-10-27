import React from 'react';
import { Trash2, Flame, Server, Home, Stethoscope, Droplets, Truck, Sprout, Sun } from 'lucide-react';

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
  return (
    <section id="sectors" className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Overview of Key Sectors
          </h2>
          <p className="mt-3 text-slate-600">
            Domain depth across essential economic systems driving sustainable growth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map(({ icon: Icon, title, blurb }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{blurb}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800">
                Discuss opportunities →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
