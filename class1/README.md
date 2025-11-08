# Clase 1: Introducción a React

Primera clase del curso de React desde cero.

## 📚 Contenido de la Clase

### Configuración del Proyecto
- React 19.1.1
- Vite 7.1.7 + plugin React SWC
- ESLint

### Conceptos Vistos

#### 1. Componente Funcional
```jsx
const App = () => {
  return (
    // JSX
  )
}
```

#### 2. JSX y Fragments
Uso de fragments (`<>...</>`) para agrupar elementos:
```jsx
<>
  <h1>Hola, React!</h1>
  <ul>
    {/* contenido */}
  </ul>
</>
```

#### 3. Renderizado de Listas
Uso de `.map()` para renderizar arrays:
```jsx
const nombres = ["Ana", "Luis", "Carlos", "Ivan"];

{nombres.map(nombre => <li key={nombre}>{nombre}</li>)}
```

#### 4. Punto de Entrada (main.jsx)
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

## 🚀 Scripts Disponibles

```bash
pnpm dev      # Modo desarrollo
pnpm build    # Compilar para producción
pnpm preview  # Vista previa de la build
pnpm lint     # Ejecutar ESLint
```
