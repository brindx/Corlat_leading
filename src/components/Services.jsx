import React from 'react';

const servicesSet = [
  {
    title: 'Fletes Exclusivos',
    description: 'Servicio dedicado únicamente para tus pertenencias. El vehículo transporta solo tu carga, garantizando una ruta directa y con la máxima prioridad en tiempos de entrega.',
    icon: 'local_shipping'
  },
  {
    title: 'Fletes Compartidos',
    description: 'La opción inteligente para ahorrar. Transportamos las pertenencias de varios clientes en la misma unidad, permitiéndote dividir costos y pagar solo por el espacio que necesitas.',
    icon: 'group'
  },
  {
    title: 'Servicio de Embalaje',
    description: 'Protección especializada para tu patrimonio. Utilizamos playo de alta resistencia y colchonetas de protección para asegurar que cada mueble y objeto viaje totalmente blindado.',
    icon: 'inventory_2'
  },
  {
    title: 'Maniobras Profesionales',
    description: 'Nos encargamos del trabajo pesado. Servicio experto de carga y descarga de tus pertenencias, realizado por personal capacitado para el cuidado total de cada pieza.',
    icon: 'engineering'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Servicio Local y Nacional</span>
          <h2 className="text-5xl font-headline font-black uppercase tracking-tighter sm:text-6xl italic">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesSet.map((service, index) => (
            <div key={index} className="group bg-surface-container-low p-8 border-b-8 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-2 shadow-sm">
              <div className="mb-8">
                <span className="material-symbols-outlined text-5xl text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-headline font-black mb-4 uppercase tracking-tight leading-none h-12 flex items-center">
                {service.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-8 h-1 bg-zinc-200 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary text-white p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h4 className="text-2xl font-headline font-bold mb-2 uppercase italic">¿Listo para mover tus pertenencias con seguridad?</h4>
            <p className="opacity-80">Ofrecemos trato directo y soluciones adaptadas a tu presupuesto.</p>
          </div>
          <a className="whitespace-nowrap px-10 py-5 bg-white text-primary font-black uppercase tracking-widest text-sm hover:bg-zinc-100 transition-colors shadow-xl" href="https://wa.me/529931707640?text=%C2%A1Hola%20Corlat!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20fletes%20o%20mudanzas.%20%C2%BFMe%20podr%C3%ADan%20ayudar?">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
