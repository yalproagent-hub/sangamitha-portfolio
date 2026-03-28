import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      damping: 25,
      stiffness: 70,
      mass: 1.2
    } 
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring",
      damping: 25,
      stiffness: 70 
    } 
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring",
      damping: 25,
      stiffness: 70 
    } 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 0.1 
    } 
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring",
      damping: 20,
      stiffness: 80 
    } 
  }
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      damping: 30,
      stiffness: 60 
    } 
  }
};
