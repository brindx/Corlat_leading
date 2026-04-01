import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary z-0"></div>
            <img 
              className="relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCITKBL4aS1W6hiBFNxtfTX_f0dq4jwE6j-iZ3V4qXPybP_1ACqJ5FmYaci6K0M5JVnwQt1rwDDw3vMrpvYRinz2YneW9kRnRMPcTeLc9jz5ktzkzQD2UTOqQzyPriZg-f9KqMynEyZXaCLkOeNI3U7cf_YX7L3xBBFvXc-_2vjTMDs48g7mKwoOLQblxCMRBVytxMnVXkhrjI1Xn8fNWsqtlYAuUADIeGK_a6-QDxquSKlEq40GDdyqEEFTnkcTIz-97SIOh1Xa5ai" 
              alt="Dueño de flota profesional."
            />
            <div className="absolute -bottom-8 -right-8 p-8 bg-white shadow-xl hidden md:block">
              <p className="text-primary font-headline font-black text-4xl">15+</p>
              <p className="text-zinc-600 font-bold uppercase text-xs tracking-tighter">Años de Confianza</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-primary"></div>
              <h2 className="text-4xl font-headline font-bold text-on-surface">Quiénes Somos</h2>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-6 text-primary">Un trato directo, de dueño a dueño.</h3>
            <p className="text-lg text-zinc-600 font-body mb-8 leading-relaxed">
              En Fletes y Mudanzas Corlat no somos una aplicación impersonal. Somos una empresa familiar liderada por personas que entienden el valor de tus pertenencias. Cada servicio es supervisado para garantizar que lleguen a su destino intactos.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                <div>
                  <p className="font-bold text-on-surface">Compromiso Total</p>
                  <p className="text-zinc-500">Tu carga viaja con seguro y monitoreo constante.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">handshake</span>
                <div>
                  <p className="font-bold text-on-surface">Trato Humano</p>
                  <p className="text-zinc-500">Hablamos claro y cumplimos los tiempos acordados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
