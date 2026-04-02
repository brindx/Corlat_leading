import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import Logo from '../assets/Corlat_Logo.png';

const GalleryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
);
const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
);
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-200 group-hover:text-primary transition-colors mb-4"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const DeleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const DeleteModal = ({ isOpen, onCancel, onConfirm, targetName, count }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/80 backdrop-blur-md animate-fade-in-up text-left">
            <div className="bg-white max-w-sm w-full border-t-[8px] border-primary p-8 shadow-2xl space-y-6 text-center">
                <div className="w-16 h-16 bg-red-50 text-primary mx-auto rounded-full flex items-center justify-center animate-pulse">
                    <DeleteIcon />
                </div>
                <div className="space-y-1">
                    <h3 className="text-xl font-headline font-black uppercase tracking-tighter italic text-zinc-950">Confirmar Baja</h3>
                    <p className="text-zinc-500 text-[10px] font-medium leading-tight italic">
                        {count > 1 
                            ? `Estás a punto de eliminar permanentemente ${count} evidencias de logística.` 
                            : `Estás a punto de eliminar permanentemente esta evidencia.`}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                    <button onClick={onCancel} className="bg-zinc-100 text-zinc-400 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-zinc-200 transition-colors">Cancelar</button>
                    <button onClick={onConfirm} className="bg-primary text-white py-4 font-black uppercase text-[10px] tracking-widest hover:brightness-110 shadow-xl shadow-primary/20">Eliminar</button>
                </div>
            </div>
        </div>
    );
};

