import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // 默认的人生事件
  const defaultEvents = [
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
  ]

  // 第一次打开网站时：
  // 有保存的数据 → 读取保存的数据
  // 没有保存的数据 → 使用默认事件
  const [events, setEvents] = useState(() => {
    try {
      const savedEvents = localStorage.getItem('lifetrace-events')

      if (savedEvents) {
        return JSON.parse(savedEvents)
      }
    } catch (error) {
      console.error('Could not load saved LifeTrace events:', error)
    }

    return defaultEvents
  })

  // 每次 events 改变，都自动保存
  useEffect(() => {
    try {
      localStorage.setItem('lifetrace-events', JSON.stringify(events))
    } catch (error) {
      console.error('Could not save LifeTrace events:', error)
    }
  }, [events])

  // 添加新的 Moment
  const addEvent = () => {
    const title = window.prompt('What happened?')
    if (!title) return

    const year = window.prompt('What year?')
    if (!year) return

    const description = window.prompt('Describe this moment (optional)')

    const newEvent = {
      year: year.trim(),
      title: title.trim(),
      description:
        description?.trim() || 'A new moment in my story.',
    }

    setEvents((previousEvents) => [
      ...previousEvents,
      newEvent,
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
          <p className="eyebrow">YOUR JOURNEY</p>
          <h2>Moments that made you.</h2>
        </div>

        <div className="timeline">
          {events.map((event, index) => (
            <article
              className="moment"
              key={`${event.year}-${event.title}-${index}`}
            >
              <div className="timelineMarker">
                <div className="dot"></div>

                {index !== events.length - 1 && (
                  <div className="line"></div>
                )}
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