import React from 'react'
import { motion } from 'framer-motion'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="py-4 fixed w-full z-10 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-orbitron font-bold text-primary"
        >
          CP
        </motion.h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-white hover:text-primary transition-colors font-heading"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-primary transition-colors font-heading"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-primary transition-colors font-heading"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="p-2 rounded-fulltransition-colors text-white">
          {darkMode ? <FontAwesomeIcon icon={faSun} style={{ fontSize: '24px' }}/> : 
            <FontAwesomeIcon icon={faMoon} style={{ fontSize: '24px' }}/>}
        </button>
      </div>
    </header>
  )
}

export default Header