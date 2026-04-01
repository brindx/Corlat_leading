import React from 'react';

export default function WhatsAppBtn() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform" href="#">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
      </a>
    </div>
  );
}
