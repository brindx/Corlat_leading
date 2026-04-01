import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand & Pitch */}
          <div className="space-y-6">
            <div className="text-2xl font-black uppercase tracking-tighter font-headline">Fletes y Mudanzas Corlat</div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Liderazgo industrial en transporte y logística. Conectamos destinos con seguridad, integridad y puntualidad absoluta.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">social_leaderboard</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">video_library</span>
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h5 className="text-xl font-headline font-bold mb-6">Contacto Directo</h5>
            <div className="flex items-center gap-4 text-zinc-400">
              <span className="material-symbols-outlined text-primary">call</span>
              <p className="font-headline font-bold text-white text-lg">55-1234-5678</p>
            </div>
            <div className="flex items-center gap-4 text-zinc-400">
              <span className="material-symbols-outlined text-primary">mail</span>
              <p>contacto@corlatfletes.com</p>
            </div>
            <div className="flex items-center gap-4 text-zinc-400">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <p>Estado de México / CDMX</p>
            </div>
          </div>
          {/* Fast CTA */}
          <div className="bg-zinc-900 p-8 border-l-4 border-primary">
            <h5 className="text-xl font-headline font-bold mb-4">¿Necesitas un presupuesto?</h5>
            <p className="text-zinc-400 text-sm mb-6">Respondemos en menos de 10 minutos vía WhatsApp.</p>
            <a className="bg-[#25D366] text-white w-full py-4 font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
              COTIZAR AHORA
            </a>
          </div>
        </div>
        <div className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs">© 2024 Heritage Freight & Moving. Industrial Reliability.</p>
          <div className="flex gap-8 text-xs text-zinc-500">
            <a className="hover:text-white underline decoration-red-700 decoration-2 underline-offset-4" href="#">Privacy Policy</a>
            <a className="hover:text-white underline decoration-red-700 decoration-2 underline-offset-4" href="#">Terms of Service</a>
            <a className="hover:text-white underline decoration-red-700 decoration-2 underline-offset-4" href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
