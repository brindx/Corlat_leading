import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const GalleryImage = ({ img, isVideoLayout }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isVideo = img.image_url?.match(/\.(mp4|webm|ogg|mov)$/i) || img.description === 'Video Corlat';

    return (
        <div className={`group relative overflow-hidden bg-zinc-100 border border-zinc-200 animate-fade-in-up transition-all duration-700 w-full mb-4 md:mb-8 ${isVideoLayout ? 'shadow-xl' : 'shadow-sm'}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 animate-pulse">
                    <div className="w-full h-full flex items-center justify-center opacity-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </div>
                </div>
            )}
            
            {isVideo ? (
            <video 
              className={`w-full h-auto object-cover grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
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
                    className={`w-full h-auto object-cover grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    src={img.image_url} 
                    alt="Corlat Evidence" 
                    onLoad={() => setIsLoaded(true)}
                    loading="lazy"
                />
            )}

            <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 z-10 pointer-events-none">
                 <p className="text-white text-[11px] font-black uppercase tracking-widest leading-none">{img.description || 'Evidencia Corlat'}</p>
            </div>
        </div>
    );
};

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('photos'); // 'photos' | 'videos'
  const [totalCount, setTotalCount] = useState({ photos: 0, videos: 0 });

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

  const columnsCount = filter === 'videos' ? 2 : 4;

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
                onClick={() => setFilter('photos')}
                className={`px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] transition-all flex items-center gap-3
                    ${filter === 'photos' ? 'bg-zinc-950 text-white shadow-lg translate-y-[-1px]' : 'text-zinc-500 hover:text-zinc-800'}
                `}
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                Fotos ({totalCount.photos})
             </button>
             <button 
                onClick={() => setFilter('videos')}
                className={`px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] transition-all flex items-center gap-3
                    ${filter === 'videos' ? 'bg-zinc-950 text-white shadow-lg translate-y-[-1px]' : 'text-zinc-500 hover:text-zinc-800'}
                `}
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                Videos ({totalCount.videos})
             </button>
          </div>
        </div>
        
        <div className={`grid ${filter === 'videos' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'} gap-2 md:gap-4 items-start transition-all duration-500`}>
          {Array.from({ length: columnsCount }).map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col">
              {filteredItems.filter((_, i) => i % columnsCount === colIndex).map((img) => (
                <GalleryImage key={img.id} img={img} isVideoLayout={filter === 'videos'} />
              ))}
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
            <div className="py-20 text-center border-2 border-dashed border-zinc-100">
                <p className="text-zinc-400 font-black uppercase tracking-widest text-xs">Sin material disponible en esta sección</p>
            </div>
        )}
      </div>
    </section>
  );
}
