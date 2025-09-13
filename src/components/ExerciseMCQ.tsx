
import React, { useState } from 'react'
import { saveExerciseResult } from '@lib/progress'

type MCQ = {
  kind: 'mcq',
  prompt: string,
  choices: string[],
  answerIndex: number,
  hint?: string,
  explanation?: string
}

export default function ExerciseMCQ({ lessonId, index, data }: { lessonId: number, index: number, data: MCQ }){
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const correct = selected === data.answerIndex

  function onSubmit(){
    if(selected === null) return
    saveExerciseResult(lessonId, index, correct)
    setSubmitted(true)
  }

  return (
    <div id="exercises">
      <p style={{fontWeight:600}}>{data.prompt}</p>
      <div style={{display:'grid', gap:8}}>
        {data.choices.map((c, i) => (
          <label key={i} className="card" style={{display:'flex', gap:8, alignItems:'center'}}>
            <input type="radio" name={`mcq-${lessonId}-${index}`} onChange={()=>setSelected(i)} />
            <span>{c}</span>
          </label>
        ))}
      </div>
      <div style={{display:'flex', gap:8, marginTop:12}}>
        <button className="btn" onClick={onSubmit}>Check</button>
        {submitted && (
          <span className="badge" aria-live="polite">{correct ? 'Correct!' : 'Try again'}</span>
        )}
      </div>
      {!correct && data.hint && submitted && (
        <div className="card" style={{marginTop:12}}><strong>Hint: </strong>{data.hint}</div>
      )}
      {submitted && correct && data.explanation && (
        <div className="card" style={{marginTop:12}}><strong>Why: </strong>{data.explanation}</div>
      )}
    </div>
  )
}
