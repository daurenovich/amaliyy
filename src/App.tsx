import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Добавлен правильный импорт
import StaysNearby from "./componentes/Card.tsx";
import About from "./Componentes-2/About.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StaysNearby />} />
        <Route path="/register" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
