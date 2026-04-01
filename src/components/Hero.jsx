import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg8VdSZmts8y3A4S4SuJEmpEQx6ny66NPR9FkWIwgFH5sbXU8-ByFVuKGN21LrPOF2cip3WWGy-A4io0OvE1yGUQf58zXBi1KkLa_YaQKsc9QPP8W4LlTj97bUPmfQmIXdNIxreXfOnSLGJVpi8dPfHolBHoPew5rzxe4pocsnICEeiVDwQOGb2l3xYZdWNd4X7X-Q2S421NDAqe88i86S8xB_QlWSY5wYlyVWka_uU5ZPgBP9ia9pjGWfNRd6h-w9rWLlIGJG8d-u" 
          alt="Camión de carga sobre una carretera al atardecer."
        />
        <div className="absolute inset-0 bg-industrial-overlay"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-primary"></div>
            <span className="text-white font-headline font-bold tracking-widest uppercase text-sm">100% Seguro y Confiable</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white leading-tight tracking-tight mb-8">
            Fletes y Mudanzas Seguras a Toda la República
          </h1>
          <p className="text-xl text-zinc-300 mb-10 font-body leading-relaxed max-w-xl">
            Transportamos tu patrimonio con la seriedad que mereces. Desde fletes locales hasta traslados industriales nacionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a className="bg-[#25D366] text-white text-lg px-8 py-5 font-bold flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-transform duration-150" href="https://wa.me/529931707640?text=%C2%A1Hola%20Corlat!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20fletes%20o%20mudanzas.%20%C2%BFMe%20podr%C3%ADan%20ayudar?">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
              COTIZA POR WHATSAPP
            </a>
            <a className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg px-8 py-5 font-bold hover:bg-white/20 transition-colors text-center" href="#services">
              VER SERVICIOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
