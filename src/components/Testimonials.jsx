import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
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
    return <div className="py-24 text-center">Cargando testimonios...</div>;
  }

  if (testimonialsList.length === 0) {
    return null; // Don't show the section if empty
  }

  return (
    <section className="py-24 bg-surface" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-headline font-bold text-center mb-16">Clientes Satisfechos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((test, index) => (
            <div key={test.id} className="bg-surface-container-low p-8 relative">
              <div className="text-primary-container mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                ))}
              </div>
              <p className="text-on-surface font-body italic mb-6">"{test.text_content}"</p>
              <div className="border-t border-zinc-300 pt-4">
                <p className="font-bold text-sm uppercase font-headline">{test.client_name}</p>
                {/* No type in the user's DB schema, so we can omit or add later */}
                {/* <p className="text-zinc-500 text-xs">{test.type}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
