import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  duration?: number;
}

const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "",
  duration = 0.3 
}: FadeInProps) => {
  
  const directionOffset = () => {
    switch(direction) {
      case "up": return { y: 15 };
      case "down": return { y: -15 };
      case "left": return { x: 15 };
      case "right": return { x: -15 };
      default: return { y: 15 };
    }
  };
  
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0,
        ...directionOffset()
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration: duration, 
        delay: delay ? delay * 0.5 : 0, // Scale down delays
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;