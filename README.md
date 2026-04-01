# 🚛 CORLAT: Logística e Infraestructura de Traslados

**Corlat** es una plataforma digital de alto nivel diseñada para el sector de transporte y logística industrial. Combina una interfaz de usuario premium, minimalista y robusta con un potente panel administrativo para la gestión de servicios, evidencias visuales y reputación corporativa.

## 🏗️ Identidad de Marca
- **Estilo Visual:** Industrial / Corporativo de alta gama.
- **Paleta de Colores:** Zinc Dark (950) con acentos en Rojo Primario (#8f000d) y verde WhatsApp corporativo.
- **Tipografía:** *Space Grotesk* para encabezados (moderna y técnica) e *Inter* para el cuerpo de texto (legibilidad máxima).

---

## 🚀 Stack Tecnológico
- **Frontend:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) (Máximo rendimiento y HMR).
- **Estilos:** [Tailwind CSS v4.0](https://tailwindcss.com/) (Configuración personalizada con diseño atómico).
- **Navegación:** [React Router v7](https://reactrouter.com/) (Gestión de rutas internas y accesos protegidos).
- **Backend (BaaS):** [Supabase](https://supabase.com/) 
  - **Auth:** Control de acceso administrativo.
  - **Database:** PostgreSQL para gestión de testimonios y servicios.
  - **Storage:** Almacenamiento seguro de evidencias visuales.
- **Iconografía:** Componentes SVG en línea permanentes (Cero dependencias externas para estabilidad total).

---

## ✨ Funcionalidades Principales

### 🌑 Experience Hub (Landing Page)
- **Diseño 100% Responsivo:** Optimizado para Desktop, Tablet y Smartphone.
- **Hero Section:** Impacto visual con efectos de cristal (glassmorphism) y llamadas a la acción directas.
- **Catálogo de Especialidades:** Disposición jerárquica (3+2 centrados) con carga diferida de iconos.
- **Acceso Social:** Integración directa con WhatsApp, Instagram, Facebook y TikTok.

### 🔐 Admin Control Center (Panel Privado)
- **Acceso Discreto:** Punto de entrada oculto en el símbolo `©` del Footer para seguridad por oscuridad.
- **Gestión de Evidencia Visual:** Módulo de carga masiva de imágenes a Supabase Storage con previsualización en tiempo real.
- **Panel de Testimonios:** Sistema de gestión (CRUD) para opiniones de clientes con puntuaciones dinámicas.
- **Barra de Navegación Móvil:** Interfaz tipo "App" para gestión táctil desde campo.

---

## 🛠️ Instalación y Desarrollo

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/brindx/Corlat_leading.git
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz con tus credenciales de Supabase:
   ```env
   VITE_SUPABASE_URL=tu_url
   VITE_SUPABASE_ANON_KEY=tu_key
   ```

4. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

---

## ⚖️ Aviso Legal
Este proyecto incluye módulos integrados para la gestión de **Aviso de Privacidad** y **Términos y Condiciones** mediante modales dinámicos controlados por eventos personalizados.

---
© 2026 Corlat. Liderazgo en Transporte y Logística.
