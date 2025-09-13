
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function LessonPlayer({ lesson }: { lesson: any }){
  return (
    <div id="content" className="card">
      <h2>{lesson.title}</h2>
      {lesson.video && (
        <div style={{position:'relative', paddingTop:'56.25%', marginBottom:12}}>
          <iframe
            src={`https://www.youtube.com/embed/${lesson.video}`}
            style={{position:'absolute', inset:0, width:'100%', height:'100%', border:0}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Lesson video"
          />
        </div>
      )}
      <ReactMarkdown>{lesson.markdown}</ReactMarkdown>
    </div>
  )
}
