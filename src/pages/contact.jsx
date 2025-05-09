import * as React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";
import AnimatedStars from "../components/AnimatedStars";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      <AnimatedStars />
      <Layout>
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 font-spaceGrotesk tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-red-600 [text-shadow:_0_0_30px_rgb(239_68_68_/_0.3)] animate-pulse">
                <TypewriterText 
                  text="Let's Connect"
                  delay={0}
                  speed={100}
                />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mt-4">
              Sophomore @ Northeastern University actively seeking part-time internships in the Bay Area, California.  
              <br />  
              Open to opportunities for January–June or May–August of the 2025 season.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-col items-center space-y-6 w-full max-w-2xl"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://linkedin.com/in/jasonbalayev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <div className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-md h-14 px-10 flex justify-center items-center rounded-full shadow-lg transition-all duration-300 gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/JasonBalayev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <div className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white text-md h-14 px-10 flex justify-center items-center rounded-full shadow-lg transition-all duration-300 gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub
                </div>
              </motion.a>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://x.com/Jason_Balayev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <div className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white text-md h-14 px-10 flex justify-center items-center rounded-full shadow-lg transition-all duration-300 gap-2">
                <FaXTwitter className="w-5 h-5" />
                Follow on X
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-center bg-black/20 p-6 rounded-xl border border-red-500/20 backdrop-blur-sm"
          >
            <p className="text-lg sm:text-xl mb-4 font-spaceGrotesk">
              <span className="font-bold text-red-400">School Email:</span>{" "}
              <span className="text-gray-300">
                balayev.j{' '}
                <span className="text-red-400">[at]</span>
                {' '}northeastern{' '}
                <span className="text-red-400">[dot]</span>
                {' '}edu
              </span>
            </p>
            <p className="text-lg sm:text-xl">
              <span className="font-bold text-red-400">Personal Email:</span>{" "}
              <span className="text-gray-300">
                jasonbalayev{' '}
                <span className="text-red-400">[at]</span>
                {' '}gmail{' '}
                <span className="text-red-400">[dot]</span>
                {' '}com
              </span>
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:balayev.j@northeastern.edu"
              className="mt-6 inline-block"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-md h-12 px-8 flex justify-center items-center rounded-full shadow-lg transition-all duration-300 gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send an Email
              </div>
            </motion.a>
          </motion.div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
