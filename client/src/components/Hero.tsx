import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, ScaleIn } from "@/components/animations";

const Hero = () => {
  return (
    <section id="home" className="section pt-24 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FadeIn delay={0.1} direction="up">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Full Stack Developer
              </span>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
                Hi, I'm John Doe
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <p className="text-lg text-muted-foreground mb-8">
                I build exceptional digital experiences that make people's lives simpler.
                Specializing in modern web technologies to create fast, responsive, and user-friendly applications.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="font-medium shadow-md hover:shadow-lg"
                >
                  <a href="#projects">View My Work</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-medium"
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </FadeIn>
          </motion.div>
          
          <div className="md:w-1/2 md:pl-10">
            <ScaleIn delay={0.2} duration={0.6}>
              <div className="relative">
                <motion.div 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-primary/50 mx-auto overflow-hidden shadow-xl"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 5 }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <svg className="w-full h-full text-muted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <span className="flex justify-center items-center gap-2">
                    <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                    <span className="font-medium text-card-foreground">Available for work</span>
                  </span>
                </motion.div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
