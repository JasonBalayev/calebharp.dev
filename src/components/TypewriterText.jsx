import React from "react";
import { motion } from "framer-motion";

const FlyInText = ({ text, delay = 0, speed = 50 }) => {
  // Split text into individual characters for animation
  const characters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: speed / 1000,
        delayChildren: delay / 1000,
      },
    }),
  };
  
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      x: -20,
      rotate: -10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
  
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {characters.map((character, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ 
            textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
            display: character === " " ? "inline" : "inline-block"
          }}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default FlyInText;
