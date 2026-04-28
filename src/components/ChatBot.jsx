import React, { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Bienvenido a Corlat Assist. ¿En qué podemos apoyarle hoy?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const options = [
    { id: 'horarios', label: 'Horarios' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'redes', label: 'Redes Sociales' },
    { id: 'servicios', label: 'Servicios' }
  ];

  const socialLinks = [
    { id: 'fb', name: 'Facebook', url: 'https://www.facebook.com/share/18eNvWNPvm/', color: 'hover:bg-[#1877F2]' },
    { id: 'ig', name: 'Instagram', url: 'https://www.instagram.com/_corlat_latos?igsh=MTlxeXZkbzEzYzVqYw==', color: 'hover:bg-[#E4405F]' },
    { id: 'tk', name: 'TikTok', url: 'https://www.tiktok.com/@fletes_mudanzas_corlat?_r=1&_t=ZS-95ADeP8oefs', color: 'hover:bg-[#000000]' }
  ];

  const knowledgeBase = {
    horarios: ["horario", "hora", "abre", "cierra", "tiempo", "sabado", "domingo", "lunes"],
    contacto: ["contacto", "telefono", "numero", "llamar", "whatsapp", "admin", "administrador", "hablar"],
    redes: ["redes", "facebook", "instagram", "social", "seguirlos", "pagina", "tiktok"],
    servicios: ["servicio", "mudanza", "flete", "maniobra", "costo", "hacen", "volado", "embalaje"]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processResponse = (input) => {
    const text = input.toLowerCase();
    if (knowledgeBase.horarios.some(k => text.includes(k))) return { text: "Atención ejecutiva: Lunes a Sábado, 08:00 - 19:00 hrs." };
    if (knowledgeBase.contacto.some(k => text.includes(k))) return { text: "Oficina central de administración: +52 993 170 7640." };
    if (knowledgeBase.redes.some(k => text.includes(k))) return { text: "Le invitamos a seguir nuestra trayectoria oficial:", isSocial: true };
    if (knowledgeBase.servicios.some(k => text.includes(k))) return { text: "Especialidades: Mudanzas locales/foráneas, maniobras y embalaje industrial." };
    return { text: "Como asistente de Corlat, solo puedo brindar información administrativa oficial." };
  };

  const handleSend = (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), text: text, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = processResponse(text);
      const botMsg = { id: Date.now() + 1, text: response.text, sender: 'bot', isSocial: response.isSocial };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-body">
      {/* Botón Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#b22222] text-white shadow-[0_10px_30px_rgba(178,34,34,0.3)] flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 group overflow-hidden"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <div className="relative flex flex-col items-center gap-0.5">
             <span className="w-4 h-0.5 bg-white rounded-full"></span>
             <span className="w-4 h-0.5 bg-white rounded-full"></span>
             <span className="w-2 h-0.5 bg-white/50 rounded-full self-start"></span>
          </div>
        )}
      </button>

      {/* Ventana de Chat */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[280px] md:w-[320px] bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.2)] overflow-hidden border border-zinc-100 flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-500 will-change-transform">
          
          <div className="p-4 border-b border-zinc-50 flex flex-col items-center bg-zinc-50/50">
                <h3 className="font-headline font-black text-[10px] uppercase tracking-[0.2em] text-zinc-950 italic">Corlat <span className="text-[#b22222]">Assist</span></h3>
                <p className="text-[7px] text-zinc-400 font-bold uppercase tracking-[0.1em] mt-1">Soporte Administrativo</p>
          </div>

          <div className="h-[220px] md:h-[280px] overflow-y-auto p-5 space-y-4 bg-zinc-50/20 scrollbar-hide">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-3 text-[11px] leading-snug rounded-xl shadow-sm ${msg.sender === 'user' ? 'bg-[#b22222] text-white rounded-tr-none' : 'bg-white text-zinc-800 rounded-tl-none border border-zinc-100'}`}>
                  {msg.text}
                </div>
                
                {msg.isSocial && (
                  <div className="grid grid-cols-1 gap-2 mt-3 w-full">
                    {socialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between p-3 bg-white border border-zinc-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-600 transition-all duration-300 hover:text-white hover:scale-[1.02] ${link.color} shadow-sm group/link animate-in zoom-in-95 duration-500`}
                        style={{ animationDelay: '200ms' }}
                      >
                        {link.name}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover/link:opacity-100 transition-opacity"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && <div className="flex gap-1 animate-pulse ml-2"><span className="w-1 h-1 bg-[#b22222]/20 rounded-full"></span><span className="w-1 h-1 bg-[#b22222]/20 rounded-full"></span><span className="w-1 h-1 bg-[#b22222]/20 rounded-full"></span></div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 py-2 flex flex-wrap gap-2 bg-white border-t border-zinc-50">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSend(opt.label)}
                className="text-[8px] font-black uppercase tracking-wider bg-zinc-50 text-zinc-500 border border-zinc-100 px-3 py-1.5 rounded-lg hover:border-[#b22222] hover:text-[#b22222] transition-all"
              >
                {opt.label}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }} className="p-4 bg-white flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Pregunte aquí..."
              className="flex-grow text-[10px] bg-zinc-50 border border-zinc-100 rounded-xl py-2 px-4 focus:outline-none focus:border-[#b22222] font-medium text-zinc-600"
            />
            <button type="submit" className="w-8 h-8 rounded-xl bg-[#b22222] text-white flex items-center justify-center hover:bg-[#8b1a1a] transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
