import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import imageCompression from 'browser-image-compression';

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2 text-primary group-hover:scale-110 transition-transform"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
);

export default function AdminDashboard({ onLogout }) {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ text: '', type: '' });
  const [selectedMedia, setSelectedMedia] = useState([]);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    const { data } = await supabase.from('portfolio').select('*').order('created_at', { ascending: false });
    setMedia(data || []);
  };

  const showStatus = (text, type = 'success') => {
    setStatus({ text, type });
    setTimeout(() => setStatus({ text: '', type: '' }), 4000);
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;
    setLoading(true);
    const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true };
    
    try {
        for (const file of files) {
            const isVideo = file.type.startsWith('video/');
            let fileToUpload = file;

            if (isVideo) {
                showStatus(`Cargando video: ${file.name}...`, 'info');
            } else {
                showStatus(`Optimizando foto: ${file.name}...`, 'info');
                fileToUpload = await imageCompression(file, options);
            }
            
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            
            const { error: uploadError } = await supabase.storage.from('gallery-images').upload(fileName, fileToUpload);
            
            if (uploadError) {
                if (uploadError.message.includes('size')) throw new Error("Archivo muy pesado (Límite 50MB)");
                throw uploadError;
            }
            
            const { data: publicUrlData } = supabase.storage.from('gallery-images').getPublicUrl(fileName);
            
            await supabase.from('portfolio').insert([{ 
                image_url: publicUrlData.publicUrl, 
                description: isVideo ? 'Video Corlat' : 'Evidencia Corlat' 
            }]);
        }
        showStatus('¡Material Corlat guardado con éxito!');
        fetchMedia();
    } catch (err) {
        showStatus('Error: ' + err.message, 'error');
    } finally {
        setLoading(false);
    }
  };

  const toggleSelection = (id) => {
    setSelectedMedia(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const deleteSelected = async () => {
    if (!window.confirm(`¿Seguro que quieres borrar estos ${selectedMedia.length} elementos de Corlat?`)) return;
    
    setLoading(true);
    try {
        const itemsToDelete = media.filter(m => selectedMedia.includes(m.id));
        for (const item of itemsToDelete) {
            const fileName = item.image_url.split('/').pop();
            await supabase.storage.from('gallery-images').remove([fileName]);
        }
        const { error } = await supabase.from('portfolio').delete().in('id', selectedMedia);
        if (error) throw error;
        showStatus('Material eliminado correctamente');
        setSelectedMedia([]);
        fetchMedia();
    } catch (err) {
        showStatus('Fallo al borrar: ' + err.message, 'error');
    } finally {
        setLoading(false);
    }
  };

  const photos = media.filter(m => !m.image_url?.match(/\.(mp4|webm|ogg|mov)$/i) && m.description !== 'Video Corlat');
  const videos = media.filter(m => m.image_url?.match(/\.(mp4|webm|ogg|mov)$/i) || m.description === 'Video Corlat');

  return (
    <div className="min-h-screen bg-zinc-50 font-body">
      {/* Header Admin */}
      <nav className="bg-zinc-950 text-white p-6 md:p-8 flex items-center justify-between shadow-2xl sticky top-0 z-50">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center font-black italic text-xl">C</div>
            <div>
                <h1 className="font-headline font-black text-lg md:text-xl uppercase tracking-tighter italic">Corlat <span className="text-primary">Admin</span></h1>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Gestión de Evidencia Industrial</p>
            </div>
        </div>
        
        <div className="flex items-center gap-3">
            {selectedMedia.length > 0 && (
                <button onClick={deleteSelected} className="bg-primary text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-red-800 transition-all shadow-lg animate-fade-in">
                    <TrashIcon /> Borrar Seleccionados ({selectedMedia.length})
                </button>
            )}
            <button onClick={onLogout} className="bg-zinc-800 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-700 transition-all border border-zinc-700">
                <LogoutIcon /> Salir del Sistema
            </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12 space-y-16">
        
        {/* Status Bar */}
        {status.text && (
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-4 rounded-none shadow-2xl z-50 border-t-4 animate-fade-in-up font-bold text-xs uppercase tracking-widest flex items-center gap-4 ${status.type === 'error' ? 'bg-white text-red-700 border-red-700' : 'bg-zinc-950 text-white border-primary'}`}>
                {status.text}
            </div>
        )}

        {/* Carga Progresiva */}
        <section className="bg-white p-8 border border-zinc-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-headline font-black uppercase tracking-tighter italic">Subida de Material</h2>
                    <p className="text-xs text-zinc-400 font-medium tracking-tight">Fotos (.jpg, .png) y Videos (.mp4) se clasifican automáticamente.</p>
                </div>
                <label className={`group relative bg-zinc-950 text-white px-10 py-5 font-black uppercase tracking-[0.3em] text-[10px] transition-all cursor-pointer hover:bg-primary ${loading ? 'opacity-50 pointer-events-none' : ''}`}>
                    <span>Elegir Archivos Corlat</span>
                    <input type="file" accept="image/*,video/*" multiple className="hidden" onChange={handleFileUpload} disabled={loading} />
                    <div className="absolute inset-0 border-2 border-white/10 m-1"></div>
                </label>
            </div>
            {loading && <div className="mt-6 h-1 bg-zinc-100 overflow-hidden"><div className="h-full bg-primary animate-progress"></div></div>}
        </section>

        {/* Sección: BÚNKER DE VIDEOS */}
        <section className="space-y-6">
            <div className="flex items-center gap-4">
                <div className="w-1.5 h-6 bg-primary"></div>
                <h3 className="text-xl font-headline font-black uppercase tracking-tighter italic">Búnker de Videos <span className="text-zinc-300 ml-2 font-body font-normal text-sm">({videos.length})</span></h3>
            </div>
            {videos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((vid) => {
                        const isSelected = selectedMedia.includes(vid.id);
                        return (
                            <div key={vid.id} onClick={() => toggleSelection(vid.id)} className={`relative group bg-white border-2 p-2 transition-all cursor-pointer ${isSelected ? 'border-primary shadow-xl scale-102 bg-primary/5' : 'border-zinc-200 shadow-sm hover:border-zinc-400'}`}>
                                <video className={`w-full aspect-video object-cover transition-all duration-700 ${isSelected ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`} src={vid.image_url} muted loop playsInline onMouseOver={e => e.target.play()} onMouseOut={e => e.target.pause()} />
                                <div className={`absolute top-4 left-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-primary border-primary' : 'bg-white/50 border-white'}`}>
                                    {isSelected && <CheckIcon />}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="py-12 text-center bg-white border-2 border-dashed border-zinc-100 text-zinc-300 font-bold uppercase tracking-widest text-[10px]">No hay videos registrados</div>
            )}
        </section>

        {/* Sección: HEMEROTECA DE FOTOS */}
        <section className="space-y-6">
            <div className="flex items-center gap-4">
                <div className="w-1.5 h-6 bg-zinc-400"></div>
                <h3 className="text-xl font-headline font-black uppercase tracking-tighter italic">Hemeroteca de Fotos <span className="text-zinc-300 ml-2 font-body font-normal text-sm">({photos.length})</span></h3>
            </div>
            {photos.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {photos.map((img) => {
                        const isSelected = selectedMedia.includes(img.id);
                        return (
                            <div key={img.id} onClick={() => toggleSelection(img.id)} className={`relative group bg-white border-2 p-1.5 transition-all cursor-pointer ${isSelected ? 'border-primary shadow-lg scale-102 bg-primary/5' : 'border-zinc-100 shadow-sm hover:border-zinc-300'}`}>
                                <img className={`w-full aspect-square object-cover transition-all duration-700 ${isSelected ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`} src={img.image_url} alt="Corlat" loading="lazy" />
                                <div className={`absolute top-3 left-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-primary border-primary' : 'bg-white/50 border-white'}`}>
                                    {isSelected && <CheckIcon />}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="py-12 text-center bg-white border-2 border-dashed border-zinc-100 text-zinc-300 font-bold uppercase tracking-widest text-[10px]">No hay fotos registradas</div>
            )}
        </section>

      </main>
    </div>
  );
}
