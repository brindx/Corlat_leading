import React from 'react';

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.548 0 10.058-4.51 10.06-10.059.002-2.689-1.047-5.215-2.951-7.121-1.905-1.905-4.433-2.953-7.124-2.953-5.549 0-10.06 4.511-10.063 10.06-.001 2.132.551 3.754 1.626 5.33l-1.066 3.891 3.999-1.049zm11.387-5.477c-.3-.149-1.774-.875-2.048-.975-.275-.1-.475-.149-.675.149-.2.299-.775.975-.95 1.175-.175.199-.35.224-.65.074-.3-.149-1.265-.466-2.41-1.487-.893-.797-1.495-1.782-1.67-2.081-.175-.299-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.589-.491-.51-.675-.519-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.299-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.099.15.2 2.115 3.23 5.125 4.532.715.31 1.273.495 1.708.633.719.227 1.373.196 1.89.119.577-.087 1.774-.725 2.024-1.424.25-.699.25-1.299.175-1.424-.075-.124-.275-.199-.575-.349z"/>
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
  const whatsappUrl = "https://wa.me/529931707640?text=%C2%A1Hola%20Corlat!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20fletes%20o%20mudanzas.%20%C2%BFMe%20podr%C3%ADan%20ayudar?";

  const openLegal = (type) => {
    window.dispatchEvent(new CustomEvent('openLegal', { detail: { type } }));
  };

  return (
    <footer className="bg-zinc-950 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Col 1: Marca & Redes */}
          <div className="space-y-6">
            <div className="text-2xl font-black uppercase tracking-tighter font-headline">Fletes y Mudanzas Corlat</div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Liderazgo industrial en transporte y logística. Conectamos destinos con seguridad, integridad y puntualidad absoluta.
            </p>
            <div className="flex gap-4">
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

          {/* Col 2: Contacto Directo */}
          <div className="space-y-6">
            <h5 className="text-xl font-headline font-bold">Contacto Directo</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-400">
                <PhoneIcon />
                <a href="tel:9931707640" className="font-headline font-bold text-white text-lg hover:text-primary transition-colors">993 170 7640</a>
              </div>
              <div className="flex items-center gap-4 text-zinc-400 text-sm">
                <MailIcon />
                <a href="mailto:fabiolahernandezbautista500@gmail.com" className="hover:text-primary transition-colors">fabiolahernandezbautista500@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-zinc-400 text-sm">
                <LocationIcon />
                <p>Villahermosa, Tabasco / CDMX</p>
              </div>
            </div>
          </div>

          {/* Col 3: CTA Fast */}
          <div className="bg-zinc-900 p-8 border-l-4 border-primary">
            <h5 className="text-xl font-headline font-bold mb-4 italic">¿Necesitas un presupuesto?</h5>
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

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-800 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs">
            © 2026 Corlat. Todos los derechos reservados. 
            <button 
                onClick={() => window.location.href='/admin'} 
                className="opacity-0 hover:opacity-100 transition-opacity ml-1"
            >
                ©
            </button>
          </p>
          <div className="flex gap-8 text-xs text-zinc-500 font-bold uppercase tracking-widest">
            <button onClick={() => openLegal('privacy')} className="hover:text-white underline decoration-red-700 decoration-2 underline-offset-4">Aviso de Privacidad</button>
            <button onClick={() => openLegal('terms')} className="hover:text-white underline decoration-red-700 decoration-2 underline-offset-4">Términos y Condiciones</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
