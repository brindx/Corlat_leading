import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
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
    return <div className="py-24 text-center">Cargando galería...</div>;
  }

  // If no images in DB, show a message or use placeholders if you prefer, 
  // but for a real project, we want real data.
  if (images.length === 0) {
    return (
      <section className="py-24 bg-surface-container-high text-center" id="gallery">
        <p className="text-zinc-500">Próximamente fotos de nuestros trabajos.</p>
      </section>
    );
  }

  return (
    <section className="py-24 bg-surface-container-high" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-headline font-bold leading-none mb-4">Nuestro Trabajo Habla por Nosotros</h2>
            <p className="text-zinc-600">Evidencia real de nuestros servicios diarios en toda la República Mexicana.</p>
          </div>
          <div className="hidden md:block">
            <span className="text-primary font-bold">#FletesCorlat</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="space-y-4">
            {images.filter((_, i) => i % 4 === 0).map((img) => (
              <img key={img.id} className="w-full h-64 object-cover" src={img.image_url} alt={img.description} />
            ))}
          </div>
          {/* Column 2 */}
          <div className="space-y-4 pt-12">
            {images.filter((_, i) => i % 4 === 1).map((img) => (
              <img key={img.id} className="w-full h-80 object-cover" src={img.image_url} alt={img.description} />
            ))}
          </div>
          {/* Column 3 */}
          <div className="space-y-4">
            {images.filter((_, i) => i % 4 === 2).map((img) => (
              <img key={img.id} className="w-full h-80 object-cover" src={img.image_url} alt={img.description} />
            ))}
          </div>
          {/* Column 4 */}
          <div className="space-y-4 pt-12">
            {images.filter((_, i) => i % 4 === 3).map((img) => (
              <img key={img.id} className="w-full h-64 object-cover" src={img.image_url} alt={img.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
