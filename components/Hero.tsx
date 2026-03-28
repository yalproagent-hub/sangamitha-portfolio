'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';

// Custom useTypewriter Hook
function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timer = setTimeout(() => {}, pauseTime / 4);
      } else {
        timer = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), deletingSpeed);
      }
    } else {
      if (text === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime * 1.5);
      } else {
        timer = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, pauseTime, typingSpeed, deletingSpeed]);

  return text;
}

export default function Hero() {
  const [init, setInit] = useState(false);
  const typedRole = useTypewriter(personalInfo.roles);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-onyx-dark">
      {/* Premium Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: { events: { onHover: { enable: true, mode: "bubble" }, resize: { enable: true, delay: 0.5 } }, modes: { bubble: { distance: 200, size: 4, duration: 2, opacity: 0.8 } } },
            particles: {
              color: { value: "#e5c583" },
              links: { color: "#e5c583", distance: 150, enable: true, opacity: 0.1, width: 1 },
              move: { enable: true, speed: 0.5, outModes: { default: "out" } },
              number: { density: { enable: true }, value: 60 },
              opacity: { value: 0.2 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Deep Space Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,1)_100%)] pointer-events-none"></div>

      {/* Main Content */}
      <div className="z-10 text-center px-4 max-w-4xl pt-16">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-text-muted font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6"
        >
          Welcome, I'm
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="font-display font-medium text-6xl md:text-8xl lg:text-9xl gold-gradient leading-tight mb-6 drop-shadow-2xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="h-10 md:h-12 mb-8"
        >
          <p className="text-xl md:text-3xl font-body text-cream font-light tracking-wide">
            {typedRole}
            <span className="inline-block w-[2px] h-6 md:h-8 bg-gold ml-1 align-middle animate-pulse"></span>
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-text-muted/80 max-w-2xl mx-auto mb-12 text-base md:text-lg font-light leading-relaxed hidden sm:block"
        >
          A digital creative bringing ideas to life through high-end functional design, visual storytelling, and strategic marketing.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(229,197,131,0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollTo('#experience')}
            className="w-full sm:w-auto px-10 py-4 bg-gold text-onyx-dark font-medium rounded-full hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-[0.2em] shadow-xl"
          >
            Explore Work
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(229,197,131,0.05)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollTo('#contact')}
            className="w-full sm:w-auto px-10 py-4 border border-gold/50 text-gold rounded-full transition-all duration-300 text-sm uppercase tracking-[0.2em] backdrop-blur-sm"
          >
            Contact
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-gold/50 cursor-pointer hover:text-gold transition-colors"
        onClick={() => handleScrollTo('#about')}
      >
        <span className="text-[10px] tracking-[0.3em] mb-3 uppercase font-medium">Scroll</span>
        <ChevronDown size={20} className="font-light" />
      </motion.div>
    </section>
  );
}
