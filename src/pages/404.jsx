import * as React from "react";
import { Link } from "gatsby";
import Layout from "./layout";
import { motion } from "framer-motion";
import AnimatedStars from "../components/AnimatedStars";
import TypewriterText from "../components/TypewriterText";

const NotFoundPage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      <AnimatedStars />
      <Layout>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 font-spaceGrotesk tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-red-600 [text-shadow:_0_0_30px_rgb(239_68_68_/_0.3)]">
                <TypewriterText 
                  text="404" 
                  delay={0} 
                  speed={100}
                />
              </span>
            </motion.h1>

            <motion.div
              className="p-6 bg-black/30 rounded-xl border border-red-500/20 backdrop-blur-sm max-w-xl mx-auto mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-gray-200 mb-4 font-spaceGrotesk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Page Not Found
              </motion.h2>
              
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Sorry, the page you are looking for could not be found. It might have been moved or deleted.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-red-500/20 rounded-lg blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Link to="/">
                  <motion.button
                    className="relative px-6 py-3 text-base font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-500 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>Return Home</span>
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
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 text-red-500/20 text-8xl pointer-events-none"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ◈
            </motion.div>
          </motion.div>
        </div>
      </Layout>
    </div>
  );
};

export default NotFoundPage;