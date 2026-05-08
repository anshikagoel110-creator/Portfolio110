import { motion, useScroll, useTransform } from "motion/react";

export default function Particles() {
  const { scrollYProgress } = useScroll();
  
  // Particles move at different speeds for depth
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const particles = [...Array(40)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
    layer: Math.floor(Math.random() * 3)
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden opacity-30">
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {particles.filter(p => p.layer === 0).map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            style={{ 
              top: p.top, 
              left: p.left, 
              width: p.size, 
              height: p.size,
              backgroundColor: '#00f2ff',
              borderRadius: '50%',
            }}
            className="absolute"
          />
        ))}
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {particles.filter(p => p.layer === 1).map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            style={{ 
              top: p.top, 
              left: p.left, 
              width: p.size * 0.8, 
              height: p.size * 0.8,
              backgroundColor: '#bc13fe',
              borderRadius: '50%',
            }}
            className="absolute"
          />
        ))}
      </motion.div>
    </div>
  );
}
