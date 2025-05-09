import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768
      );
    };
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Only add mouse events if not mobile
    if (!isMobile) {
      const updateMousePosition = (e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      const handleMouseDown = () => setIsClicking(true);
      const handleMouseUp = () => setIsClicking(false);
      
      const handleMouseOver = (e) => {
        if (
          e.target.tagName === 'BUTTON' || 
          e.target.tagName === 'A' || 
          e.target.closest('a') || 
          e.target.closest('button') ||
          e.target.classList.contains('hover-effect')
        ) {
          setIsHovering(true);
        }
      };
      
      const handleMouseOut = (e) => {
        if (
          e.target.tagName === 'BUTTON' || 
          e.target.tagName === 'A' || 
          e.target.closest('a') || 
          e.target.closest('button') ||
          e.target.classList.contains('hover-effect')
        ) {
          setIsHovering(false);
        }
      };

      // Hide the default cursor
      document.body.style.cursor = "none";
      window.addEventListener("mousemove", updateMousePosition, { passive: true });
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseout", handleMouseOut);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mouseout", handleMouseOut);
        document.body.style.cursor = "auto";
      };
    } else {
      // Reset cursor style on mobile
      document.body.style.cursor = "auto";
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]); 

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        className="fixed rounded-full bg-red-600/60 backdrop-blur-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          width: isHovering ? "32px" : "24px",
          height: isHovering ? "32px" : "24px",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      <motion.div
        className="fixed rounded-full bg-red-500"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.2 : isHovering ? 0.5 : 1,
          width: isHovering ? "8px" : "12px",
          height: isHovering ? "8px" : "12px",
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {isClicking && (
        <motion.div
          className="fixed text-red-400 font-mono pointer-events-none select-none"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          ₿
        </motion.div>
      )}
    </div>
  );
};

export default CustomCursor; 