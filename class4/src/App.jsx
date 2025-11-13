import RenderCondicional from "./components/renderCondicional"
import Lista from "./components/listaDinamica"
import ProductList from "./components/productosLista"
import "./App.css"
import CardX from "./components/cardX"
import "./components/cardX.css"

const users = [
    {
        userName: 'xVan24x',
        name: 'Ivan Martinez',
        isFollowing: true
    },
    {
        userName: 'Indie5051',
        name: 'Indie 505',
        isFollowing: false
    },
    {
        userName: 'EnMexicoMagico',
        name: 'Mexico Magico',
        isFollowing: false
    },
    {
        userName: 'kanyewests',
        name: 'ye',
        isFollowing: true
    }
]

function App() {

  return (
    <>
      {/* <RenderCondicional/>
      <Lista/>
      <ProductList/> */}
      <section className="cardX">
        {users.map(user => (
          <CardX 
            userName={user.userName}
            name={user.name}
            initialIsFollowing={user.isFollowing}
          />
        ))}
      </section>
    </>
  )
}

export default App
