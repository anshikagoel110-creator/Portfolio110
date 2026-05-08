/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, ExternalLink, Mail, Github, Linkedin, Briefcase, User, Code, Heart, Zap, ArrowUpRight, Phone, Send, X, Award, ShieldCheck, Layers, Cpu, TrendingUp } from "lucide-react";
import CityScene from "./components/CityScene";
import Bike from "./components/Bike";
import CustomCursor from "./components/CustomCursor";
import AIDashboard from "./components/AIDashboard";
import Particles from "./components/Particles";
import SceneTransitionParticles from "./components/SceneTransitionParticles";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-[1000vh] bg-neutral-950 font-sans selection:bg-neon-blue/30 selection:text-white md:cursor-none">
      {/* Contact Section Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 pointer-events-none"
      >
        <AnimatePresence>
          {isContactOpen && (
            <ContactModal onClose={() => setIsContactOpen(false)} />
          )}
        </AnimatePresence>
      </motion.div>
      <CustomCursor />
      <AIDashboard />
      <Particles />

      {/* Navigation from Design Theme */}
      <motion.nav 
        style={{ 
          backgroundColor: useTransform(scrollYProgress, [0, 0.05], ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]),
          backdropFilter: useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(12px)"]),
          borderBottom: useTransform(scrollYProgress, [0, 0.05], ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(255, 255, 255, 0.05)"])
        }}
        className="fixed top-0 w-full flex justify-between items-center px-10 md:px-20 py-6 z-[150] pointer-events-none"
      >
        <div className="text-lg font-bold tracking-widest text-white pointer-events-auto cursor-pointer flex items-center gap-2 group">
          <div className="w-2 h-2 bg-neon-blue rounded-full absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          ANSHIKA GOEL
        </div>
        <div className="md:hidden flex gap-4 items-center pointer-events-auto">
          <a 
            href="tel:8006065462" 
            className="p-2 border border-white/10 rounded-full hover:border-neon-blue transition-colors flex items-center justify-center bg-black/20 backdrop-blur-md"
          >
            <Phone size={14} className="text-white" />
          </a>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="px-4 py-2 bg-white text-black font-bold uppercase text-[9px] tracking-widest rounded-full"
          >
            Contact
          </button>
        </div>
        <div className="hidden md:flex gap-12 text-[11px] font-bold text-white uppercase tracking-widest pointer-events-auto cursor-pointer items-center">
          <a href="#intro" className="text-neon-blue hover:text-white transition-colors">Journey</a>
          <a href="#vera" className="hover:text-neon-blue transition-colors">Work</a>
          <a href="#skills" className="hover:text-neon-blue transition-colors">Skills</a>
          <a href="#impact" className="hover:text-neon-blue transition-colors">Impact</a>
          <a onClick={() => setIsContactOpen(true)} className="hover:text-neon-blue transition-colors">Contact</a>
          <a 
            href="tel:8006065462" 
            className="p-2 border border-white/10 rounded-full hover:border-neon-blue transition-colors flex items-center justify-center"
          >
            <Phone size={14} className="text-white" />
          </a>
        </div>
      </motion.nav>

      {/* Cinematic Backgrounds */}
      <CityScene />
      <SceneTransitionParticles />
      
      {/* Hero Section */}
      <Section id="intro" className="flex flex-col items-start justify-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 lg:gap-24 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-neon-blue font-mono tracking-[0.4em] text-[12px] mb-8 block uppercase font-bold opacity-80 flex items-center gap-3">
              <span className="w-12 h-px bg-neon-blue/40" />
              Product Designer & Systems Strategist
            </span>
            <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight leading-[1.05] text-white">
               I design <span className="text-gradient font-bold italic">experiences</span><br />
               <motion.span 
                 initial={{ opacity: 0.5 }}
                 whileInView={{ opacity: 1 }}
                 className="relative inline-block"
               >
                 that move with people.
                 <motion.div 
                   className="absolute -bottom-2 left-0 h-1 bg-neon-blue/30 w-full rounded-full origin-left"
                   initial={{ scaleX: 0 }}
                   whileInView={{ scaleX: 1 }}
                   transition={{ delay: 0.8, duration: 1 }}
                 />
               </motion.span>
            </h1>
            <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-xl opacity-70">
               Engineering cinematic digital journeys through scalable systems, fintech innovations, and human-centered architecture.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 flex gap-6 items-center"
            >
              <button 
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-neon-blue hover:text-black transition-all duration-300"
              >
                Work with me
              </button>
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-neutral-950 bg-neutral-800 flex items-center justify-center overflow-hidden">
                    <User size={14} className="opacity-40" />
                  </div>
                ))}
                <div className="pl-4 text-[10px] items-center flex font-mono text-neutral-500 uppercase tracking-widest whitespace-nowrap">
                   Trusted by 20K+ Users
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Creative Neural Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative flex items-center justify-center p-6 md:p-12 perspective-2000 md:order-last order-first"
          >
            <div className="relative group cursor-none preserve-3d">
              {/* Intelligent Glow Field */}
              <div className="absolute inset-[-100px] bg-neon-blue/5 blur-[150px] rounded-full group-hover:bg-neon-blue/15 transition-all duration-1000" />
              
              {/* Playable Interface Cube */}
              <motion.div 
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-64 h-64 md:w-80 md:h-80 relative preserve-3d"
              >
                {/* Visualizing "Websites, Apps, Illustrations" as 3D layers */}
                {[
                  { label: "APPS", color: "neon-blue", offset: "-40px" },
                  { label: "WEB", color: "neon-purple", offset: "0px" },
                  { label: "ART", color: "neon-pink", offset: "40px" }
                ].map((layer, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      rotateZ: [0, 360],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      rotateZ: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
                    }}
                    className={`absolute inset-0 glass border-2 border-white/10 rounded-3xl flex flex-col items-center justify-center group-hover:border-${layer.color}/40 transition-all duration-500 backdrop-blur-2xl shadow-2xl`}
                    style={{ transform: `translateZ(${layer.offset})` }}
                  >
                     <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 text-${layer.color}`}>
                        {i === 0 ? <Zap size={24} /> : i === 1 ? <Layers size={24} /> : <User size={24} />}
                     </div>
                     <span className="text-[10px] font-mono font-black tracking-[0.5em] text-white opacity-40">{layer.label}</span>
                  </motion.div>
                ))}

                {/* Floating "Play" instruction */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-mono text-[8px] text-neon-blue uppercase tracking-widest whitespace-nowrap">
                   [ DRAG_TO_INTERACT ]
                </div>
              </motion.div>

              {/* Orbiting HUD details */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-60px] pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_15px_#00f2ff]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-40 shadow-[0_0_10px_white]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.02], [1, 0]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-neutral-500"
        >
          <div className="w-5 h-8 border-2 border-white/30 rounded-xl relative">
             <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-1 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-2"
             />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to Advance</span>
        </motion.div>
      </Section>

      {/* Case Studies Section */}
      <Section id="vera" className="py-32">
        <div className="mb-20 text-center">
            <h3 className="text-sm font-mono text-neon-blue uppercase tracking-[0.5em] mb-4 opacity-70">Major Missions</h3>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white italic underline decoration-neon-blue/20 underline-offset-8">Featured Work</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl mx-auto px-4">
          {[
            {
              id: "vera",
              title: "VERA",
              tag: "Fintech System",
              img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
              color: "neon-blue",
              link: "https://www.behance.net/gallery/246959873/VERA",
              desc: "A financial planning platform that simplifies complex flows and builds confidence for first-time earners. Optimized architecture for clarity and speed."
            },
            {
              id: "kafenio",
              title: "Kafenio",
              tag: "Marketplace UX",
              img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1200",
              color: "neon-purple",
              link: "https://www.behance.net/gallery/240710853/Kafnio-A-Gamified-AI-Driven-Caf-Experience",
              desc: "Redesigning the hyper-local discovery experience. Focused on streamlining the 'intent-to-purchase' funnel for urban users through contextual AI."
            }
          ].map((project) => (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -20, rotateY: -5, scale: 1.02 }}
              key={project.id}
              className="group relative glass rounded-[40px] overflow-hidden border-white/10 hover:border-white/20 transition-all duration-700 shadow-2xl block perspective-2000"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-neutral-900/40 group-hover:opacity-0 transition-opacity duration-500" />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-md">
                   <div className="px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
                      View Full Case Study
                   </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12 relative">
                <span className={`text-[9px] font-mono tracking-[0.4em] uppercase mb-4 block ${project.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-purple'}`}>
                  {project.tag}
                </span>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 italic">{project.title}</h3>
                    <p className="text-neutral-400 font-light leading-relaxed max-w-sm text-sm">
                      {project.desc}
                    </p>
                  </div>
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-white/5 flex items-center justify-center ${project.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-purple'} border border-white/10 transition-colors group-hover:bg-white/10 shrink-0`}>
                     <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Impact Section */}
      <Section id="impact" className="flex items-center min-h-[auto] py-20 lg:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          <ImpactCard 
            title="20K+" 
            desc="Users Impacted" 
            sub="Across SaaS & Marketplaces"
            color="neon-blue"
          />
          <ImpactCard 
            title="50%" 
            desc="Engagement Boost" 
            sub="Average uplift in user retention"
            color="neon-purple"
          />
          <ImpactCard 
            title="25%" 
            desc="Faster Design" 
            sub="Operational efficiency through systems"
            color="neon-pink"
          />
          <ImpactCard 
            title="40%" 
            desc="Task Completion" 
            sub="Optimized B2B workflows"
            color="neon-blue"
          />
          <ImpactCard 
            title="95%" 
            desc="Design Accuracy" 
            sub="Precision in handoffs & specs"
            color="neon-purple"
          />
        </div>
      </Section>

      {/* About Section - The Soul & The System */}
      <Section id="about" className="flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h3 className="text-sm font-mono text-neon-blue uppercase tracking-[0.5em] mb-4 opacity-60">The Persona</h3>
            <h2 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-white">
              Finding <span className="italic font-light">intent</span> in the <span className="text-gradient font-bold underline decoration-neon-blue/30 underline-offset-8">ambiguous.</span>
            </h2>
            
            <div className="space-y-6 text-xl text-neutral-400 font-light leading-relaxed max-w-xl">
              <p>
                I am a seeker of hidden rhythms. In the collision of rigid systems and fluid human desires, I find the space where design becomes a living, breathing dialogue. 
              </p>
              <p>
                My work is a quiet rebellion against complexity. I strip away the noise to reveal the soul of a product, ensuring that every interaction is not just an operation, but an intuitive step forward. I don't just solve problems; I curate clarity.
              </p>
              <p className="italic border-l-2 border-neon-blue/30 pl-6 text-neutral-500">
                "Design is the bridge between the logic of the machine and the poetry of the human heart."
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['UX Architect', 'System Poet', 'Human Researcher', 'Interface Strategist'].map(tag => (
                <span key={tag} className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs font-mono tracking-widest text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 3D Interactive Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative perspective-2000 group cursor-crosshair pb-12"
          >
            {/* Cyberpunk Halo Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-0">
              <div className="absolute inset-0 border border-white/5 rounded-full scale-110" />
              
              {/* Rotating Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-neon-blue/10 rounded-full scale-[1.2]"
              />
            </div>

            <motion.div
              whileHover={{ 
                rotateX: -10, 
                rotateY: 15,
                z: 100,
                scale: 1.05
              }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[40px] border border-white/20 glass shadow-[0_50px_150px_-30px_rgba(0,242,255,0.4)] z-10"
            >
              <img 
                src="./anshika.jpg" 
                alt="Anshika Goel" 
                className="w-full h-full object-cover transition-all duration-1000 brightness-110 saturate-125 contrast-105 group-hover:brightness-125 group-hover:scale-110 shadow-[inner_0_0_50px_rgba(0,242,255,0.2)]"
              />
              
              {/* Cinematic Glow Overlays */}
              <div className="absolute inset-0 bg-linear-to-tr from-neon-blue/20 via-transparent to-neon-pink/30 mix-blend-overlay opacity-60 pointer-events-none" />
              
              {/* Floating UI Elements over portrait */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute inset-0 pointer-events-none z-20"
              >
                <div className="absolute top-10 right-10 flex flex-col items-end gap-2 font-mono text-[10px] text-neon-blue">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                    <span className="tracking-[0.4em]">EYE_SCAN_V3.0</span>
                  </div>
                  <div className="w-20 h-px bg-neon-blue/60" />
                  <span className="text-[7px] opacity-60 tracking-widest uppercase">Target_Identified: //ANSHIKA</span>
                </div>
                
                <div className="absolute bottom-12 left-10 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-[8px] font-mono text-white tracking-[0.3em] uppercase">
                      REF_ID: //P01_SOUL
                    </div>
                  </div>
                  <div className="px-4 py-1.5 bg-neon-blue/20 backdrop-blur-xl rounded-full border border-neon-blue/40 text-[8px] font-mono text-neon-blue tracking-[0.3em] uppercase shadow-[0_0_25px_rgba(0,242,255,0.4)]">
                    STATUS: LEAD_INTERFACE_ARCHITECT
                  </div>
                </div>
              </motion.div>
              
              {/* Overlay Accents */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-40 z-15" />
              
              {/* Vertical Progress indicator with numbers */}
              <div className="absolute right-6 top-1/4 bottom-1/4 w-[2px] bg-white/10 flex flex-col justify-between items-center py-6 opacity-60 z-20">
                 <div className="text-[7px] font-mono -rotate-90 origin-center translate-x-5 text-white/40">LAYER_SOUL</div>
                 <div className="w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_20px_#00f2ff] animate-pulse" />
                 <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                 <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                 <div className="text-[7px] font-mono -rotate-90 origin-center translate-x-5 text-white/40">SYSTEM_R3</div>
              </div>

              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_2px]" />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section - High 3D Interactivity */}
      <Section id="skills" className="py-40">
        <div className="mb-24 text-center">
          <h3 className="text-sm font-mono text-neon-blue uppercase tracking-[0.5em] mb-4 opacity-70">Neural Capabilities</h3>
          <h2 className="text-6xl md:text-8xl font-display font-medium text-white italic underline decoration-white/5 underline-offset-8">My <span className="font-bold">Skills</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 perspective-2000">
          {[
            { 
              name: "UX Research", 
              desc: "Analyzing user behavior via cognitive mapping and behavioral psychology.", 
              icon: <User size={40} />, 
              color: "neon-blue" 
            },
            { 
              name: "IA & System", 
              desc: "Building scalable information architecture and complex mental models.", 
              icon: <Layers size={40} />, 
              color: "neon-purple" 
            },
            { 
              name: "Prototypes", 
              desc: "High-fidelity interactive prototypes that feel like the final product.", 
              icon: <Zap size={40} />, 
              color: "neon-pink" 
            },
            { 
              name: "Design Ops", 
              desc: "Developing unified design systems that bridge Figma and Code.", 
              icon: <Cpu size={40} />, 
              color: "neon-blue" 
            }
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, rotateX: 30, y: 50, z: -100 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
              transition={{ delay: i * 0.1, duration: 1, type: 'spring' }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                rotateX: -10,
                z: 50,
                borderColor: `var(--${skill.color})`
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group glass p-12 rounded-[50px] border-white/5 bg-white/[0.01] hover:bg-white/[0.05] transition-all duration-700 overflow-hidden shadow-2xl cursor-pointer preserve-3d"
            >
              <div className={`w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 ${skill.color === 'neon-blue' ? 'text-neon-blue' : skill.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-pink'} group-hover:scale-125 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                {skill.icon}
              </div>
              <h4 className="text-3xl font-bold text-white mb-6 italic">{skill.name}</h4>
              <p className="text-neutral-500 text-base leading-relaxed font-light">
                {skill.desc}
              </p>
              
              {/* Interaction Decor */}
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <div className="w-2 h-2 rounded-full bg-white/20 animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Design Process */}
      <Section id="process" className="flex items-center justify-center">
        <div className="text-center w-full max-w-5xl">
          <h2 className="text-4xl font-display font-bold mb-16">The Ecosystem of Thinking</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative perspective-1000">
             <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-white/10 z-0" />
             
             {[
               { icon: <User />, label: 'Research', sub: 'Deep Diving', color: 'rgba(0, 242, 255, 0.5)' },
               { icon: <Briefcase />, label: 'Define', sub: 'Strategy', color: 'rgba(188, 19, 254, 0.5)' },
               { icon: <Zap />, label: 'Ideate', sub: 'Brainstorm', color: 'rgba(255, 0, 255, 0.5)' },
               { icon: <Code />, label: 'Design', sub: 'Visualizing', color: 'rgba(0, 242, 255, 0.5)' },
               { icon: <Heart />, label: 'Test', sub: 'Validation', color: 'rgba(255, 255, 255, 0.5)' }
             ].map((step, i) => (
               <motion.div 
                 key={step.label}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 whileHover={{ 
                   rotateX: 10, 
                   rotateY: -5, 
                   z: 20,
                   scale: 1.05,
                   borderColor: step.color 
                 }}
                 className="relative z-10 glass p-8 rounded-2xl border-white/5 transition-all duration-500 group shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
               >
                 <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-blue group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                    {step.icon}
                 </div>
                 <h4 className="font-bold mb-2 group-hover:text-neon-blue transition-colors">{step.label}</h4>
                 <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">{step.sub}</p>
                 
                 {/* 3D Depth Layer */}
                 <div className="absolute inset-0 rounded-2xl border-b-2 border-r-2 border-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
               </motion.div>
             ))}
          </div>
        </div>
      </Section>

      {/* Tools Area */}
      <Section id="tools" className="flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16">
           <div className="max-w-md">
              <h3 className="text-sm font-mono text-neon-purple uppercase tracking-[0.4em] mb-4 opacity-60">The Armory</h3>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic text-white">Technological <br/> Mastery</h2>
              <p className="text-neutral-500 text-lg leading-relaxed font-light">
                Precision tools for precision results. Every pixel is intentional, 
                every workflow is optimized for scale and speed.
              </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 perspective-1000">
              {[
                { 
                  name: 'Figma', 
                  color: '#F24E1E',
                  icon: (
                    <g>
                      <path d="M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8H9V2H12Z" fill="#FF7262" />
                      <path d="M6 5C6 3.34315 7.34315 2 9 2V8C7.34315 8 6 6.65685 6 5Z" fill="#F24E1E" />
                      <path d="M6 11C6 9.34315 7.34315 8 9 8V14C7.34315 14 6 12.6569 6 11Z" fill="#A259FF" />
                      <path d="M12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14H9V8H12Z" fill="#1ABCFE" />
                      <path d="M6 17C6 15.3431 7.34315 14 9 14V17C9 18.6569 7.34315 20 6 17Z" fill="#0ACF83" />
                      <path d="M9 14C10.6569 14 12 15.3431 12 17C12 18.6569 10.6569 20 9 20C7.34315 20 6 18.6569 6 17V14H9Z" fill="#0ACF83" />
                    </g>
                  )
                },
                { 
                  name: 'FigJam', 
                  color: '#BC13FE',
                  icon: (
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z" />
                      <path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z" />
                      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" strokeOpacity="0.3" />
                    </g>
                  )
                },
                { 
                  name: 'Notion', 
                  color: '#FFFFFF',
                  icon: (
                    <g fill="currentColor">
                      <path d="M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3Z" fillOpacity="0.1" />
                      <path d="M7 6V18H9L12.5 12L15 18H17V6H15L11.5 12L9 6H7Z" />
                    </g>
                  )
                },
                { 
                  name: 'Jira', 
                  color: '#2684FF',
                  icon: (
                    <g fill="currentColor">
                      <path d="M11.3 2.1L2 11.4V14H4.6L13.9 4.7V2.1H11.3Z" opacity="0.4" />
                      <path d="M16 6.8L6.7 16.1V18.7H9.3L18.6 9.4V6.8H16Z" opacity="0.7" />
                      <path d="M20.7 11.5L11.4 20.8V23.4H14L23.3 14.1V11.5H20.7Z" />
                    </g>
                  )
                },
                { 
                  name: 'GitHub', 
                  color: '#00F2FF',
                  icon: (
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.867 20.166 8.835 21.488C8.835 21.488 9.335 21.58 9.517 21.007C9.517 21.007 9.517 20.771 9.508 20.144C9.504 19.311 9.504 19.311 6.727 19.914C6.727 19.914 6.141 17.973 6.141 17.973C5.688 16.823 5.034 16.517 5.034 16.517C4.128 15.898 5.103 15.91 5.103 15.91C6.105 15.98 6.632 16.939 6.632 16.939C7.521 18.462 8.966 18.022 9.535 17.767" fill="currentColor" />
                  )
                }
              ].map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    rotateY: 15, 
                    rotateX: -10, 
                    translateZ: 30,
                    scale: 1.1 
                  }}
                  className="flex flex-col items-center gap-6 group"
                >
                  <div 
                    className="w-24 h-24 rounded-3xl glass flex items-center justify-center transition-all duration-500 relative group-hover:border-white/20"
                    style={{ 
                      '--glow-color': tool.color,
                      transformStyle: 'preserve-3d'
                    } as any}
                  >
                    <svg 
                      width="40" 
                      height="40" 
                      viewBox="0 0 24 24" 
                      className="transition-all duration-300 group-hover:scale-110"
                      style={{ color: tool.color, filter: `drop-shadow(0 0 10px ${tool.color}44)` }}
                    >
                      {tool.icon}
                    </svg>
                    
                    {/* Radial Glow on Hover */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl z-[-1]" 
                      style={{ backgroundColor: tool.color }}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 group-hover:text-white transition-colors">{tool.name}</span>
                    <div className="w-0 h-px bg-white/20 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </Section>

      {/* Personal Section */}
      <Section id="personal" className="flex items-center">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
            <div className="relative">
               <div className="absolute -inset-4 bg-neon-pink/10 blur-3xl rounded-full" />
               <h2 className="text-6xl md:text-8xl font-display font-bold leading-none">
                  BEYOND <br /> THE SCREEN
               </h2>
            </div>
            
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-xl text-neon-pink"><Briefcase /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Writing</h3>
                    <p className="text-neutral-500">Documenting my design patterns and industry insights through long-form articles.</p>
                  </div>
               </div>
               <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-xl text-neon-pink"><Code /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sketching</h3>
                    <p className="text-neutral-500">Digital and traditional illustration as a way to explore color theory and composition.</p>
                  </div>
               </div>
               <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-xl text-neon-pink"><Mail /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Traveling</h3>
                    <p className="text-neutral-500">Seeking inspiration from architectural rhythms and diverse cultural patterns.</p>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Unique Core / Trust Section */}
      <Section id="usp" className="py-20 md:py-40">
        <div className="mb-20 md:mb-32 text-center">
          <h3 className="text-sm font-mono text-neon-pink uppercase tracking-[0.5em] mb-4 opacity-70">The Unfair Advantage</h3>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-white italic">Why Believe <br/> in the Vision?</h2>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            
            {/* Visual 3D Anchor */}
            <div className="hidden md:block sticky top-40 h-[600px] perspective-2000">
               <motion.div 
                 animate={{ 
                   rotateY: [0, 360],
                   rotateX: [10, -10, 10],
                   z: [0, 50, 0]
                 }}
                 transition={{ 
                   duration: 20, 
                   repeat: Infinity, 
                   ease: "linear" 
                 }}
                 className="relative w-full h-full flex items-center justify-center pointer-events-none"
               >
                  {/* Floating geometric structures */}
                  <div className="absolute inset-0 border border-white/5 rounded-[60px] transform rotate-45 scale-75" />
                  <div className="absolute inset-0 border-2 border-neon-blue/10 rounded-[60px] transform -rotate-12 scale-90" />
                  
                  <div className="w-64 h-64 glass rounded-3xl flex items-center justify-center relative group backdrop-blur-3xl">
                     <div className="absolute inset-0 bg-neon-blue/20 blur-3xl opacity-20" />
                     <ShieldCheck size={80} className="text-neon-blue drop-shadow-[0_0_20px_#00f2ff]" />
                     
                     <div className="absolute -top-10 -right-10 p-6 glass border-white/10 rounded-2xl animate-bounce">
                        <TrendingUp className="text-neon-pink" size={32} />
                     </div>
                  </div>
                  
                  {/* Orbits */}
                  <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     className="absolute w-[400px] h-[400px] border border-dashed border-white/10 rounded-full"
                  >
                     <div className="w-4 h-4 bg-neon-purple rounded-full absolute -top-2 left-1/2 -translate-x-1/2 blur-[2px]" />
                  </motion.div>
               </motion.div>
            </div>

            {/* The Timeline Content */}
            <div className="space-y-40">
              {[
                {
                  title: "Architectural Integrity",
                  icon: <Layers />,
                  color: "blue",
                  text: "I don't just design screens; I architect scalable foundations. Every component is built with engineering foresight, ensuring that as your product grows, the system remains unbreakable and fast."
                },
                {
                  title: "Psychological Precision",
                  icon: <Cpu />,
                  color: "purple",
                  text: "Human behavior isn't random. I leverage cognitive load theory and Fitts's law to create interfaces that users don't have to 'learn'—they simply know how to use them through biological intuition."
                },
                {
                  title: "Conversion-First DNA",
                  icon: <TrendingUp />,
                  color: "pink",
                  text: "Design without data is just art. My focus is always on the bottom line—optimizing funnels, reducing friction, and ensuring every pixel contributes to a specific business objective."
                },
                {
                  title: "Full-Stack Synergy",
                  icon: <Code />,
                  color: "blue",
                  text: "Bridging the designer-developer gap. I speak both languages fluently, eliminating friction in handoffs and ensuring that the final coded product matches the visual vision with 100% fidelity."
                }
              ].map((usp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 group-hover:bg-linear-to-b from-transparent via-neon-blue to-transparent transition-colors duration-1000" />
                  
                  {/* Icon Node */}
                  <div className="absolute left-[-20px] top-0 w-10 h-10 rounded-xl glass border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl z-20">
                    {usp.icon}
                  </div>

                  <div className="space-y-4">
                    <h4 className={`text-2xl font-bold font-display italic tracking-tight group-hover:text-neon-${usp.color} transition-colors`}>
                      {usp.title}
                    </h4>
                    <p className="text-neutral-500 text-lg leading-relaxed font-light">
                      {usp.text}
                    </p>
                    
                    <div className="flex items-center gap-4 pt-2">
                       <div className={`h-px w-10 bg-neon-${usp.color}/30`} />
                       <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">Core Value {i+1}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer / CTA Area */}
      <Section id="contact" className="py-40">
        <motion.div 
          className="text-center space-y-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
           <h2 className="text-7xl md:text-9xl font-display font-bold tracking-tighter italic opacity-10">THE FUTURE</h2>
           <div className="relative -mt-20">
             <h3 className="text-4xl md:text-6xl font-bold mb-8">Ready to sync?</h3>
             <p className="text-xl text-neutral-400 font-light max-w-xl mx-auto mb-12">
               Let's translate your vision into a scalable, high-conversion interface. Currently accepting elite missions for 2026.
             </p>
           
           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactOpen(true)}
                className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg flex items-center gap-2 group shadow-[0_20px_60px_rgba(255,255,255,0.2)]"
              >
                Work With Me <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="flex gap-4">
                 <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/anshikagoeluiux01/" />
                 <SocialButton icon={<Github />} href="#" />
                 <SocialButton icon={<Mail />} href="mailto:anshikagoel110@gmail.com" />
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <footer className="py-20 border-t border-white/5 bg-black/20 backdrop-blur-3xl relative overflow-hidden">
        {/* Storyline Text Floating */}
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none font-display font-black text-[15vw] leading-none -translate-y-1/2 whitespace-nowrap">
           STORY_OF_ANSHIKA_GOEL // ENDLESS_LOOP // ARCHIVE_S04
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start relative z-10">
           <div className="space-y-6">
              <h4 className="text-xl font-black tracking-widest text-white italic">ANSHIKA GOEL</h4>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Building bridge protocols between technical systems and human experience. Based in India, designing for the global interface.
              </p>
              <p className="text-[10px] font-mono text-neon-blue tracking-widest uppercase">
                Contact: +91 8006065462
              </p>
           </div>

           <div className="space-y-6">
              <h5 className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.4em]">Connect</h5>
              <div className="space-y-3">
                <a href="tel:+918006065462" className="flex items-center gap-3 text-sm text-neutral-400 hover:text-neon-blue transition-colors group">
                   <Phone size={14} className="opacity-40 group-hover:opacity-100" />
                   +91 8006065462
                </a>
                <a href="mailto:anshikagoel110@gmail.com" className="flex items-center gap-3 text-sm text-neutral-400 hover:text-neon-blue transition-colors group">
                   <Mail size={14} className="opacity-40 group-hover:opacity-100" />
                   anshikagoel110@gmail.com
                </a>
              </div>
           </div>

           <div className="space-y-6">
              <h5 className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.4em]">Missions</h5>
              <div className="flex flex-col gap-2 text-sm text-neutral-400">
                <a href="#vera" className="hover:text-neon-blue transition-colors">Work Hub</a>
                <a href="#experience" className="hover:text-neon-blue transition-colors">Career Journey</a>
                <a href="#impact" className="hover:text-neon-blue transition-colors">Impact Analytics</a>
              </div>
           </div>

           <div className="space-y-6 lg:text-right">
              <h5 className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.4em]">Availability</h5>
              <div className="flex items-center lg:justify-end gap-3 text-sm text-neon-blue">
                 <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse shadow-[0_0_8px_#00f2ff]" />
                 Open for Invitations
              </div>
           </div>
        </div>
        <div className="mt-20 border-t border-white/5 pt-12 text-center text-[10px] font-mono text-neutral-700 uppercase tracking-[0.4em]">
           © 2026 ARCHIVE_S04 // ALL RIGHTS RESERVED
        </div>
      </footer>
    </main>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [isSent, setIsSent] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12 overflow-hidden pointer-events-auto"
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, y: 100, rotateX: 20 }}
        animate={{ scale: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.9, y: 100, rotateX: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 100 }}
        className="relative w-full max-w-5xl glass rounded-[40px] border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] shadow-[0_60px_150px_rgba(0,0,0,1)]"
      >
        <div className="p-8 md:p-16 flex flex-col justify-between space-y-12 bg-linear-to-br from-neon-blue/10 to-transparent relative overflow-hidden">
          <button 
            type="button"
            onClick={onClose} 
            className="group absolute top-6 right-6 md:top-8 md:right-8 p-3 hover:bg-white/5 rounded-full text-neutral-500 hover:text-white transition-all hover:rotate-90 z-[1100] bg-black/20 backdrop-blur-md md:bg-transparent pointer-events-auto"
          >
            <X size={32} />
          </button>
          
          <div className="pt-8 space-y-4">
            <h3 className="text-sm font-mono text-neon-blue uppercase tracking-[0.5em] opacity-70">Neural Relay</h3>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">Drop a <br/> Command</h2>
          </div>
          
          <div className="space-y-6">
             <a href="mailto:anshikagoel110@gmail.com" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Protocol: Email</p>
                   <span className="text-sm md:text-lg text-white font-medium">anshikagoel110@gmail.com</span>
                </div>
             </a>
             <a href="tel:8006065462" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-neon-pink group-hover:bg-neon-pink group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Protocol: Voice</p>
                   <span className="text-sm md:text-lg text-white font-medium">+91 8006065462</span>
                </div>
             </a>
          </div>

          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="p-8 md:p-16 bg-white/[0.01] border-l border-white/5 relative">
          <AnimatePresence mode="wait">
            {!isSent ? (
              <form 
                key="form"
                className="space-y-8" 
                action="https://formspree.io/f/anshikagoel110@gmail.com" 
                method="POST"
                onSubmit={() => setIsSent(true)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest px-1">Identity</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-transparent border-b border-white/10 p-4 focus:border-neon-blue outline-none transition-all text-white placeholder:text-neutral-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest px-1">Email Node</label>
                    <input 
                      name="email"
                      required
                      type="email" 
                      placeholder="email@domain.com" 
                      className="w-full bg-transparent border-b border-white/10 p-4 focus:border-neon-blue outline-none transition-all text-white placeholder:text-neutral-700" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest px-1">Mission Specs</label>
                  <textarea 
                    name="message"
                    required
                    placeholder="Describe the objective..." 
                    rows={4} 
                    className="w-full bg-transparent border-b border-white/10 p-4 focus:border-neon-blue outline-none transition-all resize-none text-white placeholder:text-neutral-700" 
                  />
                </div>

                <button 
                  type="submit"
                  className="group w-full py-6 bg-white text-black font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-neon-blue transition-all flex items-center justify-center gap-4 active:scale-95 shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:shadow-neon-blue/40"
                >
                  Confirm Mission <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20"
              >
                <div className="relative group perspective-1000">
                   <motion.div 
                     animate={{ 
                       rotateY: [0, 360],
                       rotateX: [0, 20, 0]
                     }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     className="w-32 h-32 border-4 border-dashed border-neon-blue/30 rounded-full flex items-center justify-center preserve-3d"
                   >
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-16 h-16 bg-neon-blue rounded-full shadow-[0_0_50px_#00f2ff] flex items-center justify-center text-black"
                      >
                         <ShieldCheck size={32} />
                      </motion.div>
                   </motion.div>
                   {/* Orbiting particles */}
                   {[...Array(4)].map((_, i) => (
                     <motion.div
                       key={i}
                       animate={{ rotate: 360 }}
                       transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-[-20px] pointer-events-none"
                     >
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue/50" />
                     </motion.div>
                   ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">Mission Cataloged</h3>
                  <p className="text-neutral-500 font-light max-w-xs mx-auto">
                    Signal received. Expect a response within one standard solar cycle.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="px-10 py-4 glass border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  Return to Matrix
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <motion.section 
      id={id} 
      initial={{ opacity: 0, y: 150, rotateX: 10, z: -100 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        z: 0,
        transition: {
          type: "spring",
          stiffness: 40,
          damping: 30,
          duration: 2,
          delay: 0.1
        }
      }}
      viewport={{ once: false, margin: "-10%" }}
      className={`relative min-h-screen px-6 md:px-20 max-w-7xl mx-auto z-10 flex flex-col justify-center perspective-2000 preserve-3d ${className}`}
    >
      {children}
    </motion.section>
  );
}

function ImpactCard({ title, desc, sub, color }: { title: string; desc: string; sub: string; color: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, borderColor: 'rgba(0, 242, 255, 0.4)' }}
      className="hologram-card p-10 transition-all duration-500"
    >
      <h3 className="text-4xl font-extrabold text-neon-blue mb-1 tracking-tight">{title}</h3>
      <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.1em] mb-4">{desc}</p>
      <p className="text-xs text-white/40 leading-snug">{sub}</p>
    </motion.div>
  );
}

function ExperienceCard({ company, role, period, achievements }: { company: string; role: string; period: string; achievements: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-20 items-start overflow-hidden"
    >
      <div className="space-y-2">
         <h3 className="text-3xl font-display font-bold">{company}</h3>
         <p className="text-neon-blue font-mono text-sm uppercase tracking-widest">{role}</p>
         <p className="text-neutral-500 text-sm">{period}</p>
      </div>
      <div className="space-y-6">
         {achievements.map((item, i) => (
           <div key={i} className="flex gap-4 group">
              <span className="text-neon-blue font-mono">0{i+1}</span>
              <p className="text-lg text-neutral-300 group-hover:text-white transition-colors">{item}</p>
           </div>
         ))}
      </div>
    </motion.div>
  );
}

function ProjectFact({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-neutral-300">
      <div className="w-1.5 h-1.5 rounded-full bg-neon-pink" />
      <span className="text-lg font-light">{label}</span>
    </div>
  );
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      className="p-4 glass rounded-full hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white"
    >
      {icon}
    </a>
  );
}
