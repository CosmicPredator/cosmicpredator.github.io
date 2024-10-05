import React from 'react'
import { motion } from 'framer-motion'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills: React.FC = () => {
  const skills = [
    { name: '.NET', icon: '🔷' },
    { name: 'Go', icon: '🐹' },
    { name: 'C', icon: '🔤' },
    { name: 'Rust', icon: '🦀' },
    { name: 'WinUI3', icon: '🪟' },
    { name: 'Win32', icon: '💻' },
    { name: 'Discord APIs', icon: '🎮' },
    { name: 'FFIs', icon: '🔗' },
    { name: 'ROS', icon: '🤖' },
  ]

  return (
    <section id="skills" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="tech-border section-bg"
      >
        <h2 className="text-2xl font-orbitron font-bold mb-4 flex items-center">
          <FontAwesomeIcon icon={faCode} className="mr-2" /> Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-primary bg-opacity-10 p-3 rounded-lg flex items-center"
            >
              <span className="text-2xl mr-2">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills