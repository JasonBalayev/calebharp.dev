import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-blue-900/40 hover:border-blue-700/40 transition-all duration-300 h-full flex flex-col"
    >
      <div className="h-2 bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-600"></div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-blue-100">
            {project.name}
          </h3>
          
          <div className="flex space-x-2">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-900/30 rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-800/40 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </motion.a>
            )}
            
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-900/30 rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-800/40 transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>
        
        <p className="text-blue-200/80 mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span 
                key={badge}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-900/20 text-blue-300 border border-blue-800/50"
              >
                <FaCode className="mr-1 w-3 h-3 text-blue-400" />
                {badge}
              </span>
            ))}
            
            {project.hackathon && (
              <a
                href={project.hackathon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-700/30 text-blue-200 hover:bg-blue-700/40 transition-colors border border-blue-600/40"
              >
                {project.hackathon.name}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid gap-8 w-full mt-12 px-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;