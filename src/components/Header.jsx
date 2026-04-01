import React from 'react';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-[0_20px_40px_rgba(178,34,34,0.08)]">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-black text-zinc-900 uppercase tracking-tighter font-headline">
          Fletes y Mudanzas Corlat
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-zinc-600 font-medium hover:text-red-700 transition-colors font-headline" href="#about">Quiénes Somos</a>
          <a className="text-zinc-600 font-medium hover:text-red-700 transition-colors font-headline" href="#services">Servicios</a>
          <a className="text-zinc-600 font-medium hover:text-red-700 transition-colors font-headline" href="#gallery">Galería</a>
          <a className="text-zinc-600 font-medium hover:text-red-700 transition-colors font-headline" href="#testimonials">Testimonios</a>
          <a className="bg-[#25D366] text-white px-5 py-2 font-bold flex items-center gap-2 hover:opacity-90 transition-opacity" href="https://wa.me/yourlink">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
            WhatsApp
          </a>
        </div>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
