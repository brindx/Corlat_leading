import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const GalleryImage = ({ img }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="group relative overflow-hidden bg-zinc-100 border border-zinc-200 aspect-auto min-h-[200px] animate-fade-in-up">
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 animate-pulse">
                    <div className="w-full h-full flex items-center justify-center opacity-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </div>
                </div>
            )}
            
            <img 
                className={`w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
                src={img.image_url} 
                alt="Corlat Evidence" 
                onLoad={() => setIsLoaded(true)}
            />

            <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 z-10">
                 <p className="text-white text-[10px] font-black uppercase tracking-widest">{img.description || 'Logística Corlat'}</p>
            </div>
        </div>
    );
};

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchImages();
    const channel = supabase.channel('portfolio-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'portfolio' }, () => { fetchImages(); })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const fetchImages = async () => {
    const { data, count } = await supabase
      .from('portfolio')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });
    
    setImages(data || []);
    setTotalCount(count || 0);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const visibleImages = images.slice(0, visibleCount);

  return (
    <section className="py-24 bg-white overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-primary"></div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Logística en Acción</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black leading-tight uppercase tracking-tighter italic">
                Evidencias <br/><span className="text-primary italic">Corlat</span>
            </h2>
            <p className="text-zinc-600 font-medium text-base md:text-lg lg:max-w-lg">Mostrando {visibleImages.length} de {totalCount} servicios exitosos en territorio mexicano.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 items-start">
          {[0, 1, 2, 3].map((colIndex) => (
            <div key={colIndex} className={`flex flex-col gap-3 md:gap-6 ${colIndex % 2 === 1 ? 'mt-8 md:mt-12' : ''}`}>
              {visibleImages.filter((_, i) => i % 4 === colIndex).map((img) => (
                <GalleryImage key={img.id} img={img} />
              ))}
            </div>
          ))}
        </div>

        {visibleCount < totalCount && (
            <div className="mt-20 flex flex-col items-center gap-6">
                <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent hidden md:block"></div>
                <button 
                    onClick={handleLoadMore}
                    className="group bg-zinc-950 text-white px-10 py-6 font-black uppercase tracking-[0.3em] text-xs hover:bg-primary transition-all shadow-2xl relative overflow-hidden active:scale-95"
                >
                    <span className="relative z-10">Cargar más evidencias Corlat</span>
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
            </div>
        )}
      </div>
    </section>
  );
}
