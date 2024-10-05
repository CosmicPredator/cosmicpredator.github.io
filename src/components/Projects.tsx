import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'AniMoe',
      description: 'An Unofficial Windows 10 & 11 app for AniList.co',
      link: 'https://github.com/CosmicPredator/AniMoe',
    },
    {
      name: 'Resonance Extractor',
      description: 'An Improved app to extract Audio files from Genshin Impact or any other unreal engine .pck files.',
      link: 'https://github.com/CosmicPredator/Resonance-Extractor',
    },
  ]

  return (
    <section id="projects" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="tech-border section-bg"
      >
        <h2 className="text-2xl font-orbitron font-bold mb-4 flex items-center">
        <FontAwesomeIcon icon={faRocket} className='mr-2' /> Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="bg-primary bg-opacity-10 p-4 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:underline">
                <FontAwesomeIcon icon={faGithub} className='mr-2' style={{ fontSize: '20px' }}/>
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects