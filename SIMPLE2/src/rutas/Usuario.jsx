import { useParams } from "react-router";

export default function Usuario(props){
  let {userId} = useParams();

  let usuario = props.users[userId-1];

  return <div className="my-user">
    {/* Desde React 19, <title> y <meta> se pueden renderizar en
        cualquier componente, no solo en index.html. React los detecta
        y los "sube" automáticamente al <head> del documento, sin
        portals ni librerías como react-helmet. Como esto vive dentro
        del componente de la ruta, cada ruta acaba teniendo su propio
        title/description sin esfuerzo extra: cambia de usuario y
        mira la pestaña del navegador. */}
    <title>{`${usuario.nombre} ${usuario.apellidos} - Usuarios`}</title>
    <meta
      name="description"
      content={`Perfil de ${usuario.nombre} ${usuario.apellidos}. Aficiones: ${usuario.aficiones.join(", ")}.`}
    />
    <b>Usuario:</b>
    <ul>
      <li>Nombre: {usuario.nombre} </li>
      <li>Apellidos: {usuario.apellidos} </li>
      <li>Aficiones: {usuario.aficiones.join(",")}</li>
    </ul>
    </div>
}
