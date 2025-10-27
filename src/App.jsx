import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Offerings from './components/Offerings';
import About from './components/About';
import ContactCTA from './components/ContactCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-[#003366] shadow-sm" />
            <span className="font-heading text-lg font-semibold tracking-tight text-[#003366]">
              I-FECT Asia Advisory
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#sectors" className="hover:text-slate-900">Sectors</a>
            <a href="#offerings" className="hover:text-slate-900">Offerings</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="rounded-lg bg-[#00A676] px-3 py-2 text-white shadow hover:bg-[#009765]">Get in touch</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Sectors />
        <Offerings />
        <About />
        <ContactCTA />
      </main>
    </div>
  );
}
