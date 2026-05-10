import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'  
import Education from './components/Education/Education'  
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import About from './components/About/About'  
const App=()=> {

  return (
     <div className='min-h-screen bg-slate-950'>
      <div className='relative'>
        <Navbar/>
        <About/>
        <Skills/>
        <Project/>
        <Education/>
        <Certifications/>
        <Contact/>
        <Footer/>
      </div>


     </div>
  )
}

export default App
