import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

const ScaleIn = ({ 
  children, 
  delay = 0, 
  className = "",
  duration = 0.3 
}: ScaleInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0,
        scale: 0.95
      }}
      whileInView={{ 
        opacity: 1,
        scale: 1
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

export default ScaleIn;