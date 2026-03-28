'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { fadeInUp } from '@/lib/animations';

function AnimatedCounter({ endValue, label }: { endValue: number | string, label: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);
  
  const target = typeof endValue === 'string' ? parseInt(endValue.replace(/\D/g, '')) || 0 : endValue;
  const suffix = typeof endValue === 'string' ? endValue.replace(/[0-9]/g, '') : '';

  useEffect(() => {
    if (inView && target > 0) {
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 40);
      
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="glass-card p-6 md:p-8 flex flex-col items-center justify-center transform hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-500 border border-border/50 hover:border-gold/30">
      <h3 className="font-display text-4xl lg:text-5xl text-gold mb-3 font-light tracking-wide">
        {target > 0 ? `${count}${suffix}` : endValue}
      </h3>
      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-text-muted text-center font-semibold">{label}</p>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 bg-onyx-medium relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl gold-gradient inline-block mb-4 md:mb-6 font-light">The Creative</h2>
          <div className="w-16 h-[1px] bg-gold mx-auto opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center relative lg:col-span-5"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group"
            >
              {/* Animated Rings */}
              <div className="absolute inset-[-15px] rounded-full border-[0.5px] border-gold/20 animate-[spin_20s_linear_infinite] group-hover:border-gold/50 transition-colors duration-700"></div>
              <div className="absolute inset-[-30px] rounded-full border-[0.5px] border-gold/10 animate-[spin_30s_linear_infinite_reverse] group-hover:border-gold/30 transition-colors duration-700 delay-100"></div>
              
              {/* Inner Image Container */}
              <div className="w-full h-full rounded-full border border-gold/40 flex items-center justify-center bg-onyx-dark relative z-10 overflow-hidden shadow-[0_0_50px_rgba(229,197,131,0.08)] group-hover:shadow-[0_0_80px_rgba(229,197,131,0.2)] transition-all duration-700 backdrop-blur-3xl">
                <Image 
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 hover:scale-100"
                />
                {/* Fallback overlay in case image loads slow */}
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-14 text-center hidden lg:block"
            >
              <h3 className="font-display text-2xl md:text-3xl text-cream mb-2 font-light tracking-wide">{personalInfo.name}</h3>
              <p className="text-gold tracking-[0.4em] text-[10px] uppercase font-medium mt-3">{personalInfo.roles[0]}</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Text & Stats */}
          <motion.div 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col gap-12 lg:gap-14 lg:col-span-7"
          >
            {/* Mobile Title (visible only on small screens) */}
            <div className="text-center lg:hidden mb-2">
              <h3 className="font-display text-3xl text-cream mb-2 font-light tracking-wide">{personalInfo.name}</h3>
              <p className="text-gold tracking-[0.3em] text-[10px] uppercase font-medium">{personalInfo.roles[0]}</p>
            </div>

            <div className="text-text-muted text-[15px] md:text-lg leading-[2] font-light font-body space-y-8 px-2 md:px-0">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:text-gold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                {personalInfo.about}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className={i === 2 ? "col-span-2 sm:col-span-1" : ""}>
                   <AnimatedCounter endValue={stat.value} label={stat.label} />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
