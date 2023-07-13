import Project from '../components/Project'
import { data } from '../data/data'

export default function Projects () {
  return(
    <section className='section projects fadeIn'>
      <h2 className="section__title">Proyectos</h2>
      <p className='section__paragraph'>Aquí les presento algunos de los proyectos en los que he trabajado a lo largo de mi formación.</p>
      <p className='section__paragraph'>Para ver todo el repositorio visita mi <a>github</a>.</p>
      <div className='projects__grid'>
        {
          data.projects.map(project => <Project key={project.id} project={project} />)
        }
      </div>
    </section>
  )
}