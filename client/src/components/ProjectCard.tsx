import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Technology {
  name: string;
  color: string;
}

interface ProjectProps {
  title: string;
  description: string;
  technologies: Technology[];
  link: string;
}

interface ProjectCardProps {
  project: ProjectProps;
}

// Color mapping for technology badges
const getBadgeClasses = (color: string) => {
  const colorMap: Record<string, { light: string, dark: string }> = {
    blue: {
      light: "bg-blue-100 text-blue-800",
      dark: "dark:bg-blue-900/20 dark:text-blue-300",
    },
    green: {
      light: "bg-green-100 text-green-800",
      dark: "dark:bg-green-900/20 dark:text-green-300",
    },
    red: {
      light: "bg-red-100 text-red-800",
      dark: "dark:bg-red-900/20 dark:text-red-300",
    },
    yellow: {
      light: "bg-yellow-100 text-yellow-800",
      dark: "dark:bg-yellow-900/20 dark:text-yellow-300",
    },
    purple: {
      light: "bg-purple-100 text-purple-800",
      dark: "dark:bg-purple-900/20 dark:text-purple-300",
    },
    gray: {
      light: "bg-gray-100 text-gray-800",
      dark: "dark:bg-gray-800/40 dark:text-gray-300",
    },
    // Add more colors as needed
  };

  return colorMap[color] ? `${colorMap[color].light} ${colorMap[color].dark}` : "bg-gray-100 text-gray-800 dark:bg-gray-800/40 dark:text-gray-300";
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, technologies, link } = project;
  
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 project-card">
      <div className="h-56 overflow-hidden bg-muted">
        <svg className="w-full h-full text-muted-foreground/70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-7 7h14v1H5v-1z" />
        </svg>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline"
              className={cn(
                "text-xs px-3 py-1 rounded-full",
                getBadgeClasses(tech.color)
              )}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
        <a 
          href={link} 
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
