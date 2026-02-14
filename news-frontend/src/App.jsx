import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <nav style={{ padding: "15px", background: "#333", color: "white" }}>
        <Link to="/" style={{ marginRight: "15px", color: "white" }}>
          Home
        </Link>
        <Link to="/saved" style={{ color: "white" }}>
          Saved
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;
