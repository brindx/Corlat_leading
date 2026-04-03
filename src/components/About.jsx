import React from 'react';

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-zinc-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Columna de Imagen Limpia */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-primary transition-transform group-hover:scale-110 duration-500"></div>

            <div className="relative z-10 shadow-2xl overflow-hidden bg-zinc-200">
              <img
                className="w-full h-auto grayscale-0 lg:grayscale lg:hover:grayscale-0 transition-all duration-1000 scale-[1.01] lg:hover:scale-105"
                alt="Propietario Corlat"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCITKBL4aS1W6hiBFNxtfTX_f0dq4jwE6j-iZ3V4qXPybP_1ACqJ5FmYaci6K0M5JVnwQt1rwDDw3vMrpvYRinz2YneW9kRnRMPcTeLc9jz5ktzkzQD2UTOqQzyPriZg-f9KqMynEyZXaCLkOeNI3U7cf_YX7L3xBBFvXc-_2vjTMDs48g7mKwoOLQblxCMRBVytxMnVXkhrjI1Xn8fNWsqtlYAuUADIeGK_a6-QDxquSKlEq40GDdyqEEFTnkcTIz-97SIOh1Xa5ai"
              />
            </div>
          </div>

          {/* Columna de Texto */}
          <div className="w-full lg:w-1/2 space-y-8 mt-12 md:mt-0">
            <div className="flex items-center gap-5">
              <div className="w-1.5 h-12 bg-primary"></div>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-on-surface uppercase tracking-tighter italic text-left">
                Sobre <span className="text-primary italic">Nosotros</span>
              </h2>
            </div>

            <h3 className="text-xl md:text-2xl font-headline font-bold text-zinc-800 leading-tight">
              Un trato directo, de <span className="underline decoration-primary decoration-4 underline-offset-8">dueño a dueño.</span>
            </h3>

            <p className="text-base md:text-lg text-zinc-600 font-body leading-relaxed">
              En Corlat no somos una aplicación impersonal. Somos una empresa familiar liderada por personas que entienden el valor de tus pertenencias. Cada servicio es supervisado personalmente para garantizar que tu mudanza llegue intacta.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <p className="font-black text-sm uppercase tracking-widest">Compromiso</p>
                </div>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Tu carga viaja con seguro y monitoreo constante.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <p className="font-black text-sm uppercase tracking-widest">Trato Humano</p>
                </div>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Hablamos claro y cumplimos los tiempos acordados.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
