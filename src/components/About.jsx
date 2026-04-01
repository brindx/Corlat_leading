import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Column with Trust Badge */}
          <div className="lg:w-1/2 relative">
            {/* Background Decor Box */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary z-0"></div>

            {/* Main Image Wrapper */}
            <div className="relative z-10 border-l-8 border-primary pl-4">
              <img
                className="w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCITKBL4aS1W6hiBFNxtfTX_f0dq4jwE6j-iZ3V4qXPybP_1ACqJ5FmYaci6K0M5JVnwQt1rwDDw3vMrpvYRinz2YneW9kRnRMPcTeLc9jz5ktzkzQD2UTOqQzyPriZg-f9KqMynEyZXaCLkOeNI3U7cf_YX7L3xBBFvXc-_2vjTMDs48g7mKwoOLQblxCMRBVytxMnVXkhrjI1Xn8fNWsqtlYAuUADIeGK_a6-QDxquSKlEq40GDdyqEEFTnkcTIz-97SIOh1Xa5ai"
                alt="Propietario de Corlat frente a su unidad de transporte, trato directo."
              />
            </div>

            {/* The "CONFIANZA" Badge */}
            <div className="absolute -bottom-10 -right-4 lg:-right-10 z-20 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-6 border-t-4 border-primary animate-fade-in-up">
              <div className="text-primary border-2 border-primary rounded-full p-1 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-1 leading-none">SELLO DE</p>
                <p className="font-headline font-black text-2xl uppercase tracking-tighter text-on-surface leading-none">CONFIANZA</p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-primary"></div>
              <h2 className="text-4xl font-headline font-bold text-on-surface uppercase tracking-tight italic">Quiénes Somos</h2>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-6 text-primary italic">Un trato directo, de dueño a dueño.</h3>

            <p className="text-lg text-zinc-600 font-body mb-8 leading-relaxed">
              En Fletes y Mudanzas Corlat no somos una aplicación impersonal. Somos una empresa familiar liderada por personas que entienden el valor de tus pertenencias. Cada servicio es supervisado para garantizar que lleguen a su destino intactos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 hover:bg-zinc-50 transition-colors border-l-2 border-transparent hover:border-primary">
                <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                <div>
                  <p className="font-bold text-on-surface uppercase text-sm tracking-widest" >Compromiso Total</p>
                  <p className="text-zinc-500 text-sm">Tu carga viaja con monitoreo constante y máxima seguridad.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 hover:bg-zinc-50 transition-colors border-l-2 border-transparent hover:border-primary">
                <span className="material-symbols-outlined text-primary mt-1">handshake</span>
                <div>
                  <p className="font-bold text-on-surface uppercase text-sm tracking-widest">Trato Humano</p>
                  <p className="text-zinc-500 text-sm">Hablamos claro, sin letras chiquitas y cumplimos los tiempos acordados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
