import Intro from './components/Intro'
import Experience from './components/Experience'
import Education from './components/Edcuation'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Motivational from './components/Motivational'
import Chess from './components/Chess'


function App() {
  return (
    <div className="bg-zinc-800">
      <Intro />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Motivational />
      <Chess />
      <p className='text-white text-center mt-7 '>Copyright © 2024 Risat Rahaman. All Right Reserved</p>
    </div>
  
    
  )
}

export default App
