import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'

import { GridBackground } from './components/ui/GridBackground'

function App() {
  return (
    <div className="min-h-screen pb-20 relative">
      <GridBackground />
      {/* Navigation could go here, but doing single page scroll for now */}
      <Hero />
      <div className="container mx-auto px-4 space-y-32">
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
