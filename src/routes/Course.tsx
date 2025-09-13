
import { useParams, Link } from 'react-router-dom'
import courses from '@content/courses.json'
import lessons from '@content/lessons.json'
import { progressForCourse } from '@lib/progress'

export default function Course(){
  const { slug } = useParams()
  const course = courses.find(c => c.slug === slug)
  const courseLessons = lessons.filter(l => l.course === slug)
  if(!course) return <div>Course not found.</div>
  const pct = progressForCourse(slug!)
  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.subtitle}</p>
      <div className="card" style={{margin:"16px 0"}}>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div className="badge">Progress</div>
          <div className="progress" style={{flex:1}}><span style={{width:`${pct}%`}} /></div>
          <div style={{width:42, textAlign:'right'}}>{pct}%</div>
        </div>
      </div>

      <div className="grid">
        {courseLessons.map(l => (
          <Link className="card" key={l.id} to={`/lesson/${l.id}`} style={{textDecoration:'none', color:'inherit'}}>
            <h3>{l.title}</h3>
            <p>{l.summary}</p>
            <div className="badge">{l.type}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
