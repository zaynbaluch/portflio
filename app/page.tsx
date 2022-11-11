import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Experiences from '../components/Experiences'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
       <>
        <Landing/>
        <About/>
        <Experiences/>
        <Skills/>
        <Projects/>
        <Contact/>
       </>
  )
}
