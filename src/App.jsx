import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './components/NavbarComp';
const App = () => {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
       </Routes>
    </Router>

  )
}

export default App