import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  
  // Check if we're on mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="project-card relative p-6 bg-black bg-opacity-40 rounded-xl border border-white border-opacity-10 hover:border-red-500 transition-all duration-300 h-full flex flex-col overflow-hidden"
      whileHover={!isMobile ? { y: -5, scale: 1.02 } : {}}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
    >
      {project.link && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobile ? 1 : (isHovered ? 1 : 0) }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 right-8 m-2 sm:m-3"
        >
          <motion.div 
            className="flex items-center gap-1 sm:gap-2 backdrop-blur-sm rounded-full bg-red-900/20 border border-red-700/30"
          >
            <motion.div
              className="flex items-center justify-center p-1.5 sm:p-2"
              whileHover={{ scale: 1.05 }}
            >
              <svg 
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400/70" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: isMobile ? 'auto' : (isHovered ? 'auto' : 0),
                opacity: isMobile ? 1 : (isHovered ? 1 : 0)
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="block px-2 text-xs sm:text-sm text-red-300/70 font-medium">
                Click Title For GitHub
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-red-800/10 via-red-500/10 to-rose-500/10"
        />
        <motion.div 
          className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-red-500/20 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        <motion.div
          className="absolute top-2 left-3"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-1.5 h-1.5 bg-red-500/40 rounded-full" />
        </motion.div>
        <motion.div
          className="absolute top-4 right-6"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-2 h-2 bg-rose-500/30 rounded-full" />
        </motion.div>
      </div>

      <div className="mt-12 sm:mt-14">
        {project.link ? (
          <a href={project.link} className="no-underline group">
            <motion.h1 
              className="text-xl sm:text-2xl font-bold text-gray-200 mb-6 relative inline-block"
              whileHover={{ scale: 1.01 }}
            >
              {project.name}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.h1>
          </a>
        ) : (
          <motion.h1 
            className="text-xl sm:text-2xl font-bold text-gray-200 mb-6"
            whileHover={{ scale: 1.01 }}
          >
            {project.name}
          </motion.h1>
        )}
      </div>
 
      <p className="text-base text-gray-400 flex-grow">
        {project.description}
      </p>
 
      <div className="mt-6">
        {project.liveLink && (
          <div className="flex justify-center mb-4">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
            >
              <button className="px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-500 transition-all duration-300 flex items-center gap-2">
                <span>View Live Demo</span>
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </button>
            </motion.a>
          </div>
        )}
 
        <div className="flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <motion.div 
              key={badge}
              className="px-3 py-1 text-sm text-gray-200 bg-black bg-opacity-40 rounded-full border border-white border-opacity-10 hover:border-red-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {badge}
            </motion.div>
          ))}
          
          {project.hackathon && (
            <motion.a
              href={project.hackathon.link}
              aria-label={`Link to ${project.hackathon.name}`}
              className="no-underline"
              whileHover={{ scale: 1.05 }}
            >
              <div className="px-3 py-1 text-sm text-gray-200 bg-black bg-opacity-40 rounded-full border border-red-500 hover:bg-red-500/20 transition-all duration-300">
                {project.hackathon.name}
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid gap-6 w-full mt-20 px-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.name}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;