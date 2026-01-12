import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'

import { GridBackground } from './components/ui/GridBackground'
import { ThemeToggle } from './components/ui/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen pb-20 relative transition-colors duration-300">
      <ThemeToggle />
      <GridBackground />
      <div className="relative z-10">
        <Hero />
        <div className="container mx-auto px-4 space-y-32">
          <Skills />
        </div>
        <Journey />
        <div className="container mx-auto px-4 space-y-32 mt-32">
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
