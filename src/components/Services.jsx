const services = [
  {
    icon: '✂️',
    title: 'Short Clips (< 60s)',
    description:
      'Hook-first clips extracted from your podcast and formatted for TikTok, Instagram Reels, and YouTube Shorts. Built to stop the scroll.',
  },
  {
    icon: '🎙️',
    title: 'Mid-Form Clips (1–5 min)',
    description:
      'Longer highlight cuts that capture a full story, argument, or moment — ideal for LinkedIn, Twitter/X, and YouTube.',
  },
  {
    icon: '🏆',
    title: 'Best-Of Reels',
    description:
      'Monthly or seasonal compilations of your most quotable, viral-worthy moments — the best of your best in one shareable video.',
  },
  {
    icon: '📌',
    title: 'Clip Strategy',
    description:
      'I help you identify which moments actually perform. No guesswork — data-informed picks based on what gets shared and replayed.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header">
          <p className="section-tag">What I Offer</p>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            I turn your long-form podcast into a stream of clips that grow your audience across every platform.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
