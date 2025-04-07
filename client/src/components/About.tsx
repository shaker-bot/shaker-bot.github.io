import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <AnimatedSection id="about" className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <FadeIn direction="right" delay={0.2} className="w-full md:w-2/5">
            <div className="relative">
              <motion.div 
                className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl bg-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <svg 
                  className="w-full h-96 text-muted-foreground/70" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 2c-3.31 0-6 1.34-6 3v1h12v-1c0-1.66-2.69-3-6-3z" />
                </svg>
              </motion.div>
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-primary text-white py-2 px-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="font-medium text-lg">5+ Years Experience</p>
              </motion.div>
            </div>
          </FadeIn>
          
          <div className="w-full md:w-3/5">
            <FadeIn delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Me</h2>
            </FadeIn>
            
            <StaggerContainer delayChildren={0.4} staggerChildren={0.15}>
              <StaggerItem>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate Full Stack Developer with over 5 years of experience creating web applications. 
                  I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-lg text-muted-foreground mb-6">
                  My journey into web development began during college where I built my first website for a local business.
                  Since then, I've worked with agencies, startups, and established companies to deliver high-quality digital products.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-lg text-muted-foreground mb-8">
                  When I'm not coding, you'll find me hiking, reading about new technologies, or experimenting with photography.
                  I believe in continuous learning and staying updated with the latest industry trends.
                </p>
              </StaggerItem>
            </StaggerContainer>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FadeIn delay={0.7} direction="up">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Education</h3>
                  <ul className="space-y-4">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <span className="block text-primary font-medium">2015 - 2019</span>
                      <span className="block font-bold text-foreground">Computer Science, BS</span>
                      <span className="text-muted-foreground">University of Technology</span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <span className="block text-primary font-medium">2020</span>
                      <span className="block font-bold text-foreground">Web Development Certification</span>
                      <span className="text-muted-foreground">Tech Academy</span>
                    </motion.li>
                  </ul>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.8} direction="up">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Experience</h3>
                  <ul className="space-y-4">
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <span className="block text-primary font-medium">2019 - Present</span>
                      <span className="block font-bold text-foreground">Senior Developer</span>
                      <span className="text-muted-foreground">Tech Solutions Inc.</span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0, duration: 0.5 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <span className="block text-primary font-medium">2017 - 2019</span>
                      <span className="block font-bold text-foreground">Frontend Developer</span>
                      <span className="text-muted-foreground">Creative Agency</span>
                    </motion.li>
                  </ul>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={1.1} direction="up">
              <div className="mt-8">
                <motion.a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Download Resume 
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
