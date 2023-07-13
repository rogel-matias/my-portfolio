import Github from '../assets/rrss/components/Github'

/* eslint-disable react/prop-types */
export default function Project ({ project }) {
  return (
    <article className='project'>
      <img className="project__img" src={project.img.webp} alt={project.img.alt}/>
      <div className="project__underside">
        <h3 className="project__underside-title">{project.title}</h3>
        <p className="project__underside-paragraph">{project.description.text}</p>
        <div className="project__underside-container">
          <div className="project__underside-tech">
            <h4>Tecnologías</h4>
            <div>
            {
              project.description.icons.map(icon => <img key={icon} src={icon.svg} alt={icon.alt} title={icon.alt} />)
            }
            </div>
          </div>
          <div className="project__underside-button">
            <a href={project.url.deploy} target='_blank' rel='noreferrer' title='Visitar deploy'>
              Deploy
            </a>
            <a href={project.url.github} target='_blank' rel='noreferrer' title='Visitar github'>
              <Github width={18} height={18} />
              Código
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}