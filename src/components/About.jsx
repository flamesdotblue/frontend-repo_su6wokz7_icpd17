import React from 'react';
import { Globe, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              <Sparkles className="h-3.5 w-3.5" />
              Singapore’s Green Plan 2030
            </div>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Credible. Sustainable. Innovative.
            </h2>
            <p className="mt-4 text-slate-700">
              We unite domain expertise with rigorous execution to help clients
              deliver measurable impact—unlocking capital, accelerating
              decarbonisation, and building resilient infrastructure across
              Asia. Our approach blends policy insight, technical depth, and
              stakeholder alignment.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">✓</span>
                Evidence-based strategies and roadmaps
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">✓</span>
                Delivery-focused program governance
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">✓</span>
                Climate risk, adaptation and resilience
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">✓</span>
                Public–private collaboration and finance
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-0 rounded-3xl bg-gradient-to-tr from-emerald-400/20 to-sky-400/20 blur-2xl" />
            <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow">
              <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-4 py-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-rose-400" />
                <div className="h-2 w-2 rounded-full bg-amber-400" />
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-2 text-slate-500">Regional perspective</span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 ring-1 ring-emerald-200">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Asia-focused, globally connected</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Based in Singapore, we operate across ASEAN and beyond, collaborating with development banks, sovereigns, and institutional investors to deliver bankable, climate-positive projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
