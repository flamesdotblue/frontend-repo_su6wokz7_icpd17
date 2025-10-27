import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[#003366] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve contrast, does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,166,118,0.25),rgba(0,51,102,0.2)_40%,rgba(0,51,102,0.9))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(0,166,118,0.35)] bg-[rgba(0,166,118,0.12)] px-3 py-1 text-xs text-[#9EE6D2]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted Advisory for Sustainable Growth
          </div>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            I-FECT Asia Advisory Pte. Ltd.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
            Strategic advisory across Infrastructure, Management, and Climate—
            helping public and private leaders accelerate projects aligned with
            Singapore’s Green Plan 2030.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#00A676] px-5 py-3 font-medium text-[#002a4d] shadow transition hover:bg-[#009765]"
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
