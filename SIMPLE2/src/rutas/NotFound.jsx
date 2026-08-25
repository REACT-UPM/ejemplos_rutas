export default function NotFound(props){
  return <div>
    {/* Igual que en Usuario.jsx: cada ruta pone su propio title/meta
        con etiquetas normales de React 19, sin tocar index.html. */}
    <title>404 - Página no encontrada</title>
    <meta name="description" content="La ruta solicitada no existe." />
    <img className="logo" src="/404.jpg" alt="logo" />
    <br/>
    <h1>404 maquetado muy chulo</h1>    
    </div>
}