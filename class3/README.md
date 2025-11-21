# Clase 3: Manejo de Eventos y Estado (State)

En esta carpeta se encuentran los ejercicios correspondientes a la tercera clase, enfocados en la interactividad y el manejo de datos dentro de los componentes.

## Temas Vistos

### 1. Manejo de Eventos (Event Handling)
Aprendemos a capturar y responder a las interacciones del usuario:
- Uso del evento `onChange` para detectar cambios en inputs.
- Acceso al valor del evento mediante `e.target.value`.

### 2. El Hook `useState`
Introducción al manejo del estado local en componentes funcionales:
- Declaración de variables de estado.
- Función actualizadora del estado para re-renderizar el componente con nuevos datos.

### 3. Componentes Controlados
Patrón donde el estado de React es la "única fuente de la verdad" para los elementos del formulario:
- Vinculación del `value` del input al estado.
- Actualización del estado en cada cambio del input.

### 4. Ejemplo Práctico: Conversor de Unidades
Implementación de un componente `ConversorUnidades` que realiza conversiones bidireccionales:
- Conversión en tiempo real entre Metros y Pies.
- Sincronización de dos estados dependientes.
- Validación básica para asegurar que la entrada sea numérica.

## Estructura de Archivos Relevantes

- `src/App.jsx`: Componente principal que renderiza los ejercicios.
- `src/components/conversorUnidades.jsx`: Lógica principal del conversor y manejo de estado.
- `src/components/boton.jsx`: Componente de botón simple.
- `src/components/input.jsx`: Componente de entrada de texto.
