import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink
          to="/"
          end
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/saved"
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          Saved
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;
