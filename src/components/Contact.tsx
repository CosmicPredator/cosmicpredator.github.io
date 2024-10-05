import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="tech-border section-bg"
      >
        <h2 className="text-2xl font-orbitron font-bold mb-4 flex items-center">
        <FontAwesomeIcon icon={faLink} className='mr-2'/> Contact Me
        </h2>
        <div className="space-y-4">
          <motion.a
            href="mailto:baranikumars2003@gmail.com"
            className="flex items-center text-primary hover:underline"
          >
            <FontAwesomeIcon icon={faEnvelope} className='mr-2' style={{ fontSize: '20px' }}/>
            baranikumars2003@gmail.com
          </motion.a>
          <motion.a
            href="https://github.com/CosmicPredator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:underline"
          >
            <FontAwesomeIcon icon={faGithub} className='mr-2' style={{ fontSize: '20px' }}/>
            CosmicPredator
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact