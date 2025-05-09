import * as React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";
import AnimatedStars from "../components/AnimatedStars";
import { languagesData, toolsData, frameworksData } from "../data/skillsData.js";
import { courseworkData } from "../data/courseworkData.js";
import { FaSkating } from 'react-icons/fa';

// Add this animation variant
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Skill Section Component
const SkillSection = ({ title, skills }) => (
  <motion.section
    className="mt-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold text-center mb-8 font-spaceGrotesk">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-500">
        {title}
      </span>
    </h2>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          image={skill.image}
          delay={index}
        />
      ))}
    </div>
  </motion.section>
);

const SkillCard = ({ name, image }) => {
  // Function to determine image size class based on name
  const getImageSizeClass = (name) => {
    switch (name) {
      case "Angular":
        return "w-14 h-14 sm:w-16 sm:h-16";
      default:
        return "w-10 h-10 sm:w-12 sm:h-12";
    }
  };

  // White logo for NextJS
  const getImageClass = (name) => {
    switch (name) {
      case "NextJS":
        return "w-full h-full object-contain brightness-0 invert"; 
      default:
        return "w-full h-full object-contain";
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={childVariants}
      className="group relative"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
    >
      <div className="relative p-4 bg-black bg-opacity-40 rounded-xl border border-white border-opacity-10 group-hover:border-red-500 transition-all duration-200 h-[120px] sm:h-[130px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-between h-full">
          <div className={`flex items-center justify-center ${getImageSizeClass(name)}`}>
            <img 
              src={image} 
              alt={name} 
              className={getImageClass(name)}
            />
          </div>
          <p className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-red-400 transition-colors duration-200 text-center mt-2">
            {name}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CourseworkCard = ({ title, items }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      className="p-6 bg-black bg-opacity-40 rounded-xl border border-white border-opacity-10 hover:border-red-500 transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-red-400">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-red-400"
        >
          ▼
        </motion.div>
      </div>
      <motion.ul 
        className="space-y-2 overflow-hidden"
        animate={{ 
          height: isExpanded ? "auto" : "100px",
          opacity: isExpanded ? 1 : 0.7
        }}
        transition={{ duration: 0.3 }}
      >
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-gray-300 flex items-center space-x-2"
          >
            <span className="text-red-500">•</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const CourseworkSection = () => (
  <motion.section
    className="mt-20 max-w-4xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold text-center mb-12 font-spaceGrotesk">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-red-600 [text-shadow:_0_0_30px_rgb(239_68_68_/_0.3)] animate-pulse">
        Academic Background
      </span>
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      <CourseworkCard title="Relevant Courses" items={courseworkData.courses} />
      <CourseworkCard title="Clubs & Activities" items={courseworkData.activities} />
    </div>
  </motion.section>
);

const HighlightedText = ({ children }) => (
  <motion.span
    className="text-red-400 font-semibold relative inline-block"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    {children}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    />
  </motion.span>
);

const About = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      <AnimatedStars />
      <Layout>
        <div className="relative z-10 text-white pb-20">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-8 mb-12 font-spaceGrotesk tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-pink-500 [text-shadow:_0_0_30px_rgb(239_68_68_/_0.3)] animate-pulse">
              <TypewriterText 
                text="About Me" 
                delay={0} 
                speed={100}
              />
            </span>
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto text-lg text-gray-300 mb-16 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="p-6 bg-black/30 rounded-xl border border-red-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="leading-relaxed"
              >
                I'm a <HighlightedText>Computer Science student</HighlightedText>{" "}at{" "}
                <HighlightedText>Northeastern University</HighlightedText>, class of 2027. 
                My passion lies in developing meaningful projects. My interests lie in{" "}
                <HighlightedText>full-stack development</HighlightedText>{" "}within the{" "}
                <HighlightedText>Web3</HighlightedText>{" "}and{" "}
                <HighlightedText>Web2</HighlightedText>{" "}spaces,{" "}
                <HighlightedText>system design</HighlightedText>{" "}(architectures), and{" "}
                <HighlightedText>AI</HighlightedText>.
              </motion.p>

              <motion.div 
                className="mt-6 p-4 bg-gradient-to-r from-red-500/5 to-rose-500/5 rounded-lg border-l-2 border-red-500"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-gray-300">
                  Currently seeking{" "}<HighlightedText>internship opportunities</HighlightedText>{" "}in{" "}
                  software development, I'm particularly interested in:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Full-stack Development",
                    "Artificial Intelligence",
                    "System Design",
                    "Web Design",
                    "Quality Assurance"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                      className="flex items-center gap-2"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                        className="text-red-400"
                      >
                        ▹
                      </motion.span>
                      <span className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative mt-8 p-6 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-xl border border-red-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute -top-3 left-4 bg-[#0a0a0a] px-4 py-1">
                <span className="text-red-400 font-semibold">Fun Fact</span>
              </div>
              
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-red-400 text-3xl"
                >
                  <FaSkating />
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-gray-300"
                >
                  When I'm not coding, you'll find me skateboarding at the best skatepark I can find. 
                  I've been skating for a few years with a few tricks mastered, but I mainly skate bowls. 
                  In the near future, I will have collected a deck (wooden board of the skateboard) 
                  from every state with some boards currently found from California, Connecticut, and Massachusets. 
                  <motion.span
                    className="inline-block ml-2"
                    animate={{
                      rotate: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🛹
                  </motion.span>
                </motion.p>
              </div>

              <motion.div
                className="absolute -bottom-1 -right-1 text-red-500/20 text-6xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                🛹
              </motion.div>
            </motion.div>
          </motion.div>
          <CourseworkSection />
          <SkillSection title="Languages" skills={languagesData} />
          <SkillSection title="Developer Tools" skills={toolsData} />
          <SkillSection title="Frameworks" skills={frameworksData} />
        </div>
      </Layout>
    </div>
  );
};

export default About; 