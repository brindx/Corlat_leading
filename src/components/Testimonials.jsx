import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
);

export default function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();

    // Sincronización Real Time
    const channel = supabase
      .channel('testimonials-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'testimonials' },
        () => {
          fetchTestimonials();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setTestimonialsList(data);
    setLoading(false);
  };

  if (loading) {
    return (
        <div className="py-24 text-center">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-300 animate-pulse">Consultando Reputación...</span>
        </div>
    );
  }

  if (testimonialsList.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-zinc-50 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
            <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-1 bg-primary"></div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Reputación Industrial</span>
                <div className="w-10 h-1 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter italic">Líderes en <span className="text-primary italic">Confianza</span></h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-sm font-medium tracking-tight">La satisfacción de nuestros clientes corporativos y particulares es nuestra mayor garantía de éxito.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonialsList.map((test) => (
            <div key={test.id} className="bg-white p-10 relative border-l-8 border-zinc-950 shadow-sm hover:shadow-xl transition-all duration-500 group">
              {/* Decorative Industrial Badge */}
              <div className="absolute top-0 right-0 bg-zinc-100 px-4 py-1 text-[8px] font-black uppercase tracking-widest text-zinc-400 italic">Verified Service</div>
              
              <div className="flex gap-2 mb-6 text-primary">
                {[...Array(test.rating || 5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <blockquote className="text-zinc-600 font-body text-base leading-relaxed italic mb-8 relative">
                <span className="text-primary text-4xl absolute -top-4 -left-4 opacity-20">"</span>
                {test.text_content}
              </blockquote>

              <div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
                <div className="w-10 h-10 bg-primary/10 rounded-none flex items-center justify-center text-primary font-black uppercase tracking-tighter text-xs">
                    {test.client_name ? test.client_name.charAt(0) : 'C'}
                </div>
                <div>
                    <h4 className="font-headline font-black text-xs md:text-sm uppercase tracking-tight text-zinc-950">{test.client_name}</h4>
                    <p className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest leading-none mt-1">Cliente Certificado Corlat</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
