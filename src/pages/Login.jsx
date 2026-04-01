import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);
const LoginIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
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
      setError('Credenciales inválidas. Solo personal autorizado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface-container-low font-body text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image Overlay (Blurred) */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Corlat Admin BG" 
          className="w-full h-full object-cover filter blur-xl opacity-10" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_9oSp-b3EMSsnXfUNzKHjS4jJQaOeRPIeRX9zkUQJSk96mIGnN3dPRVRBlbxKD50HXf3JSx3sQhxfHJjNsVyb2CLJ8-A3wASNAUPeXK34jCxTJq6Uz5a21XyTYXeUF8Bp67pAIwyKzl2kmFLAprG65ZQzKghvDaquwzJWMpny7_o0EBhD21G7X9vsKN1aTQM-fRtnzlyqpXqtjAM38k_qUIvTeZXPLpwgriN2kCQ524T19HVhAeyIUJhyOnZTb_NJfvKZVYK1660d" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/40 to-primary/20"></div>
      </div>

      <main className="relative z-10 w-full max-w-md px-6 py-12 animate-fade-in-up">
        <div className="bg-white shadow-2xl rounded-none border-t-[6px] border-primary overflow-hidden">
          <div className="p-10 md:p-14">
            {/* Brand Header */}
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TruckIcon />
                <h1 className="font-headline font-black text-3xl tracking-tighter text-on-surface uppercase">
                  Corlat <span className="text-primary italic">Admin</span>
                </h1>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-[24px] w-[3px] bg-primary"></div>
                <h2 className="font-headline font-bold text-xl tracking-tight text-zinc-400 uppercase italic">Acceso Seguro</h2>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
                <p className="text-red-700 text-xs font-bold uppercase tracking-widest">{error}</p>
              </div>
            )}

            {/* Form Section */}
            <form onSubmit={handleLogin} className="space-y-8">
              {/* Email Input */}
              <div className="relative group">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 ml-1" htmlFor="email">Correo Administrativo</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-zinc-300 group-focus-within:text-primary transition-colors">
                    <MailIcon />
                  </div>
                  <input 
                    className="w-full pl-12 pr-4 py-5 bg-zinc-50 border-none border-b-2 border-zinc-100 focus:border-primary focus:ring-0 text-on-surface font-body font-bold transition-all outline-none" 
                    id="email" 
                    type="email"
                    placeholder="usuario@corlat.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative group">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 ml-1" htmlFor="password">Contraseña</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-zinc-300 group-focus-within:text-primary transition-colors">
                    <LockIcon />
                  </div>
                  <input 
                    className="w-full pl-12 pr-4 py-5 bg-zinc-50 border-none border-b-2 border-zinc-100 focus:border-primary focus:ring-0 text-on-surface font-body font-bold transition-all outline-none" 
                    id="password" 
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
              </div>

              {/* Action Button */}
              <button 
                disabled={loading}
                className="w-full bg-zinc-900 text-white py-6 font-headline font-black text-xs uppercase tracking-[0.3em] hover:bg-primary active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-4 shadow-xl disabled:opacity-50" 
                type="submit"
              >
                <span>{loading ? 'Validando...' : 'Entrar al Panel'}</span>
                {!loading && <LoginIcon />}
              </button>
            </form>

            {/* Help Link */}
            <div className="mt-10 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Área restringida solo personal autorizado.
              </span>
            </div>
          </div>
          
          <div className="bg-zinc-50 py-4 px-8 border-t border-zinc-100 italic">
            <p className="text-[9px] text-zinc-400 text-center font-bold uppercase tracking-[0.15em]">
              Industrial Security Protocol Enabled
            </p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 w-full py-10 mt-auto flex flex-col items-center gap-4 text-center px-6">
        <p className="font-bold text-[10px] uppercase tracking-[0.4em] text-zinc-400 opacity-50">
          © 2026 Fletes y Mudanzas Corlat
        </p>
      </footer>
    </div>
  );
}
