'use client'

import { motion } from 'framer-motion';
import { Palette, TrendingUp, Code2, Brush, Video, FileEdit, Film, Scissors, Share2, Megaphone, BarChart3, Target, LineChart, Globe, Search, FileSpreadsheet, Users, Clock, LucideIcon } from 'lucide-react';
import { skills } from '@/lib/data';

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

const ICON_MAP: Record<string, LucideIcon> = {
  // Creative
  "Graphic Design": Brush,
  "Video Editing": Video,
  "Content Creation": FileEdit,
  "Adobe Premiere Pro": Film,
  "CapCut": Scissors,
  // Marketing
  "Social Media Strategy": Share2,
  "Paid Campaigns (Facebook Ads, Instagram Ads)": Megaphone,
  "Meta Business Suite": BarChart3,
  "Paid Social Advertising (Facebook, Instagram, LinkedIn)": Target,
  "Data-Driven Analytics": LineChart,
  // Technical/General
  "HTML & CSS": Code2,
  "JavaScript": Code2,
  "Web Designer": Code2,
  "WordPress": Globe,
  "SEO Best Practices": Search,
  "Microsoft Office": FileSpreadsheet,
  "Team Management": Users,
  "Time Management": Clock,
};

export default function Skills() {
  const creativeSkills = skills.filter((s) => s.category === 'Creative');
  const marketingSkills = skills.filter((s) => s.category === 'Marketing');
  const techSkills = skills.filter((s) => s.category === 'Technical' || s.category === 'General'); // Adjust based on lib/data.ts structure

  const categories = [
    { title: "Creative", icon: Palette, data: creativeSkills },
    { title: "Marketing", icon: TrendingUp, data: marketingSkills },
    { title: "Technical", icon: Code2, data: techSkills },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader eyebrow="— My Toolbox —" title="Expertise" />
        </motion.div>

        <div className="flex flex-col gap-24">
          {categories.map((cat, index) => {
            const HeaderIcon = cat.icon;
            return (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
                }}
                className="flex flex-col gap-10"
              >
                {/* Category Header */}
                <div className="flex items-center gap-6">
                  <HeaderIcon className="text-gold" size={32} strokeWidth={1} />
                  <h3 className="font-display text-3xl text-cream font-light tracking-wide">{cat.title}</h3>
                  <div className="flex-grow h-px bg-gradient-to-r from-gold/40 to-transparent"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.data.map((skill) => {
                    // Fallback to Code2 if mapping perfectly misses due to exact name string match
                    const SkillIcon = ICON_MAP[skill.name] || Code2;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={{
                          hidden: { opacity: 0, y: 40 },
                          visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                        }}
                        whileHover={{ y: -6, boxShadow: "0 0 25px rgba(229, 197, 131, 0.2), inset 0 0 15px rgba(229, 197, 131, 0.05)", borderColor: "rgba(229,197,131,1)" }}
                        whileTap={{ scale: 0.97 }}
                        className="relative group bg-[rgba(15,30,15,0.7)] backdrop-blur-[16px] backdrop-saturate-[180%] border border-[rgba(201,168,76,0.25)] rounded-[20px] p-6 lg:p-8 overflow-hidden transition-colors duration-500 cursor-default"
                      >
                        {/* Animated Bottom Border */}
                        <div className="absolute bottom-0 left-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
                        
                        <SkillIcon className="text-gold mb-6 opacity-80" size={24} strokeWidth={1.5} />
                        <h4 className="text-cream font-body text-lg font-medium tracking-wide">{skill.name}</h4>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
