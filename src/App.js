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
import Historia from './components/Conocenos/Historia';
import NuestroParroco from './components/Conocenos/NuestroParroco';
import Administracion from './components/Conocenos/Administracion';
import AmbientesdelTemplo from "./components/Conocenos/AmbientesdelTemplo";
import SanJudasTadeo from "./components/Conocenos/ImagenSanJudasTadeo";
import Niños from './components/Grupos/Niños';
import Jovenes from './components/Grupos/Jovenes';
import Adultos from './components/Grupos/Adultos';
import Bautismo from './components/Sacramentos/Bautismo';
import Reconcialiacion from './components/Sacramentos/Reconciliacion';
import Matrimonio from './components/Sacramentos/Matrimonio';
import Capillas from './components/Servicios/Capillas';
import DespachoParroquial from './components/Servicios/DespachoParroquial';
import SantaMisa from './components/Servicios/SantaMisa';
import Santisimo from './components/Servicios/Santisimo';
import Rosario from './components/Recursos/Rosario';
import ViaCrucis from './components/Recursos/ViaCrucis';
import PanPalabra from './components/Recursos/PanPalabra';
import NovenaSJT from './components/Recursos/NovenaSJT';
import NovenaNavidad from './components/Recursos/NovenaNavidad';
import Catequesis from './components/Catequesis';
import Fotos from './components/Galeria/Fotos';
import Videos from './components/Galeria/Videos';


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
          <Route path="administracion" element={<Administracion />} />
          <Route path="ambientes-del-templo" element={<AmbientesdelTemplo />} />
          <Route path="san-judas-tadeo" element={<SanJudasTadeo />} />
          <Route path="niños" element={<Niños />} />
          <Route path="jovenes" element={<Jovenes />} />
          <Route path="adultos" element={<Adultos />} />
          <Route path="bautismo" element={<Bautismo />} />
          <Route path="reconciliacion" element={<Reconcialiacion />} />
          <Route path="matrimonio" element={<Matrimonio />} />
          <Route path="capillas" element={<Capillas />} />
          <Route path="despacho-parroquial" element={<DespachoParroquial />} />
          <Route path="santa-misa" element={<SantaMisa />} />
          <Route path="santisimo" element={<Santisimo />} />
          <Route path="rosario" element={<Rosario />} />
          <Route path="via-crucis" element={<ViaCrucis />} />
          <Route path="pan-de-la-palabra" element={<PanPalabra />} />
          <Route path="novena-sjt" element={<NovenaSJT />} />
          <Route path="novena-navidad" element={<NovenaNavidad />} />
          <Route path="catequesis" element={<Catequesis />} />
          <Route path="fotos" element={<Fotos />} />
          <Route path="videos" element={<Videos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
