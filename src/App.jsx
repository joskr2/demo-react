import Footer from "./components/Footer"
import Header from "./components/Header"
import Contador from "./views/Contador"
import "./App.css"

const App = () => {
  return (
    <div className="contenedor">
      <Header miTitulo="Hello World" miSubtitulo="This is a subtitle" />
      <Contador ></Contador>
      <Footer />
    </div>
  )
}

export default App