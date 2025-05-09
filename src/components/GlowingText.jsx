import React from "react";
import { motion } from "framer-motion";

const GlowingText = ({ text }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="glowing-text text-4xl sm:text-6xl text-white mb-4"
    >
      {text}
    </motion.div>
  );
};

export default GlowingText;
