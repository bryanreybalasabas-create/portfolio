const roles = [
  {
    title: 'Podcast Clipper',
    org: 'Freelance',
    period: 'Sep 2026 – Present',
    points: [
      'Short-form clips cut from long podcast episodes for marketing, interview, restaurant and healthcare shows',
      'Hook-first edits with word-by-word captions, punch-in zooms and B-roll, delivered vertical (9:16)',
      '3 hook variants (A/B/C) per clip so clients can test which opening performs best',
    ],
  },
  {
    title: 'Customer Service Representative — Retention Campaign',
    org: 'Six Eleven BPO',
    period: '2 years',
    points: [
      'Handled order entry and customer retention accounts',
      'Saved at-risk sales by talking customers through their reasons for cancelling',
      'Clear, calm communication with customers every day',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-header">
          <p className="section-tag">Background</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Two years on a retention campaign taught me what makes people stay. I use the same instinct to keep viewers watching past the first 2 seconds.
          </p>
        </div>

        <ol className="timeline">
          {roles.map((r) => (
            <li key={r.title} className="timeline-item">
              <div className="timeline-head">
                <div>
                  <h3 className="timeline-title">{r.title}</h3>
                  <p className="timeline-org">{r.org}</p>
                </div>
                <span className="timeline-period">{r.period}</span>
              </div>
              <ul className="timeline-points">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
