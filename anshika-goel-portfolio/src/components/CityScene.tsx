import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useMemo } from "react";

export default function CityScene() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  // SCENE DEFINITIONS (0-1 range)
  // 1: Stillness (0 - 0.1)
  // 2: Discovery (0.1 - 0.3)
  // 3: Immersion (0.3 - 0.5)
  // 4: Intelligence (0.5 - 0.65)
  // 5: Focus (0.65 - 0.8)
  // 6: Ascent (0.8 - 0.95)
  // 7: Final (0.95 - 1.0)

  // Atmospheric Colors
  const bgColor = useTransform(
    smoothProgress,
    [0, 0.8, 1],
    ["#0a0a0a", "#1a1a2e", "#2d3436"] // Night to Dawn
  );

  const neonColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.6, 0.9, 1],
    ["#00f2ff", "#bc13fe", "#ff00ff", "#00f2ff", "#fbc531"] // Blue -> Purple -> Pink -> Blue -> Sun
  );

  const fogOpacity = useTransform(smoothProgress, [0, 0.8, 1], [0.1, 0.2, 0.05]);
  const fogScale = useTransform(smoothProgress, [0, 1], [1, 1.5]);

  // Motion layers
  const gridY = useTransform(smoothProgress, [0, 1], ["0%", "-40%"]);
  const buildingScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  const speedLinesOpacity = useTransform(smoothProgress, [0.1, 0.3, 0.8, 0.95], [0, 0.4, 0.4, 0]);

  // Parallax elements for buildings
  const buildings = useMemo(() => [...Array(12)].map((_, i) => ({
    x: (i * 25) % 100,
    w: 20 + Math.random() * 40,
    h: 40 + Math.random() * 60,
    delay: Math.random() * 5
  })), []);

  return (
    <motion.div 
      style={{ backgroundColor: bgColor }}
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Background Neural Fog & Glow */}
      <motion.div 
        style={{ 
          opacity: fogOpacity, 
          scale: fogScale,
          background: `radial-gradient(circle at 50% 40%, ${neonColor}33 0%, transparent 70%)`
        }}
        className="absolute inset-0"
      />

      {/* Grid Floor - Movement feel */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.07] flex items-center justify-center pointer-events-none"
      >
        <div 
          className="w-[200%] h-[200%] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [transform:perspective(800px)_rotateX(75deg)] origin-center"
          style={{ backgroundImage: `linear-gradient(${neonColor}22 1px, transparent 1px), linear-gradient(90deg, ${neonColor}22 1px, transparent 1px)` }}
        />
      </motion.div>

      {/* Distant Buildings (Parallax) */}
      <motion.div 
        style={{ scale: buildingScale }}
        className="absolute inset-0 flex items-end justify-between px-20 opacity-20"
      >
        {buildings.map((b, i) => (
          <motion.div 
            key={i} 
            className="w-40 bg-neutral-900 border-x border-t border-white/5 relative"
            style={{ 
              height: `${b.h}%`,
              left: `${b.x}%`,
              transform: `translateZ(${i * -10}px)`
            }}
          >
             {/* Window Lights */}
             <motion.div 
               style={{ backgroundColor: neonColor }}
               animate={{ opacity: [0.1, 0.4, 0.1] }}
               transition={{ duration: 3 + b.delay, repeat: Infinity }}
               className="absolute top-10 left-4 right-4 h-1 rounded-full opacity-20" 
             />
             <div className="absolute top-20 left-4 right-4 h-1 bg-white/5 rounded-full" />
          </motion.div>
        ))}
      </motion.div>

      {/* Speed Lines during "Immersion" and "Intelligence" */}
      <motion.div 
        style={{ opacity: speedLinesOpacity }}
        className="absolute inset-0 z-10"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
            style={{
              width: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px ${neonColor}`
            }}
            animate={{ x: [-500, 2000] }}
            transition={{ 
              duration: 0.5 + Math.random() * 1, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>

      {/* Holographic Panels (Scene 2 & 3) */}
      <motion.div 
        style={{ 
          opacity: useTransform(smoothProgress, [0.15, 0.25, 0.45, 0.55], [0, 0.3, 0.3, 0]),
          y: useTransform(smoothProgress, [0, 1], [0, -200])
        }}
        className="absolute inset-0 flex items-center justify-around"
      >
         {[...Array(4)].map((_, i) => (
           <div key={i} className="w-64 h-80 glass rounded-2xl border-white/10 flex flex-col p-6 gap-4">
              <div className="w-12 h-1.5 bg-neon-blue/30 rounded-full" />
              <div className="w-full h-1 bg-white/5 rounded-full" />
              <div className="w-2/3 h-1 bg-white/5 rounded-full" />
              <div className="mt-auto w-full h-24 bg-white/[0.02] rounded-lg border border-white/5" />
           </div>
         ))}
      </motion.div>

      {/* Neural Network Nodes (Scene 4) */}
      <motion.div 
        style={{ 
          opacity: useTransform(smoothProgress, [0.5, 0.55, 0.65, 0.75], [0, 0.4, 0.4, 0]) 
        }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              backgroundColor: neonColor,
              boxShadow: `0 0 15px ${neonColor}`
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent opacity-80" />
      
      {/* Film Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </motion.div>
  );
}
