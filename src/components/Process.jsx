import React, { useEffect, useRef, useState } from 'react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: '01',
      title: 'Cotización Inmediata',
      desc: 'Contáctenos vía WhatsApp o llamada. Evaluamos sus necesidades y entregamos un presupuesto formal en minutos.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14h6"></path><path d="M9 18h6"></path><path d="M9 10h6"></path></svg>
      )
    },
    {
      id: '02',
      title: 'Logística y Embalaje',
      desc: 'Nuestro equipo experto acude a su domicilio. Protegemos cada pieza con material industrial y organizamos la carga.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      )
    },
    {
      id: '03',
      title: 'Entrega en Destino',
      desc: 'Traslado monitoreado con entrega puntual. Descargamos y acomodamos sus bienes con total integridad.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden font-body"
      id="proceso"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header de Sección */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter italic mb-4">
            Proceso <span className="text-[#b22222]">Corlat</span>
          </h2>
          <div className="w-16 h-1 bg-[#b22222] mx-auto"></div>
          <p className="mt-6 text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px]">Tres pasos hacia su nueva ubicación</p>
        </div>

        {/* Grid de Pasos */}
        <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          {/* Línea de conexión decorativa (Solo Desktop) */}
          <div className="hidden md:block absolute top-20 left-[10%] right-[10%] h-[2px] bg-zinc-100 z-0">
             <div className={`h-full bg-[#b22222] transition-all duration-[2000ms] ease-out ${isVisible ? 'w-full' : 'w-0'}`}></div>
          </div>

          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`relative z-10 flex flex-col items-center text-center flex-1 transition-all duration-1000`}
              style={{ 
                transitionDelay: `${index * 300}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-3xl bg-zinc-950 text-white flex items-center justify-center mb-8 shadow-2xl relative group hover:bg-[#b22222] transition-colors duration-500">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-4 border-zinc-50 text-zinc-950 flex items-center justify-center font-headline font-black text-xs italic">
                  {step.id}
                </div>
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
              </div>

              {/* Contenido */}
              <h4 className="text-xl font-headline font-black uppercase tracking-tight mb-4 italic">
                {step.title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA Final */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-[1000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
           <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Eficiencia Industrial Garantizada</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
