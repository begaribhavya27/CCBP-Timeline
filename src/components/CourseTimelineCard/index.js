// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-card-container">
      <div className="course-title-container">
        <h1 className="course-title-heading">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="list-item">
            <p className="tag-name">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
