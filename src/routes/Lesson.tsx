
import { useParams } from 'react-router-dom'
import lessons from '@content/lessons.json'
import { markLessonComplete } from '@lib/progress'
import LessonPlayer from '@components/LessonPlayer'
import ExerciseMCQ from '@components/ExerciseMCQ'
import ExerciseNumeric from '@components/ExerciseNumeric'

export default function Lesson(){
  const { lessonId } = useParams()
  const lesson = lessons.find(l => String(l.id) === lessonId)
  if(!lesson) return <div>Lesson not found.</div>

  return (
    <div className="lesson-layout">
      <div>
        <LessonPlayer lesson={lesson} />
        <div className="card" style={{marginTop:16}}>
          <button className="btn" onClick={() => markLessonComplete(lesson.id)}>Mark as complete</button>
        </div>

        {lesson.exercises?.map((ex, idx) => (
          <div key={idx} className="card" style={{marginTop:16}}>
            <h3>Exercise {idx+1}</h3>
            {ex.kind === 'mcq' && <ExerciseMCQ lessonId={lesson.id} index={idx} data={ex} />}
            {ex.kind === 'numeric' && <ExerciseNumeric lessonId={lesson.id} index={idx} data={ex} />}
          </div>
        ))}
      </div>
      <aside className="toc card">
        <h3>On this page</h3>
        <ul>
          <li><a href="#content">Content</a></li>
          <li><a href="#exercises">Exercises</a></li>
        </ul>
      </aside>
    </div>
  )
}
