import * as React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import FlyInText from "../components/TypewriterText";
import { FaXTwitter, FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Layout>
        <div className="relative min-h-screen flex flex-col items-center justify-start px-4 text-white z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 [text-shadow:_0_0_30px_rgb(59_130_246_/_0.3)] animate-pulse font-serif italic">
                <FlyInText 
                  text="Let's Connect"
                  delay={0}
                  speed={50}
                />
              </span>
            </h1>
          </motion.div>

          <div className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-2xl overflow-hidden shadow-xl border border-blue-500/30">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-blue-300">Direct Contact</h2>
                  
                  <div className="space-y-4">
                    <div className="group">
                      <div className="flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-blue-900/30">
                        <div className="bg-blue-500/20 p-3 rounded-lg">
                          <FaEnvelope className="text-blue-400 w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">School Email</h3>
                          <p className="text-gray-400">bennett-ha.c [at] northeastern [dot] edu</p>
                          <a 
                            href="mailto:bennett-ha.c@northeastern.edu"
                            className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <span>Send email</span>
                            <FaArrowRight className="ml-2 w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-blue-900/30">
                        <div className="bg-blue-500/20 p-3 rounded-lg">
                          <FaEnvelope className="text-blue-400 w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Personal Email</h3>
                          <p className="text-gray-400">caleb.bennett.harper [at] gmail [dot] com</p>
                          <a 
                            href="mailto:caleb.bennett.harper@gmail.com"
                            className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <span>Send email</span>
                            <FaArrowRight className="ml-2 w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-2xl overflow-hidden shadow-xl border border-blue-500/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-blue-300">Availability</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Response Time</span>
                      <span className="text-blue-400 font-medium">24-48 hours</span>
                    </div>
                    <div className="w-full bg-blue-900/30 h-1 rounded-full">
                      <motion.div 
                        className="bg-blue-500 h-1 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: "70%" }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-gray-300">Open to Opportunities</span>
                      <span className="text-green-400 font-medium">Yes</span>
                    </div>
                    <div className="w-full bg-blue-900/30 h-1 rounded-full">
                      <motion.div 
                        className="bg-green-500 h-1 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-2xl overflow-hidden shadow-xl border border-blue-500/30">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-blue-300">Social Profiles</h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <a 
                      href="https://www.linkedin.com/in/caleb-bennett-harper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <motion.div 
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-900/50 to-blue-800/50 hover:from-blue-800/70 hover:to-blue-700/70 transition-all duration-300 border border-blue-700/50 hover:border-blue-600"
                        whileHover={{ y: -3 }}
                      >
                        <div className="bg-blue-800/80 p-3 rounded-lg">
                          <FaLinkedin className="text-blue-300 w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                          <p className="text-gray-400">Professional network & updates</p>
                        </div>
                        <FaArrowRight className="ml-auto text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </a>
                    
                    <a 
                      href="https://github.com/CalebBennett-Harper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <motion.div 
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 border border-gray-700/50 hover:border-gray-600"
                        whileHover={{ y: -3 }}
                      >
                        <div className="bg-gray-800 p-3 rounded-lg">
                          <FaGithub className="text-gray-300 w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">GitHub</h3>
                          <p className="text-gray-400">Code repositories & projects</p>
                        </div>
                        <FaArrowRight className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </a>
                    
                    <a 
                      href="https://x.com/Caleb_BH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <motion.div 
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 border border-gray-700/50 hover:border-gray-600"
                        whileHover={{ y: -3 }}
                      >
                        <div className="bg-gray-800 p-3 rounded-lg">
                          <FaXTwitter className="text-gray-300 w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">X (Twitter)</h3>
                          <p className="text-gray-400">Thoughts & industry updates</p>
                        </div>
                        <FaArrowRight className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </a>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 rounded-2xl overflow-hidden shadow-xl border border-blue-500/30 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-300">Let's Work Together</h2>
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <motion.a
                  href="mailto:bennett-ha.c@northeastern.edu"
                  className="inline-block w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 transition-all duration-300">
                    <FaEnvelope className="w-5 h-5" />
                    <span>Start a Conversation</span>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;

export const Head = () => <title>Contact | Caleb Bennett-Harper</title>;
