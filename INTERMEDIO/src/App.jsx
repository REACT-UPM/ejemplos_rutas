import { Routes, Route } from 'react-router';
import Layout from './Layout';
import Gastos from './routes/gastos';
import Recibos from './routes/recibos';
import Recibo from './routes/recibo';
import './main.css';

export default function Main(props){

    return (
      <Routes>
        <Route element={<Layout />}> 
          {/* Ruta de inicio como index */}
          <Route index element={
              <main style={{ padding: '1rem' }}>
                <p>Página principal</p>
              </main>
            }
          />

          {/* Rutas principales */}
          <Route path="gastos" element={<Gastos />} />

          {/* Rutas anidadas bajo recibos; Recibos debe renderizar <Outlet /> */}
          <Route path="recibos" element={<Recibos />}>
            <Route index element={
                <main style={{ padding: '1rem' }}>
                  <p>Selecciona un recibo</p>
                </main>
              }
            />
            <Route path=":reciboId" element={<Recibo />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={
              <main style={{ padding: '1rem' }}>
                <p>No hay nada aquí!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    );
}