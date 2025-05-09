import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GeometricBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create geometric shapes
    const shapes = [];
    const shapeCount = Math.floor(window.innerWidth / 100); // Responsive number of shapes
    
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        type: Math.floor(Math.random() * 3), // 0: square, 1: circle, 2: triangle
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        opacity: Math.random() * 0.15 + 0.05,
        color: Math.random() > 0.5 ? 'blue' : 'indigo',
        moveX: (Math.random() - 0.5) * 0.3,
        moveY: (Math.random() - 0.5) * 0.3
      });
    }
    
    // Create grid lines
    const gridLines = {
      horizontal: [],
      vertical: []
    };
    
    const gridSpacing = 100;
    
    for (let y = 0; y < canvas.height; y += gridSpacing) {
      gridLines.horizontal.push({
        y,
        opacity: Math.random() * 0.05 + 0.02
      });
    }
    
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      gridLines.vertical.push({
        x,
        opacity: Math.random() * 0.05 + 0.02
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      gridLines.horizontal.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(59, 130, 246, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.moveTo(0, line.y);
        ctx.lineTo(canvas.width, line.y);
        ctx.stroke();
      });
      
      gridLines.vertical.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(59, 130, 246, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, canvas.height);
        ctx.stroke();
      });
      
      // Draw shapes
      shapes.forEach(shape => {
        // Update position
        shape.x += shape.moveX;
        shape.y += shape.moveY;
        
        // Bounce off edges
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
        
        // Update rotation
        shape.rotation += shape.rotationSpeed;
        
        // Draw shape
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        const colorMap = {
          'blue': `rgba(59, 130, 246, ${shape.opacity})`,
          'indigo': `rgba(99, 102, 241, ${shape.opacity})`
        };
        
        ctx.fillStyle = colorMap[shape.color];
        ctx.strokeStyle = colorMap[shape.color];
        ctx.lineWidth = 1;
        
        switch (shape.type) {
          case 0: // Square
            ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            break;
          case 1: // Circle
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 2: // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -shape.size / 2);
            ctx.lineTo(shape.size / 2, shape.size / 2);
            ctx.lineTo(-shape.size / 2, shape.size / 2);
            ctx.closePath();
            ctx.fill();
            break;
        }
        
        ctx.restore();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 bg-[#050a14]"
        style={{ pointerEvents: 'none' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#050a14] via-[#071428] to-[#050a14] opacity-80" />
      
      {/* Add some floating particles */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20 blur-md"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default GeometricBackground; 