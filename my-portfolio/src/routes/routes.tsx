import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/index";
import Sobre from "./sobre/index";
import Projetos from "./projetos/index";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </Router>
  );
}
