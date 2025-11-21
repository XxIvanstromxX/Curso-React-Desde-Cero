# Clase 5: El Hook useEffect

En esta clase aprendimos sobre el manejo de efectos secundarios en React utilizando el hook `useEffect`.

## Temas vistos

1. **Introducción a useEffect**:
   - Cómo ejecutar código después de que el componente se renderiza.
   - Controlar cuándo se ejecuta el efecto mediante el array de dependencias.

2. **Ciclo de vida del componente**:
   - **Montaje**: Ejecutar código una sola vez al cargar el componente (array de dependencias vacío `[]`).
   - **Actualización**: Ejecutar código cuando cambian ciertas variables (array con dependencias `[prop, estado]`).
   - **Desmontaje**: Limpieza de efectos (return function).

3. **Data Fetching**:
   - Consumo de APIs externas (JSONPlaceholder) dentro de `useEffect`.
   - Actualización del estado con los datos obtenidos.

## Ejemplos en código

- **HookEffect**: Ejemplo básico de contador y visualización de cómo se dispara el efecto.
- **DataFetch**: Ejemplo de petición a API (fetch) controlada por un estado (`mostrar`).
- **Usuarios**: Componente para listar usuarios obtenidos de la API.

---
*Curso de React Desde Cero*
