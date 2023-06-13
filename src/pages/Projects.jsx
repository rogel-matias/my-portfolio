import Project from '../components/Project'
import { data } from '../data/data'

export default function Projects () {
  return(
    <section className='section projects'>
      <h2 className="section__title">Proyectos</h2>
      <div className='projects__grid'>
        {
          data.projects.map(project => <Project key={project.id} />)
        }
      </div>
    </section>
  )
}