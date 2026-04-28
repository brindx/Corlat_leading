import React, { useEffect, useRef, useState } from 'react';

/**
 * Motor de Animación Corlat: Reveal
 * Detecta la visibilidad del elemento y activa la animación CSS correspondiente.
 */
export default function Reveal({ children, animationClass = 'animate-fade-in-up', delay = 0, threshold = 0.15 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal-hidden ${isVisible ? animationClass : ''}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}
