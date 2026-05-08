import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function Bike() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Bike Speed and Tilt based on scroll acceleration
  const tilt = useTransform(smoothProgress, [0, 0.5, 1], [-2, 0, 2]);
  const yOffset = useTransform(smoothProgress, [0, 0.5, 1], [0, -15, 0]);
  
  // Throttle light glow
  const glowOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.3, 0.1, 0.1, 0.8]);

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none group">
      <motion.div 
        style={{ rotateZ: tilt, y: yOffset }}
        className="relative flex flex-col items-center"
      >
        {/* Bike Silhouette */}
        <div className="relative w-40 h-16">
           {/* Shadow */}
           <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/40 blur-xl rounded-full" />
           
           {/* Frame */}
           <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Body */}
              <div className="w-32 h-2 bg-neutral-800 rounded-full relative">
                 <div className="absolute -top-4 right-4 w-1 h-8 bg-neutral-800 rotate-12" />
                 <div className="absolute -top-6 left-12 w-1 h-6 bg-neutral-800 -rotate-45" />
                 
                 {/* Glowing Core */}
                 <motion.div 
                    style={{ opacity: glowOpacity }}
                    className="absolute inset-0 bg-neon-blue blur-[6px] rounded-full" 
                 />
              </div>
              
              {/* Wheels (Static but with motion blur effect) */}
              <div className="absolute left-0 bottom-0 w-16 h-16 border-4 border-neutral-800 rounded-full overflow-hidden">
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                   className="w-full h-full border border-dashed border-white/10" 
                 />
                 <div className="absolute inset-0 bg-radial-gradient(circle, transparent 60%, rgba(0,0,0,0.5))" />
              </div>
              <div className="absolute right-0 bottom-0 w-16 h-16 border-4 border-neutral-800 rounded-full overflow-hidden">
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                   className="w-full h-full border border-dashed border-white/10" 
                 />
                 <div className="absolute inset-0 bg-radial-gradient(circle, transparent 60%, rgba(0,0,0,0.5))" />
              </div>

              {/* Headlight Beam */}
              <motion.div 
                style={{ opacity: useTransform(smoothProgress, [0, 0.1], [0.4, 0.8]) }}
                className="absolute -right-32 top-0 w-48 h-16 bg-[radial-gradient(ellipse_at_left,rgba(0,242,255,0.15)_0%,transparent_70%)] blur-sm origin-left"
                animate={{ scaleX: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
           </div>
        </div>

        {/* Dynamic HUD Text */}
        <motion.div 
           className="mt-12 flex flex-col items-center gap-1"
        >
          <div className="px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <span className="font-mono text-[7px] text-neon-blue uppercase tracking-[0.4em] font-bold">
              Autonomous_Cruise_Active
            </span>
          </div>
          <div className="w-[1px] h-4 bg-linear-to-b from-neon-blue/40 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
