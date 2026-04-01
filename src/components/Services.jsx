import React from 'react';

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4 group-hover:scale-110 transition-transform"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
);
const MixIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4 group-hover:scale-110 transition-transform"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const VoladosIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4 group-hover:scale-110 transition-transform"><path d="M21 8l-2-2-5 5V3l-2-2-2 2v8L4.5 5.5 2.5 7.5 10 15v4l2 2 2-2v-4l7-7z"></path></svg>
);
const ManiobrasIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4 group-hover:scale-110 transition-transform"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
);
const BillingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4 group-hover:scale-110 transition-transform"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);

const allServices = [
  {
    title: 'Locales y Foráneos',
    description: 'En Corlat cubrimos todas las rutas del país, desde fletes urbanos hasta traslados interestatales. Utilizamos vehículos modernos equipados con GPS para asegurar puntualidad y rastreo en tiempo real.',
    Icon: TruckIcon
  },
  {
    title: 'Compartidos y Exclusivos',
    description: 'Gestionamos logísticas de alto rendimiento adaptadas a tu presupuesto. Ofrecemos unidades de uso exclusivo o esquemas compartidos que permiten optimizar costos sin comprometer la carga.',
    Icon: MixIcon
  },
  {
    title: 'Volados Profesionales',
    description: 'Resolvemos los desafíos arquitectónicos más complejos. Nuestras maniobras incluyen personal certificado y equipo especializado para mover mobiliario de gran tamaño de forma milimétrica.',
    Icon: VoladosIcon
  },
  {
    title: 'Maniobras y Embalaje',
    description: 'Más allá del traslado, ejecutamos maniobras de carga, descarga y acomodo estratégico. Utilizamos materiales industriales para garantizar que hasta el objeto más delicado llegue intacto.',
    Icon: ManiobrasIcon
  },
  {
    title: 'Servicio de Facturación',
    description: 'Proveemos certidumbre fiscal absoluta. Emitimos facturas oficiales (CFDI) inmediatas y detalladas, facilitando la comprobación de gastos para empresas corporativas o deducciones personales.',
    Icon: BillingIcon
  }
];

export default function Services() {
  return (
    <section className="py-20 md:py-24 bg-zinc-50 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-1 bg-primary"></div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Soluciones Prime</span>
            <div className="w-8 h-1 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-black mb-4 uppercase tracking-tighter italic">Especialidades <span className="text-primary italic">Corlat</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-medium text-sm">Ofrecemos un nivel superior de logística basado en la precisión operativa y el compromiso total.</p>
        </div>

        {/* Custom Layout: 3 Top, 2 Bottom Centered */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
          {allServices.map((service, index) => (
            <div 
                key={index} 
                className={`
                    bg-white p-8 md:p-10 border-t-4 border-zinc-100 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center md:items-start md:text-left 
                    w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] min-h-[280px]
                `}
            >
              <service.Icon />
              <h4 className="text-lg font-headline font-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
