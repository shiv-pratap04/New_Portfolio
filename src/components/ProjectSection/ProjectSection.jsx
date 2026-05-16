import ProjectCard from './ProjectCard'
import { projectsData } from './projectsData'

export default function ProjectSection() {
  return (
    <div className="project-section" id="projects">
      <h2 className="page-header">Projects</h2>
      <div className="project-container">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            number={project.number}
            title={project.title}
            description={project.description}
            skills={project.skills}
            github={project.github}
            liveLink={project.liveLink}
            isLeft={project.isLeft}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}
