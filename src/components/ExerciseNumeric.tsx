
import React, { useState } from 'react'
import { saveExerciseResult } from '@lib/progress'

type Numeric = {
  kind: 'numeric',
  prompt: string,
  answer: number,
  tolerance?: number,
  hint?: string,
  explanation?: string
}

export default function ExerciseNumeric({ 
  lessonId, index, data 
}: { lessonId: number, index: number, data: any }){
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const num = Number(value)
  const tol = data.tolerance ?? 0
  const correct = Number.isFinite(num) && Math.abs(num - data.answer) <= tol

  function onSubmit(){
    saveExerciseResult(lessonId, index, correct)
    setSubmitted(true)
  }

  return (
    <div>
      <p style={{fontWeight:600}}>{data.prompt}</p>
      <input className="card" type="text" value={value} onChange={e=>setValue(e.target.value)} placeholder="Enter a number" />
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
