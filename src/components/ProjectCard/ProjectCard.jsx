import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  const { title, tags, image, githubLink, liveLink } = project;
  return (
    <div className="project-card-container">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-info">
        <h3>{title}</h3>
        <div className="tags">
          {
            tags.map((icon, index) => (
              <p key={index}>
                <FontAwesomeIcon
                  icon={icon}
                />
              </p>
            ))
          }
        </div>
      </div>
      <div className="project-card-links">
        {liveLink && githubLink ? (
          <>
            <a href={githubLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={liveLink} target="_blank" rel="noreferrer">
              See Live
            </a>
          </>
        ) : (
          <p className="under-construction">Under Construction</p>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
