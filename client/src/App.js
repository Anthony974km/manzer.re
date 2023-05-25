import { Routes, Route, BrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import VosPlats from "./pages/VosPlats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Accueil />} />
        <Route path="/vos_plats" element={<VosPlats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
