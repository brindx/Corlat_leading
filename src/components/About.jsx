import React from 'react';

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const HandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
);

export default function About() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative group">
            {/* Minimalist corner accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-primary z-0 opacity-50"></div>
            
            <div className="relative z-10 transition-transform duration-500 hover:scale-[1.01]">
              <img 
                className="w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-b-[8px] border-primary" 
                alt="Corlat Owner" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCITKBL4aS1W6hiBFNxtfTX_f0dq4jwE6j-iZ3V4qXPybP_1ACqJ5FmYaci6K0M5JVnwQt1rwDDw3vMrpvYRinz2YneW9kRnRMPcTeLc9jz5ktzkzQD2UTOqQzyPriZg-f9KqMynEyZXaCLkOeNI3U7cf_YX7L3xBBFvXc-_2vjTMDs48g7mKwoOLQblxCMRBVytxMnVXkhrjI1Xn8fNWsqtlYAuUADIeGK_a6-QDxquSKlEq40GDdyqEEFTnkcTIz-97SIOh1Xa5ai" 
              />
              
              {/* Sello de Confianza - Ultra Estético y Pequeño */}
              <div className="absolute -bottom-4 -right-4 bg-zinc-950 p-5 shadow-2xl border-t-2 border-primary hidden md:block group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
                <p className="text-primary font-black uppercase text-[8px] tracking-[0.4em] mb-2 leading-none">Sello de Confianza</p>
                
                <div className="flex items-center gap-3">
                    <span className="text-white font-headline font-black text-4xl leading-none italic">15+</span>
                    <div className="flex flex-col">
                        <span className="text-zinc-500 font-bold uppercase text-[8px] tracking-widest leading-tight">Años de</span>
                        <span className="text-zinc-500 font-bold uppercase text-[8px] tracking-widest leading-tight">Servicio</span>
                    </div>
                </div>
                
                <div className="h-[1px] w-full bg-zinc-800 my-3"></div>
                
                <div className="flex justify-between items-center gap-6">
                    <span className="text-zinc-400 font-bold uppercase text-[8px] tracking-widest">Confianza</span>
                    <span className="text-white font-black uppercase text-[8px] tracking-widest">Trato Directo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-primary"></div>
              <h2 className="text-4xl font-headline font-black uppercase tracking-tighter italic">Quiénes Somos</h2>
            </div>
            
            <h3 className="text-2xl font-headline font-bold mb-6 text-primary italic leading-tight">Un trato directo, de dueño a dueño.</h3>
            
            <p className="text-lg text-zinc-600 font-body mb-8 leading-relaxed">
              En <strong className="text-on-surface uppercase font-black">Fletes y Mudanzas Corlat</strong> no somos una aplicación impersonal. Somos una empresa familiar liderada por personas que entienden el valor de tus pertenencias. Cada servicio es supervisado para garantizar integridad total.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 p-4 hover:bg-white transition-colors duration-300 rounded-sm">
                <ShieldIcon />
                <div>
                  <p className="font-black uppercase text-[10px] tracking-widest text-on-surface mb-1">Compromiso Total</p>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">Carga asegurada y monitoreo constante en toda la ruta.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 hover:bg-white transition-colors duration-300 rounded-sm">
                <HandIcon />
                <div>
                    <p className="font-black uppercase text-[10px] tracking-widest text-on-surface mb-1">Trato Humano</p>
                    <p className="text-zinc-500 text-[11px] leading-relaxed">Hablamos claro, cumplimos tiempos y cuidamos tu patrimonio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
