import React from 'react'
import { motion } from 'framer-motion'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero: React.FC = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-900">
      <div className="container relative z-1 mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-heading">
            Cosmic Predator
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium mb-8 text-gray-400 font-heading">
            a.k.a Baranikumar Srinivasan
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300 font-heading">
            Systems Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Passionate about cutting-edge technologies and software development.
            Creating efficient and innovative solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
            <motion.a
              href="https://github.com/CosmicPredator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" style={{ fontSize: '20px' }} />
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero