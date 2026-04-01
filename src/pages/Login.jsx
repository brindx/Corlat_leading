import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);
const LoginIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate('/admin');
    } catch (err) {
      setError('CREDENCIALES INCORRECTAS');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-950 font-body text-zinc-950 min-h-screen flex items-center justify-center relative overflow-hidden p-6 md:p-8">
      
      {/* Background (High Contrast Visual) */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Corlat Logistics Scene" 
          className="w-full h-full object-cover opacity-60 grayscale-[40%] brightness-[0.8] contrast-125" 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40"></div>
      </div>

      {/* Main Container - MEDIUM SCALE WHITE FORM */}
      <main className="relative z-10 w-full max-w-md animate-fade-in-up">
        
        <div className="bg-white p-10 md:p-14 border-t-[8px] border-primary shadow-[0_60px_120px_rgba(0,0,0,0.6)]">
          
          {/* Branding - Pro Size */}
          <div className="flex flex-col items-center mb-10">
            <div className="mb-6 scale-110">
               <TruckIcon />
            </div>
            <h1 className="font-headline font-black text-3xl md:text-4xl tracking-tighter uppercase text-zinc-950 leading-none text-center">
              Corlat <span className="text-primary italic">Admin</span>
            </h1>
            <p className="text-zinc-400 text-[10px] uppercase tracking-[.4em] font-black mt-3 italic text-center">Terminal de Gestión Corlat</p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-primary p-4 mb-8">
              <p className="text-red-700 text-xs font-black uppercase tracking-[.2em]">{error}</p>
            </div>
          )}

          {/* Form - Larger Elements */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-2 group">
              <label className="block text-[10px] font-black uppercase tracking-[.3em] text-zinc-400 group-focus-within:text-primary transition-colors">Usuario Maestro</label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-zinc-300 group-focus-within:text-primary transition-colors">
                  <MailIcon />
                </div>
                <input 
                  className="w-full pl-12 pr-4 py-4 bg-zinc-50 border-b-2 border-zinc-100 focus:border-primary focus:bg-white transition-all outline-none font-bold placeholder:text-zinc-200 text-sm tracking-wide" 
                  type="email"
                  placeholder="ID@CORLAT.COM"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="block text-[10px] font-black uppercase tracking-[.3em] text-zinc-400 group-focus-within:text-primary transition-colors">Código de Seguridad</label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-zinc-300 group-focus-within:text-primary transition-colors">
                  <LockIcon />
                </div>
                <input 
                  className="w-full pl-12 pr-4 py-4 bg-zinc-50 border-b-2 border-zinc-100 focus:border-primary focus:bg-white transition-all outline-none font-bold placeholder:text-zinc-200 text-sm tracking-wide" 
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-zinc-950 text-white py-5 font-headline font-black text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-primary active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-3 shadow-2xl disabled:opacity-50 mt-6" 
              type="submit"
            >
              <span className="relative z-10">{loading ? 'VERIFICANDO...' : 'ENTRAR AL PANEL'}</span>
              {!loading && <LoginIcon />}
            </button>
          </form>

          {/* Institutional Small */}
          <div className="mt-12 pt-8 border-t border-zinc-50">
            <p className="text-[9px] font-black uppercase tracking-[.4em] text-zinc-300 text-center italic leading-none">
               Protocolo de Seguridad Industrial Activado
            </p>
          </div>
        </div>

        {/* Footer Subtle */}
        <div className="mt-12 opacity-50 text-center">
             <p className="text-[10px] font-black tracking-[0.5em] uppercase italic text-zinc-400">LOGÍSTICA • INFRAESTRUCTURA • 2026</p>
        </div>
      </main>

    </div>
  );
}
