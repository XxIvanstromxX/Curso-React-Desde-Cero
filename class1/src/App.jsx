const App = () => {

  const nombres = ["Ana", "Luis", "Carlos", "Ivan"];

  return (
    <>
      <h1>Hola, React!</h1>
      <ul>
        {nombres.map( nombre => <li key={nombre}> {nombre} </li>)}
      </ul>
    </>
  )
}

export default App