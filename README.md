# APU-Gen Embobinados - Frontend ⚡️

Aplicación frontend para la gestión y cálculo de Análisis de Precios Unitarios (APUs) orientados a talleres de rebobinado de motores y reparación de componentes. 

Este proyecto está diseñado para consumir la API REST construida en Spring Boot, proporcionando una interfaz de usuario rápida, tipada y escalable.

## 🚀 Stack Tecnológico

Este proyecto utiliza un ecosistema moderno y de alto rendimiento:

*   **Framework:** [React 18](https://react.dev/)
*   **Herramienta de Construcción:** [Vite](https://vitejs.dev/) (Rendimiento ultrarrápido)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado estricto para reflejar las entidades de Java)
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Motor en Rust, sin archivos de configuración complejos)
*   **Componentes UI:** [DaisyUI](https://daisyui.com/)
*   **Cliente HTTP:** Axios (Con interceptores para el `GlobalExceptionHandler` del backend)
*   **Enrutamiento:** React Router DOM
*   **Linter:** [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (Linter ultrarrápido escrito en Rust)

## 📋 Requisitos Previos

Asegúrate de tener instalado en tu entorno local:
*   [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada).
*   El backend de **APU-Gen (Spring Boot + PostgreSQL)** en ejecución en el puerto `8080` con los permisos CORS configurados globalmente.

## 🛠️ Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/embobinados-frontend.git
   cd embobinados-frontend
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Levantar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El frontend estará disponible en [http://localhost:5173](http://localhost:5173).

## 📂 Estructura del Proyecto (Sugerida)

```text
src/
├── assets/         # Imágenes, iconos y recursos estáticos
├── components/     # Componentes reutilizables (Botones, Modales, Tablas)
├── hooks/          # Custom Hooks de React (ej. useApus, useCatalog)
├── pages/          # Vistas principales de la aplicación (Router)
├── services/       # Lógica de comunicación con el Backend (api.ts, apuService.ts)
├── types/          # Interfaces TypeScript (Espejo de los DTOs y Entities de Java)
├── App.tsx         # Componente raíz y configuración de Rutas
├── index.css       # Inyección de Tailwind v4 y DaisyUI
└── main.tsx        # Punto de entrada de la aplicación React
```

## 🔌 Conexión con el Backend

Las peticiones HTTP están centralizadas en `src/services/api.ts`. La URL base apunta por defecto a `http://localhost:8080/api`. Si necesitas cambiar el puerto o la IP del backend, debes actualizar la propiedad `baseURL` en ese archivo.

Los errores arrojados por el backend (ej. IDs no encontrados o listas vacías) son interceptados globalmente para extraer el mensaje JSON estructurado (`error.response.data.message`).

## 📜 Comandos Útiles

*   `npm run dev`: Inicia el servidor en modo desarrollo.
*   `npm run build`: Transpila y minifica el código TypeScript/React para producción en la carpeta `dist`.
*   `npm run lint`: Ejecuta Oxlint para analizar la calidad del código y detectar errores en milisegundos.