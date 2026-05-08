import { motion, useScroll, useTransform } from "motion/react";
import { Zap } from "lucide-react";

interface BillboardProps {
  title: string;
  desc: string;
  progress: [number, number, number, number];
  position: { left?: string; right?: string; top?: string };
}

export default function Billboard({ title, desc, progress, position }: BillboardProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [...progress], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [...progress], [0.8, 1, 1, 1.2]);
  const rotateY = useTransform(scrollYProgress, [...progress], [20, 0, 0, -20]);

  return (
    <motion.div
      style={{ 
        opacity, 
        scale,
        rotateY,
        ...position
      }}
      className="absolute glass p-6 rounded-2xl border-neon-blue/20 shadow-[0_0_30px_rgba(0,242,255,0.1)] w-64 z-[60] pointer-events-auto group hover:border-neon-blue/50 transition-colors"
    >
      <div className="flex items-center gap-2 mb-3">
         <div className="p-1 bg-neon-blue/20 rounded">
            <Zap size={12} className="text-neon-blue" />
         </div>
         <span className="text-[10px] font-mono text-neon-blue tracking-widest uppercase">System Metric</span>
      </div>
      <h4 className="text-xl font-display font-bold mb-1 group-hover:text-neon-blue transition-colors">{title}</h4>
      <p className="text-xs text-neutral-500 font-mono tracking-tight leading-relaxed">{desc}</p>
      
      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-neon-blue/20 blur-sm pointer-events-none"
      />
    </motion.div>
  );
}
