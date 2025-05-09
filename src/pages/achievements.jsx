import * as React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";
import AnimatedStars from "../components/AnimatedStars";
import { FaTrophy} from "react-icons/fa";
import hackathonImage from '../images/professional/site.jpeg';
import agentGameImage from '../images/professional/agentgame.jpeg';
import ereborImage from '../images/professional/erebor.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const AchievementCard = ({ 
  title, 
  date, 
  description, 
  image, 
  technologies, 
  team, 
  projectLink, 
  icon = <FaTrophy className="text-yellow-400" />
}) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg hover:border-red-500/40 transition-all duration-300 w-full"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative">
        {image && (
          <div className="relative h-64 sm:h-80 md:h-[28rem] overflow-hidden w-full">
            <motion.img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover object-[center_10%] scale-[1.25]"
              whileHover={{ scale: 1.35, transition: { duration: 0.5 } }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

            <motion.div 
              className="absolute inset-0 pointer-events-none overflow-hidden"
              whileHover={{ opacity: 0.8 }}
            >
              <motion.div 
                className="h-[1px] w-1/3 bg-red-500/30 absolute top-[30%] right-0"
                whileHover={{ width: "50%", opacity: 0.6 }}
              ></motion.div>
              <motion.div 
                className="h-[1px] w-1/4 bg-red-500/30 absolute top-[70%] left-0"
                whileHover={{ width: "40%", opacity: 0.6 }}
              ></motion.div>
              <motion.div 
                className="w-[1px] h-1/2 bg-red-500/30 absolute left-[30%] bottom-0"
                whileHover={{ height: "70%", opacity: 0.6 }}
              ></motion.div>
              <motion.div 
                className="w-[1px] h-1/3 bg-red-500/30 absolute right-[20%] top-0"
                whileHover={{ height: "50%", opacity: 0.6 }}
              ></motion.div>
            </motion.div>
          </div>
        )}
        
        <motion.div 
          className="absolute top-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full"
          whileHover={{ 
            backgroundColor: "rgba(239, 68, 68, 0.2)",
            scale: 1.05
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {icon}
          </motion.div>
          <span className="text-white text-sm font-medium">{date}</span>
        </motion.div>
      </div>
      
      <div className="p-5 sm:p-6">
        <motion.h3 
          className="text-xl sm:text-2xl font-bold mb-3 text-red-400 font-spaceGrotesk"
          whileHover={{ 
            color: "#f87171", 
            scale: 1.01,
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-300 mb-4 text-sm sm:text-base">{description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {technologies && (
            <motion.div 
              className="bg-black/50 p-3 rounded-lg border border-red-500/20"
              whileHover={{ 
                backgroundColor: "rgba(20, 20, 20, 0.7)",
                borderColor: "rgba(239, 68, 68, 0.4)",
                y: -3
              }}
            >
              <div className="text-red-400 font-semibold mb-1 text-sm">Technologies Used</div>
              <div className="text-gray-300 text-sm">{technologies}</div>
            </motion.div>
          )}
          
          {team && (
            <motion.div 
              className="bg-black/50 p-3 rounded-lg border border-red-500/20"
              whileHover={{ 
                backgroundColor: "rgba(20, 20, 20, 0.7)",
                borderColor: "rgba(239, 68, 68, 0.4)",
                y: -3
              }}
            >
              <div className="text-red-400 font-semibold mb-1 text-sm">Team Members</div>
              <div className="text-gray-300 text-sm">{team}</div>
            </motion.div>
          )}
        </div>
        
        {projectLink && (
          <div className="flex justify-end">
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <Layout>
      <div className="relative min-h-screen w-full overflow-y-auto pb-20">
        <AnimatedStars />
        
        <motion.main
          className="relative z-10 py-12 max-w-6xl mx-auto px-4 sm:px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 font-spaceGrotesk tracking-tight"
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-red-600 [text-shadow:_0_0_30px_rgb(239_68_68_/_0.3)] animate-pulse">
              <TypewriterText 
                text="Achievements" 
                delay={0}
                speed={100}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-center max-w-3xl mx-auto mb-12 text-lg"
            variants={itemVariants}
          >
            Highlighting my accomplishments and recognition in the tech industry.
          </motion.p>
          
          <div className="grid grid-cols-1 gap-8 mb-16 max-w-5xl mx-auto">
            <AchievementCard 
              title="First Place Winner ($4,000 Top Prize) - Snowball Hackathon"
              date="April 2025"
              description="Led a team of 4 developers to create an innovative blockchain solution that won first place among 20+ competing teams. Our project focused on creating a decentralized application that addressed real-world problems in the financial sector."
              image={hackathonImage}
              technologies="React, Solidity, Ethereum, Web3.js"
              team="Jason Balayev, Saad Naji, Nikhil Ramchandani, Gabriel Ginsberg"
              projectLink="/projects#snowball-hackathon"
              icon={<FaTrophy className="text-yellow-400" />}
            />
            
            <AchievementCard 
              title="Second Place Winner ($2,000 Prize) - Erebor Hackathon"
              date="March 2025"
              description="Collaborated with a talented team to develop a cutting-edge blockchain solution that secured second place in a competitive field of developers. Our project combined innovative smart contract architecture with an intuitive user interface to solve complex challenges in decentralized finance."
              image={ereborImage}
              technologies="React, Solidity, Ethereum, GraphQL, The Graph"
              team="Jason Balayev, Saad Naji, Nikhil Ramchandani, Gabriel Ginsberg"
              projectLink="/projects#erebor-hackathon"
              icon={<FaTrophy className="text-yellow-400" />}
            />
            
            <AchievementCard 
              title="Champion ($2,000 Top Prize) - NEAR AI Agent Games Hackathon"
              date="February 2025"
              description="Competed individually and won the top prize at the first-ever Agent Games Hackathon at ETHDenver. Developed an innovative AI agent that conquered Atari classics while staking $NEAR tokens, showcasing the powerful combination of blockchain technology with reinforcement learning algorithms."
              image={agentGameImage}
              technologies="NEAR Protocol, AI/ML, Reinforcement Learning, Python, Atari SDK"
              team="Solo Project - Jason Balayev"
              projectLink="/projects#agent-games"
              icon={<FaTrophy className="text-yellow-400" />}
            />
          </div>
          
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
          </motion.div>
        </motion.main>
      </div>
    </Layout>
  );
};

export default Achievements;

export const Head = () => <title>Achievements | Jason Balayev</title>; 