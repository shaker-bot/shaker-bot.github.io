import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`relative w-9 h-9 rounded-full ${className}`}
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full">
        {/* Sun icon */}
        <motion.div
          initial={{ scale: theme === "dark" ? 1 : 0 }}
          animate={{ 
            scale: theme === "dark" ? 0 : 1,
            opacity: theme === "dark" ? 0 : 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5 text-yellow-500" />
        </motion.div>

        {/* Moon icon */}
        <motion.div
          initial={{ scale: theme === "light" ? 1 : 0 }}
          animate={{ 
            scale: theme === "light" ? 0 : 1,
            opacity: theme === "light" ? 0 : 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5 text-blue-300" />
        </motion.div>
      </div>
    </Button>
  );
}