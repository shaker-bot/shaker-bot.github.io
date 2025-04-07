import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolioData";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import AnimatedSection from "@/components/AnimatedSection";

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Projects</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects. Each one has been crafted with attention to detail and focus on user experience.
            </p>
          </FadeIn>
        </div>
        
        <StaggerContainer delayChildren={0.3} staggerChildren={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        
        <FadeIn delay={0.4} direction="up">
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border border-primary text-primary hover:bg-primary/10 font-medium"
            >
              View All Projects
            </Button>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
