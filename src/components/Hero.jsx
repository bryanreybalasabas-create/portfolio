export default function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <span className="nav-logo">BRB</span>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-content">
        <p className="hero-tag">Podcast Clipper</p>
        <h1 className="hero-title">
          Bryan Rey<br />
          <span className="hero-title-accent">Balasabas</span>
        </h1>
        <p className="hero-subtitle">
          I turn your long-form podcast into a stream of short, shareable clips
          that grow your audience on every platform — fast turnaround, every time.
        </p>
        <div className="hero-cta">
          <a href="#services" className="btn btn-primary">See What I Do</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
