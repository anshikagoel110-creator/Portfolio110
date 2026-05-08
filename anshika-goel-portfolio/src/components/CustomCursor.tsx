import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";

// Subtle UI Sounds
const HOVER_SOUND = "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3";
const CLICK_SOUND = "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const springConfig = { stiffness: 500, damping: 28 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const playSound = useCallback((src: string) => {
    const audio = new Audio(src);
    audio.volume = 0.1;
    audio.play().catch(() => {}); // Ignore autoplay blocks
  }, []);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('button, a, .group, input, [role="button"], .hover-target');
      
      if (hoverable) {
        if (!isHovering) playSound(HOVER_SOUND);
        setIsHovering(true);
        
        // Contextual cursor feedback
        if (hoverable.classList.contains('group')) {
          setHoverType('VIEW');
        } else if (hoverable.tagName === 'A' || hoverable.closest('a')) {
          setHoverType('GO');
        } else {
          setHoverType(null);
        }
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      playSound(CLICK_SOUND);
    };
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverStart);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, isHovering, playSound]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
          scale: isClicked ? 1.5 : (isHovering ? 2.5 : 1),
          borderColor: isHovering ? "#00f2ff" : "rgba(255, 255, 255, 0.2)",
          backgroundColor: isHovering ? "rgba(0, 242, 255, 0.05)" : "transparent",
        }}
        className="fixed top-0 left-0 w-6 h-6 border rounded-full pointer-events-none z-[10000] transition-colors duration-300"
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,242,255,0.4)] flex items-center justify-center"
            >
              {hoverType && (
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[4px] font-mono font-bold text-neon-blue tracking-widest"
                >
                  {hoverType}
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Center Point */}
      <motion.div
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
          scale: isClicked ? 4 : (isHovering ? 0.3 : 1),
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neon-blue rounded-full pointer-events-none z-[10001] shadow-[0_0_10px_#00f2ff]"
      />
    </>
  );
}
