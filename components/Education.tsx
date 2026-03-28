'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { education, certifications } from '@/lib/data';

function SectionHeader({ eyebrow, title }: { eyebrow: string, title: string }) {
  return (
    <div className="mb-24 text-center flex flex-col items-center">
      <span className="text-gold/60 uppercase tracking-[0.3em] text-xs font-semibold mb-3">{eyebrow}</span>
      <h2 className="font-display text-5xl gold-gradient mb-6 font-light drop-shadow-lg">{title}</h2>
      <div className="flex items-center gap-4 opacity-70">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold"></div>
        <span className="text-gold text-xs">◆</span>
        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold"></div>
      </div>
    </div>
  );
}

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: "-80px" });

  return (
    <section id="education" className="py-32 relative overflow-hidden text-cream">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader eyebrow="— My Foundation —" title="Background" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Education LEFT Side (Timeline) */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-gold/50 to-transparent"></div>

            <motion.div 
              className="flex flex-col gap-12 relative z-10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
            >
              {education.map((item, index) => (
                <div key={index} className="relative pl-12 md:pl-16">
                  {/* Timeline Dot (positioned over the vertical line at left: 11px relative to parent column) */}
                  <div className="absolute left-[8px] top-6 w-3 h-3 bg-gold border-[2px] border-text-primary rounded-full shadow-[0_0_10px_rgba(229,197,131,0.5)] z-20"></div>
                  
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    whileHover={{ x: 4, borderColor: "rgba(229,197,131,1)", boxShadow: "0 0 25px rgba(229, 197, 131, 0.2), inset 0 0 15px rgba(229, 197, 131, 0.05)" }}
                    className="group bg-[rgba(15,30,15,0.7)] backdrop-blur-[16px] backdrop-saturate-[180%] border border-[rgba(201,168,76,0.25)] rounded-[20px] p-6 md:p-8 transition-all duration-500"
                  >
                    {/* Top: Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <GraduationCap className="text-gold mt-1 shrink-0" size={24} strokeWidth={1.5} />
                      <h4 className="font-body text-xl md:text-2xl font-semibold tracking-wide text-cream leading-tight">{item.degree}</h4>
                    </div>
                    
                    {/* Divider */}
                    <div className="w-full h-px bg-gold opacity-20 my-5"></div>
                    
                    {/* Bottom: Details */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-text-muted">
                      <div className="flex items-center gap-2">
                        <BookOpen size={14} className="text-gold opacity-70 shrink-0" />
                        <span className="font-display italic text-gold text-lg leading-tight">{item.institution}</span>
                      </div>
                      <div className="flex flex-wrap text-xs items-center gap-4 sm:ml-auto uppercase tracking-wider font-semibold opacity-80 pt-1">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <MapPin size={12} className="text-gold shrink-0" />
                          {item.location}
                        </div>
                        {item.year && (
                          <div className="flex items-center gap-1.5 shrink-0">
                            <Calendar size={12} className="text-gold shrink-0" />
                            {item.year}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Certifications RIGHT Side (Trophy Cards) */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-10 pl-2 lg:pl-0"
            >
              <Award className="text-gold" size={24} strokeWidth={1.5} />
              <h3 className="font-display text-3xl text-cream font-light tracking-wide uppercase">Certifications</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-gold/40 to-transparent"></div>
            </motion.div>

            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delayChildren: 0.5, staggerChildren: 0.15 }}
            >
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(229, 197, 131, 0.2), inset 0 0 15px rgba(229, 197, 131, 0.05)", borderColor: "rgba(229, 197, 131, 0.5)" }}
                  className="relative overflow-hidden group flex flex-col items-center justify-center gap-4 text-center p-8 bg-[rgba(15,30,15,0.7)] backdrop-blur-[16px] backdrop-saturate-[180%] border border-[rgba(201,168,76,0.25)] rounded-[20px] transition-all duration-500"
                >
                  {/* Subtle 5% Gold Overlay */}
                  <div className="absolute inset-0 bg-gold opacity-5 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <Award size={32} className="text-gold mb-3" strokeWidth={1} />
                    
                    {/* Shimmer line */}
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    
                    <h4 className="font-display text-xl text-cream font-medium mb-5">{cert.name}</h4>
                    
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                      <CheckCircle2 size={12} className="text-green-400" />
                      <span className="text-[10px] text-green-400 font-bold tracking-widest uppercase mt-px">Verified</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
