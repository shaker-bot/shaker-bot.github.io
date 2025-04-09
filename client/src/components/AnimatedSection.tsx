import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const AnimatedSection = ({ id, className, children }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={`section ${className || ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;