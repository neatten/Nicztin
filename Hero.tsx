import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  lifetime: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const colors = ["#818cf8", "#8b5cf6", "#6366f1"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (event: MouseEvent) => {
      for (let i = 0; i < 5; i++) {
        particlesRef.current.push({
          x: event.clientX,
          y: event.clientY,
          size: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          lifetime: 50
        });
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.y -= 1;
        particle.lifetime--;
        
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        return particle.lifetime > 0;
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-auto z-0"
      />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.h1 
          className="hero-title text-8xl font-bold mb-8 animate-neon-glow"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gradient">NE</span>
        </motion.h1>
        <motion.h2 
          className="hero-subtitle text-6xl font-bold mb-6 animate-marquee whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
        >
          Do Everything Better • Do Everything Better • Do Everything Better
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Experience the full power of Unrestricted Music. Stream now and let it inspire you to rise above challenges.
        </motion.p>
      </motion.div>
    </section>
  );
}
