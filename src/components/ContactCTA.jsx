import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative w-full bg-slate-900 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),rgba(15,23,42,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Start a conversation
            </h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Share your objectives and constraints—we’ll propose a clear, pragmatic path forward aligned with the Green Plan 2030.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@ifect.asia"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-emerald-950 transition hover:bg-emerald-400"
              >
                Email us <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View services
              </a>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-emerald-500/20 p-2 text-emerald-300">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">hello@ifect.asia</div>
                <div className="text-sm text-slate-300">General enquiries</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-emerald-500/20 p-2 text-emerald-300">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">+65 6000 0000</div>
                <div className="text-sm text-slate-300">Mon–Fri, 9am–6pm SGT</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-emerald-500/20 p-2 text-emerald-300">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">Singapore</div>
                <div className="text-sm text-slate-300">Headquartered in the Lion City</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} I-FECT Asia Advisory Pte. Ltd. All rights reserved.
        </div>
      </div>
    </section>
  );
}
