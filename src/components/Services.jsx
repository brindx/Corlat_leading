import React from 'react';

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
);
const GroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><line x1="16.5" y1="9.4" x2="7.5" y2="4.6"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
);
const ToolsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
);

const servicesSet = [
  {
    title: 'Fletes Exclusivos',
    description: 'Servicio dedicado únicamente para tus pertenencias. El vehículo transporta solo tu carga, garantizando una ruta directa y con la máxima prioridad en tiempos de entrega.',
    Icon: TruckIcon
  },
  {
    title: 'Fletes Compartidos',
    description: 'La opción inteligente para ahorrar. Transportamos las pertenencias de varios clientes en la misma unidad, permitiéndote dividir costos y pagar solo por el espacio que necesitas.',
    Icon: GroupIcon
  },
  {
    title: 'Servicio de Embalaje',
    description: 'Protección especializada para tu patrimonio. Utilizamos playo de alta resistencia y colchonetas de protección para asegurar que cada mueble y objeto viaje totalmente blindado.',
    Icon: PackageIcon
  },
  {
    title: 'Maniobras Profesionales',
    description: 'Nos encargamos del trabajo pesado. Servicio experto de carga y descarga de tus pertenencias, realizado por personal capacitado para el cuidado total de cada pieza.',
    Icon: ToolsIcon
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
          {servicesSet.map((service, index) => (
            <div key={index} className="bg-surface-container-lowest p-8 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <service.Icon />
              <h4 className="text-xl font-headline font-bold mb-4 leading-tight">{service.title}</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
