import React, { useState, useEffect } from 'react';

const legalTexts = {
  privacy: {
    title: 'Aviso de Privacidad',
    content: (
      <>
        <p className="mb-4 text-zinc-600 leading-relaxed text-sm">En <strong>Corlat Logística y Traslados</strong>, valoramos su privacidad. Los datos personales que recopilamos (nombre, teléfono y correo electrónico) son utilizados únicamente para fines de cotización y contacto directo con el cliente.</p>
        <p className="mb-4 text-zinc-600 leading-relaxed text-sm">No compartimos su información con terceros. Usted tiene derecho a solicitar la eliminación de sus datos en cualquier momento comunicándose directamente con nosotros.</p>
        <p className="text-zinc-600 leading-relaxed text-sm italic">Última actualización: Marzo 2024</p>
      </>
    )
  },
  terms: {
    title: 'Términos de Servicio',
    content: (
      <>
        <p className="mb-4 text-zinc-600 leading-relaxed text-sm">Al contratar nuestros servicios de fletes o mudanzas, usted acepta los siguientes términos:</p>
        <ul className="list-disc pl-5 mb-4 text-zinc-400 space-y-2 text-sm italic">
          <li>Los tiempos de entrega son estimados y pueden variar según condiciones climáticas o de tránsito.</li>
          <li>Cualquier objeto de alto valor (joyas, dinero en efectivo, documentos legales) debe ser transportado personalmente por el cliente.</li>
          <li>Corlat se responsabiliza por el manejo profesional de sus pertenencias embaladas bajo nuestros estándares.</li>
          <li>La contratación del servicio implica la aceptación de las maniobras de carga y descarga en los puntos acordados.</li>
        </ul>
        <p className="text-zinc-600 leading-relaxed text-sm">Para cualquier aclaración sobre su flete, favor de tener a la mano su número de contacto y orden de servicio.</p>
      </>
    )
  }
};

export default function LegalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('privacy');

  useEffect(() => {
    const handleOpen = (e) => {
      setType(e.detail.type);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('openLegal', handleOpen);
    return () => window.removeEventListener('openLegal', handleOpen);
  }, []);

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-zinc-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl border-l-[12px] border-primary shadow-[0_0_80px_rgba(0,0,0,0.5)] p-12 relative animate-fade-in-up">
        <button onClick={close} className="absolute top-6 right-6 text-zinc-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-primary"></div>
            <h2 className="text-3xl font-headline font-black uppercase tracking-tighter italic">{legalTexts[type].title}</h2>
          </div>
          
          <div className="border-y border-zinc-100 py-8">
            {legalTexts[type].content}
          </div>

          <button onClick={close} className="bg-primary text-white w-full py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-zinc-800 transition-colors shadow-lg">
            Entendido y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
