import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error404 from './components/404';
import './App.scss';
import Footer from './components/Footer';
import Horarios from './components/Horarios';
import Servicios from './components/Servicios';
import Homilias from './components/Homilias';
import Textos from './components/Textos';
import Actividades from './components/Actividades';
import Historia from './components/Historia';
import NuestroParroco from './components/NuestroParroco';
import Templo from './components/Templo';
import Administracion from './components/Administracion';
import JudasTadeo from './components/JudasTadeo';
import Niños from './components/Niños';
import Jovenes from './components/Jovenes';
import Adultos from './components/Adultos';
import Catequesis from './components/Catequesis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="horarios" element={<Horarios />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="homilias" element={<Homilias />} />
          <Route path="textos" element={<Textos />} />
          <Route path="actividades" element={<Actividades />} />
          <Route path="*" element={<Error404 />} />
          <Route path="historia" element={<Historia />} />
          <Route path="nuestro-parroco" element={<NuestroParroco />} />
          <Route path="templo" element={<Templo />} />
          <Route path="administracion" element={<Administracion />} />
          <Route path="nuestra-señora" element={<JudasTadeo />} />
          <Route path="niños" element={<Niños />} />
          <Route path="jovenes" element={<Jovenes />} />
          <Route path="adultos" element={<Adultos />} />
          <Route path="catequesis" element={<Catequesis />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
