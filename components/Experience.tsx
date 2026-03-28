'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, Film, Layout, Circle } from 'lucide-react';
import { experiences } from '@/lib/data';

const TAB_ICONS = [BarChart2, Film, Layout];
const TOOLS_USED = [
  ["Meta Business Suite", "Facebook Ads", "Instagram", "TikTok", "LinkedIn"],
  ["Adobe Premiere Pro", "CapCut", "Instagram Reels"],
  ["HTML & CSS", "JavaScript", "WordPress", "SEO Tools"]
];

function SectionHeader({ eyebrow, title }: { eyebrow: string, title: string }) {
  return (
    <div className="mb-20 text-center flex flex-col items-center">
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

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader eyebrow="— My Journey —" title="Professional Experience" />
        </motion.div>

        {/* Custom Tab Navigation */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {experiences.map((exp, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-8 py-4 rounded-full font-body text-sm tracking-wide transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? "text-onyx-dark font-medium shadow-[0_0_20px_rgba(201,168,76,0.3)]" 
                    : "text-text-muted hover:text-gold border border-[rgba(201,168,76,0.15)] hover:border-gold/50 bg-[rgba(15,30,15,0.4)] backdrop-blur-md"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{exp.role}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Detail Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-[rgba(15,30,15,0.7)] backdrop-blur-[16px] backdrop-saturate-[180%] border border-[rgba(201,168,76,0.25)] rounded-[20px] overflow-hidden gold-border-glow shadow-2xl min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-14 flex flex-col h-full"
              >
                {/* Header Row */}
                <div className="flex items-center gap-6 mb-10">
                  <div className="p-4 bg-gold/10 rounded-2xl text-gold border border-gold/20">
                    {(() => {
                      const Icon = TAB_ICONS[activeTab];
                      return <Icon size={48} strokeWidth={1} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl text-gold mb-2 font-light">{experiences[activeTab].role}</h3>
                    <p className="text-text-muted font-body uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                      {experiences[activeTab].company} • {experiences[activeTab].duration}
                    </p>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent mb-10 opacity-30"></div>

                {/* Responsibilities Grid */}
                <motion.ul 
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-14"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
                  }}
                >
                  {experiences[activeTab].responsibilities.map((task: string, i: number) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                      }}
                    >
                      <Circle className="text-gold mt-1.5 flex-shrink-0" size={8} fill="currentColor" />
                      <span className="text-cream/90 font-light leading-relaxed text-sm md:text-base">{task}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Tools Used Strip */}
                <div className="mt-auto pt-8 border-t border-[rgba(201,168,76,0.1)]">
                  <p className="text-text-muted text-[10px] uppercase tracking-[0.2em] mb-4">Tools & Ecosystem</p>
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.4 } }
                    }}
                  >
                    {TOOLS_USED[activeTab].map((tool, index) => (
                      <motion.span 
                        key={index}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
                        }}
                        className="px-4 py-1.5 border border-gold/30 rounded-full text-cream text-xs font-light bg-gold/5"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
