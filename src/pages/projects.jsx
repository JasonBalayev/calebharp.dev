import * as React from "react";
import Layout from "./layout";
import ProjectCards from "../components/ProjectCards";
import { projects } from "../components/projects";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";

const Projects = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen relative overflow-y-auto pb-32">
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white text-arial"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-8 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-red-600 [text-shadow:_0_0_30px_rgb(239_68_68_/_0.3)] animate-pulse">
              <TypewriterText 
                text="My Projects" 
                delay={0} 
                speed={100}
              />
            </span>
          </motion.h1>
          <ProjectCards projects={projects} />
        </motion.div>
      </Layout>
    </div>
  );
};

export default Projects;
