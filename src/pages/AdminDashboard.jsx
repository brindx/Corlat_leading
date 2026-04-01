import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

const GalleryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
);
const ReviewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-200 group-hover:text-primary transition-colors mb-4"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const DeleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);
const StarIcon = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={filled ? "text-primary" : "text-zinc-200"}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

export default function AdminDashboard() {
  const [photos, setPhotos] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTestimonial, setNewTestimonial] = useState({ client_name: '', rating: 5, text_content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    fetchData();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/login');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const { data: galleryData } = await supabase.from('portfolio').select('*').order('created_at', { ascending: false });
    const { data: testimonialData } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
    
    setPhotos(galleryData || []);
    setTestimonials(testimonialData || []);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('gallery-images')
      .upload(fileName, file);

    if (uploadError) {
      alert('Error: ' + uploadError.message);
      setLoading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from('gallery-images')
      .getPublicUrl(fileName);

    const { error: dbError } = await supabase
      .from('portfolio')
      .insert([{ image_url: publicUrlData.publicUrl, description: 'Servicio Corlat' }]);

    if (!dbError) fetchData();
    setLoading(false);
  };

  const handleDeletePhoto = async (id) => {
    if (window.confirm('¿Eliminar foto de la galería?')) {
      await supabase.from('portfolio').delete().eq('id', id);
      fetchData();
    }
  };

  const handleDeleteTestimonial = async (id) => {
    if (window.confirm('¿Eliminar testimonio?')) {
      await supabase.from('testimonials').delete().eq('id', id);
      fetchData();
    }
  };

  const handleAddTestimonial = async (e) => {
    e.preventDefault();
    if (!newTestimonial.client_name || !newTestimonial.text_content) return;
    await supabase.from('testimonials').insert([newTestimonial]);
    setNewTestimonial({ client_name: '', rating: 5, text_content: '' });
    fetchData();
  };

  return (
    <div className="bg-surface-container-low text-on-surface min-h-screen font-body">
      {/* TopNavBar - High Density Refined */}
      <header className="bg-white border-b-4 border-primary flex justify-between items-center px-8 h-20 w-full sticky top-0 z-50 shadow-sm">
        <div className="flex flex-col">
            <div className="text-2xl font-black text-on-surface uppercase tracking-tighter font-headline leading-none">Corlat <span className="text-primary italic">Admin</span></div>
            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] font-headline mt-1">SISTEMA DE GESTIÓN LOGÍSTICA</div>
        </div>
        <button 
          onClick={handleSignOut}
          className="px-6 py-2 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all duration-300"
        >
          Cerrar Sesión
        </button>
      </header>

      <div className="flex">
        {/* SideNavBar - Standard Robust */}
        <aside className="hidden lg:flex flex-col h-[calc(100vh-80px)] w-64 border-r border-zinc-100 bg-white py-10 sticky top-20">
          <nav className="space-y-1">
            <a className="flex items-center gap-4 px-8 py-4 text-primary bg-zinc-50 border-r-4 border-primary font-black uppercase text-[10px] tracking-widest" href="#photo-manager">
              <GalleryIcon />
              Galería
            </a>
            <a className="flex items-center gap-4 px-8 py-4 text-zinc-400 hover:text-primary hover:bg-zinc-50 transition-colors font-black uppercase text-[10px] tracking-widest" href="#reviews-manager">
              <ReviewIcon />
              Testimonios
            </a>
          </nav>
        </aside>

        {/* Main Content - Balanced Focus */}
        <main className="flex-1 p-8 md:p-14 space-y-16 max-w-7xl">
          {/* Section 1: Gallery Adjusted Grid */}
          <section className="space-y-8" id="photo-manager">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-10 bg-primary"></div>
              <h2 className="text-4xl font-black tracking-tighter uppercase font-headline italic">Evidencia <span className="text-primary italic">Visual</span></h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <label className="group relative border-2 border-dashed border-zinc-200 bg-white hover:border-primary hover:bg-zinc-50 transition-all duration-300 flex flex-col items-center justify-center p-8 cursor-pointer aspect-square">
                <PlusIcon />
                <p className="text-zinc-600 font-bold font-headline text-[10px] text-center uppercase tracking-widest leading-none">Subir Obra</p>
                <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} disabled={loading} />
              </label>

              {photos.map((photo) => (
                <div key={photo.id} className="relative group bg-white shadow-sm aspect-square overflow-hidden border border-zinc-50">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={photo.image_url} alt="Corlat" />
                  <button onClick={() => handleDeletePhoto(photo.id)} className="absolute top-2 right-2 w-8 h-8 bg-zinc-950 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary"><DeleteIcon /></button>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Testimonials Compact Form */}
          <section className="space-y-8" id="reviews-manager">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-10 bg-primary"></div>
              <h2 className="text-4xl font-black tracking-tighter uppercase font-headline italic">Gestión de <span className="text-primary italic">Testimonios</span></h2>
            </div>
            
            <form onSubmit={handleAddTestimonial} className="bg-white p-10 border-t-[6px] border-primary shadow-lg space-y-8 max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Cliente / Cargo</label>
                  <input 
                    className="w-full bg-zinc-50 border-0 border-b-2 border-zinc-100 focus:border-primary focus:ring-0 transition-all py-3 px-0 font-bold uppercase text-xs" 
                    placeholder="Ej: MARÍA FERNANDA / DIRECTORA" 
                    type="text"
                    value={newTestimonial.client_name}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, client_name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Puntaje</label>
                  <div className="flex gap-4 items-center h-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" onClick={() => setNewTestimonial({ ...newTestimonial, rating: star })} className="transition-transform hover:scale-125">
                        <StarIcon filled={newTestimonial.rating >= star} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Declaración</label>
                  <textarea 
                    className="w-full bg-zinc-50 border-0 border-b-2 border-zinc-100 focus:border-primary focus:ring-0 transition-all py-3 px-0 font-medium resize-none text-sm italic" 
                    placeholder="Escribe la experiencia..." 
                    rows="2"
                    value={newTestimonial.text_content}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, text_content: e.target.value })}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-start">
                <button type="submit" className="bg-zinc-950 text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-all">
                  Guardar en el Sistema
                </button>
              </div>
            </form>

            <div className="grid grid-cols-1 gap-3 max-w-5xl">
              {testimonials.map((test) => (
                <div key={test.id} className="bg-white p-6 border-l-4 border-zinc-50 hover:border-primary transition-all flex flex-col md:flex-row justify-between items-center gap-4 group">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-black font-headline text-xs uppercase tracking-tight">{test.client_name}</h4>
                      <div className="flex gap-1">
                        {Array.from({ length: test.rating }).map((_, i) => <StarIcon key={i} filled={true} />)}
                      </div>
                    </div>
                    <p className="text-zinc-500 text-xs italic">"{test.text_content}"</p>
                  </div>
                  <button onClick={() => handleDeleteTestimonial(test.id)} className="text-zinc-200 hover:text-primary transition-all pb-1"><DeleteIcon /></button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
