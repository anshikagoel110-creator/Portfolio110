import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, X, Terminal, Cpu } from "lucide-react";
import { askAI } from "../services/geminiService";

export default function AIDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResponse("");
    const res = await askAI(query);
    setResponse(res);
    setLoading(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-4 md:right-10 z-[150] p-3 md:p-4 hologram-card text-neon-blue hover:scale-110 transition-transform flex items-center gap-2 group pointer-events-auto shadow-[0_0_20px_rgba(0,242,255,0.2)]"
        whileHover={{ x: -10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative">
           <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
           <motion.div 
             animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="absolute inset-0 bg-neon-blue rounded-full blur-md -z-10"
           />
        </div>
        <span className="text-[10px] uppercase tracking-widest font-bold hidden md:inline">AI Strategist</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 50 }}
            className="fixed top-40 right-4 md:right-10 w-[calc(100vw-32px)] md:w-80 z-[200] glass rounded-[32px] p-6 md:p-8 shadow-2xl border-neon-blue/30 overflow-hidden pointer-events-auto border-t-2"
          >
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#00f2ff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6 relative">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-neon-blue/20 rounded-md">
                   <Cpu size={14} className="text-neon-blue" />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-mono text-neon-blue uppercase tracking-widest font-bold">Neural Link</span>
                   <span className="text-[8px] opacity-40 font-mono">ENCRYPTED_SESSION</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 relative max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {response ? (
                <motion.div 
                   initial={{ opacity: 0, y: 10 }} 
                   animate={{ opacity: 1, y: 0 }}
                   className="text-[13px] text-neutral-300 font-mono leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5 shadow-inner"
                >
                  <p>{response}</p>
                </motion.div>
              ) : (
                <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                   <p className="text-sm text-neutral-400 italic">"I'm calibrated to Anshika's design DNA. What would you like to analyze?"</p>
                </div>
              )}

              {loading && (
                <div className="flex justify-center py-4">
                   <motion.div 
                     animate={{ rotate: 360 }} 
                     transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                     className="w-5 h-5 border-2 border-neon-blue border-t-transparent rounded-full"
                   />
                </div>
              )}

              <form onSubmit={handleAsk} className="relative mt-4">
                <input
                  type="text"
                  placeholder="Analyze project impact..."
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-blue transition-all font-mono placeholder:opacity-30"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                   type="submit" 
                   disabled={loading}
                   className="absolute right-2 top-2 p-1.5 bg-neon-blue text-black rounded-lg disabled:opacity-50 hover:scale-105 transition-transform"
                >
                   <Send size={14} />
                </button>
              </form>
            </div>
            
            <div className="mt-8 flex justify-between items-center opacity-20 text-[7px] font-mono uppercase tracking-[0.3em]">
               <div className="flex gap-2">
                 <span className="w-1 h-1 bg-neon-blue rounded-full animate-pulse" />
                 <span>Strategic Core Active</span>
               </div>
               <span>VER_2.4.9</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
