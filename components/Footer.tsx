import { personalInfo } from '@/lib/data';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] border-t border-border/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-1 md:gap-2 text-text-muted font-body text-[10px] md:text-[12px] font-light tracking-widest uppercase text-center md:text-left">
          <span>&copy; {currentYear} {personalInfo.name}.</span>
          <span className="opacity-50">Designed & Built with Precision.</span>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8">
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-muted/60 hover:text-gold hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} strokeWidth={1.2} />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="text-text-muted/60 hover:text-gold hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={22} strokeWidth={1.2} />
          </a>
        </div>

      </div>
    </footer>
  );
}
