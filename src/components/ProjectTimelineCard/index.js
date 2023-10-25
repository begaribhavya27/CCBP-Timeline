// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-title-container">
        <h1 className="project-title-heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="calender-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="visit">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
