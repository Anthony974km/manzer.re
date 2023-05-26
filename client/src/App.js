import { Routes, Route, BrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import VosPlats from "./pages/VosPlats";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Accueil />} />
        <Route path="/vos_plats" element={<VosPlats />} />
        <Route path="/vos_plats/create" element={<Create/>} />
        <Route path="/vos_plats/edit" element={<Edit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
