import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import CarLessee from "./routes/CarLessee";
import CarLessor from "./routes/CarLessor";
import Cars from "./routes/Cars";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<Cars />} />
        <Route path="/locador" element={<CarLessor />} />
        <Route path="/locatario" element={<CarLessee />} />
      </Routes>
    </Router>
  );
}

export default App;