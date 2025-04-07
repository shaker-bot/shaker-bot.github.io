import { Code, Server, Wrench } from "lucide-react";
import ProgressBar from "./ProgressBar";
import SkillPill from "./SkillPill";
import { frontendSkills, backendSkills, otherSkills } from "@/data/portfolioData";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import AnimatedSection from "@/components/AnimatedSection";

const Skills = () => {
  return (
    <AnimatedSection id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Skills & Expertise</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I've worked with a variety of technologies and frameworks to create seamless user experiences. Here's what I bring to the table.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <FadeIn direction="left" delay={0.3}>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                  <Code className="h-5 w-5" />
                </span>
                Frontend Development
              </h3>
              <StaggerContainer delayChildren={0.4} staggerChildren={0.1}>
                <div className="space-y-4">
                  {frontendSkills.map((skill, index) => (
                    <StaggerItem key={index}>
                      <ProgressBar 
                        name={skill.name}
                        percentage={skill.percentage}
                      />
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
              
              <StaggerContainer delayChildren={0.7} staggerChildren={0.05} className="mt-8 flex flex-wrap gap-3">
                <StaggerItem><SkillPill name="Tailwind CSS" /></StaggerItem>
                <StaggerItem><SkillPill name="SASS" /></StaggerItem>
                <StaggerItem><SkillPill name="TypeScript" /></StaggerItem>
                <StaggerItem><SkillPill name="Redux" /></StaggerItem>
                <StaggerItem><SkillPill name="Next.js" /></StaggerItem>
              </StaggerContainer>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.5}>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                  <Server className="h-5 w-5" />
                </span>
                Backend Development
              </h3>
              <StaggerContainer delayChildren={0.6} staggerChildren={0.1}>
                <div className="space-y-4">
                  {backendSkills.map((skill, index) => (
                    <StaggerItem key={index}>
                      <ProgressBar 
                        name={skill.name}
                        percentage={skill.percentage}
                      />
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
              
              <StaggerContainer delayChildren={0.9} staggerChildren={0.05} className="mt-8 flex flex-wrap gap-3">
                <StaggerItem><SkillPill name="MongoDB" /></StaggerItem>
                <StaggerItem><SkillPill name="PostgreSQL" /></StaggerItem>
                <StaggerItem><SkillPill name="GraphQL" /></StaggerItem>
                <StaggerItem><SkillPill name="Firebase" /></StaggerItem>
                <StaggerItem><SkillPill name="Docker" /></StaggerItem>
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.8} direction="up">
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
              <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                <Wrench className="h-5 w-5" />
              </span>
              Other Skills
            </h3>
            <StaggerContainer delayChildren={0.9} staggerChildren={0.05} className="flex flex-wrap gap-3">
              {otherSkills.map((skill, index) => (
                <StaggerItem key={index}>
                  <SkillPill name={skill} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
