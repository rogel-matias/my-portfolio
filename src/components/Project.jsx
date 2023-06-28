import Github from '../public/assets/rrss/components/Github'
import Fire from '../public/assets/rrss/components/Fire'

/* eslint-disable react/prop-types */
export default function Project ({ project }) {
  return (
    <article className='project'>
      <img className="project__img" src={project.img} />
      <div className="project__underside">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__paragraph">{project.description.text}</p>
        <div className="project__underside-container">
          <div className="project__underside-tech">
            <h4>Tecnologías</h4>
            <div>
            {
              project.description.icons.map(icon => <img key={icon} src={icon.svg} alt={icon.alt} />)
            }
            </div>
          </div>
          <div className="project__underside-button">
            <button>
              <Github 
                width={18}
                height={18}
                />
              Código
            </button>
            <button>
              <Fire 
                width={18}
                height={18}
              />
              Deploy
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}