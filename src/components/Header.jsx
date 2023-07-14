import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header () {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return(
    <header className="header">
      <button className="header__button" onClick={handleToggleMenu}><img src="/public/assets/home/list.svg"/></button>
      <nav className={isOpen ? "header__nav header__nav--visible" : "header__nav"}>
        <button className="header__button--exit" onClick={handleToggleMenu}> <img src='/public/assets/home/x-square.svg'/></button>
        <ul className="header__ul">
          <li className="header__li"><Link onClick={handleToggleMenu} to="/">Inicio</Link></li>
          <li className="header__li"><Link onClick={handleToggleMenu} to="/about">Sobre mí</Link></li>
          <li className="header__li"><Link onClick={handleToggleMenu} to="/projects">Proyectos</Link></li>
          <li className="header__li"><Link onClick={handleToggleMenu} to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}