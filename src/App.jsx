import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import PNF from './components/PNF'

function App() {

  return (
    <>
    <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
      {/* <Routes>
        <Route path="/*" element={<PNF />} />
      </Routes> */}
    </>
  )
}

export default App
