import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav className="navbar">
        <div className="brand">NewsApp</div>
        <div className="hamburger" onClick={() => setMenuOpen((open) => !open)}>
          &#9776;
        </div>
        <div className={"nav-links" + (menuOpen ? " open" : "")}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={() => setMenuOpen(false)}
          >
            Saved
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;
