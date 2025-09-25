import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import LandingRutas from "./LandingRutas.jsx";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LandingRutas />
  </BrowserRouter>
)


