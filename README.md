# Pokédex Vue App

Una aplicación web estilo Pokédex construida con **Vue 3**, **Vite**, y **Tailwind CSS**. Permite a los usuarios buscar Pokémon, marcar sus favoritos y visualizar sus detalles en una interfaz moderna e intuitiva.

## 🚀 Tecnologías utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/) – para manejo de estado
- [Vitest](https://vitest.dev/) – para pruebas unitararias
- [Axios](https://axios-http.com/es/docs/intro) –  Cliente HTTP basado en promesas para node.js

## 📦 Instalación

Clona el repositorio y ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

Esto iniciará el servidor en `http://localhost:5173` por defecto.

## 📁 Estructura del proyecto

```
.
├── public/               # Archivos públicos (favicon, etc.)
├── src/
│   ├── assets/          # Imágenes e íconos
│   ├── components/      # Componentes reutilizables (Botones, Inputs, etc.)
│   ├── stores/          # Lógica de estado global con Pinia
│   ├── views/           # Páginas de la aplicación
│   ├── App.vue          # Componente raíz
│   └── main.js          # Punto de entrada de Vue
├── tests/               # Contenedor de pruebas unitarias
│   └── HomeView.spec.js # Prueba unitaria para la paguina de home 
├── package.json         # Dependencias y scripts
├── tailwind.config.js   # Configuración de Tailwind
└── vite.config.js       # Configuración del build con Vite
```

## 🧪 Scripts disponibles

- `npm run dev`     – Inicia el servidor de desarrollo
- `npm run build`   – Genera la versión de producción
- `npm run preview` – Previsualiza el build generado
- `npm run test`    – Inicia las pruebas unitarias creadas

## 🧪 Tests

✓ tests/HomeView.spec.js (4 tests) 63ms

   ✓ HomeView.vue > renders the welcome title 34ms

   ✓ HomeView.vue > renders the description 9ms

   ✓ HomeView.vue > renders the Get started button 6ms

   ✓ HomeView.vue > has background image in banner div 13ms

 Test Files  1 passed (1)

      Tests  4 passed (4)

   Start at  20:52:05
   
   Duration  2.33s (transform 289ms, setup 0ms, collect 456ms, tests 63ms, environment 969ms, prepare 433ms)


## ✨ Funcionalidades

- Buscar Pokémon por nombre
- Filtrar por favoritos
- Modal con detalles del Pokémon
- Iconos personalizados
- Totalmente responsiva

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 🔗 Links

- [Deploy](https://arincon21.github.io/pokemon-favorite-app--vueJs/)
- [Figma](https://www.figma.com/design/RxextQHeFs98SQKdpTrahk/Pok%C3%A9dex?node-id=0-1&p=f&t=CkWZXC6dywKRz3Nm-0)

---

¡Gracias por usar esta Pokédex! 💖