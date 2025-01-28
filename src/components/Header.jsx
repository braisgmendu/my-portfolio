import { NavLink } from 'react-router-dom'; // Importa NavLink

function Header() {
  return (
    <header className="bg-dark text-white">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <NavLink className="navbar-brand" to="/">Mi Portafolio</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">Sobre mí</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Proyectos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;  