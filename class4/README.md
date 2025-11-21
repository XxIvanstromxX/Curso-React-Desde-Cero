# Clase 4: Renderizado Condicional y Listas en React

En esta carpeta se encuentran los ejercicios y ejemplos prácticos correspondientes a la cuarta clase del curso.

## Temas Vistos

### 1. Renderizado Condicional
Se exploran diferentes técnicas para mostrar u ocultar componentes basándose en el estado o props:
- Operador ternario (`condicion ? verdadero : falso`)
- Operador lógico AND (`condicion && componente`)
- `if/else` dentro de la lógica del componente.

### 2. Listas y Keys
Aprendemos a renderizar listas de elementos dinámicamente:
- Uso del método `.map()` para transformar arrays de datos en elementos JSX.
- Importancia de la prop `key` para el rendimiento y la identidad de los elementos en React.

### 3. Ejemplo Práctico: Tarjetas de Usuario
Implementación de un componente `CardX` que simula una tarjeta de perfil (similar a Twitter/X):
- Renderizado de una lista de usuarios desde un array de objetos.
- Manejo de estado individual para el botón de "Seguir/Siguiendo".
- Estilizado de componentes.

## Estructura de Archivos Relevantes

- `src/App.jsx`: Componente principal donde se orquestan los ejemplos.
- `src/components/renderCondicional.jsx`: Ejemplo de renderizado condicional.
- `src/components/listaDinamica.jsx`: Ejemplo básico de listas.
- `src/components/cardX.jsx`: Componente de tarjeta de usuario.
