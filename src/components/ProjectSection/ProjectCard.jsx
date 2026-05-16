export default function ProjectCard({ number, title, description, skills, github, liveLink, isLeft, image }) {
  return (
    <div className="project-card" id={`project${number}`}>
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className={`project-number ${isLeft ? 'project-number-left' : 'project-number-right'}`}>
        {String(number).padStart(2, '0')}
      </div>
      <div className="project-content project-content-left">
        <div className="project-skill-container">
          {skills.map((skill) => (
            <img key={skill} className="project-skill" src={skill} alt="" />
          ))}
        </div>
        <h2 className="project-heading">{title}</h2>
        <p className="project-sub-heading">{description}</p>
        <div className="btn-group">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <i title="GitHubLink" className="fa-brands fa-github icon"></i>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer">
              <i title="Live Link" className="fa-solid fa-link icon"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
