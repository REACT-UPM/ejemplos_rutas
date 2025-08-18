import { useParams } from "react-router";

export default function Usuario(props){
  let {userId} = useParams();

  let usuario = props.users[userId-1];

  return <div className="my-user">
    <b>Usuario:</b>
    <ul>
      <li>Nombre: {usuario.nombre} </li>
      <li>Apellidos: {usuario.apellidos} </li>
      <li>Aficiones: {usuario.aficiones.join(",")}</li>
    </ul>
    </div>
}
