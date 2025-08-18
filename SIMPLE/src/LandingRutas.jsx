import Pagina from "./rutas/Pagina";
import OtraPagina from "./rutas/OtraPagina";
import { Link, Route, Routes } from "react-router";
import "./LandingRutas.css";

export default function LandingRutas(props){


  return (<div className="router-container">
      <h2 className="router-title">Mis primeras rutas</h2>
      <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <span className="nav-sep">|</span>
        <Link className="nav-link" to="/enrique">Ver página 1</Link>
        <span className="nav-sep">|</span>
        <Link className="nav-link" to="/otra">Ver página 2</Link>
      </nav>
      <div className="route-content">
        <Routes>
          <Route path="/" element={<div>Página principal</div>} />
          <Route path="/enrique" element={<Pagina />} />
          <Route path="/otra" element={<OtraPagina />} />
        </Routes>
      </div>
    </div>);
}