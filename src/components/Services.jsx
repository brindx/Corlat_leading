import React from 'react';

const servicesList = [
  {
    icon: 'local_shipping',
    title: 'Fletes Exclusivos',
    description: 'Un vehículo dedicado únicamente a tu carga, con ruta directa y sin paradas intermedias.'
  },
  {
    icon: 'group_work',
    title: 'Fletes Compartidos',
    description: 'La opción más económica. Comparte espacio y reduce costos en traslados nacionales.'
  },
  {
    icon: 'inventory_2',
    title: 'Embalaje',
    description: 'Protección profesional con playo, cartón y mantas de alto impacto para muebles delicados.'
  },
  {
    icon: 'precision_manufacturing',
    title: 'Maniobras',
    description: 'Personal capacitado para carga, descarga y volado de muebles en edificios complejos.'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">Servicios Profesionales</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Soluciones de logística adaptadas a tu presupuesto y necesidades específicas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-surface-container-lowest p-8 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">{service.icon}</span>
              <h4 className="text-xl font-headline font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
