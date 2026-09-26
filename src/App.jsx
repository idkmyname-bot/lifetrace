import { useState } from 'react'
import './App.css'

function App() {
  const [events, setEvents] = useState([
    {
      year: '2024',
      title: 'A New Chapter',
      description: 'A moment that changed the direction of my life.',
    },
    {
      year: '2025',
      title: 'Growth',
      description: 'Learning, changing, failing, and becoming.',
    },
    {
      year: '2026',
      title: 'Still Becoming',
      description: 'Building the person I want to become.',
    },
  ])

  const addEvent = () => {
    const title = window.prompt('What happened?')
    if (!title) return

    const year = window.prompt('What year?')
    if (!year) return

    setEvents([
      ...events,
      {
        year,
        title,
        description: 'A new moment in my story.',
      },
    ])
  }

  return (
    <main className="app">
      <nav className="nav">
        <div className="logo">LifeTrace</div>
        <div className="navRight">
          <span>My Journey</span>
          <button onClick={addEvent}>+ Add Moment</button>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">YOUR LIFE · VISUALIZED</p>

        <h1>
          See how far
          <br />
          you've come.
        </h1>

        <p className="subtitle">
          LifeTrace turns the moments of your life into a visual story of
          growth, change, and becoming.
        </p>

        <button className="primaryButton" onClick={addEvent}>
          Add your first moment →
        </button>
      </section>

      <section className="journey">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">YOUR JOURNEY</p>
            <h2>Still becoming.</h2>
          </div>

          <p>{events.length} moments recorded</p>
        </div>

        <div className="timeline">
          {events.map((event, index) => (
            <article className="moment" key={`${event.year}-${index}`}>
              <div className="timelineMarker">
                <div className="dot"></div>
                {index !== events.length - 1 && <div className="line"></div>}
              </div>

              <div className="momentContent">
                <span className="year">{event.year}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>LifeTrace</span>
        <span>Still becoming.</span>
      </footer>
    </main>
  )
}

export default App