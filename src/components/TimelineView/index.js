// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderItem = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }
  return (
    <div className="bg-container">
      <h1 className="head">
        MY JOURNEY OF
        <br />
        <span className="heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachItem => renderItem(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
