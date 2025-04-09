import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useTheme } from "@/components/theme/ThemeProvider";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking on a nav link
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-background z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold">
            <span className="text-primary">John</span>
            <span className="text-foreground">Doe</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-8 mr-4">
              <a 
                href="#home" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Skills
              </a>
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
            
            {/* Theme Toggle - Desktop */}
            <ThemeToggle />
          </div>
          
          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle - Mobile */}
            <ThemeToggle />
            
            {/* Mobile Navigation Toggle */}
            <button 
              onClick={toggleMobileMenu}
              className="text-muted-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-background transition-all duration-300 ${mobileMenuOpen ? 'max-h-60 border-t border-border' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-3 space-y-3">
          <a 
            href="#home" 
            className="block text-muted-foreground hover:text-primary py-2 transition-colors duration-300"
            onClick={handleNavLinkClick}
          >
            Home
          </a>
          <a 
            href="#projects" 
            className="block text-muted-foreground hover:text-primary py-2 transition-colors duration-300"
            onClick={handleNavLinkClick}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="block text-muted-foreground hover:text-primary py-2 transition-colors duration-300"
            onClick={handleNavLinkClick}
          >
            Skills
          </a>
          <a 
            href="#about" 
            className="block text-muted-foreground hover:text-primary py-2 transition-colors duration-300"
            onClick={handleNavLinkClick}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="block text-muted-foreground hover:text-primary py-2 transition-colors duration-300"
            onClick={handleNavLinkClick}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
