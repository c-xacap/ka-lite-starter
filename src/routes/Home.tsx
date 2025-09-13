
import { Link } from 'react-router-dom'
import courses from '@content/courses.json'
import { getOverallProgressPct } from '@lib/progress'

export default function Home(){
  const pct = getOverallProgressPct()
  return (
    <div>
      <h1>Learn anything — step by step</h1>
      <p>KA‑Lite is a demo learning platform with courses, lessons, and interactive exercises.</p>
      <div className="card" style={{margin:"16px 0"}}>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div className="badge">Your progress</div>
          <div className="progress" style={{flex:1}}><span style={{width:`${pct}%`}} /></div>
          <div style={{width:42, textAlign:'right'}}>{pct}%</div>
        </div>
      </div>
      <div className="grid">
        {courses.map(c => (
          <Link className="card" key={c.slug} to={`/course/${c.slug}`} style={{textDecoration:'none', color:'inherit'}}>
            <h3>{c.title}</h3>
            <p>{c.subtitle}</p>
            <div style={{display:'flex', gap:8, alignItems:'center'}}>
              <span className="badge">{c.level}</span>
              <span className="badge">{c.topic}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
