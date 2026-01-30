import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle Dark/Light Mode"
      className="relative w-9 h-9 rounded-full hover:bg-secondary transition-colors"
    >
      <Sun 
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === 'dark' 
            ? 'opacity-0 rotate-90 scale-0' 
            : 'opacity-100 rotate-0 scale-100 text-amber-500'
        }`} 
      />
      <Moon 
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === 'dark' 
            ? 'opacity-100 rotate-0 scale-100 text-primary' 
            : 'opacity-0 -rotate-90 scale-0'
        }`} 
      />
    </Button>
  );
};

export default ThemeToggle;
