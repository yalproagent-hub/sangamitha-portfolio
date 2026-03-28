'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#030303] relative border-t border-border/20">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] md:w-1/2 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl gold-gradient mb-6 md:mb-8 leading-tight font-light">
            Let's create <br className="hidden sm:block"/> something exceptional.
          </h2>
          <p className="font-body text-text-muted/80 text-base md:text-xl font-light max-w-2xl mx-auto mb-16 md:mb-20 leading-relaxed px-4">
            Currently available for freelance opportunities and full-time roles. Let's build a digital experience that stands out.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-16 md:mb-20"
        >
          {/* Email */}
          <motion.a 
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(229,197,131,0.15)" }}
            href={`mailto:${personalInfo.email}`}
            className="glass-card p-6 md:p-8 flex items-center justify-start gap-5 hover:border-gold/40 transition-all border-border/30 duration-500"
          >
            <div className="text-gold/80 p-3 bg-onyx-dark/50 rounded-full">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <span className="block text-[9px] md:text-[10px] uppercase text-text-muted/70 mb-1.5 md:mb-2 font-bold tracking-[0.2em]">General Inquiry</span>
              <span className="text-cream font-body text-sm sm:text-base lg:text-lg font-light break-all md:break-normal">{personalInfo.email}</span>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(229,197,131,0.15)" }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 md:p-8 flex items-center justify-start gap-5 hover:border-gold/40 transition-all border-border/30 duration-500"
          >
            <div className="text-gold/80 p-3 bg-onyx-dark/50 rounded-full">
              <Linkedin size={24} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <span className="block text-[9px] md:text-[10px] uppercase text-text-muted/70 mb-1.5 md:mb-2 font-bold tracking-[0.2em]">Professional Network</span>
              <span className="text-cream font-body text-sm sm:text-base lg:text-lg font-light">View Profile</span>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a 
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(229,197,131,0.15)" }}
            href={`tel:${personalInfo.phone}`}
            className="glass-card p-6 md:p-8 flex items-center justify-start gap-5 hover:border-gold/40 transition-all border-border/30 duration-500"
          >
            <div className="text-gold/80 p-3 bg-onyx-dark/50 rounded-full">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <span className="block text-[9px] md:text-[10px] uppercase text-text-muted/70 mb-1.5 md:mb-2 font-bold tracking-[0.2em]">Direct Line</span>
              <span className="text-cream font-body text-sm sm:text-base lg:text-lg font-light">{personalInfo.phone}</span>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div 
            variants={fadeInUp}
            className="glass-card p-6 md:p-8 flex items-center justify-start gap-5 border-border/30 hover:border-gold/20 transition-all duration-500"
          >
            <div className="text-gold/80 p-3 bg-onyx-dark/50 rounded-full">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <span className="block text-[9px] md:text-[10px] uppercase text-text-muted/70 mb-1.5 md:mb-2 font-bold tracking-[0.2em]">Based In</span>
              <span className="text-cream font-body text-sm sm:text-base lg:text-lg font-light">{personalInfo.location}</span>
            </div>
          </motion.div>

        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 30 }}
           animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
           transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a 
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 md:px-14 md:py-5 bg-transparent border border-gold/70 text-cream font-light text-xs md:text-sm uppercase tracking-[0.2em] rounded-full hover:bg-gold hover:text-onyx-dark transition-all duration-300 shadow-[0_0_30px_rgba(229,197,131,0.05)] hover:shadow-[0_0_40px_rgba(229,197,131,0.3)] w-full sm:w-auto"
          >
            Start a Conversation
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
