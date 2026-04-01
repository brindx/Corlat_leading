import React from 'react';

const socialLinks = [
  { icon: 'https://www.facebook.com/images/fb_icon_325x325.png', url: 'https://www.facebook.com/share/18eNvWNPvm/', name: 'Facebook' },
  { icon: 'https://img.icons8.com/fluent/48/000000/instagram-new.png', url: 'https://www.instagram.com/_corlat_latos?igsh=MTlxeXZkbzEzYzVqYw==', name: 'Instagram' },
  { icon: 'https://img.icons8.com/color/48/000000/tiktok.png', url: 'https://www.tiktok.com/@fletes_mudanzas_corlat?_r=1&_t=ZS-95ADeP8oefs', name: 'TikTok' }
];

// SVG Icons to avoid font issues (call, mail, etc text appearing)
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.88 12.88 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const MapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

export default function Footer() {
  const whatsappUrl = "https://wa.me/529931707640?text=%C2%A1Hola%20Corlat!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20fletes%20o%20mudanzas.%20%C2%BFMe%20podr%C3%ADan%20ayudar?";

  return (
    <footer className="bg-zinc-950 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* 1. Brand & Pitch */}
          <div className="space-y-6">
            <div className="text-2xl font-black uppercase tracking-tighter font-headline leading-none">Corlat Logística y Traslados</div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                Liderazgo industrial en transporte y mudanzas. Conectamos destinos con seguridad, integridad y puntualidad absoluta.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center grayscale hover:grayscale-0 hover:border-primary transition-all duration-300"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Contact Info (Spanish) */}
          <div className="space-y-4">
            <h5 className="text-xl font-headline font-bold mb-8 uppercase tracking-tight">Contacto Directo</h5>
            
            <div className="flex items-start gap-4 text-zinc-400 group">
              <PhoneIcon />
              <div>
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-600 block mb-1">Llámanos</span>
                <a href="tel:9931707640" className="font-headline font-black text-white text-xl hover:text-primary transition-colors tracking-tighter block leading-none">993 170 7640</a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-zinc-400 group pt-2">
              <MailIcon />
              <div className="overflow-hidden">
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-600 block mb-1">Escríbenos</span>
                <a href="mailto:fabiolahernandezbautista500@gmail.com" className="hover:text-primary transition-colors text-sm break-all font-medium block leading-none">fabiolahernandezbautista500@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-zinc-400 group pt-2">
              <MapIcon />
              <div>
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-600 block mb-1">Ubicación</span>
                <p className="text-sm font-medium leading-none text-white/90">Villahermosa, Tabasco / CDMX</p>
              </div>
            </div>
          </div>

          {/* 3. Fast CTA (Industrial Box) */}
          <div className="bg-zinc-900 p-8 border-l-4 border-primary">
            <h5 className="text-xl font-headline font-bold mb-4 uppercase">¿Necesitas presupuesto?</h5>
            <p className="text-zinc-400 text-sm mb-8 italic">Respondemos en menos de 10 minutos vía WhatsApp.</p>
            <a
              className="bg-[#25D366] text-white w-full py-4 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-200 shadow-xl"
              href={whatsappUrl}
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
              COTIZAR AHORA
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
            <a href="/login" className="hover:text-zinc-500 transition-colors mr-1">©</a> {new Date().getFullYear()} Corlat. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-600">
            <button onClick={() => window.dispatchEvent(new CustomEvent('openLegal', { detail: { type: 'privacy' } }))} className="hover:text-white transition-colors cursor-pointer underline decoration-primary/30 decoration-2 underline-offset-4">Aviso de Privacidad</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openLegal', { detail: { type: 'terms' } }))} className="hover:text-white transition-colors cursor-pointer underline decoration-primary/30 decoration-2 underline-offset-4">Términos y Condiciones</button>
            <a className="hover:text-white transition-colors underline decoration-primary/30 decoration-2 underline-offset-4" href={whatsappUrl}>Contáctanos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
