import Saludo from "./components/Saludo"
import Contenedor from "./components/Contenedor"
import Boton from "./components/Boton"
import Card from "./components/Card"

const App = () => {

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

  return (
    <>
      <Saludo name="Ivan" edad="23"/>

      <Contenedor>
        <h1>Titulo del Contenedor</h1>
        <p>Este es un contenedor y son una prop.children</p>
      </Contenedor>

      <Boton text="Guardar" color="green"/>
      <Boton text="Cancelar" color="red"/>
      <br />
      <br />
      
      {frameworks.map(({titulo, imagen, descripcion}) => {
        return <Card titulo={titulo} imagen={imagen} descripcion={descripcion}/>
      })}
    </>
  )
}

export default App
