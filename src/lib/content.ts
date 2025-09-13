
export type Course = {
  slug: string
  title: string
  subtitle: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  topic: string
}
export type Exercise =
  | { kind: 'mcq', prompt: string, choices: string[], answerIndex: number, hint?: string, explanation?: string }
  | { kind: 'numeric', prompt: string, answer: number, tolerance?: number, hint?: string, explanation?: string }

export type Lesson = {
  id: number
  course: string // slug
  title: string
  summary: string
  type: 'Video + Reading'
  video?: string // YouTube id
  markdown: string
  exercises?: Exercise[]
}
