import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="bg-surface-container-low font-body text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image Overlay (Blurred) */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Fletes y Mudanzas Corlat Background" 
          className="w-full h-full object-cover filter blur-xl opacity-20" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_9oSp-b3EMSsnXfUNzKHjS4jJQaOeRPIeRX9zkUQJSk96mIGnN3dPRVRBlbxKD50HXf3JSx3sQhxfHJjNsVyb2CLJ8-A3wASNAUPeXK34jCxTJq6Uz5a21XyTYXeUF8Bp67pAIwyKzl2kmFLAprG65ZQzKghvDaquwzJWMpny7_o0EBhD21G7X9vsKN1aTQM-fRtnzlyqpXqtjAM38k_qUIvTeZXPLpwgriN2kCQ524T19HVhAeyIUJhyOnZTb_NJfvKZVYK1660d" 
        />
      </div>

      {/* Login Shell Container */}
      <main className="relative z-10 w-full max-w-md px-6 py-12">
        <div className="bg-surface-container-lowest shadow-2xl rounded-none border-t-4 border-primary overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Brand Header */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                <h1 className="font-headline font-black text-2xl tracking-tighter text-on-surface uppercase">
                  Corlat <span className="text-primary">Admin</span>
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-[24px] w-[4px] bg-primary"></div>
                <h2 className="font-headline font-bold text-xl tracking-tight text-on-surface">Acceso Administrativo</h2>
              </div>
            </div>

            {/* Form Section */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-error-container text-on-error-container p-4 text-xs font-bold uppercase tracking-widest border-l-4 border-error">
                  {error === 'Invalid login credentials' ? 'Credenciales Inválidas' : error}
                </div>
              )}
              
              {/* Email Input */}
              <div className="relative group">
                <label className="block text-xs font-semibold uppercase tracking-widest text-secondary mb-2 ml-1" htmlFor="email">Correo Electrónico</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-secondary group-focus-within:text-primary transition-colors">mail</span>
                  <input 
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none border-b-2 border-secondary focus:border-primary focus:ring-0 text-on-surface font-body transition-all outline-none" 
                    id="email" 
                    name="email" 
                    placeholder="usuario@corlat.com" 
                    required 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative group">
                <label className="block text-xs font-semibold uppercase tracking-widest text-secondary mb-2 ml-1" htmlFor="password">Contraseña</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-secondary group-focus-within:text-primary transition-colors">lock</span>
                  <input 
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none border-b-2 border-secondary focus:border-primary focus:ring-0 text-on-surface font-body transition-all outline-none" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    required 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Action Button */}
              <button 
                className="w-full bg-primary-container text-on-primary py-5 font-headline font-bold text-lg uppercase tracking-widest shadow-none hover:bg-primary active:scale-[0.98] transition-all duration-150 flex justify-center items-center gap-3 disabled:opacity-50" 
                type="submit"
                disabled={loading}
              >
                <span>{loading ? 'Entrando...' : 'Entrar al Panel'}</span>
                {!loading && <span className="material-symbols-outlined">login</span>}
              </button>
            </form>

            {/* Help Link */}
            <div className="mt-8 text-center">
              <a className="text-xs font-semibold uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center justify-center gap-1 group" href="#">
                <span>¿Olvidaste tus credenciales?</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Internal Restricted Notice */}
          <div className="bg-surface-container-low py-4 px-8 border-t border-outline-variant/10">
            <p className="text-[10px] leading-tight text-secondary text-center uppercase tracking-[0.15em] font-semibold">
              Área restringida solo para personal autorizado.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <footer className="w-full py-8 mt-auto flex flex-col items-center gap-4 text-center px-4 z-10 bg-zinc-100">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <span className="font-inter text-sm uppercase tracking-widest font-semibold text-zinc-500">Soporte Técnico</span>
          <span className="font-inter text-sm uppercase tracking-widest font-semibold text-zinc-500">Políticas de Seguridad</span>
        </div>
        <p className="font-inter text-sm uppercase tracking-widest font-semibold text-zinc-500 max-w-xl">
          © 2024 Fletes y Mudanzas Corlat. Área restringida solo para personal autorizado.
        </p>
      </footer>
    </div>
  );
}
