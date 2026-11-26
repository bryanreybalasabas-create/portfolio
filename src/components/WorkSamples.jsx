import { useState } from 'react'

const BIZ = 'Business & Marketing'
const POD = 'Interview Podcast'
const QA = 'Restaurant Q&A'
const MED = 'Healthcare Marketing'

const samples = [
  { id: 'biz-01', category: BIZ, duration: '0:29', title: 'Call your best customers, then refund them', desc: 'Hook-first clip from a marketing podcast — title card, word-by-word captions, punch-in zooms.' },
  { id: 'med-01', category: MED, duration: '0:29', title: 'Every extra step costs you patients', desc: 'Clinic-marketing tip cut tight, with clinic B-roll dropped in on the key lines.' },
  { id: 'pod-01', category: POD, duration: '0:30', title: 'It was a suicide mission', desc: 'Story-driven interview clip — emotional hook, pacing built around the payoff.' },
  { id: 'qa-01', category: QA, duration: '0:24', title: 'How do you raise prices without losing customers?', desc: 'Audience question answered on camera, intercut with kitchen and front-of-house B-roll.' },
  { id: 'biz-02', category: BIZ, duration: '0:29', title: 'Same chair, same ad to Meta', desc: 'Ad-strategy talking point with B-roll inserts and an on-screen hook.' },
  { id: 'med-02', category: MED, duration: '0:34', title: 'The questions patients Google at midnight', desc: 'List-style clip with a hook card and cutaways to practitioners at work.' },
  { id: 'pod-02', category: POD, duration: '0:26', title: 'The decision that changed everything', desc: 'Founder story told in under 30 seconds with B-roll and animated captions.' },
  { id: 'biz-03', category: BIZ, duration: '0:30', title: 'In-house or agency is the wrong question', desc: 'Contrarian hook up front, one idea per cut, no dead air.' },
  { id: 'med-03', category: MED, duration: '0:34', title: "Hiding your prices doesn't pay off", desc: 'Two-angle podcast edit with patient and clinic B-roll to carry the argument.' },
  { id: 'qa-02', category: QA, duration: '0:14', title: 'What makes restaurants survive?', desc: 'A 14-second answer — fast cuts between the host and the kitchen.' },
  { id: 'biz-04', category: BIZ, duration: '0:36', title: 'Four revisions on a shade of orange', desc: 'Relatable client-story clip, paced so the punchline lands at the end.' },
  { id: 'pod-03', category: POD, duration: '0:23', title: 'Never overstate on social', desc: 'Short, quotable advice clip with a clear on-screen hook.' },
  { id: 'med-04', category: MED, duration: '0:39', title: "Don't cancel your ads in month two", desc: 'Longer explainer kept moving with angle changes and timed B-roll.' },
  { id: 'biz-05', category: BIZ, duration: '0:18', title: 'Good AI ads come from people who could already make ads', desc: 'Tight 18-second take — hook, point, out.' },
  { id: 'pod-05', category: POD, duration: '0:27', title: 'Culture triples productivity', desc: 'Interview soundbite with B-roll from the business in action.' },
  { id: 'biz-06', category: BIZ, duration: '0:30', title: 'Copy the creators who only get paid on sales', desc: 'Practical marketing takeaway with captions built for sound-off viewing.' },
]

const categories = ['All', BIZ, POD, MED, QA]

const clip = (id, ext) => `${import.meta.env.BASE_URL}clips/clip-${id}.${ext}`

export default function WorkSamples() {
  const [active, setActive] = useState('All')
  const [modal, setModal] = useState(null)

  const filtered = active === 'All' ? samples : samples.filter((s) => s.category === active)

  return (
    <>
      <section id="work" className="work">
        <div className="section-container">
          <div className="section-header">
            <p className="section-tag">My Work</p>
            <h2 className="section-title">Work Samples</h2>
            <p className="section-subtitle">
              Real podcast clips I've delivered. Faces are blurred and voices altered to protect client privacy. Tap any clip to watch.
            </p>
          </div>

          <div className="work-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${active === cat ? ' filter-btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {filtered.map((s) => (
              <button
                key={s.id}
                className="work-card"
                onClick={() => setModal(s)}
                aria-label={`Play ${s.title}`}
              >
                <div className="work-thumb">
                  <img src={clip(s.id, 'jpg')} alt="" loading="lazy" />
                  <div className="work-play">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="work-cat-badge">{s.category}</span>
                  <span className="work-duration">{s.duration}</span>
                </div>
                <div className="work-info">
                  <h3 className="work-title">{s.title}</h3>
                  <p className="work-desc">{s.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {modal && (
        <div className="lightbox" onClick={() => setModal(null)} role="dialog" aria-modal="true">
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setModal(null)} aria-label="Close">
              ✕
            </button>
            <div className="lightbox-video">
              <video
                src={clip(modal.id, 'mp4')}
                poster={clip(modal.id, 'jpg')}
                controls
                autoPlay
                playsInline
              />
            </div>
            <div className="lightbox-meta">
              <span className="work-cat-badge">{modal.category}</span>
              <h3 className="lightbox-title">{modal.title}</h3>
              <p className="lightbox-desc">{modal.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
