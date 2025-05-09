import React, { useEffect, useRef } from 'react';

const AnimatedStars = ({ cryptoMode = false }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef({
    particles: [],
    cryptoParticles: []
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const cryptoSymbols = [
      { symbol: '₿', name: 'BTC' },
      { symbol: 'Ξ', name: 'ETH' },
      { symbol: '◎', name: 'SOL' },
      { symbol: '₳', name: 'ADA' },
      { symbol: 'Ł', name: 'LTC' },
      { symbol: '₮', name: 'USDT' },
      { symbol: 'Ð', name: 'DOGE' },
      { symbol: 'Ƀ', name: 'XRP' }
    ];

    const binaryDigits = ['0', '1'];
    const initParticles = () => {
      particlesRef.current.particles = [];
      
      const maxParticles = 80;
      
      if (cryptoMode) {
        const gridRows = 4;
        const gridCols = 2;
        const gridSpacingX = canvas.width / (gridCols + 1);
        const gridSpacingY = canvas.height / (gridRows + 1);
        
        for (let row = 0; row < gridRows; row++) {
          for (let col = 0; col < gridCols; col++) {
            const symbolIndex = row * gridCols + col;
            if (symbolIndex < cryptoSymbols.length) {
              const crypto = cryptoSymbols[symbolIndex];
              particlesRef.current.particles.push({
                x: gridSpacingX * (col + 1),
                y: gridSpacingY * (row + 1),
                size: Math.min(24, Math.max(16, canvas.width / 40)),    
                type: 'crypto',
                symbol: crypto.symbol,
                name: crypto.name,
                opacity: 0.8,
                hue: 0,
                pulse: 0,
                pulseSpeed: Math.random() * 0.03 + 0.01,
                connectDistance: Math.max(canvas.width, canvas.height)
              });
            }
          }
        }
        
        for (let i = 0; i < maxParticles; i++) {
          particlesRef.current.particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 8,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.3 + 0.1,
            type: 'binary',
            symbol: binaryDigits[Math.floor(Math.random() * binaryDigits.length)],
            direction: Math.random() * Math.PI * 2,
            hue: Math.random() * 20 + 350,
            connectDistance: 100
          });
        }
      } else {
        for (let i = 0; i < maxParticles * 1.5; i++) {
          particlesRef.current.particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 12 + 8,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.3 + 0.1,
            type: 'binary',
            symbol: binaryDigits[Math.floor(Math.random() * binaryDigits.length)],
            direction: Math.random() * Math.PI * 2,
            hue: Math.random() * 20 + 350,
            connectDistance: 100
          });
        }
      }
      particlesRef.current.cryptoParticles = particlesRef.current.particles.filter(p => p.type === 'crypto');
    };
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      initParticles();
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.particles.forEach(particle => {
        if (particle.type === 'binary') {
          particle.x += Math.cos(particle.direction) * particle.speed;
          particle.x += Math.cos(particle.direction) * particle.speed;
          particle.y += Math.sin(particle.direction) * particle.speed;
          
          if (particle.x < -20) particle.x = canvas.width + 20;
          if (particle.x > canvas.width + 20) particle.x = -20;
          if (particle.y < -20) particle.y = canvas.height + 20;
          if (particle.y > canvas.height + 20) particle.y = -20;
        } else if (particle.type === 'crypto') {
          particle.pulse += particle.pulseSpeed;
          particle.opacity = 0.6 + Math.sin(particle.pulse) * 0.2;
        }

        if (particle.type === 'binary') {
          ctx.save();
          ctx.font = `${particle.size}px "Courier New", monospace`;
          ctx.fillStyle = `rgba(255, 30, 30, ${particle.opacity})`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.symbol, particle.x, particle.y);
          ctx.restore();
        } else if (particle.type === 'crypto') {
          ctx.save();
          ctx.font = `bold ${particle.size}px "Courier New", monospace`;
          ctx.fillStyle = `rgba(255, 50, 50, ${particle.opacity})`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.symbol, particle.x, particle.y); 
          ctx.font = `${particle.size * 0.5}px "Courier New", monospace`;
          ctx.fillStyle = `rgba(255, 100, 100, ${particle.opacity * 0.8})`;
          ctx.fillText(particle.name, particle.x, particle.y + particle.size * 0.8);
          ctx.restore();
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2
          );
          gradient.addColorStop(0, `rgba(255, 50, 50, 0)`);
          gradient.addColorStop(0.5, `rgba(255, 50, 50, ${particle.opacity * 0.1})`);
          gradient.addColorStop(1, `rgba(255, 50, 50, 0)`);
          ctx.fillStyle = gradient;
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (cryptoMode) {
        ctx.lineWidth = 0.8;
        const cryptoParticles = particlesRef.current.cryptoParticles;
        
        for (let i = 0; i < cryptoParticles.length; i++) {
          for (let j = i + 1; j < cryptoParticles.length; j++) {
            const p1 = cryptoParticles[i];
            const p2 = cryptoParticles[j];
            const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            
            const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
            const opacity = Math.max(0.05, 0.4 * (1 - distance / maxDistance));
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 50, 50, ${opacity})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            
            const speed = (i * 3 + j * 7) % 5 + 3;
            const packetPos = (Date.now() % (speed * 1000)) / (speed * 1000);
            const packetX = p1.x + (p2.x - p1.x) * packetPos;
            const packetY = p1.y + (p2.y - p1.y) * packetPos;
            
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 2})`;
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
            ctx.fill();
            
            if ((i + j) % 2 === 0) {
              const reversePacketPos = (Date.now() % (speed * 1200)) / (speed * 1200);
              const reversePacketX = p2.x + (p1.x - p2.x) * reversePacketPos;
              const reversePacketY = p2.y + (p1.y - p2.y) * reversePacketPos;
              
              ctx.beginPath();
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 2})`;
              ctx.arc(reversePacketX, reversePacketY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cryptoMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-transparent"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedStars;
