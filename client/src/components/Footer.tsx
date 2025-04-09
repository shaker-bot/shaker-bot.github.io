import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#home" className="text-2xl font-bold">
              <span className="text-foreground">John</span>
              <span className="text-primary">Doe</span>
            </a>
            <p className="mt-2 text-muted-foreground">Full Stack Developer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <ul className="flex flex-wrap gap-6">
              <li>
                <a 
                  href="#home" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground text-xl transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground text-xl transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground text-xl transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground text-xl transition-colors duration-300"
                aria-label="Dribbble"
              >
                <FaDribbble />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
