import Hero from './components/Hero'
import Services from './components/Services'
import WorkSamples from './components/WorkSamples'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <WorkSamples />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
