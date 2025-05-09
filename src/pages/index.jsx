import * as React from "react";
import Layout from "../components/Layout";
import { Button } from "@nextui-org/button";
import FlyInText from "../components/TypewriterText";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import profileImage from "../images/professional/calebProfile.jpeg";
import { FaArrowDown, FaGithub, FaLinkedin, FaCode, FaLaptopCode, FaServer, FaTerminal } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const IndexPage = () => {
  return (
    <Layout>
      <div className="relative min-h-screen w-full overflow-y-auto pb-20">
        <motion.main
          className="flex flex-col items-center justify-center min-h-screen w-full relative z-10 px-4 max-w-7xl mx-auto pt-12 sm:pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section className="flex flex-col items-center w-full mt-2 sm:mt-4">
            <motion.div
              className="relative mb-6 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 animate-spin-slow" />              
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 opacity-30 blur-md animate-pulse-slow" />              
              <img
                src={profileImage}
                alt="Caleb Bennett-Harper"
                className="relative w-full h-full rounded-full shadow-xl p-[3px]"
              />
            </motion.div>

            <div className="relative w-full text-center">
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 [text-shadow:_0_0_30px_rgb(59_130_246_/_0.3)] animate-pulse font-serif italic">
                  <FlyInText text="Caleb Bennett-Harper" delay={0} speed={50} />
                </span>
              </h1>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 text-center text-gray-300 flex items-center justify-center gap-3 font-spaceGrotesk">
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
              </motion.div>
            </h2>

            <motion.div 
              className="text-base sm:text-lg md:text-xl mt-6 text-center text-gray-300 max-w-2xl relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <FlyInText
                text="Incoming SWE Intern @ Sixth Street."
                delay={1500}
                speed={40}
              />
            </motion.div>

            <motion.div 
              className="mt-12 w-full max-w-5xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6 rounded-xl border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Who Am I?
              </h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div 
                  className="flex-1 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5.3 }}
                >
                  <p className="text-gray-300">
                    I'm passionate about creating technology that solves real-world problems. My journey in software development 
                    has taken me from building simple applications to designing complex systems.
                  </p>
                  <p className="text-gray-300">
                    With experience in both frontend and backend technologies, I enjoy the challenge of 
                    creating seamless, efficient, and intuitive digital experiences.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex-1 bg-black/40 p-5 rounded-lg border border-blue-500/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Core Skills</h4>
                  <ul className="space-y-2">
                    {["Full-Stack Development", "System Architecture", "Problem Solving", "Data Analysis", "UI/UX Design"].map((skill, index) => (
                      <motion.li 
                        key={skill}
                        className="flex items-center gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 5.5 + (index * 0.1) }}
                      >
                        <span className="text-blue-500">→</span> {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-10 pt-6 border-t border-blue-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6 }}
              >
                <h4 className="text-center text-gray-400 mb-5 font-light">Explore My Work</h4>
                <div className="flex flex-wrap justify-center gap-5">
                  <Link to="/projects">
                    <motion.div
                      className="group relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-lg px-6 py-3 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <div className="relative flex items-center gap-3">
                        <span className="text-xl text-blue-400">💻</span>
                        <span className="text-white font-medium">Projects</span>
                      </div>
                    </motion.div>
                  </Link>
                  
                  <Link to="/experiences">
                    <motion.div
                      className="group relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-lg px-6 py-3 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <div className="relative flex items-center gap-3">
                        <span className="text-xl text-blue-400">🚀</span>
                        <span className="text-white font-medium">Experiences</span>
                      </div>
                    </motion.div>
                  </Link>
                  
                  <Link to="/about">
                    <motion.div
                      className="group relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-lg px-6 py-3 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <div className="relative flex items-center gap-3">
                        <span className="text-xl text-blue-400">👤</span>
                        <span className="text-white font-medium">About Me</span>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.5 }}
            >
              <a
                href="https://github.com/CalebBennett"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="bg-black/30 p-3 rounded-full border border-blue-500/30 hover:border-blue-500 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.div>
              </a>
              <a
                href="https://linkedin.com/in/CalebBennettHarper"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="bg-black/30 p-3 rounded-full border border-blue-500/30 hover:border-blue-500 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <FaLinkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.div>
              </a>
              <a
                href="https://x.com/Caleb_BH"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="bg-black/30 p-3 rounded-full border border-blue-500/30 hover:border-blue-500 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <FaXTwitter className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.div>
              </a>
            </motion.div>
          </motion.section>
        </motion.main>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Caleb Bennett-Harper - Portfolio</title>;