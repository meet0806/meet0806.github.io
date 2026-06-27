import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import GitHubStats from './components/sections/GitHubStats'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <Navbar />

      <main className="relative z-[1]">
        <Hero />

        {/* Content scrolls over the fixed background video */}
        <div className="relative z-[1] bg-white">
          <Projects />
          <Experience />
          <Skills />
          <GitHubStats />
          <About />
          <Contact />
        </div>
      </main>
    </div>
  )
}
