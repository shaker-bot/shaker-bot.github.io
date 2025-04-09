import { Mail, MapPin, Share2, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <AnimatedSection id="contact" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just a friendly hello. I'll try my best to get back to you!
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeIn direction="up" delay={0.3}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardContent className="p-6">
                  <motion.div 
                    className="inline-block p-3 bg-primary/10 text-primary rounded-full mb-4"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <Mail className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">hello@johndoe.com</p>
                  <a 
                    href="mailto:hello@johndoe.com" 
                    className="inline-flex items-center mt-3 text-primary hover:text-primary/80 font-medium"
                  >
                    Send an email <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardContent className="p-6">
                  <motion.div 
                    className="inline-block p-3 bg-primary/10 text-primary rounded-full mb-4"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <MapPin className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                  <p className="text-muted-foreground">Available for remote work</p>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardContent className="p-6">
                  <motion.div 
                    className="inline-block p-3 bg-primary/10 text-primary rounded-full mb-4"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <Share2 className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Social</h3>
                  <div className="flex gap-4 mt-3">
                    <motion.a 
                      href="https://github.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-300"
                      whileHover={{ y: -3, scale: 1.1 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a 
                      href="https://linkedin.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-300"
                      whileHover={{ y: -3, scale: 1.1 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a 
                      href="https://twitter.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-300"
                      whileHover={{ y: -3, scale: 1.1 }}
                    >
                      <FaTwitter />
                    </motion.a>
                    <motion.a 
                      href="https://dribbble.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-300"
                      whileHover={{ y: -3, scale: 1.1 }}
                    >
                      <FaDribbble />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.6} className="mt-12">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button
                asChild
                size="lg"
                className="mt-4 font-medium shadow-md hover:shadow-lg"
              >
                <a href="mailto:hello@johndoe.com">
                  Get In Touch Now
                </a>
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
