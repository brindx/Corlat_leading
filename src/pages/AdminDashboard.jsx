import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [photos, setPhotos] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTestimonial, setNewTestimonial] = useState({ client_name: '', rating: 5, content: '' });
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
    
    // 1. Crear un nombre único para el archivo
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;

    // 2. Subir la imagen al bucket 'gallery-images' de Supabase
    // Asegúrate de que el bucket 'gallery-images' exista y sea público.
    const { error: uploadError } = await supabase.storage
      .from('gallery-images')
      .upload(fileName, file);

    if (uploadError) {
      alert('Error al subir la imagen: ' + uploadError.message);
      setLoading(false);
      return;
    }

    // 3. Obtener la URL pública de la imagen
    const { data: publicUrlData } = supabase.storage
      .from('gallery-images')
      .getPublicUrl(fileName);

    // 4. Guardar en la tabla portfolio
    const { error: dbError } = await supabase
      .from('portfolio')
      .insert([{ 
        image_url: publicUrlData.publicUrl, 
        description: 'Nuevo trabajo de mudanza' 
      }]);

    if (!dbError) {
      fetchData();
    } else {
      alert('Error al guardar en la base de datos: ' + dbError.message);
    }
    setLoading(false);
  };

  const handleDeletePhoto = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta foto?')) {
      await supabase.from('portfolio').delete().eq('id', id);
      fetchData();
    }
  };

  const handleDeleteTestimonial = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este testimonio?')) {
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
    <div className="bg-surface-container-low text-on-surface min-h-screen">
      {/* TopNavBar */}
      <header className="bg-white border-b-4 border-red-700 flex justify-between items-center px-8 h-16 w-full sticky top-0 z-50">
        <div className="text-xl font-bold tracking-tighter text-red-700 uppercase font-headline">
          Heritage Freight Admin
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden md:inline text-zinc-500 text-sm font-medium">Hola, Administrador</span>
          <button 
            onClick={handleSignOut}
            className="px-4 py-2 border-2 border-red-700 text-red-700 text-sm font-bold uppercase tracking-tight hover:bg-red-50 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      <div className="flex">
        {/* SideNavBar */}
        <aside className="hidden lg:flex flex-col h-[calc(100vh-64px)] w-64 border-r border-zinc-200 bg-zinc-100 py-6 sticky top-16">
          <div className="px-6 mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-white font-black text-xl">H</div>
            <div>
              <h3 className="font-bold text-sm font-headline leading-tight">Panel de Control</h3>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Logística Herencia</p>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <a className="flex items-center gap-3 px-6 py-4 text-red-700 bg-white border-l-4 border-red-700 font-bold" href="#photo-manager">
              <span className="material-symbols-outlined">collections</span>
              <span className="font-bold text-xs uppercase tracking-wider font-headline">Gestionar Fotos</span>
            </a>
            <a className="flex items-center gap-3 px-6 py-4 text-zinc-600 hover:bg-zinc-200 transition-transform hover:translate-x-1" href="#reviews-manager">
              <span className="material-symbols-outlined">rate_review</span>
              <span className="font-bold text-xs uppercase tracking-wider font-headline">Testimonios</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 p-8 md:p-12 space-y-16 max-w-7xl mx-auto">
          {/* Section 1: Photo Manager */}
          <section className="space-y-8" id="photo-manager">
            <div className="flex items-center gap-4">
              <div className="w-1 h-10 bg-primary"></div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase font-headline">Fotos de Trabajos (Galería)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Upload Area */}
              <label className="md:col-span-2 group relative border-4 border-dashed border-zinc-300 bg-white hover:border-red-700 hover:bg-red-50 transition-all duration-300 flex flex-col items-center justify-center p-12 cursor-pointer aspect-video md:aspect-auto">
                <span className="material-symbols-outlined text-zinc-300 group-hover:text-red-700 text-6xl mb-4 transition-colors">add_a_photo</span>
                <p className="text-zinc-500 group-hover:text-red-900 font-bold font-headline text-lg text-center uppercase tracking-tighter">📸 Sube una nueva foto</p>
                <p className="text-[10px] text-zinc-400 mt-2 uppercase">(Click para seleccionar archivo)</p>
                <input 
                  type="file" 
                  accept="image/png, image/jpeg, image/jpg" 
                  className="hidden" 
                  onChange={handleFileUpload} 
                  disabled={loading}
                />
              </label>

              {/* Photo Grid items */}
              {photos.map((photo) => (
                <div key={photo.id} className="relative group bg-white shadow-sm overflow-hidden aspect-square">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={photo.image_url} alt={photo.description} />
                  <button 
                    onClick={() => handleDeletePhoto(photo.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 active:scale-95"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-primary p-2 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <p className="text-[10px] text-white font-bold uppercase tracking-widest">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Reviews Manager */}
          <section className="space-y-8" id="reviews-manager">
            <div className="flex items-center gap-4">
              <div className="w-1 h-10 bg-primary"></div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase font-headline">Testimonios de Clientes</h2>
            </div>
            
            {/* Form Card */}
            <form onSubmit={handleAddTestimonial} className="bg-white p-8 md:p-10 border-t-4 border-primary shadow-sm space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Nombre del Cliente</label>
                  <input 
                    className="w-full bg-surface-container-high border-0 border-b-2 border-secondary focus:border-primary focus:ring-0 transition-colors py-4 px-0 font-medium" 
                    placeholder="Ej: Roberto Sánchez" 
                    type="text"
                    value={newTestimonial.client_name}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, client_name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Calificación (1-5)</label>
                  <div className="flex gap-4 items-center h-14">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star}
                        type="button"
                        onClick={() => setNewTestimonial({ ...newTestimonial, rating: star })}
                        className="material-symbols-outlined transition-colors"
                        style={{ fontVariationSettings: newTestimonial.rating >= star ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        <span className={newTestimonial.rating >= star ? "text-primary" : "text-zinc-200"}>star</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Comentario</label>
                  <textarea 
                    className="w-full bg-surface-container-high border-0 border-b-2 border-secondary focus:border-primary focus:ring-0 transition-colors py-4 px-0 font-medium resize-none" 
                    placeholder="Describe la experiencia del cliente..." 
                    rows="3"
                    value={newTestimonial.text_content}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, text_content: e.target.value })}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-primary-container text-white px-10 py-5 font-bold uppercase tracking-tighter text-lg hover:opacity-90 shadow-[0_20px_40px_rgba(178,34,34,0.08)] transition-all active:scale-95">
                  Agregar Testimonio
                </button>
              </div>
            </form>

            {/* Reviews List */}
            <div className="space-y-4">
              {testimonials.map((test) => (
                <div key={test.id} className="bg-white p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:bg-zinc-50 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold font-headline text-lg">{test.client_name}</h4>
                      <div className="flex text-primary text-xs">
                        {Array.from({ length: test.rating }).map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-zinc-600 max-w-2xl italic">{test.text_content}</p>
                  </div>
                  <button 
                    onClick={() => handleDeleteTestimonial(test.id)}
                    className="text-primary font-bold uppercase text-xs tracking-widest border-b border-primary border-opacity-20 hover:border-opacity-100 pb-1 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">delete</span>
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/85 backdrop-blur-md border-t border-zinc-200 h-16 flex items-center justify-around z-50">
        <a href="#photo-manager" className="flex flex-col items-center gap-1 text-red-700">
          <span className="material-symbols-outlined">collections</span>
          <span className="text-[9px] font-bold uppercase">Galería</span>
        </a>
        <a href="#reviews-manager" className="flex flex-col items-center gap-1 text-zinc-400">
          <span className="material-symbols-outlined">rate_review</span>
          <span className="text-[9px] font-bold uppercase">Reseñas</span>
        </a>
        <button onClick={handleSignOut} className="flex flex-col items-center gap-1 text-zinc-400">
          <span className="material-symbols-outlined">logout</span>
          <span className="text-[9px] font-bold uppercase">Salir</span>
        </button>
      </div>
    </div>
  );
}
