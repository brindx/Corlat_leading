import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const GalleryImage = ({ img, isVideoLayout }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isVideo = img.image_url?.match(/\.(mp4|webm|ogg|mov)$/i) || img.description === 'Video Corlat';

    return (
        <div className={`group relative overflow-hidden bg-zinc-100 border border-zinc-200 animate-fade-in transition-all duration-700 w-full mb-0 ${isVideoLayout ? 'shadow-xl' : 'shadow-sm'}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
            )}
            
            <div className={`relative group w-full ${isVideo ? 'aspect-video' : 'aspect-[3/4]'} overflow-hidden`}>
              {isVideo ? (
                <video 
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
                  src={img.image_url} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                  disablePictureInPicture
                  onLoadedData={() => setIsLoaded(true)}
                />
              ) : (
                    <img 
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
                        src={img.image_url} 
                        alt="Corlat Evidence" 
                        onLoad={() => setIsLoaded(true)}
                        loading="lazy"
                    />
                )}

                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 z-10 pointer-events-none">
                     <p className="text-white text-[10px] font-black uppercase tracking-widest leading-none">{img.description || 'Evidencia Corlat'}</p>
                </div>
            </div>
        </div>
    );
};

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('photos'); // 'photos' | 'videos transition'
  const [totalCount, setTotalCount] = useState({ photos: 0, videos: 0 });
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetchImages();
    const channel = supabase.channel('portfolio-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'portfolio' }, () => { fetchImages(); })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const fetchImages = async () => {
    const { data } = await supabase
      .from('portfolio')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) {
        const photos = data.filter(img => !img.image_url?.match(/\.(mp4|webm|ogg|mov)$/i) && img.description !== 'Video Corlat');
        const videos = data.filter(img => img.image_url?.match(/\.(mp4|webm|ogg|mov)$/i) || img.description === 'Video Corlat');
        
        setImages(data);
        setTotalCount({ photos: photos.length, videos: videos.length });
    }
  };

  const filteredItems = images.filter(img => {
      const isVid = img.image_url?.match(/\.(mp4|webm|ogg|mov)$/i) || img.description === 'Video Corlat';
      return filter === 'videos' ? isVid : !isVid;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);
  const showLoadMore = visibleCount < filteredItems.length;
  const columnsCount = filter === 'videos' ? 2 : 4;

  const toggleShowAll = () => {
      if (visibleCount < filteredItems.length) {
          setVisibleCount(filteredItems.length);
      } else {
          setVisibleCount(4);
          const gallerySection = document.getElementById('gallery');
          if (gallerySection) {
              gallerySection.scrollIntoView({ behavior: 'smooth' });
          }
      }
  };

  const loadMore = () => {
      setVisibleCount(prev => Math.min(prev + 4, filteredItems.length));
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-primary"></div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Portafolio Corlat</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black leading-tight uppercase tracking-tighter italic">
                Evidencias <br/><span className="text-primary italic">Reales</span>
            </h2>
          </div>

          {/* Filtros Industriales */}
          <div className="flex bg-zinc-100 p-1 rounded-none border border-zinc-200">
             <button 
                onClick={() => { setFilter('photos'); setVisibleCount(4); }}
                className={`px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center gap-3
                    ${filter === 'photos' ? 'bg-zinc-950 text-white shadow-lg translate-y-[-1px]' : 'text-zinc-500 hover:text-zinc-800'}
                `}
             >
                Fotos ({totalCount.photos})
             </button>
             <button 
                onClick={() => { setFilter('videos'); setVisibleCount(4); }}
                className={`px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center gap-3
                    ${filter === 'videos' ? 'bg-zinc-950 text-white shadow-lg translate-y-[-1px]' : 'text-zinc-500 hover:text-zinc-800'}
                `}
             >
                Videos ({totalCount.videos})
             </button>
          </div>
        </div>
        
        {/* Galería de Cuadrícula Industrial (Sin huecos) */}
        <div className={`grid ${filter === 'videos' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'} gap-4 md:gap-6 animate-fade-in`}>
          {displayedItems.map((img) => (
            <GalleryImage 
              key={img.id} 
              img={img} 
              isVideoLayout={filter === 'videos'} 
            />
          ))}
        </div>

        {/* Paneles de Control Maestro */}
        {filteredItems.length > 4 && (
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
                {showLoadMore && (
                    <button 
                        onClick={loadMore}
                        className="w-full md:w-auto bg-zinc-100 text-zinc-950 px-10 py-5 font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:bg-zinc-200"
                    >
                        Ver más poco a poco
                    </button>
                )}
                
                <button 
                    onClick={toggleShowAll}
                    className="group relative w-full md:w-auto bg-zinc-950 text-white px-12 py-5 font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:bg-primary hover:shadow-2xl hover:translate-y-[-4px]"
                >
                    <div className="absolute inset-0 border-2 border-white/10 m-1"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        {visibleCount < filteredItems.length ? 'Mostrar Todo el Material' : 'Colapsar portafolio'}
                        <svg 
                            className={`w-3 h-3 transition-transform duration-500 ${visibleCount < filteredItems.length ? 'rotate-0' : 'rotate-180'}`} 
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </span>
                </button>
            </div>
        )}

        {filteredItems.length === 0 && (
            <div className="py-20 text-center border-2 border-dashed border-zinc-100">
                <p className="text-zinc-400 font-black uppercase tracking-widest text-xs">Sin material disponible en esta sección</p>
            </div>
        )}
      </div>
    </section>
  );
}
