import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Contacto from "./pages/Contacto"
import Galeria from "./pages/Galería"
import Home from "./pages/Home"
import QuienesSomos from "./pages/Quienes"
import Proyecto from "./pages/Proyecto"

const App = () => {

  return(

    <>
    <Navbar />
    
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/quienessomos" element={<QuienesSomos/>}/>
      <Route exact path="/proyecto" element={<Proyecto />}/>
      <Route exact path="/galeria" element={<Galeria />}/>
      <Route exact path="/contacto" element={<Contacto />}/>
    </Routes>
    
    <Footer />
    </>
  )
 
}

export default App