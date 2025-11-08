# Clase 2: Componentes y Props

Segunda clase del curso de React: aprendiendo a crear componentes reutilizables y pasar datos mediante props.

## 📚 Contenido de la Clase

### 1. Props (Propiedades)

#### Componente con Props Básicas
**Saludo.jsx** - Recibe `name` y `edad`:
```jsx
const Saludo = ({name, edad}) => {
    return (
        <div>
            <h1>Hola, {name}</h1>
            <p>Tu edad es de: {edad}</p>
        </div>
    )
}
```

Uso:
```jsx
<Saludo name="Ivan" edad="23"/>
```

#### Componente con Estilos Inline
**Boton.jsx** - Recibe `text` y `color`:
```jsx
const Boton = ({text, color}) => {
    return (
        <button style={{background: color}}>
            {text}
        </button>
    )
}
```

Uso:
```jsx
<Boton text="Guardar" color="green"/>
<Boton text="Cancelar" color="red"/>
```

### 2. Children Prop

**Contenedor.jsx** - Usa la prop especial `children`:
```jsx
const Contenedor = ({children}) => {
    return (
        <div className={styles["contenedor"]}>
            {children}
        </div>
    )
}
```

Uso:
```jsx
<Contenedor>
    <h1>Titulo del Contenedor</h1>
    <p>Este es un contenedor y son una prop.children</p>
</Contenedor>
```

### 3. CSS Modules

Archivos `.module.css` para estilos con scope local:

**Card.module.css:**
```css
.card {
    border: 1px solid #ccc;
    border-radius: 15px;
    width: 250px;
    padding: 10px;
    text-align: center;
}

.imagen {
    width: 100%;
    border-radius: 10px;
}
```

**Importación y uso:**
```jsx
import styles from "./Card.module.css"

<div className={styles["card"]}>
    <img className={styles["imagen"]} />
</div>
```

### 4. Renderizado de Lista con Desestructuración

**Card.jsx** con múltiples props:
```jsx
const Card = ({titulo, descripcion, imagen}) => {
    return (
        <div className={styles["card"]}>
            <img src={imagen} alt={titulo} className={styles["imagen"]}/>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    )
}
```

**Array de objetos en App.jsx:**
```jsx
const frameworks = [
    {
        titulo: "React",
        descripcion: "Librería para interfaces dinámicas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
        titulo: "Vue",
        descripcion: "Framework progresivo de JavaScript",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    },
    {
        titulo: "Angular",
        descripcion: "Framework completo de Google",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
    }
]
```

**Renderizado con desestructuración:**
```jsx
{frameworks.map(({titulo, imagen, descripcion}) => {
    return <Card titulo={titulo} imagen={imagen} descripcion={descripcion}/>
})}
```

## 📁 Estructura de Componentes

```
src/
├── App.jsx
├── components/
│   ├── Saludo.jsx
│   ├── Boton.jsx
│   ├── Contenedor.jsx
│   ├── Contenedor.module.css
│   ├── Card.jsx
│   └── Card.module.css
```

## 🚀 Scripts Disponibles

```bash
pnpm dev      # Modo desarrollo
pnpm build    # Compilar para producción
pnpm preview  # Vista previa de la build
pnpm lint     # Ejecutar ESLint
```