export default function AdminDashboard() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState({ isOpen: false, ids: [], name: '' });
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { fetchData(); }, []);

  const showStatus = (msg, type = 'success') => {
    setUploadStatus({ msg, type });
    setTimeout(() => setUploadStatus(null), 3500);
  };

  const fetchData = async () => {
    setLoading(true);
    const { data: galleryData } = await supabase.from('portfolio').select('*').order('created_at', { ascending: false });
    setPhotos(galleryData || []);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;
    setLoading(true);
    showStatus(`Procesando ${files.length} archivos para Corlat...`, 'info');
    const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true };
    try {
        for (const file of files) {
            const compressedFile = await imageCompression(file, options);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage.from('gallery-images').upload(fileName, compressedFile);
            if (uploadError) throw uploadError;
            const { data: publicUrlData } = supabase.storage.from('gallery-images').getPublicUrl(fileName);
            await supabase.from('portfolio').insert([{ image_url: publicUrlData.publicUrl, description: 'Evidencia Corlat' }]);
        }
        showStatus('¡Fotos cargadas y optimizadas!');
        fetchData();
    } catch (err) {
        showStatus('Error: ' + err.message, 'error');
    } finally {
        setLoading(false);
    }
  };

  const togglePhotoSelection = (id) => {
    setSelectedPhotos(prev => 
        prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const selectAllPhotos = () => {
    if (selectedPhotos.length === photos.length) setSelectedPhotos([]);
    else setSelectedPhotos(photos.map(p => p.id));
  };

  const triggerDelete = (id) => setDeleteDialog({ isOpen: true, ids: [id], name: 'Evidencia Individual' });
  
  const triggerMultiDelete = () => {
    if (selectedPhotos.length === 0) return;
    setDeleteDialog({ isOpen: true, ids: selectedPhotos, name: `${selectedPhotos.length} fotos seleccionadas` });
  };

  const confirmDelete = async () => {
    const { ids } = deleteDialog;
    await supabase.from('portfolio').delete().in('id', ids); 
    showStatus(ids.length > 1 ? `${ids.length} evidencias eliminadas` : 'Evidencia eliminada');
    setSelectedPhotos([]);
    setDeleteDialog({ isOpen: false, ids: [], name: '' });
    fetchData();
  };

  return (
    <div className="bg-surface-container-low text-on-surface min-h-screen font-body relative text-left pb-10">
      <DeleteModal 
        isOpen={deleteDialog.isOpen} 
        onCancel={() => setDeleteDialog({ ...deleteDialog, isOpen: false })} 
        onConfirm={confirmDelete} 
        targetName={deleteDialog.name}
        count={deleteDialog.ids.length}
      />

      {uploadStatus && (
        <div className="fixed top-24 right-6 z-[60] px-6 py-4 rounded shadow-2xl animate-fade-in-up border-l-4 flex items-center gap-4 bg-white border-primary text-zinc-900 border">
            <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
            <p className="text-xs font-black uppercase tracking-widest">{uploadStatus.msg}</p>
        </div>
      )}

      <header className="bg-white border-b-4 border-primary flex justify-between items-center px-6 md:px-8 h-20 w-full sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')} title="Ver Página Pública">
            <img src={Logo} alt="Corlat Logo" className="h-10 md:h-12 w-auto object-contain" />
            <div className="flex flex-col">
                <div className="text-xl md:text-2xl font-black text-on-surface uppercase tracking-tighter font-headline leading-none group-hover:text-primary transition-colors">Corlat <span className="text-primary italic text-lg md:text-xl">Admin</span></div>
                <div className="text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] font-headline mt-1">SISTEMA LOGÍSTICO</div>
            </div>
        </div>
        <button onClick={handleSignOut} className="px-6 py-2 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all duration-300">Cerrar Sesión</button>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-14 space-y-12 md:space-y-16">
          <section className="space-y-6 md:space-y-8" id="photo-manager">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-1">
                <div className="flex items-center gap-4">
                <div className="w-1.5 h-8 md:h-10 bg-primary"></div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase font-headline italic">Galería de <span className="text-primary italic">Evidencias</span></h2>
                </div>
                
                {photos.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3">
                        <button onClick={selectAllPhotos} className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors px-3 py-2">
                            {selectedPhotos.length === photos.length ? 'Desmarcar todo' : 'Seleccionar todo'}
                        </button>
                        {selectedPhotos.length > 0 && (
                            <button onClick={triggerMultiDelete} className="bg-primary text-white px-5 py-3 text-[10px] font-black uppercase tracking-widest hover:brightness-110 flex items-center gap-2 shadow-lg shadow-primary/20 animate-fade-in outline-none">
                                <DeleteIcon /> Borrar ({selectedPhotos.length})
                            </button>
                        )}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              <label className="group relative border-2 border-dashed border-zinc-200 bg-white hover:border-primary hover:bg-zinc-50 transition-all duration-300 flex flex-col items-center justify-center p-6 cursor-pointer aspect-square order-first">
                <PlusIcon /><p className="text-zinc-600 font-bold font-headline text-[9px] md:text-[10px] text-center uppercase tracking-widest">Subir Evidencias</p>
                <input type="file" accept="image/*" multiple className="hidden" onChange={handleFileUpload} disabled={loading} />
              </label>

              {photos.map((photo) => {
                const isSelected = selectedPhotos.includes(photo.id);
                return (
                    <div key={photo.id} onClick={() => togglePhotoSelection(photo.id)} className={`relative group bg-white shadow-sm aspect-square overflow-hidden border-2 transition-all cursor-pointer ${isSelected ? 'border-primary ring-4 ring-primary/10' : 'border-zinc-50'}`}>
                        <div className={`absolute top-2 left-2 w-6 h-6 rounded-full border-2 z-20 flex items-center justify-center transition-all ${isSelected ? 'bg-primary border-primary scale-110' : 'bg-white/40 border-white md:opacity-0 md:group-hover:opacity-100'}`}>
                            {isSelected && <CheckIcon />}
                        </div>
                        <img className={`w-full h-full object-cover transition-all duration-700 ${isSelected ? 'grayscale-0 scale-105' : 'grayscale md:group-hover:grayscale-0'}`} src={photo.image_url} alt="Corlat" loading="lazy" />
                        {!isSelected && (
                            <button onClick={(e) => { e.stopPropagation(); triggerDelete(photo.id); }} className="absolute top-2 right-2 w-10 h-10 md:w-8 md:h-8 bg-zinc-950/80 backdrop-blur-sm text-white flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-all hover:bg-primary z-10"><DeleteIcon /></button>
                        )}
                    </div>
                );
              })}
            </div>
          </section>
      </main>
    </div>
  );
}
