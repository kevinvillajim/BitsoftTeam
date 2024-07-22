import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Nosotros from "./views/Nosotros";
import Productos from "./views/Productos";
import PantallasInteractivas from "./views/PantallasInteractivas";
import Computo from "./views/Computo";
import Seguridad from "./views/Seguridad";
import Infraestructura from "./views/Infraestructura";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/nosotros"
            element={<Nosotros />}
          />
          <Route
            path="/productos"
            element={<Productos />}
          />
          <Route
            path="/productos/pantallas-interactivas"
            element={<PantallasInteractivas />}
          />
          <Route
            path="/productos/computo"
            element={<Computo />}
          />
          <Route
            path="/productos/seguridad"
            element={<Seguridad />}
          />
          <Route
            path="/productos/infraestructura"
            element={<Infraestructura />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
