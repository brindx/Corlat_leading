import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor" className="text-white shrink-0">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.2 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
);

export default function Footer() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/529931707640?text=%C2%A1Hola%20Corlat!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20fletes%20o%20mudanzas.%20%C2%BFMe%20podr%C3%ADan%20ayudar?";

  const openLegal = (type) => {
    window.dispatchEvent(new CustomEvent('openLegal', { detail: { type } }));
  };

  const handleAdminClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <footer className="bg-zinc-950 text-white py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand & Social */}
          <div className="space-y-6 text-center md:text-left">
            <div className="text-2xl font-black uppercase tracking-tighter font-headline">Fletes y Mudanzas Corlat</div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Liderazgo industrial en transporte y logística. Conectamos destinos con seguridad, integridad y puntualidad absoluta.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.facebook.com/share/18eNvWNPvm/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-primary transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/_corlat_latos?igsh=MTlxeXZkbzEzYzVqYw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-primary transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.tiktok.com/@fletes_mudanzas_corlat?_r=1&_t=ZS-95ADeP8oefs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-primary transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="space-y-6 text-center md:text-left">
            <h5 className="text-xl font-headline font-bold">Contacto Directo</h5>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-400">
                <PhoneIcon />
                <a href="tel:9931707640" className="font-headline font-bold text-white text-lg hover:text-primary transition-colors">993 170 7640</a>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-400 text-sm">
                <MailIcon />
                <a href="mailto:fabiolahernandezbautista500@gmail.com" className="hover:text-primary transition-colors break-all">fabiolahernandezbautista500@gmail.com</a>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-400 text-sm">
                <LocationIcon />
                <p>Villahermosa, Tabasco / CDMX</p>
              </div>
            </div>
          </div>

          {/* Fast CTA */}
          <div className="bg-zinc-900 p-8 border-l-4 border-primary">
            <h5 className="text-xl font-headline font-bold mb-4 italic">¿Necesitas presupuesto?</h5>
            <p className="text-zinc-400 text-sm mb-6">Respondemos en menos de 10 minutos vía WhatsApp.</p>
            <a 
              className="bg-[#25D366] text-white w-full py-4 font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity uppercase text-xs" 
              href={whatsappUrl}
            >
              <ChatIcon />
              COTIZAR AHORA
            </a>
          </div>
        </div>

        {/* Bottom Bar Responsivo */}
        <div className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-zinc-600 text-[10px] md:text-xs tracking-widest uppercase font-bold flex items-center">
            <button 
                onClick={handleAdminClick} 
                className="opacity-20 hover:opacity-100 transition-opacity cursor-pointer p-2 hover:text-white"
                title="Acceso Administrativo"
            >
                ©
            </button>
            <span>2026 Corlat. Todos los derechos reservados.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest">
            <button onClick={() => openLegal('privacy')} className="hover:text-white underline decoration-red-700 decoration-2 underline-offset-4">Aviso de Privacidad</button>
            <button onClick={() => openLegal('terms')} className="hover:text-white underline decoration-red-700 decoration-2 underline-offset-4">Términos y Condiciones</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
