import React from 'react';

export default function WhatsAppBtn() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform" href="https://wa.me/529931707640?text=%C2%A1Hola%20Corlat!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20fletes%20o%20mudanzas.%20%C2%BFMe%20podr%C3%ADan%20ayudar?">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
      </a>
    </div>
  );
}
