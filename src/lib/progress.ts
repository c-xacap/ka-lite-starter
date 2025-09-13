
const KEY = 'kalite_progress_v1'

type Result = {
  lessonsCompleted: number[]
  exercises: Record<string, boolean> // key: `${lessonId}-${index}`
}

function read(): Result {
  const raw = localStorage.getItem(KEY)
  if(!raw) return { lessonsCompleted: [], exercises: {} }
  try { return JSON.parse(raw) } catch { return { lessonsCompleted: [], exercises: {} } }
}

function write(data: Result){
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function markLessonComplete(lessonId: number){
  const d = read()
  if(!d.lessonsCompleted.includes(lessonId)){
    d.lessonsCompleted.push(lessonId)
    write(d)
  }
}

export function saveExerciseResult(lessonId: number, index: number, correct: boolean){
  const d = read()
  d.exercises[`${lessonId}-${index}`] = correct
  write(d)
}

export function getOverallProgressPct(){
  // naive overall based on exercises solved correctly
  const d = read()
  const values = Object.values(d.exercises)
  if(values.length === 0) return 0
  const correct = values.filter(Boolean).length
  return Math.round(100 * correct / values.length)
}

export function progressForCourse(slug: string){
  // In this demo, we don't map lessons -> course exercises here; approximate using overall
  return getOverallProgressPct()
}
