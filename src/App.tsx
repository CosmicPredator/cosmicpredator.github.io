import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : 'light'}`}>
      <div className="content-wrapper">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <main className="bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>
        <footer className="text-center py-4 bg-gray-200 dark:bg-gray-800">
          <p>&copy; 2024 Cosmic Predator. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App