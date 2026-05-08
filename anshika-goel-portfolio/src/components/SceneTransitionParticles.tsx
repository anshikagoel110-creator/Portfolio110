import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function SceneTransitionParticles() {
  const { scrollYProgress } = useScroll();
  const [activeBurst, setActiveBurst] = useState<{ color: string, id: number } | null>(null);
  const [lastScene, setLastScene] = useState(0);

  // Define scene thresholds
  const thresholds = [0.1, 0.3, 0.5, 0.65, 0.8, 0.95];
  const colors = ["#00f2ff", "#bc13fe", "#ff00ff", "#00f2ff", "#fbc531", "#ffffff"];

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const currentScene = thresholds.findIndex(t => latest < t);
      const sceneIndex = currentScene === -1 ? thresholds.length : currentScene;

      if (sceneIndex !== lastScene) {
        setActiveBurst({ color: colors[sceneIndex] || "#ffffff", id: Date.now() });
        setLastScene(sceneIndex);
      }
    });
  }, [scrollYProgress, lastScene]);

  if (!activeBurst) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`${activeBurst.id}-${i}`}
          initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [0, Math.random() * 2 + 1, 0], 
            opacity: [1, 0.5, 0],
            x: (Math.random() - 0.5) * 1200,
            y: (Math.random() - 0.5) * 1200
          }}
          transition={{ 
            duration: 1.5, 
            ease: [0.22, 1, 0.36, 1],
            delay: Math.random() * 0.1 
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{ 
            backgroundColor: activeBurst.color,
            boxShadow: `0 0 20px ${activeBurst.color}`,
            filter: "blur(1px)"
          }}
        />
      ))}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.2, 0], scale: [0.8, 1.5, 2] }}
        transition={{ duration: 1.2 }}
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{ 
          background: `radial-gradient(circle, ${activeBurst.color}33 0%, transparent 70%)` 
        }}
      />
    </div>
  );
}
