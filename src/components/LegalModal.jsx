import React, { useState, useEffect } from 'react';

export default function LegalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('privacy');

  useEffect(() => {
    const handleOpen = (e) => {
      setType(e.detail.type);
      setIsOpen(true);
    };
    window.addEventListener('openLegal', handleOpen);
    return () => window.removeEventListener('openLegal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Privacidad Corlat',
      text: (
        <div className="space-y-8 text-zinc-600">
          <div className="space-y-2">
            <h4 className="text-xl font-black uppercase text-primary italic tracking-tight">I. Compromiso Corlat</h4>
            <p className="text-base font-bold leading-relaxed">Tus datos son personales y sagrados. Solo los usamos para coordinar tu logística, facturación oficial y rastreo en tiempo real.</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-xl font-black uppercase text-zinc-950 italic tracking-tight border-l-4 border-primary pl-4">II. Tus Datos</h4>
            <p className="text-base font-bold leading-relaxed">Resguardamos: Nombre, teléfono institucional y rutas de traslado. No compartimos tu información con terceros ajenos a la operación.</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-black uppercase text-zinc-950 italic tracking-tight border-l-4 border-primary pl-4">III. Control Total</h4>
            <p className="text-base font-bold leading-relaxed">Tienes derecho a cancelar o modificar tus datos cuando desees contactando directamente a: <span className="text-primary italic">fabiolahernandezbautista500@gmail.com</span></p>
          </div>
        </div>
      )
    },
    terms: {
      title: 'Términos de Servicio',
      text: (
        <div className="space-y-10 text-zinc-600">
          <div className="space-y-2">
            <h4 className="text-xl font-black uppercase text-primary italic tracking-tight">I. Operación Segura</h4>
            <p className="text-base font-bold leading-relaxed">Al contratar Corlat, garantizamos un traslado profesional. El cliente declara el contenido real de la carga por seguridad operativa y patrimonial.</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-black uppercase text-zinc-950 italic tracking-tight border-l-4 border-primary pl-4">II. Maniobras</h4>
            <p className="text-base font-bold leading-relaxed">Movimientos técnicos como "Volados de Muebles" están sujetos a evaluación de seguridad en sitio para proteger tus bienes y nuestro personal especializado.</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-black uppercase text-zinc-950 italic tracking-tight border-l-4 border-primary pl-4">III. Cancelaciones</h4>
            <p className="text-base font-bold leading-relaxed">Para reprogramar tu flete, solicitamos un aviso de 24 horas de anticipación. Esto asegura la disponibilidad y logística de nuestras unidades pesadas.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-zinc-950/80 backdrop-blur-xl animate-fade-in-up">
      <div className="bg-white w-full max-w-3xl h-[85vh] lg:h-[80vh] flex flex-col border-t-[10px] border-primary shadow-2xl overflow-hidden">
        
        {/* Header - Industrial Refined */}
        <div className="p-6 md:p-8 border-b-2 flex justify-between items-center bg-zinc-50 sticky top-0 z-10">
          <h3 className="text-2xl md:text-3xl font-headline font-black uppercase tracking-tighter italic text-zinc-950 leading-none">
            {content[type].title}
          </h3>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white transition-colors rounded-full text-zinc-400 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Scrollable Body - Extended View */}
        <div className="flex-1 overflow-y-auto p-8 md:p-14 font-body scrollbar-thin scrollbar-thumb-primary">
          <div className="max-w-2xl mx-auto py-2">
            {content[type].text}
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-8 border-t flex justify-center bg-white">
          <button 
            onClick={() => setIsOpen(false)}
            className="bg-zinc-950 text-white w-full py-4.5 font-black uppercase tracking-[0.35em] text-[10px] md:text-xs hover:bg-primary transition-all shadow-xl active:scale-95"
          >
            ACEPTAR Y CERRAR MODAL
          </button>
        </div>
      </div>
    </div>
  );
}
