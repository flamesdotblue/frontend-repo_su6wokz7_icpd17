import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve contrast, does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted Advisory for Sustainable Growth
          </div>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            I-FECT Asia Advisory Pte. Ltd.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
            Strategic advisory across Infrastructure, Management, and Climate—
            helping public and private leaders accelerate projects aligned with
            Singapore’s Green Plan 2030.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-emerald-950 transition hover:bg-emerald-400"
            >
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Explore Our Expertise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
