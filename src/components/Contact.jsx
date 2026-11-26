export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    const mailto = `mailto:bryanreybalasabas@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <p className="section-tag">Let's Work Together</p>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <p className="contact-label">Email</p>
                <a href="mailto:bryanreybalasabas@gmail.com" className="contact-value">
                  bryanreybalasabas@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🌐</span>
              <div>
                <p className="contact-label">Availability</p>
                <p className="contact-value">Open for new projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Bryan Rey Balasabas · Podcast Clipper</p>
      </footer>
    </section>
  )
}
