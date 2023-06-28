import { Link } from "react-router-dom";

export default function About () {
  return(
    <section className="section about">
      <h2 className="section__title">Sobre mi</h2>
      <div className="about__container">
        <div className="about__text">
          <p>
            Mucho gusto! Tengo 27 años y soy de Entre Ríos, Argentina. 
            Al terminar el colegio por el año 2013 comencé mis estudios en Ingeniería Agropecuaria hasta el 2021,
            donde empezó mi historia con la programación y a la cual apuesto como presente y futuro en mi vida.    
          </p>
          <p>
            Busco oportunidades laborales, proyectos donde pueda contribuir con mis habilidades y seguir aprendiendo
            para desarrollarme como profesional dentro del mundo tecnológico.
          </p>
          <p>
            Ampliando un poco sobre mí, tambien me gusta entrenar y jugar videojuegos en mi tiempo libre. 
            Tengo una fuerte debilidad por las mascotas, especialmente por los perros.
          </p>
          <p>
            ¡Ante cualquier duda no dudes en <Link to='/contact'><span>contactarme</span></Link>!
          </p>
        </div>
        <div className='about__aside'>
          <img className='about__image' src="/assets/about/my-photo.webp"/>
          <button className='about__button'>MI CV</button>
        </div>
      </div>
    </section>
  )
}