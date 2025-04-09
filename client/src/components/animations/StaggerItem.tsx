import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const StaggerItem = ({ 
  children, 
  className = "",
  direction = "up",
  duration = 0.3 // Faster animation
}: StaggerItemProps) => {
  
  const directionOffset = () => {
    switch(direction) {
      case "up": return { y: 15 }; // Reduced distance
      case "down": return { y: -15 }; // Reduced distance
      case "left": return { x: 15 }; // Reduced distance
      case "right": return { x: -15 }; // Reduced distance
      default: return { y: 15 }; // Reduced distance
    }
  };
  
  const item = {
    hidden: { 
      opacity: 0,
      ...directionOffset()
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.div
      className={className}
      variants={item}
    >
      {children}
    </motion.div>
  );
};

export default StaggerItem;