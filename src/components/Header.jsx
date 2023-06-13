import { Link } from "react-router-dom";

export default function Header () {
  return(
    <header className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li"><Link to="/">Inicio</Link></li>
          <li className="header__li"><Link to="/about">Sobre mí</Link></li>
          <li className="header__li"><Link to="/projects">Proyectos</Link></li>
          <li className="header__li"><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}