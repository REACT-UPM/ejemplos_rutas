import Usuario from "./rutas/Usuario";
import NotFound from "./rutas/NotFound";
import { Link, Outlet, Route, Routes } from "react-router";
import "./LandingRutas.css";

function Layout() {
  return (
    <>
      <h2 className="router-title">Usuarios</h2>
      <nav className="navbar">
        <Link className="nav-link" to="">Home</Link>
        <span className="nav-sep">|</span>
        <Link className="nav-link" to="users/1">usuario 1</Link>
        <span className="nav-sep">|</span>
        <Link className="nav-link" to="users/2">usuario 2</Link>
        <span className="nav-sep">|</span>
        <Link className="nav-link" to="users/3">usuario 3</Link>
        <span className="nav-sep">|</span>
        <Link className="nav-link" to="rutarota">Ruta rota</Link>
      </nav>
      <div className="route-content">
        <Outlet />
      </div>
    </>
  );
}

//diferencias con LandingRutas:
//- que las rutas tienen parámetros 
//- que hay ruta para notfound
export default function LandingRutas(props){
  let usuarios = [
    {nombre: "Enrique",
     apellidos: "Barra Arias",
     prime: true,
     aficiones: ["baloncesto", "música", "lectura"]},
     {nombre: "Pepe",
     apellidos: "Perez López",
     prime: true,
     aficiones: ["inversión", "música", "futbol"]},
     {nombre: "Jose",
     apellidos: "Morin Tatin",
     prime: false,
     aficiones: ["baloncesto", "tenis", "correr"]},
  ]
  /*
  //Cambiar los links "usuario 1" y "usuario 2" por este map para crear un link para cada usuario del array (haya 3 o 300)
  {usuarios.map((u,index) =>{
          let path = "/users/" + index; 
          return <span><Link to={path}>usuario {index}</Link>{"  "}|{"  "}</span>
        })}
  */
  return (
    <div className="router-container">
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<div>Página principal</div>} />
          <Route path="users/:userId" element={<Usuario users={usuarios} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}