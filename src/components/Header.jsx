import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Corlat_Logo.png';

const WhatsAppIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512" 
      width="18" 
      height="18" 
      fill="currentColor" 
      className="text-white shrink-0"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.2 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/529931707640?text=%C2%A1Hola%20Corlat!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20fletes%20o%20mudanzas.%20%C2%BFMe%20podr%C3%ADan%20ayudar?";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b border-zinc-100' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 max-w-7xl mx-auto">
        {/* Logo & Brand */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => navigate('/')}
        >
            <img 
              src={Logo} 
              alt="Corlat Logo" 
              className={`transition-all duration-500 object-contain ${
                isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-14'
              }`} 
            />
            <div className="flex flex-col">
              <span className={`text-sm md:text-xl font-black uppercase tracking-tighter font-headline leading-none transition-colors duration-500 ${
                isScrolled ? 'text-zinc-900' : 'text-zinc-900 md:text-zinc-950'
              }`}>
                Fletes y Mudanzas
              </span>
              <span className="text-primary italic font-black text-xs md:text-lg uppercase tracking-tighter leading-none mt-1">Corlat</span>
            </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 items-center">
          {['Nosotros', 'Servicios', 'Material', 'Contacto'].map((item, idx) => (
            <a 
              key={item}
              className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary relative group`}
              href={`#${['about', 'services', 'gallery', 'footer'][idx]}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            className={`bg-[#25D366] text-white px-6 py-3 font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5 transition-all duration-300 shadow-md`} 
            href={whatsappUrl}
          >
            <WhatsAppIcon />
            Cotizar Ya
          </a>
        </div>

        {/* Mobile Toggle - Updated for consistent lg breakpoint */}
        <button 
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'bg-zinc-100 text-zinc-900' : 'bg-white/20 text-zinc-900'
            }`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu Sidebar - Updated for consistent lg breakpoint */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-zinc-100 p-8 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-500">
            {['Nosotros', 'Servicios', 'Material', 'Contacto'].map((item, idx) => (
              <a 
                key={item}
                className="text-xs font-black uppercase tracking-[0.3em] text-zinc-800 border-b border-zinc-50 pb-4" 
                href={`#${['about', 'services', 'gallery', 'footer'][idx]}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
                className="bg-[#25D366] text-white p-4 font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg" 
                href={whatsappUrl}
            >
                <WhatsAppIcon />
                WhatsApp Directo
            </a>
        </div>
      )}
    </nav>
  );
}
