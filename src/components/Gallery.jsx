import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();

    // Sincronización en TIEMPO REAL: Se activa cuando hay Cambios en la DB
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'portfolio' },
        () => {
          fetchImages(); // Recarga los datos al detectar CUALQUIER cambio (Insert, Delete, Update)
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setImages(data);
    setLoading(false);
  };

  if (loading) {
    return <div className="py-24 text-center font-headline font-black uppercase text-zinc-400 animate-pulse tracking-widest text-sm">Cargando Evidencias...</div>;
  }

  if (images.length === 0) {
    return (
      <section className="py-24 bg-zinc-50 text-center" id="gallery">
        <p className="text-zinc-400 font-headline font-black uppercase tracking-widest text-xs italic">Nuestras evidencias se actualizan diariamente.</p>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-primary"></div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Nuestro Trabajo</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-headline font-black leading-none uppercase tracking-tighter italic">
                Evidencias <br/><span className="text-primary italic">Corlat</span>
            </h2>
            <p className="text-zinc-600 font-medium text-lg lg:max-w-lg">Registro real de nuestras operaciones diarias en toda la República Mexicana.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary font-black tracking-widest uppercase italic text-sm">Real Time Protocol Enabled</span>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Column Layout for Masonry-like Effect */}
          {[0, 1, 2, 3].map((colIndex) => (
            <div key={colIndex} className={`space-y-4 md:space-y-6 ${colIndex % 2 === 1 ? 'pt-12 md:pt-16' : ''}`}>
              {images.filter((_, i) => i % 4 === colIndex).map((img) => (
                <div key={img.id} className="group relative overflow-hidden bg-zinc-100 border border-zinc-200">
                    <img 
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
                        src={img.image_url} 
                        alt={img.description} 
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-zinc-950 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white text-[10px] font-black uppercase tracking-widest">{img.description || 'Logística Corlat'}</p>
                    </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
