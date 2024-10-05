import React from 'react'
import { motion } from 'framer-motion'
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="tech-border bg-primary bg-opacity-5"
      >
        <h2 className="text-2xl font-orbitron font-bold mb-4 flex items-center">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" /> About Me
        </h2>
        <p className="mb-4">
          👉 I'm Baranikumar Srinivasan, also known as Cosmic Predator, who's based on Chennai, India. I'm a Systems Engineer with a passion for cutting-edge technologies and software development.
        </p>
        <p className="mb-4">
        👉 Currently, I'm working as a Systems Engineer at UPS (United Parcel Service), where I apply my skills in various technologies to create efficient and innovative solutions.
        </p>
        <p>
        👉 I hold a Bachelor of Engineering degree in Mechatronics, Robotics & Automation, which has given me a strong foundation in both hardware and software aspects of complex systems.
        </p>
      </motion.div>
    </section>
  )
}

export default About