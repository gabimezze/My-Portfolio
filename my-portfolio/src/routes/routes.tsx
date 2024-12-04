import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Sobre from "./sobre";
import Projetos from "./projetos";

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
};
